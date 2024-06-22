
Overview
========

Keyword lists used to censor chat messages on four live streaming applications: YY, Sina Show, 9158, and GuaGua. 
Each of these applications have client-side implementations of keyword censorship. 
Through reverse engineering we extract the keyword lists and track updates to the lists over time.  Overall this dataset consists of over 20,000 unique blacklisted keywords.

Data Analysis 
========

For details on reverse engineering methods and results see our paper [Every Rose Has Its Thorn: Censorship and Surveillance on Social Video Platforms in China](https://www.usenix.org/conference/foci15/workshop-program/presentation/knockel).

To explore the data collected between March 2015 to September 2016 see 
[Harmonized Histories?
A year of fragmented censorship across Chinese live streaming applications](https://netalert.me/harmonized-histories.html).

Data collected between [February 2015 to March 2015](https://github.com/citizenlab/chat-censorship/blob/master/livestream/livestream_keywords_02_15_05_15.csv) described [here](https://www.usenix.org/system/files/conference/foci15/foci15-paper-knockel.pdf) 

Data collected between [March 2015 to September 2016](https://github.com/citizenlab/chat-censorship/blob/master/livestream/livestream_keywords_05_15_09_16.csv) described [here](https://netalert.me/harmonized-histories.html)

Keywords were translated to English using combination of machine and human translation.
Based on interpreting these translations with contextual information, we coded each keyword into content categories grouped under six general [themes](themes_keyword_censorship.csv) according to a [code book](categories_keyword_censorship.csv)

Note that raw collection data is available in directories ending in \*-raw-data.  Each file represents an observed update to a list, as measured via hourly collection, and contains the contents of the list at that time indicated by the file's name (in UTC).  For instance, [yy-raw-data/hlist/2015-02-06-22.plain](https://github.com/citizenlab/chat-censorship/blob/master/livestream/yy-raw-data/hlist/2015-02-06-22.plain) is YY's "high" list (see [our paper](https://www.usenix.org/system/files/conference/foci15/foci15-paper-knockel.pdf) for details on how each list is used) on February 6 2015 10:00pm UTC.

CSV Data Fields
========

The categorized data in each CSV is organized by the following fields:

client: live streaming app

word: keyword extracted from the app

machine_translation: translation from Google Translate

human_translation: translation from human. Only applied when necesssary 

theme: categories mapped to six [themes](themes_keyword_censorship.csv)

categories: keywords mapped to [categories](categories_keyword_censorship.csv)

description: contextual background behind the keyword

earliest event type: add (keyword added), del (keyword deleted), first_seen
(first instance keyword seen on list. Used when specific add date is not available),

earliest event date: date of the earliest event

last event type: add (keyword added), del (keyword deleted), last_seen (last instance of keyword being present on list)

latest event date: date of the latest event

Resources 
========
[Every Rose Has Its Thorn: Censorship and Surveillance on Social Video Platforms in China](https://www.usenix.org/system/files/conference/foci15/foci15-paper-knockel.pdf)

[Harmonized Histories?
A year of fragmented censorship across Chinese live streaming applications](https://netalert.me/harmonized-histories.html)

