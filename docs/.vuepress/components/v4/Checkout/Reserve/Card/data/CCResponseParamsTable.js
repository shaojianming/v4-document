export default {
    data:[
        {
            "id": 1,
            "value": "transactionId",
            "type": "string(64)",
            "required": "M",
            "desc": "PingPong 交易流水号"
        },
        {
            "id": 2,
            "value": "merchantTransactionId",
            "type": "string(64)",
            "required": "M",
            "desc": "网站交易流水号"
        },
        {
            "id": 3,
            "value": "amount",
            "type": "string(64)",
            "required": "M",
            "desc": "交易金额"
        },
        {
            "id": 4,
            "value": "currency",
            "type": "string(3)",
            "required": "M",
            "desc": "Transaction currency，ISO 4217 三位币种，具体支持币种⻅附件<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a>"
        },
        {
            "id": 11,
            "value": "relateTransactionId",
            "type": "string",
            "required": "M",
            "desc": "当前交易关联的 PingPong 交易流水号"
        },
        {
            "id": 12,
            "value": "status",
            "type": "string(32)",
            "required": "M",
            "desc": "交易状态：<ul><li>SUCCESS-成功</li><li>FAILED-失败</li><li>PROCESSING-进行中</li></ul>"
        },
        {
            "id": 6,
            "value": "paymentType",
            "type": "string(64)",
            "required": "M",
            "desc": "交易类型: DEBIT-直接付款 AUTH-预授权"
        },
        {
            "id": 15,
            "value": "acsUrl",
            "type": "string(512)",
            "required": "C",
            "desc": "发卡行 3DS 验证⻚面 URL，3DS 交易场景下特有，由 于 3DS 交易的时效性，只在同步响应中返回"
        },
        {
            "id": 16,
            "value": "termUrl",
            "type": "string(512)",
            "required": "C",
            "desc": "3DS 验证后重定向的目标 URL，3DS 交易场景下特 有，由于 3DS 交易的时效性，只在同步响应中返回"
        },
        {
            "id": 17,
            "value": "paReq",
            "type": "string(255)",
            "required": "C",
            "desc": "3DS 验证参数，3DS 交易场景下特有，由于 3DS 交易 的时效性，只在同步响应中返回"
        },
        {
            "id": 18,
            "value": "requestMethod",
            "type": "string(32)",
            "required": "C",
            "desc": "请求发卡行 3DS 验证⻚面的请求方式,POST 或 GET, 默认为 POST"
        },
        {
            "id": 19,
            "value": "md",
            "type": "string(128)",
            "required": "C",
            "desc": "自定义参数，3DS 交易场景下特有，由于 3DS 交易的 时效性，只在同步响应中返回"
        },
        {
            "id": 20,
            "value": "connector",
            "type": "string(128)",
            "required": "C",
            "desc": "连接器类型，3DS 交易场景下特有，由于 3DS 交易的 时效性，只在同步响应中返回"
        },
        {
            "id": 24,
            "value": "token",
            "type": "string(64)",
            "required": "C",
            "desc": "快捷支付或者一键支付时候需要的token，成功绑卡之后会返回，详见<a href='/pages/ff80a7/' target='_blank'>快捷支付</a>"
        },
        {
            "id": 25,
            "value": "payResultUrl",
            "type": "string(255)",
            "required": "C",
            "desc": "商户自定义接收重定向的结果 URL;如 3DS验证，银行在线转账或虚拟钱包之类支付方式时，最后需要重定向到商户指定的⻚面地址"
        },
        {
            "id": 26,
            "value": "transactionTime",
            "type": "string(64)",
            "required": "C",
            "desc": "交易发起时间，时间戳"
        },

    ]
}