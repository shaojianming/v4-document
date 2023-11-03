---
title: 查询拒付记录
date: 2021-11-19 12:29:35
permalink: /pages/9d8c4c/
---

## 请求地址
<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/chargeback/list
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/chargeback/list
  ```
  </code-block>
</code-group>
</div>


## 请求参数


### 公共请求参数

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field | Parameter type | Parameter attribute | Parameter description                                                                                                                                                            |
|:----------------|:---------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accId           | string(64)     | M    | PingPong merchant store ID                                                                                                                                                       |
| clientId        | string(64)     | M    | PingPong merchant ID                                                                                                                                                             |                                                          |
| signType        | string(32)     | M    | 签名规约，支持 MD5、SHA256，具体⻅本文“签名规约”一栏                                                                                                                                                 |
| sign            | string(128)    | M    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature |
| version         | string(10)     | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                              |
| biz_content     |                | M    | 请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递                                                                                                                                          |

### 请求参数

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

| Parameter field             | Parameter type       | Parameter attribute | Parameter description                                |
|:-----------------|:-----------|:-----|:------------------------------------|
| queryType        | string(64) | M    | NEW/UPDATE【新增/修改】                   |
| startDate        | string(64) | M    | 拒付生成时间/更新时间纬度，查询开始时间， 格式 yyyy-mm-dd |
| endDate          | string(64) | M    | 拒付生成时间/更新时间纬度，查询截止时间， 格式 yyyy-mm-dd |
| chargebackType   | string(64) | O    | 拒付类型 详见拒付类型表                        |
| chargebackStatus | string(64) | O    | 拒付状态 详见拒付状态表，默认为查询所有类型              |
| page             | int        | O    | 分⻚⻚码，默认 1                           |
| pageSize         | int        | O    | 单⻚记录条数，默认 100，最大支持 1000             |



## 拒付类型

| chargebackType      | desc |
|:--------------------|:-----|
| retrieval           | 调单   |
| 1st_chargeback      | 一拒   |
| 2nd_chargeback      | 二拒   |
| chargeback_reversal | 拒付撤销 |
| pre_arbitration     | 预仲裁  |
| arbitration         | 仲裁   |

## 拒付状态

| 序号  | chargebackStatus | desc                        | 状态描述 |
|:----|:-----------------|:----------------------------|:-----|
| 1   | pending          | 商户还未处理拒付/调单                 | 初始态  |
| 3   | processed        | 商户已提交材料                     | 中间态  |
| 4   | expired          | 商户逾期未处理                     | 中间态  |
| 5   | waiver_appeal    | 商户点击放弃申诉按钮或因 未对调单申诉而后续产生的拒付 | 中间态  |
| 6   | revoked          | 收单渠道拒付文件，拒付撤销               | 初始态  |
| 7   | success          | 收到渠道文件，申诉成功                 | 终态   |
| 8   | failed           | 收到渠道文件，申诉失败                 | 终态   |
| 9   | refunded         | 商户在拒付/调单录入时已全额退款            | 终态   |


## 响应参数

| Parameter field      | Parameter type       | Parameter attribute | Parameter description              |
|:----------|:-----------|:-----|:------------------|
| clientId  | string(64) | M    | PingPong merchant ID   |
| totalSize | int        | M    | 总记录数              |
| data      | array      | M    | [data]以下为单笔明细(多组) |

### data[i] :

| Parameter field                  | Parameter description                      |
|:----------------------|:--------------------------|
| accId                 | PingPong merchant store ID            |
| chargebackId          | PingPong 拒付 ID，随拒付类型变更而变更 |
| chargebackType        | 拒付类型，枚举值，详见拒付类型表          |
| chargebackStatus      | 拒付状态，枚举值，详见拒付状态表          |
| chargebackAmount      | 拒付金额                      |
| chargebackCurrency    | 拒付币种                      |
| reasonType            | 拒付分类，枚举值                  |
| reasonCode            | 拒付原因                      |
| reasonDescription     | 拒付原因对应描述                  |
| createDate            | 拒付创建时间                    |
| updateDate            | 拒付更新时间                    |
| appealDate            | 最晚处理时间                    |
| cardNo                | 卡号，掩码，只展示前 6 后 4          |
| cardScheme            | Card Network                       |
| cardholderName        | 持卡人姓名                     |
| transactionTime       | 原始交易时间，时间戳                |
| transactionEndingTime | Transaction finalization time, timestamp              |
| transactionId         | 原始交易 PingPongCheckout 流水号 |
| merchantTransactionId | 原始交易商户网站流水号               |
| amount                | 原始交易金额                    |
| currency              | 原始Transaction currency                    |
| registerUserEmail     | 持卡人邮箱                     |
| shippingphoneNo       | 收货人联系电话                   |
| shippingLastName      | 收货人姓                      |
| shippingFirstName     | 收货人名                      |
| storeUrl              | 店铺地址                      |
| goodsName             | 商品名称                      |




