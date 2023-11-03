export default {
    data(){
        return  [
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
                "value": "merchantClientId",
                "type": "string(64)",
                "required": "M",
                "desc": "机构侧的商户唯一标识"
            },
            {
                "id": 27,
                "value": "kycStatus",
                "type": "string(64)",
                "required": "M",
                "desc": "kyc状态"
            },
            {
                "id": 28,
                "value": "serviceURL",
                "type": "string(64)",
                "required": "M",
                "desc": "图片访问路径前缀"
            },
            {
                "id": 5,
                "value": "companyInfo",
                "type": "object",
                "required": "M",
                "desc": "公司信息",
                "children": [
                    {
                        "id": 6,
                        "value": "businessLocation",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "公司注册国家或地区(取值见<a href='/pages/f8636b/'>附录KYB-地区数据</a>)"
                    },
                    {
                        "id": 8,
                        "value": "certificationNo",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "营业执照号码/注册证书号码"
                    },
                    {
                        "id": 9,
                        "value": "certEffectiveDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件生效日期 示例:2030-08-01。"
                    },
                    {
                        "id": 10,
                        "value": "certExpireDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件失效日期 <br/>长期有效:Long term <br/>不能填已过期时间<br/>示例:2030-08-01"
                    },
                    {
                        "id": 11,
                        "value": "chineseName",
                        "type": "string(64)",
                        "required": "C",
                        "desc": "公司中文名 <br/>businessLocation 为中国大陆或者中国地区时候必填"
                    },
                    {
                        "id": 12,
                        "value": "englishName",
                        "type": "string(64)",
                        "required": "C",
                        "desc": "公司英文名 <br/>businessLocation 除中国大陆和者中国地区之外时候必填"
                    },
                    {
                        "id": 14,
                        "value": "companyType",
                        "type": "int",
                        "required": "M",
                        "desc": "见companyType取值枚举"
                    },
                    {
                        "id": 15,
                        "value": "englishAddress",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "公司英文地址<br/> businessLocation  除中国或者中国地区外时候必填"
                    },
                    {
                        "id": 16,
                        "value": "residentialAddress",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "公司中文地址 <br/>businessLocation 为中国或者中国地区时候必填"
                    },
                    {
                        "id": 17,
                        "value": "hkBizRegistrationOrdinance",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "商业登记证照片，香港必填，支持单个IMG/PDF文件"
                    },

                    {
                        "id": 18,
                        "value": "officeFileName",
                        "type": "string(256)",
                        "required": "O",
                        "desc":   "2~5张办公室环境、前台相关照片，支持多个IMG文件，以逗号链接"
                    },
                    {
                        "id": 7,
                        "value": "busineseLicenseFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "营业执照/公司注册证书照片，支持单个IMG/PDF文件<ul>" +
                            "<li>中国大陆-营业执照</li>" +
                            "<li>非中国大陆-公司注册证书</li>" +
                            "</ul>"
                    },
                    {
                        "id": 22,
                        "value": "country",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "国家"
                    },
                    {
                        "id": 23,
                        "value": "dictArea",
                        "type": "string(64)",
                        "required": "O",
                        "desc": "公司所在地区，不填不会验证，否则根据不同的businessLocation验证传值,不同等级的行政区划用逗号分割<br/><ul>" +
                            "<li>businessLocation是中国大陆大陆时候传省市区 如： 浙江省,杭州市,滨江区</li>" +
                            "<li>businessLocation是中国香港时传香港行政区划 如：香港特别行政区,中西區</li>" +
                            "<li>businessLocation是中国澳门时传澳门行政区划 如：澳门特别行政区,花地瑪堂區</li>" +
                            "<li>businessLocation是中国台湾时传台湾行政区划 如：台湾省,台北市</li>" +
                            "<li>businessLocation是美国时传美国州名，城市和详细地址 如: New York,New York</li>" +
                            "<li>其余可不传</li>" +
                            "</ul>"
                    },
                    {
                        "id": 50000,
                        "value": "companyCharter",
                        "type": "Array",
                        "required": "C",
                        "desc": "公司章程，申请虚拟账户必填<br/>IMG/PDF/Word,只支持单个文件",
                        "children": [
                            {
                                "id": 50001,
                                "value": "fileName",
                                "type": "string(128)",
                                "required": "M",
                                "desc": "上传后的文件名称,支持IMG/PDF/Word",
                            }
                        ]
                    },
                    {
                        "id": 50010,
                        "value": "additionalInfo",
                        "type": "Array",
                        "required": "C",
                        "desc": "附加信息，若已上传附加信息会在响应中体现,可能返回多个对象",
                        "children": [
                            {
                                "id": 50012,
                                "value": "name",
                                "type": "string(32)",
                                "required": "M",
                                "desc": "附件名称"
                            },
                            {
                                "id": 50022,
                                "value": "fileName",
                                "type": "string(256)",
                                "required": "M",
                                "desc": "上传后的文件名称，IMG/PDF/Word/Excel，若含有多个文件，会以逗号分割,<br/>支持多个IMG/PDF，其它文件类型支持单个"
                            },
                            {
                                "id": 50023,
                                "value": "comment",
                                "type": "string(256)",
                                "required": "M",
                                "desc": "审核意见"
                            },
                        ]
                    },

                    {
                        "id": 6000,
                        "value": "otherInfo",
                        "type": "Array",
                        "required": "O",
                        "desc": "其他信息,可能返回多个IMG/PDF",
                        "children": [
                            {
                                "id": 6002,
                                "value": "fileName",
                                "type": "string(128)",
                                "required": "M",
                                "desc": "上传后的文件名称"
                            }
                        ]
                    },
                    {
                        "id": 19,
                        "value": "officeLeaseContracts",
                        "type": "Array",
                        "required": "O",
                        "desc": "公司水电费账单,IMG/PDF,<br/>可能返回多个IMG/PDF文件",
                        "children": [
                            {
                                "id": 190001,
                                "value": "fileName",
                                "type": "string(128)",
                                "required": "M",
                                "desc": "文件名称",
                            },
                        ]
                    },
                    {
                        "id": 20,
                        "value": "companyUtilityBillts",
                        "type": "Array",
                        "required": "O",
                        "desc": "公司水电费账单,IMG/PDF,<br/>可能返回多个IMG/PDF文件",
                        "children": [
                            {
                                "id": 20001,
                                "value": "fileName",
                                "type": "string(128)",
                                "required": "M",
                                "desc": "文件名称",
                            },
                        ]
                    },
                    {
                        "id": 21,
                        "value": "bankAccountInformation",
                        "type": "object",
                        "required": "O",
                        "desc": "银行开户流水或基本存款账户信息，IMG/PDF//EXCEL",
                        "children": [
                            {
                                "id": 210001,
                                "value": "fileName",
                                "type": "string(128)",
                                "required": "M",
                                "desc": "文件名称",
                            },
                        ]
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
            },
        ]
    }
}