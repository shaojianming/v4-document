---
title: KYB-API签名
date: 2022-07-15 09:19:37
permalink: /pages/b6fb71/
---

# KYB-API签名

## 签名类型

> 推荐使用SHA256签名方式，安全度高于MD5

|签名类型|描述|
|:-----|:----|
|MD5|表示选择 MD5 算法，商户使用 Salt 对报文进行摘要签名和验签|
|SHA256|表示选择 SHA256算法，商户使用 Salt 对报文进行摘要签名和验签|





## 请求签名

商户需要使用自身的私钥对消息体中关键数据的组合进行签名。没有携带签名或者签名验证不通过的请求，都不会被执行，并返回错误。

以下为PingPong KYB API 与调用方约定的请求加签参数列表
<br />

| 参数名           | 描述   |
|:--------------|:-----|
| institutionId | 机构ID |
| subClientId   | 子商户号 |
| bizType       | 业务类型 |
| bizId         | 业务id |
| signType      | 签名类型 |

KYB-API采用部分签名的方式，若请求参数在以上列表中，参与签名,否则不参与签名。

## 异步通知签名

异步通知签名只支持MD5的加签形式，加签参数同上述列表。


##  签名串组装

字典序：按首字母进行排序;

queryString:用'=' 进行参数名和参数值(trim 后的值)的拼接，用'&'进行多 个参数之间的拼接，即 key1=val1&key2=val2&key3=val3

+ 对参数名按字典序排序后,按照queryString方式组装。

+ 签名秘钥（salt）放入签名串的位置为: 签名串的开头 ， 即{salt}key1=val2&key2=val2&key3=val3



<div>
<code-group>

<code-block title="JAVA">

```Java
import com.google.common.collect.Maps;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;

import java.security.MessageDigest;
import java.util.Map;
import java.util.TreeMap;

@Slf4j
public class Sign {

    /**
     * 部分参数签名，参与签名的字段
     */
    private static final String[] includeFields = {"institutionId", "subClientId", "bizType", "bizId", "signType"};

    /**
     * 签名秘钥
     */
    private String salt = null;


    public Sign(String salt) {
        this.salt = salt;
    }

    /**
     * 执行签名
     *
     * @param signType 签名类型
     * @param signMap  待签名串
     */
    public String signature(String signType, TreeMap<String, Object> signMap) {

        String  signContent = getPartSignParams(signMap);
        log.debug("signContent:{}", signContent);

        if (StringUtils.equalsIgnoreCase("MD5",signType)) {
            return md5Sign(salt, signContent);
        } else if (StringUtils.equalsIgnoreCase("SHA256",signType)) {
            return sha256(signContent, salt);
        }
        return null;
    }


    /**
     * 获取待签名串(部分字段签名)
     */
    private static String getPartSignParams(TreeMap<String, Object> signMap) {
        //添加需要签名的字段
        TreeMap<String, Object> resultMap = Maps.newTreeMap();
        for (String param : includeFields) {
            String value = (String) signMap.get(param);
            if (StringUtils.isNotBlank(value)) {
                resultMap.put(param, value);
            }
        }
        return getSignParams(resultMap);
    }

    /**
     * 获取待签名串
     */
    private static String getSignParams(TreeMap<String, Object> resultMap) {
        StringBuilder stringBuilder = new StringBuilder();
        int paramNum = 0;
        for (Map.Entry<String, Object> signEntry : resultMap.entrySet()) {
            paramNum++;
            stringBuilder.append(signEntry.getKey());
            stringBuilder.append("=");
            stringBuilder.append(signEntry.getValue());
            if (paramNum < resultMap.size()) {
                stringBuilder.append("&");
            }
        }
        log.debug("content:【{}】", stringBuilder);
        return stringBuilder.toString();
    }


    private static String md5Sign(String salt, String content) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(salt.getBytes());
            md.update(content.getBytes());
            byte[] digest = md.digest();
            return byteToHexString(digest);
        } catch (Exception e) {
            log.error("md5签名失败", e);
        }
        return null;
    }


    private static String sha256(String content, String salt) {
        try {
            if (StringUtils.isBlank(salt)) {
                throw new RuntimeException("salt is null");
            }
            String contentStr = salt.concat(content);
            return DigestUtils.sha256Hex(contentStr.getBytes("UTF-8")).toUpperCase();
        } catch (Exception e) {
            log.error("sha256", e);
        }

        return null;
    }


    public static String byteToHexString(byte[] b) {
        StringBuilder hexString = new StringBuilder();
        for (int i = 0; i < b.length; i++) {
            String hex = Integer.toHexString(b[i] & 0xFF);
            if (hex.length() == 1) {
                hex = '0' + hex;
            }
            hexString.append(hex.toUpperCase());
        }
        return hexString.toString();
    }
}
    
```

</code-block>

</code-group>
</div> 



