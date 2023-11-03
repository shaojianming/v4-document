export default {
    data: [
        {
            "id": 11,
            "value": "payType",
            "type": "string(32)",
            "required": "M",
            "desc": "支付工具类型：" +
                "<ul>" +
                "<li>APM-本地支付</li>" +
                "</ul>"
        },
        {
            "id": 13,
            "value": "paymentMethod",
            "type": "string(64)",
            "required": "C",
            "desc": "支付方式，国际信用卡/本地支付方式，若要使用请与技术人员沟通,可选值：<a href='/pages/1dfb5e/' target='_blank'>Non-Hosted支持的APM</a>"

        },
    ]
}



