---
title: disputes-Enumeration
date: 2023-07-20 12:01:13
permalink: /pages/ca2e6e/
---
### ChargebackStatus Enumeration declaration

| Code      | Description             |
| --------- | ----------------------- |
| EXPIRED   | Expired                 |
| LOST      | Appeal failed           |
| PROCESSED | Not submitted (channel) |
| PENDING   | Pending                 |
| PROCESSED | Processed/submitted     |
| REFUNDED  | Refunded                |
| REVOKED   | Revoked                 |
| WON       | Appeal successful       |
| ACCEPTED  | Give up appeal          |

### CBReasonCodeEnum Enumeration of non-payment types

| Code        | Description       |
| ----------- | ----------------- |
| DUTY        | Liability         |
| NO_RECEIVED | Not received      |
| WRONG_GOODS | Incorrect product |
| OTHERS      | Other categories  |

### CBDocTypeCodeEnum Enumeration of types of proof of non-payment

| Code                 | Description                              |
| -------------------- | ---------------------------------------- |
| TIDorInvoice         | Screenshot of transaction information    |
| LogisticInfo         | Screenshot of waybill information        |
| GoodsWereAsDescribed | Clear pictures and details of the product |
| ImageofGoodDeliverd  | Pictures of the actual shipped product   |
| CardholderSignLetter | Dispute revocation letter or refund proof signed by cardholder |
| CustomerContactInfo  | Communication record with the buyer, if available |
| CancelRefundPolicy   | Cancellation or refund policy            |
| DefendMaterial       | Other materials                          |

### CBRequirementLevelEnum Specifies whether the enumeration is mandatory

| Code        | Description                           |
| ----------- | ------------------------------------- |
| Conditional | To be filled under certain conditions |
| Optional    | Optional                              |
| Mandatory   | Required                              |



### Exception code detail

| errorCode                | errorMessage                             | 中文描述                   |
| ------------------------ | ---------------------------------------- | ---------------------- |
| AccIdError               | Request accid error                      | 商户店铺唯一编号不可为空           |
| QueryTimeError           | Request event query time error           | 查询事件起止时间不可为空           |
| ChargebackIdError        | Request disputePspReference error        | 拒付单号不可为空               |
| ChargebackStatusError    | Request chargebackStatus invalid         | chargebackStatus 参数不合法 |
| QueryPageError           | Request query pageSize,pageNum error     | 查询页数和行数不可为空            |
| QueryPageMaxError        | Request query pageSize min or max error  | 查询行数超过最大或最小限制          |
| UploadFileNameError      | Request upload file name invalid         | 文件名称不可为空               |
| UploadFileTypeError      | Request upload file type invalid         | 文件种类参数不合法              |
| CBNonExist               | Invalid disputePspReference provided     | 拒付单号查无或不属于此 Accid      |
| UploadFileError          | Failed to store defense documents        | 拒付文件上传失败               |
| ContentCodeError         | No content type of defense document specified | 申述材料类型参数不合法            |
| DefendDisputeStatusError | Dispute is not defendable                | 不具备提交申诉的条件             |
| DefendEnded              | Dispute defense period has ended         | 拒付已过期，已经超过提交申诉的截止时间    |
| DefendExist              | Dispute already defended                 | 已经提交过申诉/放弃申诉           |
| SystemError              | System error                             | 系统异常                   |
| OtherError               | Other error                              | 其他异常                   |

### ChargebackReasonCode Description of the chargeback reason code of the card organization

