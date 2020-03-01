#!/bin/bash
echo ##################### Package
yarn build 

echo ##################### Deploy
aws s3 sync build/ s3://fuzzle.xyz --acl public-read

echo ##################### Invalidation
aws cloudfront create-invalidation --distribution-id E2GIE5H7Z6N0A4 --paths "/*"