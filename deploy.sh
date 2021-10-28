#!/bin/bash

cd jakenelson.cloud && \ 
    yarn build && \
    GIT_USER=Jake-Mok_nelson yarn deploy && \
    echo "Deployment successful, make sure you push the changes to save them!" || echo "Deployment failed, maybe revert the last change and deploy again."
cd ..
