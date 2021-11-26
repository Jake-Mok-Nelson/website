---
slug: exporting-cloud-sql-databases-for-disaster-recovery
title: Exporting Cloud SQL Databases for Disaster Recovery
authors: [jake]
tags: [cloudsql, database, gcp]
---



![](https://cdn-images-1.medium.com/max/800/0*GhfsoUfhmMXXZXvB)

### What’s The Worst That Can Happen?

It is essential that you export your data to somewhere other than GCP. Whilst GCP is an awesome cloud provider and the odds that Google goes bankrupt taking your workloads with it is extremely unlikely it is entirely possible that someone or some process (malicious or not), deletes your data in the cloud.

It’s for this situation that we need business continuity, disaster recovery, and all the other good buzz words that effectively mean, “to un-screw that which is effectively screwed”.

![](https://cdn-images-1.medium.com/max/800/1*rJSxbYo-tk9xzcDHkPn73g.png)

### It’s Okay, I Got You

So you moved your databases to “the cloud”, good stuff!

Let’s assume we’ve configured [Cloud SQL Backups](https://cloud.google.com/sql/docs/postgres/backup-recovery/backups) for our instances and our backups a stored within a GCS bucket inside the same project (because they are, that’s where [Google stores them](https://cloud.google.com/sql/docs/postgres/backup-recovery/backups#default-backup-location)). What happens if someone or something accidentally deletes bucket?

I’m sharing a screenshot from Google’s documentation here because I believe it’s extremely important to understand this point:

![](https://cdn-images-1.medium.com/max/800/1*-zWr0EDRRlF6CM7sCCRT_g.png)

### Well, Shit…

If we can run automatic backups at a set interval that push the backups to a Google Storage Bucket then perhaps we can copy those backups from the bucket to another location outside of GCS?

**Hard nope…** backups are actually snapshots of the instance holding the database and are not actually SQL data.

### The Solution

#### At a High Level

Ok, so I know this has been a rollercoaster of emotion and you’re probably sitting on the edge of your seats, dying for a solution so I’ll share mine.

![](https://cdn-images-1.medium.com/max/800/0*hffH7bHz3ZKd3fJR.gif)

Backups are a great solution and you should be using them, but in addition to your backups you should run Cloud SQL exports to a Google Storage Bucket and from there sync your bucket to a location outside of Google Cloud.

#### The Detail

You might think that you need to configure firewalls to allow you to connect to your instance so you can run the SQL dump commands, you don’t. You can take advantage of the Google APIs to run the export operation on your behalf.

How you call this API is up to you, you could use the gcloud command line tool to run the export operation for you or you can interface with the API via a programming language. I use Golang for this task because it interfaces really well with Google which means you don’t have to handle auth in your tool, you just need to have gcloud auth login and gcloud auth application-default login set.

Whatever method you choose, your Cloud SQL instance **must** have permission to write to the backup where you want to dump the data. You can do this by giving an IAM privilege to the service account of the Cloud SQL instance permission to write to the bucket. Perhaps start with giving the instance’s service account the storage.admin role over your bucket and work your way towards something with least privilege.

After it has privilege you can use your chosen method to run an export operation against the instance and the database which might look something like: _gcloud sql export bak INSTANCE URI --database=DATABASE_

Where the instance is the Cloud SQL instance name and the URI is the backup destination in the bucket.

Seems pretty obvious but you’d probably want to use gsutil wrapped in a script to copy the data from Google Storage to a filesystem elsewhere. There are other tools out and appliances out there that can do this for you but are really not required for this at all. You probably want to use _gsutil rsync_ to sync the bucket directory with your local one.

#### Some Gotchas

*   Exporting Postgres databases via the API only supports one database at a time so be aware, you can’t kick off parallel exports running against a single instance that contains multiple Postgres databases.
*   There will be some default system databases you may or may not care about backing these up but they are separate so it has to be conscious decision to export them.
*   You’ll need to use a unique identifier in the names of your database output so that you aren’t just overwriting the same export each time, think about things like _gs://bucketName/instanceName\_databaseName\_dateTime.sql_, whatever you decide to name your output, be consistent!

How will you implement this?

*   A script running on a server on-premise or in a data centre?
*   A Cloud Function?
*   A cronJob in a cluster?

However you’re doing it, I want to hear about it (maybe you’ve got a better way), please reach out.