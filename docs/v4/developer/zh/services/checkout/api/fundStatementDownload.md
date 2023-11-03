---
title: Fund Statement Report
date: 2021-11-19 12:29:35
permalink: /pages/42d026/
---


# Download fund reconciliation statement

## Request Url
<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/fundFile/download
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-payment.pingpongx.com/fundFile/download
  ```
  </code-block>
</code-group>
</div>



## Request Parameters

### Common Request Parameters

<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field | Parameter type | Parameter attribute | Parameter description                                                                                                                                                             |
|:----------------|:---------------|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clientId        | 	string(64)    | 	M	                 | PingPong merchant ID                                                                                                                                                              |
| accId           | 	string(64)	   | M	                  | PingPong merchant store ID                                                                                                                                                        |
| signType        | 	string(32)	   | M                   | 	Signature Specification: MD5 and SHA256 are supported. For details, see the Signature Specification section hereof for details                                                   |
| sign            | 	string(128)   | 	M                  | 	For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature |
| version         | string(10)     | M                   | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                               |
| bizContent      |                | M                   | Collection of request parameters, with no maximum length. All request parameters except for common parameters must be passed in this parameter                                    |


### Request Parameters
| Parameter field | Parameter type | Parameter attribute | Parameter description                                                   |
|:----------------|:---------------|:--------------------|:------------------------------------------------------------------------|
| billDate        | 	string(64)    | 	M	                 | Statement date: Daily statement: yyyy-MM-dd, Monthly statement: yyyy-MM |
| billType        | 	string(16)	   | M	                  | Statement type, select either BILL or MONTH_BILL                        |
| recVersion	     | string(8)      | 	C	                 |apiversion number, supporting 1.0, 2.0, default: 1.0             |



<br/>
<br/>
<br/>

## Response Parameters



<br/>
<el-tag type="danger" effect="dark">Parameter required attribute description: required (M), optional (O), conditionally required (C)</el-tag>
<el-tag type="" effect="dark">application/octet-stream</el-tag>
<br/>
<br/>

Get the reconciliation file in the form of an attachment, HTTP header parameters return success and failure information. The header parameters are as follows：

| Parameter field | Parameter type | Parameter description                                                   |
|:----------------|:---------------|:------------------------------------------------------------------------|
| billDate        | string(64)     | Statement date: Daily statement: yyyy-MM-dd, Monthly statement: yyyy-MM |
| fileName        | string         | File name                                                               |
| errorCode       | int            | Error code, see the appendix for the return code table                  |
| errorMsg        | string         | Error description                                                       |


