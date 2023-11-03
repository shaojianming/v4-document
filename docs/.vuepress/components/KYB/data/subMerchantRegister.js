export default {
    data(){
        return  [
            {
                "id": 1,
                "value": "institutionId",
                "type": "string(64)",
                "required": "M",
                "desc": "Institution identifier"
            },
            {
                "id": 2,
                "value": "subClientId",
                "type": "string(64)",
                "required": "C",
                "desc": "PingPong-side unique identifier of the sub-merchant"
            },
            {
                "id": 3,
                "value": "merchantClientId",
                "type": "string(64)",
                "required": "M",
                "desc": "Institution-side unique identifier of the sub-merchant"
            },
            {
                "id": 4,
                "value": "notifyUrl",
                "type": "string(255)",
                "required": "M",
                "desc": "Asynchronous notification addres"
            },
            {
                "id": 5,
                "value": "industryType",
                "type": "string(64)",
                "required": "M",
                "desc": "Trade type: Goods-Traded Goods, Service-Service Trade"
            },
            {
                "id": 24,
                "value": "signType",
                "type": "string(32)",
                "required": "M",
                "desc": "Signature type MD5/SHA256"
            },
            {
                "id": 25,
                "value": "sign",
                "type": "string(128)",
                "required": "M",
                "desc": "Signature"
            }
        ]
    }
}