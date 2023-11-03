---
title: Overview
date: 2022-07-13 13:47:34
permalink: /pages/f33b74/
---


KYC (Know Your Customer) was first proposed by the Basel Committee on Banking Supervision in its "Statement on Prevention of Money Laundering" in 1988, aimed at strengthening the examination of account holders. Identifying customer identity and conducting background checks, understanding customer and transaction purposes, the legality of fund sources, and the actual control and beneficiaries of accounts are the basic institutional foundations for anti-money laundering and corruption prevention. It has now become a basic system in the field of anti-money laundering, based on various financial regulatory requirements in different countries.

PingPong has many years of experience in secure operations in the financial industry. Now, PingPong's internal KYC products, systems, and expert experience will be opened to the outside and provide PingPong's KYB services to institutions.


## Data Access Method

PingPong provides KYB-API for data exchange with clients. The message is assembled in Content-Type: application/json format and all parameter values should be UTF-8 encoded before sending, except for the picture upload API. For the security of your data, it is necessary to sign and verify the data.


## Access address
| env     | host                                            |
|:--------|:------------------------------------------------|
| Sandbox | https://sandbox-acquirer-merchant.pingpongx.com |
| Online  | https://acquirer-merchant-fra.pingpongx.com     |


## Get merchant application form template

<a :href="$withBase('/kyb/ApplicationForm.docx')" download="tpyrced_Merchant Application Form.docx">获取PingPongCheckout 商户申请表模板</a>

## How to obtain the secret key

<a href="/pages/96895e/" > Process for Obtaining KYB Service Key </a>
