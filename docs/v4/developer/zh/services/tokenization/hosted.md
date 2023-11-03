---
title: cardToken-Hosted
date: 2023-05-08 23:05:40
permalink: /pages/abc0f1/
---


<div ><img :src="$withBase('/v4/tokenization/bindCard-Hosted.png')"></div>
<el-card style="background: none;color: var(--textColor);border-color: var(--borderColor)">
<div slot="header">
<h4>The following provides a brief explanation of the main steps</h4>
</div>
<ol>
<li>Place an order on the client-side</li>
<li>checkout page <el-tag>Save this credit card information (excluding CVV/CVC/CVN) for future purchases and payments</el-tag>。</li>
<li><a href="/pages/44dba3/" target="_blank">Create a Payment Intent</a> API Sync Response</li>
<li>
 To retrieve the token from the asynchronous notification message, please refer to the documentation on how to obtain the asynchronous notification message for <a href="/pages/d0ddb3/" target="_blank" >detailed instructions</a>
<ul>
<li>SUCCESS：Able to retrieve token</li>
<li>FAILED：Unable to retrieve Token</li>
</ul>
</li>
</ol>

</el-card>



<br/>
<div style="display: flex;justify-content: space-between">
<div style="max-width: 400px;border: 1px solid var(--borderColor)">
    <img :src="$withBase('/sdk/quickPayment/createToken.png')" alt="Create Token">
    <p style="text-align: center;font-size: 14px"> First-time payment - Check the option to save card information - CreateToken</p>
</div>
<div style="max-width: 400px;border: 1px solid var(--borderColor)">
    <img :src="$withBase('/sdk/quickPayment/cardList.png')" alt="Create Token">
    <p style="text-align: center;font-size: 14px">Subsequent payment - Automatically display saved card information</p>
</div>
</div>