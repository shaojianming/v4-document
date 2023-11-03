export default {
    data: [
        {
            "id": 1,
            "value": "accId",
            "type": "String(64)",
            "required": "M",
            "desc": "PingPong merchant store ID "
        },
        {
            "id": 2,
            "value": "data",
            "type": "object",
            "required": "M",
            "desc": "返回数据结果集",
            "children": [
                {
                    "id": 2100,
                    "value": "detailList",
                    "type": "object",
                    "required": "M",
                    "desc": "返回数据结果集",
                    "children": [
                        {
                            "id": 2101,
                            "value": "disputePspReference",
                            "type": "string",
                            "desc": "拒付单号",
                            "required": "M"
                        },
                        {
                            "id": 2102,
                            "value": "chargebackSchemeCode",
                            "type": "string",
                            "desc": "卡组织",
                            "required": "O"
                        },
                        {
                            "id": 2103,
                            "value": "chargebackReasonCode",
                            "type": "string",
                            "desc": "拒付代码",
                            "required": "O"
                        },
                        {
                            "id": 2104,
                            "value": "defensePeriodEndsAt",
                            "type": "datetime",
                            "desc": "处理截止时间",
                            "required": "O"
                        },
                        {
                            "id": 2105,
                            "value": "defendable",
                            "type": "boolean",
                            "desc": "是否可抗辩",
                            "required": "O"
                        },
                        {
                            "id": 2106,
                            "value": "chargebackStatus",
                            "type": "string",
                            "desc": "拒付状态",
                            "required": "O"
                        },
                        {
                            "id": 2107,
                            "value": "currency",
                            "type": "string",
                            "desc": "币种",
                            "required": "O"
                        },
                        {
                            "id": 2108,
                            "value": "amount",
                            "type": "number",
                            "desc": "金额",
                            "required": "O"
                        },
                        {
                            "id": 2109,
                            "value": "eventDate",
                            "type": "datetime",
                            "desc": "发起时间",
                            "required": "O"
                        },
                        {
                            "id": 2110,
                            "value": "merchantReference",
                            "type": "string",
                            "desc": "商户订单号",
                            "required": "O"
                        },
                        {
                            "id": 2111,
                            "value": "originalReference",
                            "type": "string",
                            "desc": "原始交易订单号",
                            "required": "O"
                        }
                    ],
                }
            ]
        },
        {
            "id": 2114,
            "value": "signType",
            "type": "String(32)",
            "required": "O",
            "desc": "加签类型，固定<code>SHA256</code>"
        },
        {
            "id": 2115,
            "value": "success",
            "type": "Boolean",
            "required": "O",
            "desc": "请求是否成功 true/false"
        },
        {
            "id": 2116,
            "value": "errorCode",
            "type": "String",
            "required": "O",
            "desc": "详见<br/><a href=\"/pages/49d7ed/#%E5%BC%82%E5%B8%B8%E7%BC%96%E7%A0%81%E8%AF%A6%E6%83%85\" target=\"_blank\">异常编码详情</a>"
        },
        {
            "id": 2117,
            "value": "errorMessage",
            "type": "String",
            "required": "O",
            "desc": "请求失败详情"
        },
    ]
}