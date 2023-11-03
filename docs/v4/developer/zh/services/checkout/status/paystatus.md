---
title: paystatus
date: 2023-07-10 11:33:10
permalink: /pages/59d103/
---

<br />
<div>
   <Common-Warring>
      <p>1. If the synchronous response status is "PROCESSING," the merchant should wait for the asynchronous result from PingPongCheckout before proceeding with business processing；
      <p>2. Therefore, the merchant must have a mechanism to ensure that they can query the final status of the transaction at the appropriate time or integrate asynchronous notifications.</p>
   </Common-Warring>
</div>
<br />


## Transaction Idempotence Explanation
+ For the same payment order, it is allowed to continue initiating payment requests until it is successfully paid (multiple payment requests for a single payment order).
+ If the merchant does not want multiple payment requests for the same payment order, they can ensure only one payment request by passing the same requestId in the paymentapi(applicable only to Non-Hosted mode).
+ Hosted mode allows multiple payment requests. If the user refreshes the checkout page, the requestId will change (indicating that the user intends to initiate another payment request). If the page is not refreshed, the requestId remains the same (preventing accidental duplicate submissions).
+ Due to idempotence based on the requestId, if different requestIds are passed (or in the case of the hosted mode), simultaneous payment requests are initiated before the order is successfully paid, there is a possibility of duplicate payments. In such cases, manual intervention is required to process refunds in the backend system.
<br/>
<br/>



## How to retrieve transaction status？

When invoking the cash register and clicking on payment without any errors, a pending transaction is created. PingPongCheckout provides two methods to retrieve the transaction status:

<a href="/pages/0fd268/" target="_blank" >Transaction Inquiry</a>
<br/>
<a href="/pages/d0ddb3/" target="_blank" >Asynchronous Notification</a>



## The semantic of transaction status

For PingPongCheckout API v4, the captureDelayHours parameter is used to differentiate between different business scenarios in the transaction interface. The transaction status describes the flow and outcome of the transaction, with different rules for various business scenarios.

In PingPongCheckout API v4, there are seven possible status values that can be returned：

<div style="display: flex;justify-content: space-between;">
<div><el-tag type=""  effect="dark">INIT</el-tag></div>
<br/>
<div><el-tag type=""  effect="dark">PROCESSING</el-tag></div>
<br/>
<div><el-tag type="danger"  effect="dark">FAILED</el-tag></div>
<br/>
<div><el-tag type="danger"  effect="dark">CLOSED</el-tag></div>
<br/>
<div><el-tag type="danger"  effect="dark">CANCEL</el-tag></div>
<br/>
<div><el-tag type="success" effect="dark" >SUCCESS</el-tag></div>
<br/>
<div><el-tag type="success"  effect="dark">AUTH_SUCCESS</el-tag></div>

</div>
<br/>
<br/>
<br/>
<br/>

<div style="display:flex">
    <img :src="$withBase('/captureDelayHours_x.svg')"  alt="AUTH">
<p style="text-align: center;color: #8c939d;font-size: 14px">Transaction Status Flowchart</p>
</div>

State Transition Explanation

+ The following states will trigger asynchronous notifications:
  - `SUCCESS`
  - `FAILED`
+ In scenarios where the transaction status is not included in the aforementioned list, both the order placement API and queryapiwill synchronously respond with "PROCESSING." In such cases, merchants should wait for the asynchronous result from PingPongCheckout before proceeding with business processing.

### DEBIT Transaction Business Scenario:

| Status                                                            | Description                                                                                                                             | Status type        |
|:------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| <div><el-tag type="success" effect="dark" >SUCCESS</el-tag></div> | Payment successfully completed, transaction successful                                                                                  | Final state        |
| <div><el-tag type="danger"  effect="dark">CLOSED</el-tag></div>   | Outcome due to expiration/cancellation                                                                                                  | Final state        |
| <div><el-tag type="danger" effect="dark" >FAILED</el-tag></div>   | Payment failed, the user can retry the payment                                                                                          | Intermediate state |
| <div><el-tag type=""  effect="dark">PROCESSING</el-tag></div>     | Intermediate state, merchants should wait for the asynchronous result from PingPongCheckout before proceeding with business processing. | Intermediate state |
| <div><el-tag type=""  effect="dark">INIT</el-tag></div>           | Initializing an order                                                                                                                   | Intermediate state |

> Once the transaction reaches its final state, unless a retry is initiated due to failure, no further asynchronous notifications should be accepted for changes. When the transaction is in an intermediate state, it is necessary to wait for the next asynchronous notification to reach the final state of this payment.
### AUTH Transaction Business Scenario:

| Status                                                                 | Description                                                                                                                                                                    |
|:-----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <div><el-tag type="success" effect="dark" >SUCCESS</el-tag></div>      | Final CAPTURE success                                                                                                                                                          |
| <div><el-tag type="success" effect="dark" >AUTH_SUCCESS</el-tag></div> | AUTH operation successful, CAPTURE operation still needs to be initiated                                                                                                       |
| <div><el-tag type="danger"  effect="dark">CLOSED</el-tag></div>        | Outcome due to expiration/cancellation                                                                                                                                         |
| <div><el-tag type="danger" effect="dark" >FAILED</el-tag></div>        | Payment failed, the user can retry the payment                                                                                                                                 |
| <div><el-tag type="danger"  effect="dark">CANCEL</el-tag></div>        | AUTH operation successful, initiate VOID for pre-authorization cancellation                                                                                                    |
| <div><el-tag type=""  effect="dark">PROCESSING</el-tag></div>          | Intermediate state, CAPTURE operation cannot be initiated. Merchants should wait for the asynchronous result from PingPongCheckout before proceeding with business processing. |
| <div><el-tag type=""  effect="dark">INIT</el-tag></div>                | Initialize order                                                                                                                                                               |




