---
title: Transaction statement report
date: 2021-11-19 12:29:35
permalink: /pages/4afb67/
---


# Transaction statement report

## Request Url

```text
https://acquirer-merchant.pingpongx.com/api/v2/txn-rec-file/download
```




## Request Parameters


### Common Request Parameters
| Parameter field | Parameter type | Parameter attribute | Parameter description                                                                                                                                                             |
|:----------------|:---------------|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clientId        | 	string(64)    | M                   | 	PingPong merchant ID                                                                                                                                                             |
| accId	          | string(64)     | 	M                  | PingPong merchant store ID                                                                                                                                                        |
| version         | string(10)     | M                   | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                               |
| signType        | 	string(32)    | 	M                  | 	Signature Specification: MD5 and SHA256 are supported. For details, see the Signature Specification section hereof for details                                                   |
| sign            | 	string(128)   | 	M                  | 	For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature |
| bizContent      | string         | M                   | Collection of request parameters, with no maximum length. All request parameters except for common parameters must be passed in this parameter                                    |


### Request Parameters

| Parameter field | Parameter type | Parameter attribute | Parameter description                                                    |
|:----------------|:---------------|:--------------------|:-------------------------------------------------------------------------|
| billDate        | 	string(64)    | 	M                  | 	Statement date: Daily statement: yyyy-MM-dd, Monthly statement: yyyy-MM |
| billType        | 	string(16)    | 	M                  | 	账单类型，DAY、MONTH择其一                                                       |



<br/>
<br/>
<br/>

## Response Parameters

Get the reconciliation file in the form of an attachment, HTTP header parameters return success and failure information. The header parameters are as follows
Statement type, select either DAY or MONTH
| Parameter field | Parameter attribute | Parameter description    |
|:----------------|:--------------------|:-------------------------|
| billDate        | M                   | Statement date: Daily statement: yyyy-MM-dd, Monthly statement: yyyy-MM |
| fileName        | C                   | File name                     |
| errorCode       | C                   | Error code, see the appendix for the return code table             |
| errorMsg        | C                   | Error description                     |




