export default {
    data: [
        {
            "id": 1,
            "value": "pageSize",
            "type": "int",
            "required": "M",
            "desc": "当前单⻚条数"
        },
        {
            "id": 2,
            "value": "page",
            "type": "int",
            "required": "M",
            "desc": "当前⻚码"
        },
        {
            "id": 3,
            "value": "totalSize",
            "type": "int",
            "required": "M",
            "desc": "全部符合条件条数"
        },
        {
            "id": 4,
            "value": "totalPage",
            "type": "int",
            "required": "M",
            "desc": "全部符合条件条数对应⻚数"
        },
        {
            "id": 5,
            "value": "signType",
            "type": "string(32)",
            "required": "M",
            "desc": "支持 MD5、SHA256，具体⻅本文<a href='/pages/77ae52/' target='_blank'>签名规约</a>一栏"
        },
        {
            "id": 6,
            "value": "sign",
            "type": "string(128)",
            "required": "M",
            "desc": "此处加签内容仅为⻚码相关 4 个字段,"
        },
        {
            "id": 7,
            "value": "data",
            "type": "List",
            "required": "M",
            "desc": "返回结果集合",
            "children":[
                {
                    "id": 8,
                    "value": "accId",
                    "type": "string",
                    "required": "M",
                    "desc": "PingPong merchant store ID "
                },
                {
                    "id": 9,
                    "value": "transactionId",
                    "type": "string",
                    "required": "M",
                    "desc": "PingPong 交易流水号"
                },
                {
                    "id": 10,
                    "value": "merchantTransactionId",
                    "type": "string",
                    "required": "M",
                    "desc": "Merchant Website Transaction Number"
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
                    "value": "code",
                    "type": "string",
                    "required": "M",
                    "desc": "结果状态码"
                },
                {
                    "id": 13,
                    "value": "description",
                    "type": "string",
                    "required": "M",
                    "desc": "result description"
                },
                {
                    "id": 14,
                    "value": "paymentType",
                    "type": "string",
                    "required": "M",
                    "desc": "交易类型:SALE-直接付款,AUTH-预授权,REFUND-退款,CAPTURE-预授权确认,VOID-预授权取消,APPROVE-审核通过,REJECT-审核拒绝"
                },
                {
                    "id": 15,
                    "value": "currency",
                    "type": "string",
                    "required": "M",
                    "desc": "Transaction currency"
                },
                {
                    "id": 16,
                    "value": "amount",
                    "type": "BigDecimal",
                    "required": "M",
                    "desc": "交易金额"
                },
                {
                    "id": 17,
                    "value": "transactionTime",
                    "type": "string",
                    "required": "M",
                    "desc": "交易发起时间，yyyyMMddHHmmss"
                },
                {
                    "id": 18,
                    "value": "completeTime",
                    "type": "string",
                    "required": "M",
                    "desc": "交易处理完成时间，yyyyMMddHHmmss"
                },
                {
                    "id": 19,
                    "value": "status",
                    "type": "string",
                    "required": "M",
                    "desc": "SUCCESS-成功,FAILED-失败,PROCESSING-进行中,REVIEW-待审核"
                },
                {
                    "id": 20,
                    "value": "remark",
                    "type": "string",
                    "required": "C",
                    "desc": "商户扩展字段"
                }
            ]
        }
    ]
}