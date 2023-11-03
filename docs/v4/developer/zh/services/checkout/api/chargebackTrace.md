---
title: 查询拒付操作记录
date: 2021-11-19 12:29:35
permalink: /pages/fce103/
---


# 查询拒付操作记录

## 请求地址
<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-payment.pingpongx.com/v4/chargeback/trace
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-payment.pingpongx.com/v4/chargeback/trace
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

| Parameter field        | Parameter type        | Parameter attribute | Parameter description                                                                  |
|:------------|:------------|:-----|:----------------------------------------------------------------------|
| accId       | string(64)  | M    | PingPong merchant store ID                                                        |
| clientId    | string(64)  | M    | PingPong merchant ID                                                                                                               |                                                          |
| signType    | string(32)  | M    | 签名规约，支持 MD5、SHA256，具体⻅本文“签名规约”一栏                                      |
| sign        | string(128) | M    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature         |
| version     | string(10)  | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                |
| biz_content |             | M    | 请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递                               |

### 请求参数

| Parameter field          | Parameter type       | Parameter attribute | Parameter description            |
|:--------------|:-----------|:-----|:----------------|
| transactionId | string(64) | M    | PingPong merchant store ID  |


## 响应参数

<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<el-tag type="" effect="dark">POST</el-tag>
<el-tag type="" effect="dark">JSON</el-tag>
<br/>
<br/>

以下为data[i]单笔明细(多组)

| Parameter field             | Parameter description                       |
|:-----------------|:---------------------------|
| transactionId    | PingPong 原始交易订单号           |
| id               | 拒付状态变更流水 ID                |
| chargebackId     | PingPong 拒付 ID，跟随拒付类型变更而变更 |
| chargebackType   | 拒付类型 详见拒付类型表               |
| chargebackStatus | 拒付状态 详见拒付状态表，默认为查询所有类型     |
| createDate       | 拒付状态时间 YYYY-MM-DD hhmmss   |
| updateDate       | 拒付状态更新时间 YYYY-MM-DD hhmmss |
| creator          | 流水记录创建者                    |



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



 