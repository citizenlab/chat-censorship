#!/bin/bash

echo "dig +short line.naver.jp"
dig line.naver.jp
echo "---"

echo "# dig +short kakao.com"
dig kakao.com
echo "---"

echo "# dig +short flickr.com"
dig flickr.com
echo "---"

echo "# dig +short onedrive.live.com"
dig onedrive.live.com
echo "---"

echo "# dig dl-obs.official.line.naver.jp"
dig dl-obs.official.line.naver.jp
echo "---"

echo "# dig dl.stickershop.line.naver.jp"
dig dl.stickershop.line.naver.jp
echo "---"

echo "# dig gd2.line.naver.jp"
dig gd2.line.naver.jp
echo "---"

echo "# dig totallymadeup.domain.gojays.line.naver.jp"
dig  totallymadeup.domain.gojays.line.naver.jp
echo "---"

echo "# curl http://dl-obs.official.line.naver.jp/r/talk/o/u3ae3691f73c7a396fb6e5243a8718915-1379585871"
curl http://dl-obs.official.line.naver.jp/r/talk/o/u3ae3691f73c7a396fb6e5243a8718915-1379585871 -o pika.png
echo "---"

echo "# curl http://dl.stickershop.line.naver.jp/products/0/0/1/1109/android/preview.png"
curl http://dl.stickershop.line.naver.jp/products/0/0/1/1109/android/preview.png -o preview.png
echo "---"

echo "# curl -I 'https://gd2.line.naver.jp'"
curl -I "https://gd2.line.naver.jp" -w gd2.html
echo "---"

echo "# curl -A 'Android Mobile LA/CN' http://line.naver.jp/app/resources/bwi"
curl -A "Android Mobile LA/CN" http://line.naver.jp/app/resources/bwi
echo "---"
