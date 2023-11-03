---
title: KYB服务密钥获取流程
date: 2022-07-25 21:16:32
permalink: /pages/96895e/
---
## 1. 注册

> 沙箱：https://sandbox-checkout.pingpongx.com/
>
> 线上：https://checkout.pingpongx.com/

**注意：注册时需要选择机构类商户，机构类商户后续才有调用KYB API的能力**

<div>
  <img :src="$withBase('/kyb/img/image-20220725204714025.png')">
</div>



## 2. 完善实名认证

> 在pingpongcheckout 商户后台提交：法人、股东、受益人、公司信息后，等待PingPong风控人员完成审核

<div>
  <img :src="$withBase('/kyb/img/image-20220725205720809.png')">
</div>


## 3. kyc审核完成

> kyc审核完成后，会发送邮件到注册邮箱，包含clientId、salt，再后续调用KYB API接口时需要使用
>
> clientId：注册商户的商户号（在kyb中表示机构号）
>
> salt：调用api接口需要用到的加签密钥

<div>
  <img :src="$withBase('/kyb/img/image-20220725211226804.png')">
</div>



## 4. 通过KYB API添加子商户信息、店铺信息

> api文档参考：
>
> https://acquirer-api-docs-v3.pingpongx.com/pages/f33b74/

* 注册子商户

* 新增公司信息

* 添加法人、股东受益人

* 添加店铺信息

* 接收异步通知/查询

  ...