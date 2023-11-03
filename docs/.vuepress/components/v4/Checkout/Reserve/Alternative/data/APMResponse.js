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
            "id": 24,
            "value": "paymentQrCode",
            "type": "string(512)",
            "required": "C",
            "desc": "二维码（非图片地址）"
        },
        {
            "id": 25,
            "value": "paymentRedirectUrl",
            "type": "string(512)",
            "required": "C",
            "desc": "支付跳转地址"
        },
    ]
}