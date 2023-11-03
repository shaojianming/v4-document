---
title: Collaborative debugging testing resources
date: 2022-08-23 22:35:47
permalink: /pages/e44701/
---

The sandbox environment is used for developers to develop and debug APIs. The account in the sandbox environment can only be used in the sandbox environment.

## Request Url
| Environment     | Address                                            |
|:--------|:------------------------------------------------|
| Sandbox | https://sandbox-acquirer-merchant.pingpongx.com |
| On-line      | https://acquirer-merchant-fra.pingpongx.com     |


## sandbox environment testing resources

### Sandbox-accId-A

| Parameter field | Parameter description    |
|:----------------|:-------------------------|
| clientId        | 2018092714313010016      |
| accId           | 2018092714313010016291   |
| salt            | F78BC96A55548B2319EE68E0 |
| cardNumber      | 4111111111111111         |
| Expiry Date     | 12/22                    |
| cvv             | 333                      |


### Sandbox-accId-B（3D test）
| Parameter field           | Parameter description    |
|:--------------------------|:-------------------------|
| clientId                  | 2018092714313010016      |
| accId                     | 2018092714313010016289   |
| salt                      | BCE27A281029F5EAF3CC0E82 |
| cardNumber                | 4200000000000000         |
| 3D card                   | 5200000000001096         |
| Expiry Date               | 12/25                    |
| cvv                       | 333                      |
| 3D challenge page CAPTCHA | 1234                     |


## Test Case

<a href="/pages/3bfaab/" target="_blank">test case</a>




