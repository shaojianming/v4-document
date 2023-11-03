---
title: cardToken-NonHosted
date: 2023-05-08 23:05:40
permalink: /pages/14d81d/
---


<div ><img :src="$withBase('/v4/tokenization/bindCard.png')"></div>
<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>The following provides a brief explanation of the main steps</h4>
</div>
<ol>
<li>Place an order on the client-side</li>
<li>
    Upload the specified parameters to identify the need to create a card token
    <ul>
        <li><Badge text="must tokenDetail.createToken=Y" type="error"/></li>
        <li><Badge text="must customer.customerId" type="error"/></li>
        <li><Badge text="Optional bizType=CardOnFile" vertical="middle"/></li>
    </ul>
</li>

<li><a href="/pages/a2c224/" target="_blank">Accept a Payment</a> API Sync Response</li>
<li>
 To retrieve the token from the asynchronous notification message, please refer to the documentation on how to obtain the asynchronous notification message for <a href="/pages/d0ddb3/" target="_blank" >detailed instructions</a>
<ul>
<li>SUCCESS：Able to retrieve token</li>
<li>FAILED：Unable to retrieve Token</li>
</ul>
</li>
</ol>
</el-card>
