import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'About me',
    Svg: require('../../static/img/google/ai_platform.svg').default,
    description: (
      <>
        Neurodivergent and forever interested in technology. I've been working in the industry for over 20 years.
      </>
    ),
    },
  {
    title: 'What I do',
    Svg: require('../../static/img/google/cloud_build.svg').default,
    description: (
      <>
        I design and implement creative automation solutions in Google Cloud Platform (GCP).
      </>
    ),
  },
  {
    title: 'Why I do it',
    Svg: require('../../static/img/google/release_notes.svg').default,
    description: (
      <>
        I love learning and solving complex problems through automation. 
        This allows people to free their energy for more challenging and rewarding work.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
