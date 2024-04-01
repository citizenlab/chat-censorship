Overview
========

This repository contains keyword blocklists and lists of other content such as URLs or images used to trigger censorship in apps used in China.  The WeChat, QQMail, Apple, and Bing lists were discovered using sample testing and thus do not completely cover the censored content on these platforms.  The remainder of the lists in this repository were reverse engineered from the application's software and are the exhaustive lists of keywords used to trigger censorship on these platforms.

The full details on data collection and analysis methods and results are available below.

## Chat apps

The research below tracks daily changes to censorship in three different chat apps used in China:  TOM-Skype, Sina UC, and Line.  Overall, our chat app data consists of over 4,000 blocked keywords.

* [Three Researchers, Five Conjectures: An Empirical Analysis of TOM-Skype Censorship and Surveillance](https://www.usenix.org/legacy/event/foci11/tech/final_files/Knockel.pdf)

* [Chat program censorship and surveillance in China: Tracking TOM-Skype and Sina UC](http://firstmonday.org/ojs/index.php/fm/article/view/4628/3727)

* [Asia Chats: Investigating Regionally-based Keyword Censorship in LINE](https://citizenlab.org/2013/11/asia-chats-investigatingregionally-based-keyword-censorship-line/)

Data: [TOM-Skype and Sina UC](https://github.com/citizenlab/chat-censorship/tree/master/TOM-Skype--Sina-UC), [LINE](https://github.com/citizenlab/chat-censorship/tree/master/LINE)

## Live-streaming apps

The research below tracks hourly changes to censorship in three different live streaming apps in China:  YY, Sina Show, and 9158; and documents the keywords censored by GuaGua, which does not include a mechanism for downloading updates to its censorship blocklists.  Overall, our live-streaming data consists of over 20,000 blocked keywords.

* [Every Rose Has Its Thorn: Censorship and Surveillance on Social Video Platforms in China](https://www.usenix.org/conference/foci15/workshop-program/presentation/knockel)

* [Harmonized Histories? A year of fragmented censorship across Chinese live streaming applications](https://netalert.me/assets/harmonized-histories/harmonized-histories.pdf)

* [Censored Contagion: How Information on the Coronavirus is Managed on Chinese Social Media](https://citizenlab.ca/2020/03/censored-contagion-how-information-on-the-coronavirus-is-managed-on-chinese-social-media/)

Data: [Original live-streaming data (2015)](https://github.com/citizenlab/chat-censorship/tree/master/SVP), [Updated live-streaming data (2017)](https://github.com/citizenlab/chat-censorship/tree/master/livestream), [Coronavirus keywords (2020)](https://github.com/citizenlab/chat-censorship/tree/master/coronavirus)

## Mobile games

Our research on mobile games analyzes domestic Chinese games as well as international games that have been altered to comply with Chinese regulations.  Overall, we found hundreds of mobile games performing censorship, collectively censoring over 100,000 unique blocked keywords.

* [Measuring Decentralization of Chinese Keyword Censorship via Mobile Games](https://www.usenix.org/conference/foci17/workshop-program/presentation/knockel)

Data: [Mobile games](https://github.com/citizenlab/chat-censorship/tree/master/chinese-games)

## Open source projects

This research analyzes Chinese censorship in open source projects.  We extracted over 1,000 Chinese keyword blocklists from open source projects on GitHub, collectively spanning over 200,000 unique blocked keywords.

* [The effect of information controls on developers in China: An analysis of censorship in Chinese open source projects](https://citizenlab.ca/wp-content/uploads/2018/08/nlp4if2018github-1.pdf)

Data: [Open source blocklists](https://github.com/citizenlab/chat-censorship/tree/master/open-source)

## WeChat

Our research on WeChat censorship uses sample testing to determine what type of content, such as words, URLs, and images, can be communicated over the platform and which content is censored.  We have studied what categorical content WeChat generally filters in addition to what content WeChat filters in response to specific events.

* [One App, Two Systems How WeChat uses one censorship policy in China and another internationally](https://citizenlab.ca/2016/11/wechat-china-censorship-one-app-two-systems/)
* [We (can’t) Chat “709 Crackdown” Discussions Blocked on Weibo and WeChat](https://citizenlab.ca/2017/04/we-cant-chat-709-crackdown-discussions-blocked-on-weibo-and-wechat/)
* [Remembering Liu Xiaobo Analyzing censorship of the death of Liu Xiaobo on WeChat and Weibo](https://citizenlab.ca/2017/07/analyzing-censorship-of-the-death-of-liu-xiaobo-on-wechat-and-weibo/)
* [Managing the Message: What you can’t say about the 19th National Communist Party Congress on WeChat](https://citizenlab.ca/2017/11/managing-message-censorship-19th-national-communist-party-congress-wechat/)
* [(Can’t) Picture This: An Analysis of Image Filtering on WeChat Moments](https://citizenlab.ca/2018/08/cant-picture-this-an-analysis-of-image-filtering-on-wechat-moments/) ([paper](https://www.usenix.org/system/files/conference/foci18/foci18-paper-knockel.pdf))
* [Censored Contagion: How Information on the Coronavirus is Managed on Chinese Social Media](https://citizenlab.ca/2020/03/censored-contagion-how-information-on-the-coronavirus-is-managed-on-chinese-social-media/)
* [Censored Contagion II: A Timeline of Information Control on Chinese Social Media During COVID-19](https://citizenlab.ca/2020/08/censored-contagion-ii-a-timeline-of-information-control-on-chinese-social-media-during-covid-19/)

Data: [Keywords and URLs (November 2016)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/one_app_two_systems), [709 Crackdown keywords and images (April 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/709crackdown), [Liu Xiaobo keywords and images (July 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/lxb), [19th Party Congress keywords (November 2017)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/ncpc19), [Image filtering test data (May 2018)](https://github.com/citizenlab/chat-censorship/tree/master/wechat/image-filtering), [Coronavirus keywords (March 2020)](https://github.com/citizenlab/chat-censorship/tree/master/coronavirus)

## Apple engravings

Our research measuring Apple's filtering of product engravings uses sample testing to discover keywords that cannot be engraved in each of six different regions: United States, Canada, Japan, Taiwan, Hong Kong, and mainland China. We found that part of Apple’s mainland China political censorship bleeds into both Hong Kong and Taiwan. Much of this censorship exceeds Apple’s legal obligations in Hong Kong, and we are aware of no legal justification for the political censorship of content in Taiwan.

Six months after our initial report, in a follow study, we found that Apple eliminated their Chinese political censorship in Taiwan. However, Apple continued to perform broad, keyword-based political censorship outside of mainland China in Hong Kong, despite human rights groups’ recommendations for American companies to resist blocking content. As other tech companies do not perform similar levels of political censorship in Hong Kong, we assess possible motivations Apple may have for performing it, including appeasement of the Chinese government.

* [Engrave Danger: An Analysis of Apple Engraving Censorship across Six Regions](https://citizenlab.ca/2021/08/engrave-danger-an-analysis-of-apple-engraving-censorship-across-six-regions/)
* [Engrave Condition: Apple’s Political Censorship Leaves Taiwan, Remains in Hong Kong](https://citizenlab.ca/2022/03/engrave-condition-apples-political-censorship-leaves-taiwan-remains-in-hong-kong/)

Data: [Keyword filtering rules](https://github.com/citizenlab/chat-censorship/tree/master/apple)

## QQMail

On Tencent's QQMail, we discover that certain combinations of keywords being present in email messages triggers their censorship.  However, the presence of other combinations, which we call extenuating combinations, deactivates the censorship of some censored keywords.

* [Measuring QQMail’s automated email censorship in China](https://dl.acm.org/doi/pdf/10.1145/3473604.3474560)

Data: [Censored and extenuating keyword combinations](https://github.com/citizenlab/chat-censorship/tree/master/qqmail)

## MY2022 Beijing Olympics App

MY2022, an app required to be installed by attendees of the 2022 Olympics Games, includes features that allow users to report “politically sensitive” content. We found that the app also includes a censorship keyword list, which, while presently inactive, targets a variety of political topics including domestic issues such as Xinjiang and Tibet as well as references to Chinese government agencies. It is unclear whether the list is inactive purposefully or in a bid to hide the extent of China’s censorship regime from outsiders.

* [Cross-Country Exposure Analysis of the MY2022 Olympics App](https://citizenlab.ca/2022/01/cross-country-exposure-analysis-my2022-olympics-app/)

Data: [Inactive blocklist](https://github.com/citizenlab/chat-censorship/tree/master/olympics)

## Microsoft Bing

Testing Microsoft Bing's censorship of autosuggestions, we find Chinese political censorship of suggestions for individual's names, such as Xi Jinping, not only in China but also in North America. The findings in this report again demonstrate that an Internet platform cannot facilitate free speech for one demographic of its users while applying extensive political censorship against another demographic of its users.

* [Bada Bing, Bada Boom Microsoft Bing’s Chinese Political Censorship of Autosuggestions in North America](https://citizenlab.ca/2022/05/bada-bing-bada-boom-microsoft-bings-chinese-political-censorship-autosuggestions-north-america/)

Data: [Censored names](https://github.com/citizenlab/chat-censorship/tree/master/microsoft-bing)

## Search engine censorship

Across eight China-accessible search platforms analyzed — Baidu, Baidu Zhidao, Bilibili, Microsoft Bing, Douyin, Jingdong, Sogou, and Weibo — we discovered over 60,000 unique censorship rules used to partially or totally censor search results returned on these platforms. We investigated different levels of censorship affecting each platform, which might either totally block all results or selectively allow some through, and we applied novel methods to unambiguously and exactly determine the rules triggering each of these types of censorship across all platforms. Among web search engines Microsoft Bing and Baidu, Bing’s chief competitor in China, we found that, although Baidu has more censorship rules than Bing, Bing’s political censorship rules were broader and affected more search results than Baidu. Bing on average also restricted displaying search results from a greater number of website domains. These findings call into question the ability of non-Chinese technology companies to better resist censorship demands than their Chinese counterparts and serve as a dismal forecast concerning the ability of other non-Chinese technology companies to introduce search products or other services in China without integrating at least as many restrictions on political and religious expression as their Chinese competitors.

* [Missing Links: A comparison of search censorship in China](https://citizenlab.ca/2023/04/a-comparison-of-search-censorship-in-china/)

Data: [Censorship rules from testing people's names from Wikipedia](https://github.com/citizenlab/chat-censorship/tree/master/search/people), [Censorship rules from testing other platforms' rules](https://github.com/citizenlab/chat-censorship/tree/master/search/rules), [Ongoing censorship rules testing from news articles](https://github.com/citizenlab/chat-censorship/tree/master/search/ongoing), [Web search pre-authorized domains](https://github.com/citizenlab/chat-censorship/tree/master/search/authorized-domains)

Keyword Content Analysis
========
Datasets include raw keyword lists collected from the applications.  Many also include processed data including translations and categorization of keywords.  Keywords were translated to English using a combination of machine and human translation. Based on interpreting these translations with contextual information, we coded each keyword into content categories grouped under six general [themes](https://github.com/citizenlab/chat-censorship/blob/master/themes_keyword_censorship.csv) according to a [code book](https://github.com/citizenlab/chat-censorship/blob/master/categories_keyword_censorship.csv).

License
========

All data is provided under Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International and available in full
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) and summarized
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/).
