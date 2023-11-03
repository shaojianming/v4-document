---
title: 概览
date: 2022-10-11 09:59:03
permalink: /pages/08a2a3/
---


本文档为 pingpong checkout 跨境支付的 API 接口文档,商户服务器和 pingpong checkout 服务器进行交互。 供商户/平台服务方的技术开发及测试相关人员使用。 本文档分别从交互流程、通讯方式、签名方 案、交易接口、注意事项等⻆度详细介绍了 pingpong checkout 跨境支付 API 接口的工作方式和开发过 程，可以帮助开发人员快速接入支付系统，同时也可以作为后续接口参数以及Parameter type的速查手册。


## 集成方式

### Checkout的两种接入模式
<br/>
<img :src="$withBase('/v4/checkout/overview/checkout（1）.png')">


### Hosted

由 pingpong checkout 提供收银台⻚面，商户无需自行开发收银台⻚面，执行完下单请求，直接在pingpong checkout 收银台⻚面完成支付。

### Non-Hosted
商户与 pingpong checkout 完全通过API来进行交互，商户需自行开发收银台页面，保存、处理用户的信用卡信息。

## 支付方式

### Checkout的两种支付方式
<br/>
<img :src="$withBase('/v4/checkout/overview/payType.png')">


### 本地支付

本土化的文化差异和监管要求造就了本地化市场的消费体验需求，这些当地常用的支付工具（包括本地卡）都可以统称为"全球本地支付"。
本地支付（英文为 Alternative Payment Methods,以下简称APM），本意指替代信用卡的支付方式，
在中国典型的本地化支付方式是支付宝、微信支付。 在美国，人们更喜欢用PayPal和信用卡，在德国是主流支付工具是Klarna，Giropay等。

<a href="/pages/5607d3/" target="_blank">本地支付支持列表</a>    
<a href="https://github.com/pingpongCheckout/payment-logos" target="_blank">payment-logos</a>    

### 国际信用卡支付

国际信用卡支付是指Visa、Mastercard、JCB、American Express（AE）、Diners Club International（DCI）和Discover（DC）等国际信用卡品牌下的支付服务

国际信用卡支付支持以下两种交易模式：

#### 自动预授权确认

交易消费与结算是在一起发生的，交易发起之后，直接扣除持卡人的的余额或者额度

#### 手动调用预授权确认

先预支消费，最后再做真正交易。如当消费者持信用卡订酒店、机票或租车时，银行会根据商户的请求先冻结信用卡中的一部分资金作为消费者在该商户消费的“担保”<br/>
如果使用手动调用预授权确认,预授权交易<el-tag type="danger" effect="dark">7天</el-tag>后，如果商户在这期间没有发生预授权确认，发卡行会自动解冻持卡人冻结的资金。
+ <a href="/pages/b110ca/" target="_blank">预授权确认</a>    ，正式扣掉这部分资金。
+ <a href="/pages/671c9c/" target="_blank">预授权撤销</a>    ，解冻持卡人冻结的资金。


