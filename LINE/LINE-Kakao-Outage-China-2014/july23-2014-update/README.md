What is It?
============

Data related to DNS and HTTP requests to LINE, KakaoTalk, Flickr and One Drive domains done in China as a part of 
an investigation into a reported outage in these services. 

Full report can be found [here]()

Data
=====

DNS results from dig from July 12-23rd, 2014 from a China based server.

File included:

	07-xx-14-xx-xx-xx - directory that has dig results in the format of dig-domain.com.txt
	accessibility.csv - summary of those domains that gave incorrect dns replies (1) or not (0) over time period
	domains.txt - the domains that were tested
	fake_responses.txt - known bad dns replies to A records (ips)
	fake_responses_info.csv - little more information for the IPs above including ASN, domain, etc
	

License
========

All data is provided under Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International and available in full
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) and summarized
[here](https://creativecommons.org/licenses/by-nc-sa/4.0/)


