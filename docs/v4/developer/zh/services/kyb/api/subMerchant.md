---
title: Sub-merchant registration 
date: 2022-07-15 09:50:42 
permalink: /pages/6cf273/
---

## Request address

<br/>
<div>
<code-group>
  <code-block title="Sandbox Environment" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/subMerchant/getOne
  ```
  </code-block>
  <code-block title="Production Environment">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/subMerchant/getOne
  ```
  </code-block>
</code-group>
</div>



## Request Parameters:


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


###  Common Request Parameters:

| Parameter field          | Parameter type        | Parameter attribute | Parameter description                                                                        |
|:--------------|:------------|:-----|:----------------------------------------------------------------------------|
| institutionId | string(64)  | M    | PingPong institution number                                                               |
| subClientId   | string(64)  | M    | Sub-merchant client ID                                                                 |
| signType      | string(32)  | M    | Signature protocol, supports MD5, SHA256，see the <a href='/pages/77ae52/' target='_blank'>signature protocol column</a>in this article for details |
| sign          | string(128) | M    | For signature, see the Signature Specification section hereof for details <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> All Parameters Participate in Signature               |
| version       | string(10)  | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                      |


```json
{
  "institutionId": "2022070222130610237",
  "subClientId": "SM2022071014260110273",
  "signType": "MD5",
  "sign": ""
}
```

## Response Parameters:


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


<div>
<v4-KYB-SubMerchant/>
</div>


```json
{
  "msg": "SUCCESS",
  "code": 200,
  "data": {
    "kycStatus": "PENDING",
    "institutionId": "2022070222130610237",
    "companyInfo": {
      "continent": "Asia",
      "companyUtilityBillts": [
        {
          "fileName": "11d82e52de104469960e73625af5f1fe.jpg"
        },
        {
          "fileName": "8e7168c19e43491a9c3c7eebf6a026cc.jpg"
        }
      ],
      "country": "",
      "englishName": "englishName",
      "officeLeaseContracts": [
        {
          "fileName": "be78f7019cf2490382e25761b0e5c62b.jpeg"
        },
        {
          "fileName": "235eb52977dc4f2c8025548aeaa9f106.jpeg"
        }
      ],
      "otherInfo": [
        {
          "originFileName": "66.jk",
          "filePath": "d51a7da28c1f407ea6de2c94d526ea64.png",
          "fileType": "4"
        },
        {
          "originFileName": "pci-logo.png",
          "filePath": "5847e0699411439f9a9d79ab73c34b0e.png",
          "fileType": "4"
        }
      ],
      "businessLicenseFileName": "5c45a3d091194e42be99a29918b6dfa8.jpeg",
      "companyType": 1,
      "businessLocation": "HongKong(China)",
      "certificationNo": "3305125635885588555",
      "hkBizRegistrationOrdinance": "4b97876c26564f2593131d12609bafa0.jpeg",
      "bankAccountInformation": {
        "fileName": "fee3e55e59b34a2bb0d801668ea5b047.jpg"
      },
      "certEffectiveDate": "2022-07-01",
      "certExpireDate": "2022-07-01",
      "englishAddress": "vvvv",
      "dictArea": "香港特别行政区,灣仔區",
      "residentialAddress": "ccc",
      "additionalInfo": [],
      "chineseName": "chineseName",
      "companyCharter": "0882d639fd1c46c289d1f231ccf989c8.jpeg,39a7fa59472f4077b455c2077c9b65de.jpeg",
      "officeFileName": "e93d56676a9d48d7b216c6b6bc73b199.jpg",
      "status": "PENDING"
    },
    "serviceURL": "https://dev-acquirer-merchant.pingpongx.com/merchant/acquirer/file/selectFile/",
    "sign": "DDEFD6CFFEAC56EBE8566266DAEE7A6C7C346D1392FF57918D3BEF061B609B0D",
    "shareholder": [
      {
        "country": "HongKong(China)",
        "englishName": "cccc",
        "address": "股东地址",
        "idType": "1",
        "frontImageFileName": "38796040b1f6484494ee481e5fe179db.jpg",
        "birthDate": "2022-07-28",
        "certEffectiveDate": "2022-05-01",
        "certExpireDate": "2022-05-01",
        "englishAddress": "cccc",
        "customerType": 2,
        "emailAddress": "1235@qq.com",
        "phoneNumber": "1865233666",
        "backImageFileName": "d2a9b1dddfac4746bdcb9faf9e359172.jpg",
        "dictArea": "香港特别行政区,中西區",
        "chineseName": "股东中文名称",
        "customerId": "784",
        "idCardNumber": "125666333331",
        "comment": "222",
        "status": "PENDING"
      }
    ],
    "merchantClientId": "test0001",
    "additionInfo": {},
    "beneficiaryInfo": [
      {
        "country": "United States",
        "englishName": "受益人英文名",
        "address": "受益人地址",
        "idType": "1",
        "frontImageFileName": "0436a7e0d7a04b9eb41010243ce23da6.jpeg",
        "birthDate": "2022-07-28",
        "certEffectiveDate": "2022-05-01",
        "certExpireDate": "2022-05-01",
        "englishAddress": "受益人英文地址",
        "customerType": 3,
        "emailAddress": "1235@qq.com",
        "phoneNumber": "1865233666",
        "backImageFileName": "df002ca9c9d64987a48a421f8fabee21.png",
        "dictArea": "United States,New York",
        "chineseName": "受益人名称",
        "customerId": "785",
        "idCardNumber": "125666333331",
        "comment": "333",
        "status": "PENDING"
      }
    ],
    "legalPerson": {
      "country": "HongKong(China)",
      "englishName": "cccc",
      "address": "法人地址",
      "idType": "1",
      "frontImageFileName": "8ed43fbf03624283ad6d3d654fdba7d1.jpeg",
      "birthDate": "2022-07-28",
      "certEffectiveDate": "2022-05-01",
      "certExpireDate": "2022-05-01",
      "englishAddress": "cccc",
      "customerType": 1,
      "emailAddress": "1235@qq.com",
      "phoneNumber": "1865233666",
      "backImageFileName": "d1f2b0827da048a784512bbff2a0a41d.jpeg",
      "dictArea": "香港特别行政区,中西區",
      "chineseName": "法人中文名称",
      "customerId": "783",
      "idCardNumber": "法人电话",
      "comment": "111",
      "status": "PENDING"
    },
    "notifyUrl": "https://www.baidu.com",
    "subClientId": "SM2022081216372410300",
    "signType": "SHA256"
  }
}
```
