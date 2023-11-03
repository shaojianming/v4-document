---
title: dispute
date: 2023-05-06 15:29:17
permalink: /pages/535033/
---

Disputes can occur when a cardholder disputes a payment and initiates a chargeback with their issuing bank. Our dispute API allows you to automate the dispute resolution process so that you can respond immediately after a dispute is initiated.

## dispute API processing procedure

### retrieval request


When a<a href="/pages/054e3d/" target="_blank">retrieval request</a>ccurs, the issuing bank requests more information about the transaction. At this stage, no funds will be deducted from your account, but it is recommended that you actively respond to the request.
<div>
    <img :src="$withBase('/v4/dispute/dispatch.png')" alt="调单-处理流程">
</div>
<br/>
<br/>
<div style="display: flex;justify-content:flex-end">
    <div style="width: 40%;">
        <img :src="$withBase('/v4/dispute/upload.png')" style="width: 100%;height: 100%" alt="调单-上传文件">
    </div>
</div>



### Chargeback

<br/>
<div>
    <img :src="$withBase('/v4/dispute/chargeback.png')">
</div>



When using the Disputes API, you need to perform the following actions

+ Processing chargeback notifications. Use the<a href="/pages/32b78f/" target="_blank">eventCode</a> to determine which stage the chargeback is in。
+ Retrieve chargeback information to understand how to defend against the dispute, such as by calling the<a href="/pages/936873/" target="_blank">Query Chargeback Response API for the required documentation.</a>。
+ If you wish to defend against the dispute, proceed with step 3.
<ul>
<li>Optional: If you do not wish to defend against the dispute, you may choose to <a href="/pages/5a8088/" target="_blank">abandon the appeal.</a>。</li>
<li>Optional: Upload all relevant supporting documentation for the dispute. Before defending against the dispute, the<a href="/pages/4da0fe/" target="_blank">Remove chargeback documentation.</a>interface can be used to remove any uploaded chargeback documentation。</li>
</ul>

+ <a href="/pages/edfa4b/" target="_blank">Submit documentation and provide arguments in defense.</a>



