---
title: Overview
date: 2022-10-16 17:58:34
permalink: /pages/77b44e/
---

After the cardholder's transaction is successful, store the card information on the PingPongCheckout server and exchange for the token of the card information. The cardholder can use the token instead of the card information for payment in subsequent transactions with the current credit card. This will provide you with storing one or more card information for each shopper on the PingPongCheckout server, and give your shoppers a faster checkout experience.

## 效果展示

<a href="/pages/f90dfd/" target="_blank">Hosted</a>模式的收银台页面，如果勾选了保存卡号，下次支付时候将会自动展示上次的卡信息，如果有多个卡，
将展示已保存的卡列表。选择卡号之后将会自动回填卡信息，优化持卡人的结帐体验。

<div style="display: flex;justify-content: space-between">
<div style="width: 400px"><img :src="$withBase('/v4/tokenization/example-1.png')"></div>
<div style="width: 400px"><img :src="$withBase('/v4/tokenization/example-2.png')"></div>
</div>

