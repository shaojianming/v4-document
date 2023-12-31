export default {
    data() {
        return [
            {
                "id": 997,
                "value": "institutionId",
                "type": "string(64)",
                "required": "M",
                "desc": "机构号"
            },
            {
                "id": 998,
                "value": "subClientId",
                "type": "string(64)",
                "required": "M",
                "desc": "子商户clientId"
            },
            {
                "id": 999,
                "value": "serviceURL",
                "type": "string(64)",
                "required": "M",
                "desc": "图片访问路径前缀"
            },
            {
                "id": 1000,
                "value": "customerInfoList",
                "type": "object",
                "required": "M",
                "desc": "公司信息",
                "children":[
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
                        "required": "M",
                        "desc": "子商户clientId"
                    },
                    {
                        "id": 3,
                        "value": "customerId",
                        "type": "string(64)",
                        "required": "C",
                        "desc": "法人、受益人或股东唯一标识，新增之后出现在响应报文，传入则意味着修改此条数据"
                    },
                    {
                        "id": 7,
                        "value": "customerType",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "法人、受益人或股东的身份类型" + "<ol><li>法人</li><li>受益人</li><li>股东</li></ol>"
                    },
                    {
                        "id": 4,
                        "value": "idType",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "<ol><li>大陆身份证</li><li>香港身份证</li><li>护照</li><li>大陆往来通行证</li><li>其他</li></ol>"
                    },
                    {
                        "id": 5,
                        "value": "frontImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片正面"
                    },
                    {
                        "id": 6,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "证件图片背面<ul>" +
                            "<li>idType： 1-大陆身份证 必填</li>" +
                            "<li>idType： 2-香港身份证 必填</li>" +
                            "<li>其余不填</li>" +
                            "</ul>"
                    },
                    {
                        "id": 9,
                        "value": "idCardNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "证件号码。"
                    },
                    {
                        "id": 10,
                        "value": "certEffectiveDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件生效日期 示例:2030-08-01。"
                    },
                    {
                        "id": 11,
                        "value": "certExpireDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件失效日期 <br/>长期有效:Long term <br/>不能填已过期时间<br/>示例:2030-08-01"
                    },
                    {
                        "id": 12,
                        "value": "chineseName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-中文 <br/>country为中国大陆或者中国香港时候必填。"
                    },
                    {
                        "id": 13,
                        "value": "englishName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-英文<br/>country除中国大陆和中国香港之外必填。"
                    },
                    {
                        "id": 14,
                        "value": "phoneNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "联系电话"
                    },
                    {
                        "id": 15,
                        "value": "emailAddress",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "联系邮箱"
                    },
                    {
                        "id": 17,
                        "value": "address",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "中文居住地址。<br/> country字段为中国大陆或者中国香港时候必填。 <br/>示例:<br/>滨江区江陵路567号。"
                    },
                    {
                        "id": 18,
                        "value": "englishAddress",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "英文居住地址。 <br/>如果country值不是中国大陆和中国香港则必填。 <br/>示例:<br/>No. 587, Jiangling Road, Binjiang District, Hangzhou, Zhejiang。"
                    },
                    {
                        "id": 19,
                        "value": "dictArea",
                        "type": "string(64)",
                        "required": "O",
                        "desc": "居住地区，不填不做验证,否则根据不同的居住地验证传值<ul>" +
                            "<li>country是中国大陆大陆时候传省市区</li>" +
                            "<li>country是中国香港时传行政区划</li>" +
                            "<li>其余可不传</li>" +
                            "</ul>取值见<a href='/pages/f8636b/'>附录KYB-地区数据</a>"
                    },
                    {
                        "id": 20,
                        "value": "country",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "国家，见<a href='/pages/f8636b/'>附录KYB-地区数据</a>"
                    },
                    {
                        "id": 21,
                        "value": "birthDate",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "出生日期，<br/>示例：2000-01-01"
                    },
                ]
            },
            {
                "id": 25,
                "value": "signType",
                "type": "string(32)",
                "required": "M",
                "desc": "签名类型 MD5/SHA256"
            },
            {
                "id": 26,
                "value": "sign",
                "type": "string(128)",
                "required": "M",
                "desc": "签名"
            }
        ]
    }
}
