---
title: overview
date: 2023-05-06 15:26:56
permalink: /pages/400307/
---


## Chargeback

A chargeback is a forced transaction reversal, usually initiated by a cardholder who disputes a transaction and refuses to pay for it through their issuing bank. The issuing bank returns the financial responsibility for the chargeback transaction to the acquiring institution, which then returns it to the merchant.

## Chargeback Process

<div>
    <img :src="$withBase('/v4/dispute/process1.png')">
</div>

<ol>
    <li><strong>1st_chargeback：</strong>One Chargeback - The first instance of a cardholder initiating a transaction reversal.</li>
    <li><strong>Representment：</strong>Representment - The action of a merchant appealing a chargeback initiated by a cardholder.</li>
    <li><strong>1st_chargeback_reversal：</strong>Revocation of chargeback - refers to the cardholder's revocation of the chargeback action.</li>
    <li><strong>Pre-arbitration：</strong>Pre-arbitration - the first step in the final processing of a chargeback, referring to the act of a merchant or cardholder applying for arbitration with the card organization.</li>
    <li><strong>Arbitration：</strong>Arbitration - the act of a card organization making a final decision on a transaction dispute, which incurs additional fees. The arbitration fees charged vary depending on the card organization and region, generally around 500 USD.</li>
</ol>

<div>
    <img :src="$withBase('/v4/dispute/process2.png')">
</div>


## Chargeback Type

<br/>
<br/>
<div>
    <img :src="$withBase('/v4/dispute/type.png')">
</div>



## Chargeback time limit.

- Time limit for cardholder to initiate a chargeback request through retrieval request: 180 days.
- Time limit for the validity of a merchant's response to a chargeback initiated through retrieval request: 90 days.