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
                    "value": "defenseDocList",
                    "type": "array",
                    "required": "M",
                    "desc": "返回数据结果集",
                    "children": [
                        {
                            "id": 2101,
                            "value": "available",
                            "type": "string",
                            "desc": "是否已经上传过",
                            "required": "M"
                        },
                        {
                            "id": 2102,
                            "value": "defenseDocumentTypeCode",
                            "type": "string",
                            "desc": "证明类型，详情见:CBDocTypeCodeEnum",
                            "required": "M"
                        },
                        {
                            "id": 2103,
                            "value": "requirementLevel",
                            "type": "string",
                            "desc": "是否必填，详情见:CBRequirementLevelEnum，可选值为Conditional/Optional/Mandatory",
                            "required": "M"
                        },
                    ],
                },
                {
                    "id": 2201,
                    "value": "disputeType",
                    "type": "string",
                    "desc": "拒付类型，详情见:CBReasonCodeEnum",
                    "required": "M"
                },
                {
                    "id": 2202,
                    "value": "satisfied",
                    "type": "string",
                    "desc": "是否完整",
                    "required": "M"
                },

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
            "desc": "详见<br/><a href=\"/pages/49d7ed/#%E5%BC%82%E5%B8%B8%E7%BC%96%E7%A0%81%E8%AF%A6%E6%83%85\" target=\"_blank\">异常编码详情</a> "
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