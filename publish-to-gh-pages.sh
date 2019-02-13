#!/bin/bash
rm -rf .cache &&
gatsby build &&
rm -rf /tmp/dist-vis-gl &&
mv public /tmp/dist-vis-gl &&
git checkout gh-pages &&
rm -rf * &&
mv /tmp/dist-vis-gl/* . &&
echo vis.gl > CNAME &&
git add . &&
git commit -m 'Upgrade docs' &&
git push origin gh-pages && git checkout master
