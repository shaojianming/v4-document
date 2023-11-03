---
title: Only Api
date: 2023-05-06 11:52:59
permalink: /pages/c25fd9/
---


## Necessary parameter collection

Collect the following parameters on the browser

| Attribute         | Type   | Description                                                                                                                                                                              |
|-------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| language          | String | The value of the "navigator.language" in the shopper's browser, as defined in IETF BCP 47                                                                                                |
| screenWidth       | int    | The screen width of the cardholder's terminal, measured in pixels                                                                                                                        |
| javaEnabled       | bool   | The ability of the cardholder's terminal to execute Java                                                                                                                                 |
| javaScriptEnabled | bool   | The indication of whether the shopper's browser can execute JavaScript,If the field doesn't exist, it is assumed to have a default value of true                                         |
| acceptHeader      | String | An example of HTTP response header information can be as follows：text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, image/apng, *;q=0.8                                |
| colorDepth        | String |                                                                                                                                                                                          |
| screenHeight      | int    | The screen height of the cardholder's terminal, measured in pixels                                                                                                                       |
| jetLag            | int    | The time difference between UTC time and the cardholder's browser local time, measured in minutes                                                                                        |
| userAgent         | String | An example of browser user agent information can be as follows：Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36 |


## Fill for browserInfo

Request PingPongCheckout <a href="/pages/a2c224/"> Accept a Payment </a>. Submit the above parameters in the parameter 'browserInfo'.

Example：

```json
{
    "clientId":"2090020315464510103001",
    "accId":"2090020315464510103001",
    "amount":3,
    "version":"1.0",
    "currency":"USD",
    "merchantTransactionId":"{{merchantTransID}}",
    "paymentType":"SALE",
    "shopperResultUrl":"https://aa.com",
    "shopperCancelUrl":"https://aa.com",
    "signType":"MD5",
    "threeDSecure":"N",
    "sign":"{{sign}}",
    "requestId":"TEST12345-122452",
    "acquirerType":"PAY",
    "notificationUrl":"https://test-acquirerpay.pingpongx.com/qa/notify",
    "tradeCountry":"TH",
    "merchantSource":"shopLine",
    "browserInfo":{
        "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "acceptHeader":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "language":"nl-NL",
        "colorDepth":24,
        "screenHeight":723,
        "screenWidth":1536,
        "timeZoneOffset":0,
        "javaEnabled":true
    },
    "payMethodInfo":{
        "card":{
            "cvv":"103",
            "expireMonth":"12",
            "expireYear":"2024",
            "holderFirstName":"James",
            "holderLastName":"LeBron",
            "number":"5200000000001096"
        }
    },
    "billing":{
        "city":"Birmingham",
        "country":"US",
        "email":"3ds@pingpongx.com",
        "firstName":"James",
        "lastName":"LeBron",
        "phone":"18301770495",
        "postcode":"35222",
        "state":"AL",
        "street":"1986 Broad Street"
    },
    "shipping":{
        "city":"Miami",
        "country":"US",
        "email":"t_email",
        "firstName":"Jamesbb",
        "lastName":"LeBronbb",
        "phone":"3055787342",
        "postcode":"33131",
        "state":"FL",
        "street":"701 Brickell Avenue, Suite 2700",
        "lastModifierStreetTime":"20191225162010",
        "lastModifierPhoneTime":"20191225162010"
    },
    "customer":{
        "customerId":"20191201001",
        "email":"3ds@pingpongx.com",
        "firstName":"James",
        "identificationId":"",
        "identificationType":"ID",
        "lastName":"LeBron",
        "loginIp":"222.126.52.24",
        "loginTime":"201912010032",
        "orderCountry":"US",
        "orderIp":"222.126.52.23",
        "orderTime":"20191201001",
        "payCountry":"US",
        "payIp":"222.126.52.25",
        "phone":"18301770495",
        "preferentialOrder":"Y",
        "registerCountry":"US",
        "registerIp":"222.126.52.26",
        "registerRange":"3",
        "registerTerminal":"PC",
        "registerTime":"20191201122000"
    }
}


```


## 3DS Required

-  When `threeDUnionParams.threeDContinue` is set to `true`，it need to trigger 3D verification.
-  When `threeDUnionParams.threeDContinue` is set to `false`,it will be redirected to the merchant's payment result page `shopperResultUrl`.

Response Example：

