---
title: Signature Protocol
date: 2021-11-19 12:29:35
permalink: /pages/77ae52/
---


# Signature Protocol

PingPongCheckout API v4 ensures the authenticity and integrity of the request by verifying the signature.


<br />
<div>
   <Common-Warring>
      <p>In v4 of the PingPongCheckout API, it is required that all parameters participate in the signature. If you have previously integrated with v2 or 3 and wish to upgrade to v4, you will need to follow the new signature rules for integration.</p>
   </Common-Warring>
</div>
<br />

<el-divider></el-divider>

## Signature Type

| Signature type | Description                                                                                                               |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------|
| MD5            | Selecting the MD5 algorithm, merchants utilize a Salt value to perform digest signing and verification on the message.    |
| SHA256         | Selecting the SHA256 algorithm, merchants utilize a Salt value to perform digest signing and verification on the message. |


## Request Signature
The following is the list of request signature parameters agreed upon between PingPongCheckout API v4 and the calling party. Note that the content included in "bizContent" may vary for different interfaces：

| Parameter field | Description                                                                                                                                                      |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accId           | PingPong merchant store ID                                                                                                                                       |
| clientId        | PingPong merchant ID                                                                                                                                             |
| signType        | signing algorithms                                                                                                                                               |
| version         | Currently fixed at 1.0, may be adjusted with changes to theapiin the future                                                                              |
| bizContent      | The collection of request parameters, excluding common request parameters, must be passed in this parameter. There is no maximum length limit for this parameter |

## Response Signature
For requests where the signature verification is successful, PingPong Payment API v4 will sign the response. To ensure security, it is recommended to perform signature verification on the response.

<div>
   <Common-Warring>
      <p>The "sign" field is excluded from the signature calculation.</p>
   </Common-Warring>
</div>
<br />

## Asynchronous Notification Signature
The signature scope and method for asynchronous notifications are the same as request signatures.

## Assembling the String for Signature Calculation

1. Retrieve all the contents of the POST request, excluding the "sign" field.
2. Sort the parameters in ascending order based on their key's ASCII value (alphabetically).
3. Combine the sorted parameters and their corresponding values in the format "parameter=value". Connect these parameters using the "&" character. Place the signature key (salt) at the beginning of the string to be signed. Thus, the signContent = {salt}key1=val2&key2=val2&key3=val3. This is the complete string that needs to be signed.

## Calculate Signature Value

> SHA256 signature method is recommended as it offers higher security compared to MD5.

The signing process involves generating a signature value based on the data in the request body and adding it to the request body. The signature value is calculated using a salt, request parameters, and the chosen signing method (MD5 or SHA256). The signature value will be used to verify the origin and integrity of the request.

## Signature Utility Class

<div>
<code-group>

<code-block title="JAVA">

