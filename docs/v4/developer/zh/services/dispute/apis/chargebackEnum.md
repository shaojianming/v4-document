---
title:  disputes API Enumerated value.
date: 2023-05-06 14:54:43
permalink: /pages/8ea994/
---



## chargebackStatus 

| Code      | description             |
|-----------|-------------------------|
| EXPIRED   | Expired                 |
| LOST      | Appeal Failed           |
| PROCESSED | No Submission (Channel) |
| PENDING   | Pending                 |
| PROCESSED | PROCESSED               |
| REFUNDED  | REFUNDED                |
| REVOKED   | REVOKED                 |
| WON       | Appeal Successful       |
| ACCEPTED  | Appeal Abandoned        |

## disputeType CBReasonCodeEnum

| Code        | description |
|-------------|-------------|
| DUTY        | Liability Determination Category         |
| NO_RECEIVED | Non-Receipt of Goods        |
| WRONG_GOODS | Goods Not as Described/Broken/Incorrect        |
| OTHERS      | OTHERS         |

## Chargeback Evidence Type Enumeration CBDocTypeCodeEnum

| Code                 | description         |
|----------------------|---------------------|
| TIDorInvoice         | Transaction Information Screenshot              |
| LogisticInfo         | Shipping Information Screenshot              |
| GoodsWereAsDescribed | Product Clear Photos and Details           |
| ImageofGoodDeliverd  | Actual Shipped Product Photos           |
| CardholderSignLetter | Cardholder Signed Dispute Withdrawal or Refund Proof    |
| CustomerContactInfo  | Communication Records with the Buyer, if Available       |
| CancelRefundPolicy   | Cancellation or Refund Policy             |
| DefendMaterial       | DefendMaterial                |

## Reduired CBRequirementLevelEnum

| Code        | description     |
|-------------|--------|
| Conditional | Conditional |
| Optional    | Optional     |
| Mandatory   | Mandatory     |

## Exception Code Details

| errorCode                | errorMessage                                  | 中文描述                   |
|--------------------------|-----------------------------------------------|------------------------|
| AccIdError               | Request accid error                           | 商户店铺唯一编号不可为空           |
| QueryTimeError           | Request event query time error                | 查询事件起止时间不可为空           |
| ChargebackIdError        | Request disputePspReference error             | 拒付单号不可为空               |
| ChargebackStatusError    | Request chargebackStatus invalid              | chargebackStatus 参数不合法 |
| QueryPageError           | Request query pageSize,pageNum error          | 查询页数和行数不可为空            |
| QueryPageMaxError        | Request query pageSize min or max error       | 查询行数超过最大或最小限制          |
| UploadFileNameError      | Request upload file name invalid              | 文件名称不可为空               |
| UploadFileTypeError      | Request upload file type invalid              | 文件种类参数不合法              |
| CBNonExist               | Invalid disputePspReference provided          | 拒付单号查无或不属于此 Accid      |
| UploadFileError          | Failed to store defense documents             | 拒付文件上传失败               |
| ContentCodeError         | No content type of defense document specified | 申述材料类型参数不合法            |
| DefendDisputeStatusError | Dispute is not defendable                     | 不具备提交申诉的条件             |
| DefendEnded              | Dispute defense period has ended              | 拒付已过期，已经超过提交申诉的截止时间    |
| DefendExist              | Dispute already defended                      | 已经提交过申诉/放弃申诉           |
| SystemError              | System error                                  | 系统异常                   |
| OtherError               | Other error                                   | 其他异常                   |