```json
{
    "accId": "2090020315464510103001",
    "amount": "3",
    "clientId": "2090020315464510103",
    "currency": "USD",
    "language": "en",
    "merchantTransactionId": "cj-test20230328141733",
    "notificationUrl": "https://test-acquirerpay.pingpongx.com/qa/notify",
    "paymentType": "DEBIT",
    "relateTransactionId": "PS23032814173445637",
    "shopperResultUrl": "https://aa.com",
    "sign": "934817101344F5803B437086B886D7EE",
    "signType": "MD5",
    "status": "PROCESSING",
    "threeDContinue": "true",
    "threeDUnionParams": {
        "threeDRedirectUrl": "https://dev-acquirer-static.pingpongx.com/payment/threeDs.html?code=eyJhY3NVcmwiOiJodHRwczovL2NlbnRpbmVsYXBpc3RhZy5jYXJkaW5hbGNvbW1lcmNlLmNvbS9WMi9DcnVpc2UvU3RlcFVwIiwiYXV0aEFjY2Vzc1Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnFkR2tpT2lJMk16WXpPREZqWkMwNU1tWXhMVFJrT0dRdFlXUmpNUzAxWTJGaVpHUXpOakl4TW1VaUxDSnBZWFFpT2pFMk56azVPRFF5TlRjc0ltbHpjeUk2SWpWa1pEZ3pZbVl3TUdVME1qTmtNVFE1T0dSalltRmpZU0lzSW1WNGNDSTZNVFkzT1RrNE56ZzFOeXdpVDNKblZXNXBkRWxrSWpvaU5qSXlPREZoTXpSaE1HTXhaakF6WVRFME5qbGxOV0V3SWl3aVVHRjViRzloWkNJNmV5SkJRMU5WY213aU9pSm9kSFJ3Y3pvdkwyMWxjbU5vWVc1MFlXTnpjM1JoWnk1allYSmthVzVoYkdOdmJXMWxjbU5sTG1OdmJTOU5aWEpqYUdGdWRFRkRVMWRsWWk5d1lYSmxjUzVxYzNBX2RtRmhQV0ltWjI5c1pEMUJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVFaUxDSlFZWGxzYjJGa0lqb2laVTV3VmxWemRIbG5ha0ZWTTJWamNrZExaSEpGWjJvMGJXMTBiV0pQTW05RE5VZENTMnhPTTBaRVQwTjNPSE5CVm1aMk1WUmpRa2gxTjNadVVHczNkVTlVWm5kRlVYWlBXbm8yVUVkelJWcHlTR2hXYUZGbGRVcG1kRXBpSzJWdWRUUXpPWFZZUjI4ME9EQllOaTlqT0ZCd1NXVkJNMlp4T0ZKUFJHSjVObkZ3VFdsYWIxSlFaRUpJZVVoVFJrdEpTMEUzZW0xclJWbHVWalpZUkdoMVRrTkxSVlU0UVRCcGVVeG9XWHBvTjNCRWFVaEpkelIzZWs0NGExQmljRVZtZEVoc1lXWkpWM0ExYUdSd1ZUQjJaVU51UW1KU2VFRldWRlkyVEVzMlQxZENabWRQUlVSUmFWcFlSbVJzT1ZWWk5DOVFOWEpLWlZOeFNsSkZSbm93Y1UxMmQxUkJNVmxrUTFCQ2VsQmlaRkpWVTFaV1dEVkpPVU14UzI1RGRFdE9SVmQ1TXpaNFYzaG1XUzlGY21obVdWSllhV05VWjBOeVJHZFVOM05QWWsxS1ExbHNNVUo0Y1hCRU9ESkNiVTAyUVU1NmJVVlpVMXBYYjJVNVZVb3dVVXRpWkVSRFJYSXhlbkpTUkZaR1dDdEtjVk5uVW1kcFpWSXhZekowUjFSMFoxSkVkMmw0VkVGYVdTc3dPWGhHVEVKakt6a3plR0pMTlV0cFZ5OTJXSFIzV1dkVFVUZHVZelJ1V1RoclpHRlpiSFJJVGtvMk1WQlhUVE5uTW5jemVEZGtkM2tyZG1OT1ptZEhkRGh4TWt3aUxDSlVjbUZ1YzJGamRHbHZia2xrSWpvaVdsTnNXbFUxV1ZWT00wNVNSMGhQUlc1b2FqQWlmU3dpVDJKcVpXTjBhV1o1VUdGNWJHOWhaQ0k2ZEhKMVpTd2lVbVYwZFhKdVZYSnNJam9pYUhSMGNITTZMeTlrWlhZdFlXTnhkV2x5WlhJdGNHRjViV1Z1ZEM1d2FXNW5jRzl1WjNndVkyOXRMM1JvY21WbFJGTXZRM2xpWlhKVGIzVnlZMlV2Y21Wa2FYSmxZM1F2T0ZrdFVUWnpibWQxVmpkS1UxbHFNbkJrUW1ac05ubzJSMDAxVVhWWVJFNW1kVVZqWm1adlRHZFFPREJKTkdOa1lrZDVlbmxwVFVSUGIzSm1XR1l6V2tFeE1sOUhNMUo2Ymw5dGQwSllPSGxxY0U1T09FaEdaMlZXV1ZWWmNteGFaSGhVTW5oWlQwaFVTR3hPUVRZelVXUkNZM1poVjBSQlEyVkRVWEpwVURSYWRWQlZlR0ZmUjNsbU56TTNSSEJhZVROM1ozWjNQVDBpZlEuazcxcVhHbW0tTTN1ajVvQ1p6d180U3I5dkFTZ0ZGZTlzenNvTzlHcVJjSSIsImNoYW5uZWwiOiJDWUJTIn0=",
        "threeDResult": "{\"ACSUrl\":\"https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp\",\"authAccessToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MzYzODFjZC05MmYxLTRkOGQtYWRjMS01Y2FiZGQzNjIxMmUiLCJpYXQiOjE2Nzk5ODQyNTcsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTY3OTk4Nzg1NywiT3JnVW5pdElkIjoiNjIyODFhMzRhMGMxZjAzYTE0NjllNWEwIiwiUGF5bG9hZCI6eyJBQ1NVcmwiOiJodHRwczovL21lcmNoYW50YWNzc3RhZy5jYXJkaW5hbGNvbW1lcmNlLmNvbS9NZXJjaGFudEFDU1dlYi9wYXJlcS5qc3A_dmFhPWImZ29sZD1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEiLCJQYXlsb2FkIjoiZU5wVlVzdHlnakFVM2VjckdLZHJFZ2o0bW10bWJPMm9DNUdCS2xOM0ZET0N3OHNBVmZ2MVRjQkh1N3ZuUGs3dU9UZndFUXZPWno2UEdzRVpySGhWaFFldUpmdEpiK2VudTQzOXVYR280ODBYNi9jOFBwSWVBM2ZxOFJPRGJ5NnFwTWlab1JQZEJIeUhTRktJS0E3em1rRVluVjZYRGh1TkNLRVU4QTBpeUxoWXpoN3BEaUhJdzR3ek44a1BicEVmdEhsYWZJV3A1aGRwVTB2ZUNuQmJSeEFWVFY2TEs2T1dCZmdPRURRaVpYRmRsOVVZNC9QNXJKZVNxSlJFRnowcU12d1RBMVlkQ1BCelBiZFJVU1ZWWDVJOUMxS25DdEtORVd5MzZ4V3hmWS9FcmhmWVJYaWNUZ0NyRGdUN3NPYk1KQ1lsMUJ4cXBEODJCbU02QU56bUVZU1pXb2U5VUowUUtiZERDRXIxenJSRFZGWCtKcVNnUmdpZVIxYzJ0R1R0Z1JEd2l4VEFaWSswOXhGTEJjKzkzeGJLNUtpVy92WHR3WWdTUTduYzRuWThrZGFZbHRITko2MVBXTTNnMnczeDdkd3krdmNOZmdHdDhxMkwiLCJUcmFuc2FjdGlvbklkIjoiWlNsWlU1WVVOM05SR0hPRW5oajAifSwiT2JqZWN0aWZ5UGF5bG9hZCI6dHJ1ZSwiUmV0dXJuVXJsIjoiaHR0cHM6Ly9kZXYtYWNxdWlyZXItcGF5bWVudC5waW5ncG9uZ3guY29tL3RocmVlRFMvQ3liZXJTb3VyY2UvcmVkaXJlY3QvOFktUTZzbmd1VjdKU1lqMnBkQmZsNno2R001UXVYRE5mdUVjZmZvTGdQODBJNGNkYkd5enlpTURPb3JmWGYzWkExMl9HM1J6bl9td0JYOHlqcE5OOEhGZ2VWWVVZcmxaZHhUMnhZT0hUSGxOQTYzUWRCY3ZhV0RBQ2VDUXJpUDRadVBVeGFfR3lmNzM3RHBaeTN3Z3Z3PT0ifQ.k71qXGmm-M3uj5oCZzw_4Sr9vASgFFe9szsoO9GqRcI\",\"authenticationTransactionId\":\"ZSlZU5YUN3NRGHOEnhj0\",\"cardEnrolled\":\"Y\",\"channelName\":\"CyberSource\",\"threeDRequestId\":\"cj-test20230328141733\",\"version\":\"1.0.2\"}"
    },
    "transactionId": "PS23032814173445637",
    "transactionTime": "1679984255000"
}
```

## 3DS Challenge Page

From <a href="/pages/a2c224/"> Accept a Payment </a>Obtain the `threeDUnionParams.threeDRedirectUrl` parameter from the response message of the interface, jump through the GET method, and then the intermediate page provided by PingPongCheckout will automatically redirect to the 3DS challenge page.

 
