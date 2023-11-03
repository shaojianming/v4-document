export default {
    data(){
        return  [
            {
                "id": 3,
                "value": "merchantClientId",
                "type": "string(64)",
                "required": "M",
                "desc": "机构侧的商户唯一标识"
            },
            {
                "id": 4,
                "value": "notifyUrl",
                "type": "string(255)",
                "required": "M",
                "desc": "You can set up a URL in your system that is capable of receiving HTTP POST requests. When updating the order status, the PingPongCheckout system will send an HTTP request to the notifyUrl and pass the relevant information as the POST Body."
            },
            {
                "id": 5,
                "value": "industryType",
                "type": "string(64)",
                "required": "M",
                "desc": "贸易类型 Goods-货物贸易 Service-服务贸易"
            }
        ]
    }
}