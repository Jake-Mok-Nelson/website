#!/bin/bash

cd yarn build && \
    GIT_USER=Jake-Mok_nelson yarn deploy
echo "Status: $?"
echo "Now make sure you commit and push it!"
cd ..
