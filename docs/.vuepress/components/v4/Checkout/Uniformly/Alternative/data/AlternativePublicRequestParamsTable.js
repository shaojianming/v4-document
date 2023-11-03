export default {
    data: [
        {
            "id": 1,
            "value": "accId",
            "type": "string(64)",
            "required": "C",
            "desc": "PingPong merchant store ID"
        },
        {
            "id": 2,
            "value": "clientId",
            "type": "string(64)",
            "required": "M",
            "desc": "PingPong merchant ID"
        },
        {
            "id": 3,
            "value": "signType",
            "type": "string(32)",
            "required": "M",
            "desc": "For signature method, For details,see the <a href='/pages/77ae52/' target='_blank'>Signing Protocol </a> section of the document"
        },
        {
            "id": 4,
            "value": "sign",
            "type": "string(128)",
            "required": "M",
            "desc": "For signature,see <a href='/pages/77ae52/' target='_blank'>the  Signature Specification</a> hereof for details,All parameters are involved in the signature"
        },
        {
            "id": 5,
            "value": "version",
            "type": "string(10)",
            "required": "M",
            "desc": "Version number, currently fixed as 1.0. May be adjusted in the future with changes to the interface"
        },
        {
            "id": 6,
            "value": "bizContent",
            "type": "string",
            "required": "M",
            "desc": "The collection of request parameters, excluding common request parameters, must be passed in this parameter. There is no maximum length limit for this parameter"
        },
    ]
}



