---
title: 文件上传
date: 2022-07-15 08:09:34
permalink: /pages/574ed0/
---

## 请求地址

<br/>
<div>
<code-group>
  <code-block title="沙箱环境" active>

  ```bash
  https://sandbox-acquirer-merchant.pingpongx.com/merchant/acquirer/kyb/upload
  ```
  </code-block>
  <code-block title="生产环境">

  ```bash
  https://acquirer-merchant.pingpongx.com/dispute/merchant/acquirer/kyb/upload
  ```
  </code-block>
</code-group>
</div>



## 请求参数


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


|属性| 类型            |是否必填|描述|
|:----|:--------------|:----|:----|
|institutionId| string(64)    |M|机构一标识|
|file| MultipartFile |M|文件|
| version       | string(10)    | M    | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                                                                                         |

## 响应参数


<br/>
<el-tag type="danger" effect="dark">Parameter Required Attribute Description: Required (M), Optional (O), Conditionally Required (C).</el-tag>
<br/>
<br/>


|属性|类型|是否必填|描述|
|:----|:----|:----|:----|
|fileName|string(128)|M|文件名称|
|serviceURL|string(64)|M|文件地址前缀|


```json
{
    "code": 200,
    "data": {
        "fileName": "3efcb0f9139c4528bcb81529facb2593.jpeg",
        "serviceURL": "https://dev-acquirer-merchant.pingpongx.com/merchant/acquirer/file/selectFile/"
    },
    "msg": "SUCCESS"
}
```