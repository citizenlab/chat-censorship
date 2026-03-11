# Artifact Appendix

Paper title: Banned Books: Analysis of Censorship on Amazon.com

Requested Badge: Available

## Description

This is the public data release for _Banned Books: Analysis of Censorship on
Amazon.com_ by Jeffrey Knockel, Jakub Dałek, Noura Aljizawi, Mohamed Ahmed,
Levi Meletti, and Justin Lau.

This data set has the following high-level structure:

* `figures/`: raw CSV data represented by heatmaps in Figures 7 and 8.
* `phase1/`: product ASIN, URL, Amazon category, product title, Amazon error message, and message after attempting to add to cart for unavailable products in Phase 1.
* `phase2/`: product ASIN, URL, Amazon category, product title, Amazon error message, and message after attempting to add to cart for products in Phase 2.
* `phase3/`: product ASIN, URL, Amazon category, product title, Amazon error message, and message after attempting to add to cart for products in Phase 3.

### Security/Privacy Issues and Ethical Concerns

Both Amazon’s “Conditions of Use” and its robots.txt file welcome bots to crawl
and interact with its product pages. However, we still carefully designed our
measurements to not harm other users of Amazon’s platform. First, we did not
use proxies or any other method of hiding the origin of our measurements.
Second, we downloaded pages from Amazon within the rate limits that Amazon
allowed, and we did not attempt to circumvent these limits. Third, we did not
create or use any Amazon accounts, nor did we conduct any actual purchases over
the platform. Finally, all data we collected was available publicly without
being logged in. Furthermore, we processed each downloaded product page’s HTML
before storing its relevant contents. Specifically, we only stored product
titles, categories, and descriptions; we did not store and therefore we do not
make available any other strings from the downloaded HTML such as users’
reviews.

## Environment

This data set is available via a public git repository.

### Accessibility

You may access our data using the following commands:

```
git init
git remote add origin https://github.com/citizenlab/chat-censorship.git
git fetch origin
git checkout origin/pets-artifact-2026.3 -- amazon
```

These commands will create an `amazon` directory in your current working
directory containing our data.
