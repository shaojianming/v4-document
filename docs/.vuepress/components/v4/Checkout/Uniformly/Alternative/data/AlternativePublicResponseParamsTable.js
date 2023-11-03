export default {
    data: [
        {
            "id": 1,
            "value": "accId",
            "type": "String(64)",
            "required": "M",
            "desc": "PingPong merchant store ID"
        },
        {
            "id": 2,
            "value": "clientId",
            "type": "String(64)",
            "required": "M",
            "desc": "PingPong merchant ID"
        },
        {
            "id": 3,
            "value": "signType",
            "type": "String(32)",
            "required": "M",
            "desc": "For signature method,see <a href='/pages/77ae52/' target='_blank'>the Signature Specification</a> section hereof for details"
        },
        {
            "id": 4,
            "value": "sign",
            "type": "String(128)",
            "required": "M",
            "desc": "For signature,see <a href='/pages/77ae52/' target='_blank'>the Signature Specification</a> hereof for details,All parameters are involved in the signature"
        },
        {
            "id": 5,
            "value": "code",
            "type": "String(6)",
            "required": "M",
            "desc": "Result status code"
        },
        {
            "id": 6,
            "value": "description",
            "type": "String(500)",
            "required": "M",
            "desc": "Result description"
        },
        {
            "id": 7,
            "value": "bizContent",
            "type": "String",
            "required": "M",
            "desc": "Business response parameters"
        },
    ]
}