```Java
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;

import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * This class is used to sign the request content, ensuring the security of the request.
 */
public class PingPongCheckoutClient {

    private final String salt;  // Salt value, used to increase the complexity of the signature.
    private final SignAlgorithm signAlgorithm; // Signature Algorithm Enumeration

    /**
     * Constructor, used to initialize the salt value and signature algorithm.
     *
     * @param salt          
     * @param signAlgorithm 
     */
    public PingPongCheckoutClient(String salt, SignAlgorithm signAlgorithm) {
        this.salt = salt;
        this.signAlgorithm = signAlgorithm;
    }

    /**
     * Signs the request content and adds the signature result to the request parameters.
     *
     * @param requestBody 
     * @return 
     */
    public JSONObject signRequest(JSONObject requestBody) {
        String sign = getSign(salt, signAlgorithm, requestBody);  // Get the signature of the request content.
        requestBody.put("sign", sign);  // Add the signature result to the request parameters.
        return requestBody;
    }

    /**
     * Get the signature result of the request content.
     *
     * @param salt          
     * @param signAlgorithm 
     * @param requestBody   
     * @return 
     */
    public static String getSign(String salt, SignAlgorithm signAlgorithm, JSONObject requestBody) {
        StringBuilder stringBuilder = new StringBuilder();
        List<String> keys = new ArrayList<>(requestBody.keySet());
        Collections.sort(keys);  // Sort the keys of the request parameters in ascending order.

        for (String key : keys) {
            Object valueObject = requestBody.get(key);
            // Remove empty values from the request parameters.
            if (valueObject == null) {
                continue;
            }
            // Remove non-string values from the request parameters.
            if (!(valueObject instanceof String)) {
                throw new IllegalArgumentException("request body illegal");
            }

            String value = (String) valueObject;
            if (StringUtils.isNotBlank(value)) {
                stringBuilder.append(key).append("=").append(value).append("&");  // Concatenate the keys and values of the request parameters into a string.
            }
        }
        String needSignStr = stringBuilder.toString();
        if (needSignStr.endsWith("&")) {
            needSignStr = needSignStr.substring(0, needSignStr.length() - 1);  // Remove the last '&' symbol from the concatenated string.
        }

        String sign = null;
        if (signAlgorithm == SignAlgorithm.MD5) {
            sign = md5Sign(salt, needSignStr);  // Call the md5Sign method to encrypt the string using MD5.
        } else if (signAlgorithm == SignAlgorithm.SHA256) {
            sign = sha256(salt, needSignStr);  // Call the sha256 method to encrypt the string using SHA256.
        } else {
            throw new IllegalArgumentException("Signature algorithm not supported");  // If the signature algorithm is not supported, an exception will be thrown.
        }

        return sign;  // Return the signature result.
    }

    /**
     * Sign the request content using MD5.
     *
     * @param salt    
     * @param content 
     * @return 
     */
    public static String md5Sign(String salt, String content) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");  // Create an instance of MD5.
            md.update(salt.getBytes());  // Include the salt value in the encryption process.
            md.update(content.getBytes());  // Include the request content in the encryption process.
            byte[] digest = md.digest();  // Get the byte array.
            return byteToHexString(digest);  // Convert the byte array to a hexadecimal string.
        } catch (Exception e) {
            throw new RuntimeException("The MD5 signature failed.", e);  // If an error occurs during the encryption process, an exception will be thrown.
        }
    }

    /**
     * Convert the byte array to a hexadecimal string.
     *
     * @param bytes 
     * @return 
     */
    public static String byteToHexString(byte[] bytes) {
        StringBuilder hexString = new StringBuilder();
        for (int i = 0; i < bytes.length; i++) {
            String hex = Integer.toHexString(bytes[i] & 0xFF);
            if (hex.length() == 1) {
                hex = '0' + hex;
            }
            hexString.append(hex.toUpperCase()); // Concatenate the converted hexadecimal strings together.
        }
        return hexString.toString();  // Return the converted hexadecimal string.
    }

    /**
     * Sign the request content using SHA256.
     *
     * @param salt    
     * @param content 
     * @return 
     */
    public static String sha256(String salt, String content) {
        try {
            String contentStr = salt.concat(content);  // Concatenate the salt value and request content into a single string.
            return DigestUtils.sha256Hex(contentStr.getBytes("UTF-8")).toUpperCase();  // Call the DigestUtils.sha256Hex method to encrypt the string using SHA256, and convert the encrypted result into an uppercase hexadecimal string.
        } catch (Exception e) {
            throw new RuntimeException("sha256签名失败", e);  // If an error occurs during the encryption process, an exception will be thrown.
        }
    }

    /**
     * Signature Algorithm Enumeration Class.
     */
    public enum SignAlgorithm {
        MD5,
        SHA256
    }
}
    
```

</code-block>
<code-block title="PHP">

```PHP
class PingPongCheckoutClient {
  private $salt;
  private $signAlgorithm;

  const SIGN_ALGORITHM_MD5 = 'MD5';
  const SIGN_ALGORITHM_SHA256 = 'SHA256';

  function __construct($salt, $signAlgorithm) {
    $this->salt = $salt;
    $this->signAlgorithm = $signAlgorithm;
  }

  private static function md5Sign($salt, $content) {
    return md5($content . $salt);
  }

  private static function sha256($salt, $content) {
    return hash('sha256', $content . $salt);
  }

  private static function byteToHexString($bytes) {
    $hexString = '';
    foreach ($bytes as $byte) {
      $hexString .= sprintf("%02x", $byte);
    }
    return $hexString;
  }

  private static function getSign($salt, $signAlgorithm, $requestBody) {
    $sortedKeys = array_keys($requestBody);
    sort($sortedKeys);
    $content = '';
    foreach ($sortedKeys as $key) {
      $value = $requestBody[$key];
      if (is_array($value)) {
        $value = json_encode($value);
      }
      $content .= $key . '=' . $value . '&';
    }
    $content = rtrim($content, '&');
    if ($signAlgorithm === self::SIGN_ALGORITHM_MD5) {
      return self::md5Sign($salt, $content);
    } else {
      return self::byteToHexString(hash_hmac('sha256', $content, $salt, true));
    }
  }

  public function signRequest($requestBody) {
    $signature = self::getSign($this->salt, $this->signAlgorithm, $requestBody);
    $requestBody['signature'] = $signature;
    return $requestBody;
  }
}

```
</code-block>

</code-group>
</div> 


<script>
    import CodeBlock from "../../../../../.vuepress/theme/global-components/CodeBlock";
    export default {
        components: {CodeBlock}
    }
</script>