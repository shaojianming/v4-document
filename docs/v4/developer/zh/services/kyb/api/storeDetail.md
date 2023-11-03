---
title: 店铺详情
date: 2022-07-15 06:43:08
permalink: /pages/e5ae3a/
---


## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/store/detail
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/store/detail
  ```
  </code-block>
</code-group>
</div>


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>

|属性| 类型         |是否必填|描述|
|:----|:-----------|:----|:----|
|institutionId| string(64) |M|机构一标识|
|merchantAccId| string(64) |M|机构侧店铺唯一标识|
|accId| string(64) |M|PingPong侧店铺唯一标识|
| version       | string(10) | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                                                                         |




## 响应报文


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


<v4-KYB-StoreDetail></v4-KYB-StoreDetail>


##  FileImageInfo

|属性|类型|是否必填|描述|
|:----|:----|:----|:----|
|type|FileImage|O|文件类型，IMG,PDF，EXCEL|
|fileName|string(128)|O|文件原名|
|filePath|string(64)|M|上传后的文件地址|
|operator|string(64)|O|操作人|
|lastUpdateDate|string(64)|O|最后更新时间|



## industryType 取值

|industryType|desc|
|:-----|:-----|
|Goods_Goods| 货物贸易|
|Service_CarRental| 服务贸易-租车|
|Service_Other| 服务贸易-其它|


## independentWebsite取值

|independentWebsite|desc|
|:-----|:-----|
|Self build|自建站|
|Shopify|Shopify|
|Shopify Europe|Shopify 欧洲|
|Magento|Magento|
|Magento Europe|Magento 欧洲|
|Opencart|Opencart|
|Ueeshop|Ueeshop|
|shoplus|超店shoplus|
|Shoplazza|店匠|
|XShoppy|XShoppy|
|shopyy|shopyy|
|FUNPINPIN|FUNPINPIN|
|Woocommerce|Woocommerce|
|Woocommerce Europe|Woocommerce 欧洲|
|Other Europe Independent Website|其他建站工具|


```json
{
    "msg": "SUCCESS",
    "code": 200,
    "data": {
        "websiteJournal": [
            {
                "fileName": "网站运营.jpg",
                "lastUpdateDate": "20220715145021",
                "filePath": "0827003da1b041ca8906efd076896d8a.jpeg",
                "type": "IMG",
                "operator": "test10005@pingpongx.com"
            }
        ],
        "institutionId": "2022071513553610280",
        "sign": "DD754EF9B6026218F11E3F6E6E32A309",
        "bankStatement": [],
        "merchantAccId": "MAC20001",
        "websiteDomain": [
            {
                "fileName": "网站域名.jpg",
                "lastUpdateDate": "20220715145021",
                "filePath": "0827003da1b041ca8906efd076896d8a.jpeg",
                "type": "IMG",
                "operator": "test10005@pingpongx.com"
            }
        ],
        "industryType": "",
        "applicationForm": [
            {
                "fileName": "申请表.jpg",
                "lastUpdateDate": "20220715145021",
                "filePath": "0827003da1b041ca8906efd076896d8a.jpeg",
                "type": "IMG",
                "operator": "test10005@pingpongx.com"
            }
        ],
        "storeUrl": "xxx1.com",
        "accId": "2022071513553610280526",
        "subClientId": "SM2022071514080210281",
        "signType": "MD5",
        "storeName": "xxx1",
        "financialReport": [
            {
                "fileName": "财务报告.jpg",
                "lastUpdateDate": "20220715145021",
                "filePath": "0827003da1b041ca8906efd076896d8a.jpeg",
                "type": "IMG",
                "operator": "test10005@pingpongx.com"
            }
        ],
        "independentWebsite": "Self build",
        "status": "PENDING"
    }
}
```