| Card Organization | Dispute Type          | Chargeback Reason Code | Reason Description in English                                                                        | Reason Description in Chinese |
|-------------------|-----------------------|------------------------|------------------------------------------------------------------------------------------------------|-------------------------------|
| VISA              | 定责类(DUTY)             | 10.1                   | EMV-Liability Shift Counterfeit Fraud                                                                | 责任转移假冒欺诈                      |
| VISA              | 定责类(DUTY)             | 10.2                   | EMV-Liability Shift Counterfeit Non-Fraud                                                            | 责任转移假冒非欺诈                     |
| VISA              | 定责类(DUTY)             | 10.3                   | Other Fraud Card-Present Environment                                                                 | 欺诈-卡片出现环境                     |
| VISA              | 定责类(DUTY)             | 10.4                   | Other Fraud Card-Absent Environment                                                                  | 欺诈-无卡环境                       |
| VISA              | 定责类(DUTY)             | 10.5                   | Visa Fraud Monitoring Program                                                                        | Visa欺诈监控计划                    |
| VISA              | 定责类(DUTY)             | 11.1                   | Card Recovery Bulletin                                                                               | 丢失卡                           |
| VISA              | 定责类(DUTY)             | 11.2                   | Decline Authorization                                                                                | 授权被拒绝                         |
| VISA              | 定责类(DUTY)             | 11.3                   | No Authorization                                                                                     | 未授权                           |
| VISA              | 其他(OTHERS)            | 12.1                   | Late Presentment                                                                                     | 延时请款                          |
| VISA              | 其他(OTHERS)            | 12.2                   | Incorrect Transaction Code                                                                           | 交易代码不正确                       |
| VISA              | 其他(OTHERS)            | 12.3                   | Incorrect Currency                                                                                   | 货币代码不正确                       |
| VISA              | 其他(OTHERS)            | 12.4                   | Incorrect Account Number                                                                             | 账号不正确                         |
| VISA              | 其他(OTHERS)            | 12.5                   | Incorrect Amount                                                                                     | 金额不正确                         |
| VISA              | 其他(OTHERS)            | 12.6                   | Duplicate Processing                                                                                 | 重复处理                          |
| VISA              | 其他(OTHERS)            | 12.7                   | Invalid Data                                                                                         | 无效数据                          |
| VISA              | 其他(OTHERS)            | 13.2                   | Cancelled Recurring                                                                                  | 已取消的循环交易                      |
| VISA              | 其他(OTHERS)            | 13.4                   | Counterfeit Merchandise                                                                              | 假冒商品                          |
| VISA              | 其他(OTHERS)            | 13.5                   | Misrepresentation                                                                                    | 虚假交易                          |
| VISA              | 其他(OTHERS)            | 13.6                   | Credit Not Processed                                                                                 | 未收到退款                         |
| VISA              | 其他(OTHERS)            | 13.7                   | Cancelled Merchandise/Services                                                                       | 已取消的商品/服务                     |
| VISA              | 其他(OTHERS)            | 13.8                   | Original credit trasaction not accepted                                                              | 原始信用交易不被接受                    |
| VISA              | 其他(OTHERS)            | 13.9                   | Non-receipt of cash or load trasaction value                                                         | 未收到现金或负载交易额                   |
| VISA              | 未收到物品/服务(NO_RECEIVED) | 13.1                   | "Merchandise/Services Not Received"                                                                  | "未提供服务或未收到商品"                 |
| VISA              | 货不对版(WRONG_GOODS)     | 13.3                   | Not as described or defective merchandise/                                                           | 货物破损、有瑕疵/货物、服务与描述不符           |
| MC                | 定责类(DUTY)             | 4807                   | Warning Bulletin                                                                                     | 黑名单                           |
| MC                | 定责类(DUTY)             | 4808                   | Authorization-related Chargeback                                                                     | 未获得授权                         |
| MC                | 定责类(DUTY)             | 4812                   | Account number not on file                                                                           | 账号不在档案中                       |
| MC                | 定责类(DUTY)             | 4837                   | No cardholder authorization                                                                          | 持卡人未授权                        |
| MC                | 定责类(DUTY)             | 4840                   | Fraudulent processing of transaction                                                                 | 欺诈处理交易                        |
| MC                | 定责类(DUTY)             | 4849                   | Questionable merchant activity                                                                       | 可疑的商户行为                       |
| MC                | 定责类(DUTY)             | 4870                   | Chip Liability Shift                                                                                 | 芯片卡责任转移                       |
| MC                | 定责类(DUTY)             | 4871                   | Chip/PIN Liability Shift - NRI Fraud                                                                 | 芯片卡责任转移 - 丢失/被盗/未收到问题（NRI）欺诈  |
| MC                | 定责类(DUTY)             | 4863                   | Cardholder Does Not Recognize—Potential Fraud                                                        | 持卡人不承认交易—潜在欺诈                 |
| Mastercard        | 其他(OTHERS)            | 4802                   | Requested/Required Information Illegible or Missing                                                  | 信息难以辨认或丢失                     |
| Mastercard        | 其他(OTHERS)            | 4831                   | Transaction amount differs                                                                           | 交易金额不符                        |
| Mastercard        | 其他(OTHERS)            | 4834                   | Duplicate processing                                                                                 | 重复处理                          |
| Mastercard        | 其他(OTHERS)            | 4842                   | Late presentment                                                                                     | 延时请款                          |
| Mastercard        | 其他(OTHERS)            | 4846                   | Correct transaction currency code was not provided                                                   | 未提供正确的交易货币代码                  |
| Mastercard        | 其他(OTHERS)            | 4850                   | Installment Billing Dispute                                                                          | 分期付款争议                        |
| Mastercard        | 其他(OTHERS)            | 4841                   | Cancelled Recurring or digital goods Transaction                                                     | 取消经常性或数字商品交易                  |
| Mastercard        | 其他(OTHERS)            | 4854                   | Cardholder dispute not elsewhere classified (U.S. only)                                              | 持卡人争议未分类(仅限美国)                |
| Mastercard        | 其他(OTHERS)            | 4859                   | Addendum, No-show, or ATM Dispute                                                                    | 附件，No-show或ATM争议              |
| Mastercard        | 其他(OTHERS)            | 4860                   | Credit not processed                                                                                 | 未收到退款                         |
| Mastercard        | 其他(OTHERS)            | 6305                   | Cardholder does not agree with billed amount                                                         | 持卡人对账单金额持有异议                  |
| Mastercard        | 其他(OTHERS)            | 6321                   | Cardholder does not recognize transaction                                                            | 持卡人不承认该笔交易                    |
| Mastercard        | 其他(OTHERS)            | 6322                   | Transaction Certificate (ICC Transaction)                                                            | 持卡人索要交易证明                     |
| Mastercard        | 其他(OTHERS)            | 6323                   | Transaction Information Document needed for cardholder's personal records expense reporting          | 持卡人消费报销需要交易信息文件               |
| Mastercard        | 其他(OTHERS)            | 6341                   | Fraud investigation                                                                                  | 欺诈调查                          |
| Mastercard        | 其他(OTHERS)            | 6342                   | Potential chargeback or compliance                                                                   | 潜在的拒付或者应合规性文件要求               |
| Mastercard        | 其他(OTHERS)            | 6343                   | Real-time Substantiation Audit Request(IIAS)                                                         | 实时审核要求                        |
| Mastercard        | 未收到物品/服务(NO_RECEIVED) | 4855                   | Goods or Services Not Provided                                                                       | 货物/服务未收到                      |
| Mastercard        | 货不对版(WRONG_GOODS)     | 4853                   | Defective/Not as described                                                                           | 货物破损/货物、服务与描述不符               |
| DC                | 定责类(DUTY)             | A02                    | Authorization Processing Errors                                                                      | 预授权处理错误                       |
| DC                | 定责类(DUTY)             | A06                    | Unissued Account Number                                                                              | 未发行的账号                        |
| DC                | 定责类(DUTY)             | C41                    | Fraud - Card Present Transaction                                                                     | 欺诈—有卡环境交易                     |
| DC                | 定责类(DUTY)             | C42                    | Fraud - Card Not Present Transaction                                                                 | 欺诈—无卡环境交易                     |
| DC                | 定责类(DUTY)             | C46                    | Multiple Charges at Service Establishment Fraudulent Transaction                                     | 在平台有多次欺诈收费行为                  |
| DC                | 定责类(DUTY)             | C50                    | Suspect Service Establishment – No Response to the Suspected Fraudulent Service Establishment Report | 可疑的服务机构—对涉嫌欺诈的服务报告不予以回应       |
| DC                | 定责类(DUTY)             | C51                    | Suspect Service Establishment – Terminated Service Establishment                                     | 可疑的服务机构—已经终止的服务               |
| DC                | 定责类(DUTY)             | C53                    | Fraud – Chip Card Counterfeit Transaction                                                            | 欺诈—芯片卡伪造交易                    |
| DC                | 定责类(DUTY)             | C54                    | Fraud – Lost or Stolen Chip and PIN Card Transaction                                                 | 欺诈—丢失卡或被盗卡交易                  |
| DC                | 其他(OTHERS)            | B24                    | Late Presentation                                                                                    | 延迟请款                          |
| DC                | 其他(OTHERS)            | B25                    | Duplicate Charge                                                                                     | 重复收取                          |
| DC                | 其他(OTHERS)            | B26                    | Alternate Settlement Currency Incorrect Exchange Rates                                               | 替代结算货币汇率不正确                   |
| DC                | 其他(OTHERS)            | B27                    | Incorrect Currency                                                                                   | 不支持的币种                        |
| DC                | 其他(OTHERS)            | D61                    | Altered Amount                                                                                       | 修改过的金额                        |
| DC                | 其他(OTHERS)            | D65                    | Incorrect Transaction Type                                                                           | 不正确的交易类型                      |
| DC                | 其他(OTHERS)            | D66                    | Credit not Processed                                                                                 | 未收到退款                         |
| DC                | 其他(OTHERS)            | D67                    | Cardmember Paid by Other Means                                                                       | 通过其它方式支付                      |
| DC                | 其他(OTHERS)            | D69                    | Canceled Recurring Transactions                                                                      | 取消的循环交易                       |
| DC                | 其他(OTHERS)            | D70                    | Cardmember Does Not Recognize                                                                        | 持卡人不承认该交易                     |
| DC                | 其他(OTHERS)            | D71                    | Non–receipt of Cash (ATM)                                                                            | 未收到现金收据                       |
| DC                | 未收到物品/服务(NO_RECEIVED) | D62                    | Non-Receipt of Goods or Services                                                                     | 未收到商品或服务                      |
| AE                | 定责类(DUTY)             | 4526                   | Missing signature                                                                                    | 签名缺失                          |
| AE                | 定责类(DUTY)             | 4527                   | Missing imprint                                                                                      | 卡信息泄露                         |
| AE                | 定责类(DUTY)             | 4540                   | Card not present                                                                                     | 非持卡人亲自交易                      |
| AE                | 定责类(DUTY)             | 4758                   | Expired/ not yet valid card                                                                          | 无效卡/已过期交易                     |
| AE                | 定责类(DUTY)             | 4763                   | Fraud full recourse                                                                                  | 已判定了的欺诈交易                     |
| AE                | 定责类(DUTY)             | 4798                   | Fraud liability shift – counterfeit                                                                  | 责任转移假冒欺诈                      |
| AE                | 定责类(DUTY)             | 4799                   | Fraud liability shift – lost/ stolen                                                                 | 责任转移卡丢失/卡被盗                   |
| AE                | 定责类(DUTY)             | 4521                   | Invalid authorisation                                                                                | 无效的授权                         |
| AE                | 定责类(DUTY)             | 4754                   | Local regulatory/legal dispute                                                                       | 本地监管/法律争议                     |
| AE                | 定责类(DUTY)             | 4755                   | No valid authorisation                                                                               | 无效的授权                         |
| AE                | 其他(OTHERS)            | 4512                   | Multiple processing                                                                                  | 重复处理                          |
| AE                | 其他(OTHERS)            | 4507                   | Incorrect transaction amount or primary account number presented                                     | 账号或金额不准确                      |
| AE                | 其他(OTHERS)            | 4536                   | Late presentment                                                                                     | 延迟请款                          |
| AE                | 其他(OTHERS)            | 4523                   | Unassigned Cardmember account number                                                                 | 未指定的卡号                        |
| AE                | 其他(OTHERS)            | 4752                   | Credit/debit presentment error                                                                       | 借记卡/信用卡处理错误                   |
| AE                | 其他(OTHERS)            | 4513                   | Credit not presented                                                                                 | 取消的交易，没收到退款                   |
| AE                | 其他(OTHERS)            | 4515                   | Paid through other means                                                                             | 已通过其它方式支付                     |
| AE                | 其他(OTHERS)            | 4516                   | No reply to disputes enquiry letter                                                                  | 对争议咨询不予回复                     |
| AE                | 其他(OTHERS)            | 4517                   | Insufficient or unclear reply to disputes enquiry letter                                             | 对争议咨询的回复信息不足或不清楚              |
| AE                | 其他(OTHERS)            | 4530                   | Currency discrepancy                                                                                 | 汇率差异争议                        |
| AE                | 其他(OTHERS)            | 4534                   | Multiple ROCs                                                                                        | 对额外的收费有争议                     |
| AE                | 其他(OTHERS)            | 4544                   | Cancellation of recurring goods/services                                                             | 依然收到已取消的商品/服务的账单              |
| AE                | 其他(OTHERS)            | 4750                   | Car rental charge non-qualified/unsubstantiated                                                      | 租车费用不合理                       |
| AE                | 未收到物品/服务(NO_RECEIVED) | 4554                   | Goods/ services ordered but not received                                                             | 未收到商品或服务                      |
| AE                | 货不对版(WRONG_GOODS)     | 4553                   | Not as described                                                                                     | 与商品描述不符                       |