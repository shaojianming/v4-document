---
title: 保存店铺信息
date: 2022-07-15 05:39:15
permalink: /pages/2f0216/
---

## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/store/addOrUpdate
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/store/addOrUpdate
  ```
  </code-block>
</code-group>
</div>


## 请求参数

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


### 公共请求参数

| Parameter field          | Parameter type        | Parameter attribute | Parameter description                                                                        |
|:--------------|:------------|:-----|:----------------------------------------------------------------------------|
| institutionId | string(64)  | M    | PingPong 机构号                                                                |
| subClientId   | string(64)  | M    | 子商户clientId                                                                 |
| signType      | string(32)  | M    | Signature protocol, supports MD5, SHA256，see the <a href='/pages/77ae52/' target='_blank'>signature protocol column</a>in this article for details |
| sign          | string(128) | M    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature               |
| version       | string(10)  | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                      |


### 请求参数

<v4-KYB-SaveStore></v4-KYB-SaveStore>

## industryType 取值

| industryType      | desc    |
|:------------------|:--------|
| Goods_Goods       | 货物贸易    |
| Service_CarRental | 服务贸易-租车 |
| Service_Other     | 服务贸易-其它 |


## independentWebsite取值

| independentWebsite               | desc           |
|:---------------------------------|:---------------|
| Self build                       | 自建站            |
| Shopify                          | Shopify        |
| Shopify Europe                   | Shopify 欧洲     |
| Magento                          | Magento        |
| Magento Europe                   | Magento 欧洲     |
| Opencart                         | Opencart       |
| Ueeshop                          | Ueeshop        |
| shoplus                          | 超店shoplus      |
| Shoplazza                        | 店匠             |
| XShoppy                          | XShoppy        |
| shopyy                           | shopyy         |
| FUNPINPIN                        | FUNPINPIN      |
| Woocommerce                      | Woocommerce    |
| Woocommerce Europe               | Woocommerce 欧洲 |
| Other Europe Independent Website | 其他建站工具         |


##  FileImageInfo

| 属性       | 类型          | 是否必填 | 描述   |
|:---------|:------------|:-----|:-----|
| fileName | string(128) | O    | 文件原名 |

##  AdditionInfo

| 属性       | 类型                    | 是否必填 | 描述                       |
|:---------|:----------------------|:-----|:-------------------------|
| name     | string(64)            | O    | 附加信息名称                   |
| fileList | Array< FileImageInfo> | O    | 附件信息文件,图片支持多张，其它文件类型支持单个 |

## 响应报文


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


报文将会响应一个List，List中每个对象含有如下属性

| 属性            | 类型         | 是否必填 | 描述               |
|:--------------|:-----------|:-----|:-----------------|
| institutionId | string(64) | M    | 机构一标识            |
| merchantAccId | string(64) | M    | 机构侧店铺唯一标识        |
| subClientId   | string(64) | M    | PingPong侧子商户唯一标识 |
| accId         | string(64) | M    | PingPong侧店铺唯一标识  |
| status        | string(64) | M    | KYB状态            |
| comment       | string(64) | M    | 审核备注             |