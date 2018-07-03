Overview
========

This repository contains keyword blacklists and lists of other content such as URLs or images used to trigger censorship in apps used in China.  With the exception of WeChat, these lists were reverse engineered and are the exhaustive lists of keywords used to trigger censorship on these platforms.

The full details on data collection and analysis methods and results are available below.

## Chat apps

* [Three Researchers, Five Conjectures: An Empirical Analysis of TOM-Skype Censorship and Surveillance](https://www.usenix.org/legacy/event/foci11/tech/final_files/Knockel.pdf)

* [Chat program censorship and surveillance in China: Tracking TOM-Skype and Sina UC](http://firstmonday.org/ojs/index.php/fm/article/view/4628/3727)

* [Asia Chats: Investigating Regionally-based Keyword Censorship in LINE](https://citizenlab.org/2013/11/asia-chats-investigatingregionally-based-keyword-censorship-line/)

Data: [TOM-Skype and Sina UC](https://github.com/citizenlab/chat-censorship/tree/master/TOM-Skype--Sina-UC), [LINE](https://github.com/citizenlab/chat-censorship/tree/master/LINE)

## Live-streaming apps

* [Every Rose Has Its Thorn: Censorship and Surveillance on Social Video Platforms in China](https://www.usenix.org/conference/foci15/workshop-program/presentation/knockel)

* [Harmonized Histories? A year of fragmented censorship across Chinese live streaming applications](https://netalert.me/assets/harmonized-histories/harmonized-histories.pdf)

Data: [Original live-streaming data (2015)](https://github.com/citizenlab/chat-censorship/tree/master/SVP), [Updated live-streaming data (2017)](https://github.com/citizenlab/chat-censorship/tree/master/livestream)

## Mobile games

* [Measuring Decentralization of Chinese Keyword Censorship via Mobile Games](https://www.usenix.org/conference/foci17/workshop-program/presentation/knockel)

Data: [Mobile games](https://github.com/citizenlab/chat-censorship/tree/master/chinese-games)

## WeChat

* [One App, Two Systems How WeChat uses one censorship policy in China and another internationally](https://citizenlab.ca/2016/11/wechat-china-censorship-one-app-two-systems/)
* [We (can’t) Chat “709 Crackdown” Discussions Blocked on Weibo and WeChat](https://citizenlab.ca/2017/04/we-cant-chat-709-crackdown-discussions-blocked-on-weibo-and-wechat/)
* [Remembering Liu Xiaobo Analyzing censorship of the death of Liu Xiaobo on WeChat and Weibo](https://citizenlab.ca/2017/07/analyzing-censorship-of-the-death-of-liu-xiaobo-on-wechat-and-weibo/)
* [Managing the Message: What you can’t say about the 19th National Communist Party Congress on WeChat](https://citizenlab.ca/2017/11/managing-message-censorship-19th-national-communist-party-congress-wechat/)

Data: [Keywords and URLs (November 2016)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/one_app_two_systems), [709 Crackdown keywords and images (April 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/709crackdown), [Liu Xiaobo keywords and images (July 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/lxb), [19th Party Congress keywords (November 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/ncpc19)

Keyword Content Analysis 
========
Datasets include raw keyword lists collected from the applications and processed datasets that include translations of keywords. 
Keywords were translated to English using combination of machine and human translation. Based on interpreting these translations with contextual information, we coded each keyword into content categories grouped under six general [themes](https://github.com/citizenlab/chat-censorship/blob/master/themes_keyword_censorship.csv) according to a [code book](https://github.com/citizenlab/chat-censorship/blob/master/categories_keyword_censorship.csv).

License
========

All data is provided under Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International and available in full
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) and summarized
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/).


