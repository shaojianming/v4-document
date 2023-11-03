export default {
    data: [
        {
            "id": 11,
            "value": "payType",
            "type": "string(32)",
            "required": "M",
            "desc": "支付工具类型：" +
                "<ul>" +
                "<li>CREDIT-信用卡支付</li>" +
                "</ul>"
        },
        {
            "id": 23,
            "value": "threeDSecure",
            "type": "string(1)",
            "required": "O",
            "desc": "是否指定当前交易强制走 3DS 交易 (Y/N)\n" +
                "默认为“N”即不主动走 3DS 交易\n" +
                "注意:商户需要配置自主3DS策略，该参数才生效"
        },
        {
            "id": 191,
            "value": "jsGeneratedData",
            "type": "string(256)",
            "required": "C",
            "desc": "通过嵌入 pingpong 提供的前端 js， 获取浏览器相关信息的 json 字符\n" +
                "                            串，传到这个参数中(使用⻛控插\n" +
                "                            件对接的商户使用)"
        },
        {
            "id": 193,
            "value": "cardInfo",
            "type": "Object",
            "required": "M",
            "desc": "持卡人信息",
            "children": [
                {
                    "id": 17,
                    "value": "number",
                    "type": "string(4)",
                    "required": "M",
                    "desc": "国际信用卡卡号"
                },
                {
                    "id": 21,
                    "value": "holderFirstName",
                    "type": "string(4)",
                    "required": "M",
                    "desc": "持卡人名，字符类型，不含特殊符号"
                },
                {
                    "id": 22,
                    "value": "holderLastName",
                    "type": "string(4)",
                    "required": "M",
                    "desc": "持卡人姓，字符类型，不含特殊符号"
                },
                {
                    "id": 18,
                    "value": "expireMonth",
                    "type": "string(2)",
                    "required": "M",
                    "desc": "有效期-月，2位数字"
                },
                {
                    "id": 19,
                    "value": "expireYear",
                    "type": "string(4)",
                    "required": "M",
                    "desc": "有效期-年，4位数字"
                },
                {
                    "id": 20,
                    "value": "cvv",
                    "type": "string(4)",
                    "required": "M",
                    "desc": "信用卡CVV，Visa/MasterCard/JCB/Discover/Diners club的cvv字符长度均为三位，American Express的cvv字符长度为四位"
                }
            ]
        }

    ]
}



