export default {
    data() {
        return [
            {
                "id": 997,
                "value": "institutionId",
                "type": "string(64)",
                "required": "M",
                "desc": "PingPong institution number"
            },
            {
                "id": 998,
                "value": "subClientId",
                "type": "string(64)",
                "required": "M",
                "desc": "Sub-merchant client ID"
            },
            {
                "id": 1000,
                "value": "customerInfoList",
                "type": "object",
                "required": "M",
                "desc": "Company information",
                "children":[
                    {
                        "id": 3,
                        "value": "customerId",
                        "type": "string(64)",
                        "required": "C",
                        "desc": "Unique identifier of the legal representative, beneficiary, or shareholder. If passed, it means modifying the data."
                    },
                    {
                        "id": 7,
                        "value": "customerType",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "Identity type of the legal representative，beneficiary, or shareholder" + "<ol><li>Legal Representative</li><li>Beneficiary</li><li>Shareholder</li></ol>"
                    },
                    {
                        "id": 4,
                        "value": "idType",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "<ol><li>Mainland China ID card</li><li>Hong Kong ID card</li><li>passport</li><li>Mainland China Entry-Exit Permit</li><li>others</li></ol>"
                    },
                    {
                        "id": 5,
                        "value": "frontImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "Front image of the identification document."
                    },
                    {
                        "id": 6,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "Back image of the identification document.<ul>" +
                            "<li>idType： 1-Mainland China ID card required</li>" +
                            "<li>idType： 2-Hong Kong ID card required</li>" +
                            "<li>The remaining parts are not filled</li>" +
                            "</ul>"
                    },
                    {
                        "id": 9,
                        "value": "idCardNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "Identification number."
                    },
                    {
                        "id": 10,
                        "value": "certEffectiveDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "Effective date of the identification document. Example: 2030-08-01."
                    },
                    {
                        "id": 11,
                        "value": "certExpireDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "Expiration date of the identification document. If the document has a long-term validity, input \"Long term\". Do not enter an expired date. Example: 2030-08-01."
                    },
                    {
                        "id": 12,
                        "value": "chineseName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "Name in Chinese. Required when the country is Mainland China or Hong Kong."
                    },
                    {
                        "id": 13,
                        "value": "englishName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "Name in English. Required when the country is not Mainland China or Hong Kong."
                    },
                    {
                        "id": 14,
                        "value": "phoneNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "Contact phone number"
                    },
                    {
                        "id": 15,
                        "value": "emailAddress",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "Contact email address"
                    },
                    {
                        "id": 17,
                        "value": "address",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "Residential address in Chinese. Required when the country is Mainland China or Hong Kong. Example: No. 567 Jiangling Road, Binjiang District."
                    },
                    {
                        "id": 18,
                        "value": "englishAddress",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "Residential address in English. Required when the country is not Mainland China or Hong Kong. Example: No. 587 Jiangling Road, Binjiang District, Hangzhou, Zhejiang."
                    },
                    {
                        "id": 19,
                        "value": "dictArea",
                        "type": "string(64)",
                        "required": "O",
                        "desc": "Residential area. Not required. If passed, it will be validated according to different residential areas: <ul>" +
                            "<li>Province/City/District (Mainland China),  Administrative Region (Hong Kong)</li>" +
                            "<li>Others</li>" +
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
