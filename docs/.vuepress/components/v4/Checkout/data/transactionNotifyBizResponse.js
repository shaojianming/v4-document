export default {
    data: [
        {
            "id": 1,
            "value": "amount",
            "type": "String(12)",
            "required": "M",
            "desc": "交易金额，精确位数和币种有关，请查询附录<a href='/pages/3c0bdf/' target='_blank'>交易币种</a>"
        },
        {
            "id":2,
            "value": "transactionTime",
            "type": "String(64)",
            "required": "M",
            "desc": "交易发起时间，时间戳"
        },
        {
            "id": 3,
            "value": "merchantTransactionId",
            "type": "String(64)",
            "required": "M",
            "desc": "网站交易流水号"
        },
        {
            "id": 4,
            "value": "transactionId",
            "type": "String",
            "required": "M",
            "desc": "PingPong 交易流水号"
        },
        {
            "id": 5,
            "value": "token",
            "type": "String",
            "required": "O",
            "desc": "持卡人绑定的Token"
        },
        {
            "id": 6,
            "value": "notifyType",
            "type": "String",
            "required": "M",
            "desc": "固定值：RECHARGE，表示支付类型"

        },
        {
            "id": 7,
            "value": "currency",
            "type": "String(3)",
            "required": "M",
            "desc": "交易币种，ISO 4217 三位币种，具体支持币种⻅附件<a href='/pages/3c0bdf/' target='_blank'>交易币种</a>"
        },
        {
            "id": 8,
            "value": "threeDSecure",
            "type": "String(32)",
            "desc": "3D标识：<ul>" +
                "<li><code>Y</code></li>" +
                "<li><code>N</code></li>",
            "required": "M"
        },
        {
            "id": 9,
            "value": "status",
            "type": "String(32)",
            "desc": "交易状态：<a href='/pages/59d103/' target='_blank'>状态幂等</a> " +
                "<li>SUCCESS-成功</li>" +
                "<li>FAILED-失败</li>" +
                "<li>AUTH_SUCCESS-预授权成功</li>", children: undefined,
            "required": "M"
        },
        {
            "id": 10,
            "value": "captureDelayHours",
            "type": "int",
            "required": "C",
            "desc": " <ul>" +
                "<li>0表示立即capture</li>" +
                "<li>-1表示手动capture，调用统一下单API成功之后还需要调用下<a href='/pages/b110ca/' target='_blank'>预授权确认</a> ,本地支付不支持</li>" +
                "</ul>"
        },
        {
            "id": 11,
            "value": "remark",
            "type": "String(255)",
            "required": "O",
            "desc": "商户扩展字段，可用于指定特定参数，会在响应体中原样返回"
        },
        {
            "id": 12,
            "value": "requestId",
            "type": "String(64)",
            "required": "M",
            "desc": "唯一请求号，全局唯一"
        },
        {
            "id": 23,
            "value": "exchangedAmount",
            "type": "String",
            "required": "O",
            "desc": "换汇金额"
        },
        {
            "id": 24,
            "value": "exchangedCurrency",
            "type": "String",
            "required": "O",
            "desc": "换汇币种"
        },
        {
            "id": 13,
            "value": "paymentMethod",
            "type": "Object",
            "required": "M",
            "desc": "要使用的付款方式的类型和所需的详细信息。",
            "children": [
                {
                    "id": 161,
                    "value": "type",
                    "type": "String(32)",
                    "required": "M",
                    "desc": "付款方式：" +
                        "<ul>" +
                        "<li>scheme 国际信用卡支付</li>" +
                        "<li>本地支付方式 可选值：<a href='/pages/bd336f/' target='_blank'>Non-Hosted支持的APM</a></li>" +
                        "</ul>"
                },
            ]
        },
        {
            "id": 14,
            "value": "token",
            "type": "String(64)",
            "required": "C",
            "desc": "快捷支付或者一键支付时候需要的token，成功绑卡之后会返回，详见<a href='/pages/5f7027/' target='_blank'>快捷支付</a>"
        },
        {
            "id": 15,
            "value": "issuerInfo",
            "type": "Object",
            "required": "O",
            "desc": "银行返回信息",
            "children": [
                {
                    "id": 1501,
                    "value": "issuerResultCode",
                    "type": "String",
                    "required": "O",
                    "desc": "银行返回编码"
                },
                {
                    "id": 1502,
                    "value": "issuerResultMsg",
                    "type": "String",
                    "required": "O",
                    "desc": "银行返回信息描述"
                },
            ]
        },
        {
            "id": 18,
            "value": "cardInfo",
            "type": "Object",
            "required": "O",
            "desc": "支付信用卡信息",
            "children": [
                {
                    "id": 181,
                    "value": "cardLevel",
                    "type": "String(64)",
                    "required": "M",
                    "desc": "卡交易·卡级别"
                },
                {
                    "id": 182,
                    "value": "cardType",
                    "type": "String",
                    "required": "M",
                    "desc": "卡交易·`卡类型,枚举值：" +
                        "<ul>" +
                        "<li>DEBIT</li>" +
                        "<li>CREDIT</li>" +
                        "<li>CHARGE</li>" +
                        "<li>CARD</li>" +
                        "</ul>"
                },
                {
                    "id": 183,
                    "value": "firstName",
                    "type": "String",
                    "required": "M",
                    "desc": "持卡人名称，字符类型，不含特殊符号"
                },
                {
                    "id": 184,
                    "value": "lastName",
                    "type": "String",
                    "required": "M",
                    "desc": "持卡人姓，字符类型，不含特殊符号"
                },
                {
                    "id": 185,
                    "value": "firstSixDigits",
                    "type": "String(12)",
                    "required": "M",
                    "desc": "卡号前6位"
                },
                {
                    "id": 186,
                    "value": "lastFourDigits",
                    "type": "String(12)",
                    "required": "M",
                    "desc": "卡号后4位"
                },
                {
                    "id": 187,
                    "value": "ipCountry",
                    "type": "String(4)",
                    "required": "M",
                    "desc": "用户交易国家"
                },
                {
                    "id": 188,
                    "value": "isoCountry",
                    "type": "String",
                    "required": "M",
                    "desc": "发卡行国家"
                },
                {
                    "id": 189,
                    "value": "issuringBank",
                    "type": "String",
                    "required": "M",
                    "desc": "发卡行"
                },
                {
                    "id": 190,
                    "value": "isoCountryA2",
                    "type": "String",
                    "required": "C",
                    "desc": "国家二字码，符合iso3166标准"
                },
                {
                    "id": 200,
                    "value": "paymentBrand",
                    "type": "String",
                    "required": "M",
                    "desc": "卡交易·卡品牌：VISA / Mastercard / American Express/ JCB / Discover"
                }
            ]
        },
        {
            "id": 19,
            "value": "threeDSInfo",
            "type": "Object",
            "required": "O",
            "desc": "3ds参数",
            "children": [
                {
                    "id": 202,
                    "value": "authenticationResult",
                    "type": "String",
                    "required": "O",
                    "desc": "3DS验证结果，枚举值如下:"+
                        "<ul>" +
                        "<li>-1:无效的 PARes (支付验证响应)</li>" +
                        "<li> 0: 验证成功。</li>" +
                        "<li> 1: 持卡人未参与，但身份验证尝试已记录</li>" +
                        "<li> 6: 发卡机构无法执行身份验证</li>" +
                        "<li> 9: 持卡人未完成身份验证</li>" +
                        "</ul>"
                },
                {
                    "id": 203,
                    "value": "liabilityShift",
                    "type": "String",
                    "required": "O",
                    "desc": "责任转移"
                },
                {
                    "id": 204,
                    "value": "eci",
                    "type": "String",
                    "required": "O",
                    "desc": "仅对 Visa、American Express、ICB、Diners Club 和Discover 的交易才会返回。当身份验证失败时，该字段为空。该字段包含以下值之一:" +
                        "<ul>"+
                            "<li>01:尝试身份验证 (Mastercard) 01:</li>"+
                            "<li>02:成功身份验证 (Mastercard)</li>"+
                            "<li>05:成功身份验证 (Visa、American Express、JCB、Diners Club 和 Discover)</li>"+
                            "<li>06: 尝试身份验证 (Visa、American Express、JCB、Diners Club 和 Discover)</li>"+
                        "</ul>"
                },
                {
                    "id": 205,
                    "value": "authentication3DSecure",
                    "type": "String",
                    "required": "O",
                    "desc": "threeDSServerTransactionId / directoryServerTransactionId 不为空"
                },
                {
                    "id": 206,
                    "value": "specificationVersion",
                    "type": "String",
                    "required": "O",
                    "desc": "3DS版本"
                },
                {
                    "id": 207,
                    "value": "cavv",
                    "type": "String",
                    "required": "O",
                    "desc": "cavv"
                },
            ]
        },
        {
            "id": 20,
            "value": "authenticationInfo",
            "type": "Object",
            "required": "O",
            "desc": "身份认证信息",
            "children": [
                {
                    "id": 207,
                    "value": "avsResult",
                    "type": "String",
                    "required": "O",
                    "desc": "枚举值如下："+
                        "<ul>"+
                            "<li>Unknown</li>"+
                            "<li>Address matches, but the postal code does not match.</li>"+
                            "<li>Neither postal code nor address match.</li>"+
                            "<li>Neither postal code nor address match.</li>"+
                            "<li>AVS unavailable.</li>"+
                            "<li>AVS not supported for this card type.</li>"+
                            "<li>Postal code matches, but the address does not match.</li>"+
                            "<li>Both postal code and address match.</li>"+
                            "<li>Address matches, postal code not checked.</li>"+
                            "<li>Postal code matches, address not checked.</li>"+
                            "<li>Neither postal code nor address were checked.</li>"+
                            "<li>Card member name and ZIP match</li>"+
                            "<li>Card member name and street address match</li>"+
                        "</ul>"

                },
                {
                    "id": 208,
                    "value": "cvvResult",
                    "type": "String",
                    "required": "O",
                    "desc": "cvv验证结果"
                },
                {
                    "id": 209,
                    "value": "threeDSecure",
                    "type": "String",
                    "required": "O",
                    "desc": "是否进行3DS验证，Y/N"
                },
            ]
        }
    ]
}