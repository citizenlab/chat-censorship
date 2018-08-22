Overview
========

This repository contains keyword blacklists and lists of other content such as URLs or images used to trigger censorship in apps used in China.  With the exception of WeChat, these lists were reverse engineered and are the exhaustive lists of keywords used to trigger censorship on these platforms.

The full details on data collection and analysis methods and results are available below.

## Chat apps

The research below tracks daily changes to censorship in three different chat apps used in China:  TOM-Skype, Sina UC, and Line.  Overall, our chat app data consists of over 4,000 blacklisted keywords.

* [Three Researchers, Five Conjectures: An Empirical Analysis of TOM-Skype Censorship and Surveillance](https://www.usenix.org/legacy/event/foci11/tech/final_files/Knockel.pdf)

* [Chat program censorship and surveillance in China: Tracking TOM-Skype and Sina UC](http://firstmonday.org/ojs/index.php/fm/article/view/4628/3727)

* [Asia Chats: Investigating Regionally-based Keyword Censorship in LINE](https://citizenlab.org/2013/11/asia-chats-investigatingregionally-based-keyword-censorship-line/)

Data: [TOM-Skype and Sina UC](https://github.com/citizenlab/chat-censorship/tree/master/TOM-Skype--Sina-UC), [LINE](https://github.com/citizenlab/chat-censorship/tree/master/LINE)

## Live-streaming apps

The research below tracks hourly changes to censorship in three different live streaming apps in China:  YY, Sina Show, and 9158; and documents the keywords censored by GuaGua, which does not include a mechanism for downloading updates to its censorship blacklists.  Overall, our live-streaming data consists of over 20,000 blacklisted keywords.

* [Every Rose Has Its Thorn: Censorship and Surveillance on Social Video Platforms in China](https://www.usenix.org/conference/foci15/workshop-program/presentation/knockel)

* [Harmonized Histories? A year of fragmented censorship across Chinese live streaming applications](https://netalert.me/assets/harmonized-histories/harmonized-histories.pdf)

Data: [Original live-streaming data (2015)](https://github.com/citizenlab/chat-censorship/tree/master/SVP), [Updated live-streaming data (2017)](https://github.com/citizenlab/chat-censorship/tree/master/livestream)

## Mobile games

Our research on mobile games analyzes domestic Chinese games as well as international games that have been altered to comply with Chinese regulations.  Overall, we found hundreds of mobile games performing censorship, collectively censoring over 100,000 unique blacklisted keywords.

* [Measuring Decentralization of Chinese Keyword Censorship via Mobile Games](https://www.usenix.org/conference/foci17/workshop-program/presentation/knockel)

Data: [Mobile games](https://github.com/citizenlab/chat-censorship/tree/master/chinese-games)

## Open source projects

This research analyzes Chinese censorship in open source projects.  We extracted over 1,000 Chinese keyword blacklists from open source projects on GitHub, collectively spanning over 200,000 unique blacklisted keywords.

* [The effect of information controls on developers in China: An analysis of censorship in Chinese open source projects](https://citizenlab.ca/wp-content/uploads/2018/08/nlp4if2018github-1.pdf)

Data: [Open source blacklists](https://github.com/citizenlab/chat-censorship/tree/master/open-source)

## WeChat

Our research on WeChat censorship uses sample testing to determine what type of content, such as words, URLs, and images, can be communicated over the platform and which content is censored.  We have studied what categorical content WeChat generally filters in addition to what content WeChat filters in response to specific events.

* [One App, Two Systems How WeChat uses one censorship policy in China and another internationally](https://citizenlab.ca/2016/11/wechat-china-censorship-one-app-two-systems/)
* [We (can’t) Chat “709 Crackdown” Discussions Blocked on Weibo and WeChat](https://citizenlab.ca/2017/04/we-cant-chat-709-crackdown-discussions-blocked-on-weibo-and-wechat/)
* [Remembering Liu Xiaobo Analyzing censorship of the death of Liu Xiaobo on WeChat and Weibo](https://citizenlab.ca/2017/07/analyzing-censorship-of-the-death-of-liu-xiaobo-on-wechat-and-weibo/)
* [Managing the Message: What you can’t say about the 19th National Communist Party Congress on WeChat](https://citizenlab.ca/2017/11/managing-message-censorship-19th-national-communist-party-congress-wechat/)
* [(Can’t) Picture This An Analysis of Image Filtering on WeChat Moments](https://citizenlab.ca/2018/08/cant-picture-this-an-analysis-of-image-filtering-on-wechat-moments/) ([paper](https://www.usenix.org/system/files/conference/foci18/foci18-paper-knockel.pdf))

Data: [Keywords and URLs (November 2016)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/one_app_two_systems), [709 Crackdown keywords and images (April 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/709crackdown), [Liu Xiaobo keywords and images (July 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/lxb), [19th Party Congress keywords (November 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/ncpc19), [Image filtering test data (May 2018)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/image-filtering)

Keyword Content Analysis 
========
Datasets include raw keyword lists collected from the applications.  Many also include processed data including translations and categorization of keywords.  Keywords were translated to English using combination of machine and human translation. Based on interpreting these translations with contextual information, we coded each keyword into content categories grouped under six general [themes](https://github.com/citizenlab/chat-censorship/blob/master/themes_keyword_censorship.csv) according to a [code book](https://github.com/citizenlab/chat-censorship/blob/master/categories_keyword_censorship.csv).

License
========

All data is provided under Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International and available in full
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) and summarized
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/).
