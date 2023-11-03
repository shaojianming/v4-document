export default {
    data() {
        return [
            {
                "id": 1,
                "value": "institutionId",
                "type": "string(64)",
                "required": "M",
                "desc": "机构号"
            },
            {
                "id": 2,
                "value": "subClientId",
                "type": "string(64)",
                "required": "C",
                "desc": "子商户clientId"
            },
            {
                "id": 3,
                "value": "pageIndex",
                "type": "int",
                "required": "C",
                "desc": "页码"
            },
            {
                "id": 4,
                "value": "pageSize",
                "type": "int",
                "required": "C",
                "desc": "每页数据条数"
            },
            {
                "id": 5,
                "value": "signType",
                "type": "string(32)",
                "required": "M",
                "desc": "签名类型"
            },
            {
                "id": 6,
                "value": "sign",
                "type": "string(128)",
                "required": "M",
                "desc": "签名"
            }
        ]
    }
}