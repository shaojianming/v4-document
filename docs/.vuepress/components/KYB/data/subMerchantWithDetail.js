export default {
    data(){
        return  [
            {
                "id": 1,
                "value": "kycStatus",
                "type": "string(64)",
                "required": "M",
                "desc": "审核状态"
            },
            {
                "id": 2,
                "value": "institutionId",
                "type": "string(64)",
                "required": "C",
                "desc": "Institution identifier"
            },
            {
                "id": 3,
                "value": "businessLocation",
                "type": "string(64)",
                "required": "M",
                "desc": "公司注册国家或地区(取值见附录-国家)"
            },
            {
                "id": 24,
                "value": "kycAuditReport",
                "type": "string(32)",
                "required": "M",
                "desc": "审核报告"
            },
            {
                "id": 25,
                "value": "reviewAgent",
                "type": "string(32)",
                "required": "M",
                "desc": "审核人"
            },
            {
                "id": 30,
                "value": "merchantClientId",
                "type": "string(16)",
                "required": "M",
                "desc": "机构侧子商户唯一标识"
            },
            {
                "id": 31,
                "value": "kycComment",
                "type": "Object",
                "required": "M",
                "desc": "审核意见"
            },
            {
                "id": 4,
                "value": "companyInfo",
                "type": "object",
                "required": "M",
                "desc": "公司信息",
                "children": [
                    {
                        "id": 30000,
                        "value": "companyCharter",
                        "type": "Array",
                        "required": "C",
                        "desc": "公司章程，申请虚拟账户必填<br/>IMG/PDF/Word,只支持单个文件",
                        "children": [
                            {
                                "id": 30001,
                                "value": "fileName",
                                "type": "string(128)",
                                "required": "M",
                                "desc": "上传后的文件名称,支持IMG/PDF/Word",
                            },
                        ]
                    },
                    {
                        "id": 50010,
                        "value": "additionalInfo",
                        "type": "Array",
                        "required": "C",
                        "desc": "附加信息，审核驳回之后，可能会需要补充指定材料。若审核状态为MODIFY时候，查询详情API在附加信息返回了指定的name，请在重新提交时候传送附加信息。",
                        "children": [
                            {
                                "id": 50022,
                                "value": "name",
                                "type": "string(32)",
                                "required": "M",
                                "desc": "附件名称，提交附加信息时候需要上送此字段的返回值"
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
                        "desc": "其他信息，支持多个IMG/PDF文件",
                        "children": [
                            {
                                "id": 6002,
                                "value": "fileName",
                                "type": "string(128)",
                                "required": "M",
                                "desc": "上传后的文件名称"
                            },
                        ]
                    },
                    {
                        "id": 7,
                        "value": "busineseLicenseFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc":   "营业执照/公司注册证书照片，支持单个IMG/PDF文件<ul>" +
                            "<li>中国大陆-营业执照</li>" +
                            "<li>非中国大陆-公司注册证书</li>" +
                            "</ul>"
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
                        "desc": "公司英文名<br/> businessLocation 除中国大陆和中国地区之外时候必填"
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
                        "desc": "公司英文地址 <br/>businessLocation  除中国或者中国地区外时候必填"
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
                        "desc":"商业登记证照片，香港必填，支持单个IMG/PDF文件"
                    },
                    {
                        "id": 18,
                        "value": "officeFileName",
                        "type": "string(256)",
                        "required": "O",
                        "desc":    "2~5张办公室环境、前台相关照片，支持多个IMG文件，以逗号链接"
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
                        "type": "object",
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
                        "desc": "银行开户流水或基本存款账户信息，img/pdf/excel",
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
                        "desc":"公司所在地区，不填不会验证，否则根据不同的businessLocation验证传值,不同等级的行政区划用逗号分割<br/><ul>" +
                            "<li>businessLocation是中国大陆大陆时候传省市区 如： 浙江省,杭州市,滨江区</li>" +
                            "<li>businessLocation是中国香港时传香港行政区划 如：香港特别行政区,中西區</li>" +
                            "<li>businessLocation是中国澳门时传澳门行政区划 如：澳门特别行政区,花地瑪堂區</li>" +
                            "<li>businessLocation是中国台湾时传台湾行政区划 如：台湾省,台北市</li>" +
                            "<li>businessLocation是美国时传美国州名，城市和详细地址 如: New York,New York</li>" +
                            "<li>其余可不传</li>" +
                            "</ul>"
                    },
                ]
            },
            {
                "id": 32,
                "value": "additionInfo",
                "type": "Object",
                "required": "M",
                "desc": "附加信息",
                "children":[
                    {
                        "id": 320001,
                        "value": "comment",
                        "type": "string(256)",
                        "required": "M",
                        "desc": "机构号"
                    },
                    {
                        "id": 320002,
                        "value": "status",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "附加信息状态，<ul><li>PENDING</li><li>PASSED</li><li>FAILED</li></ul>"
                    },
                ]
            },
            {
                "id": 27,
                "value": "legalPerson",
                "type": "Object",
                "required": "M",
                "desc": "法人信息",
                "children":[
                    {
                        "id": 270001,
                        "value": "institutionId",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "机构号"
                    },
                    {
                        "id": 270002,
                        "value": "subClientId",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "子商户clientId"
                    },
                    {
                        "id": 270003,
                        "value": "customerId",
                        "type": "string(64)",
                        "required": "C",
                        "desc": "法人、受益人或股东唯一标识，新增之后出现在响应报文，传入则意味着修改此条数据"
                    },
                    {
                        "id": 270004,
                        "value": "idType",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "<ol><li>大陆身份证</li><li>香港身份证</li><li>护照</li><li>大陆往来通行证</li><li>其他</li></ol>"
                    },
                    {
                        "id": 270005,
                        "value": "frontImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片正面"
                    },
                    {
                        "id": 270006,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片背面<ul>" +
                            "<li>idType： 1-大陆身份证 必填</li>" +
                            "<li>idType： 2-香港身份证 必填</li>" +
                            "<li>其余不填</li>" +
                            "</ul>"
                    },
                    {
                        "id": 270007,
                        "value": "customerType",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "法人、受益人或股东的身份类型\n" + "<ol><li>法人</li><li>受益人</li><li>股东</li></ol>"
                    },
                    {
                        "id": 270008,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片背面<ul>" +
                            "<li>idType： 1-大陆身份证 必填</li>" +
                            "<li>idType： 2-香港身份证 必填</li>" +
                            "<li>其余不填</li>" +
                            "</ul>"
                    },
                    {
                        "id": 270009,
                        "value": "idCardNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "证件号码。"
                    },
                    {
                        "id": 2700010,
                        "value": "certEffectiveDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件生效日期 示例:2030-08-01。"
                    },
                    {
                        "id": 2700011,
                        "value": "certExpireDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件失效日期 <br/>长期有效:Long term <br/>不能填已过期时间<br/>示例:2030-08-01"
                    },
                    {
                        "id": 2700012,
                        "value": "chineseName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-中文<br/>nationality为中国大陆或者中国香港时候必填。"
                    },
                    {
                        "id": 2700013,
                        "value": "englishName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-英文<br/>nationality除中国大陆和中国香港之外必填。"
                    },
                    {
                        "id": 2700014,
                        "value": "phoneNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "联系电话"
                    },
                    {
                        "id": 2700015,
                        "value": "emailAddress",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "联系邮箱"
                    },
                    {
                        "id": 2700017,
                        "value": "address",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "中文居住地址。<br/> country字段为中国大陆或者中国香港时候必填。 <br/>示例:<br/>滨江区江陵路567号。"
                    },
                    {
                        "id": 2700018,
                        "value": "englishAddress",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "英文居住地址。 <br/>如果country值不是中国大陆和中国香港则必填。 <br/>示例:<br/>No. 587, Jiangling Road, Binjiang District, Hangzhou, Zhejiang。"
                    },
                    {
                        "id": 2700019,
                        "value": "dictArea",
                        "type": "string(64)",
                        "required": "O",
                        "desc":  "居住地区，不填不做验证,否则根据不同的居住地验证传值<ul>" +
                            "<li>country是中国大陆大陆时候传省市区</li>" +
                            "<li>country是中国香港时传行政区划</li>" +
                            "<li>其余可不传</li>" +
                            "</ul>取值见<a href='/pages/f8636b/'>附录KYB-地区数据</a>"
                    },
                ]
            },
            {
                "id": 28,
                "value": "shareholder",
                "type": "array",
                "required": "M",
                "desc": "股东信息",
                "children":[
                    {
                        "id": 280001,
                        "value": "institutionId",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "机构号"
                    },
                    {
                        "id": 280002,
                        "value": "subClientId",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "子商户clientId"
                    },
                    {
                        "id": 280003,
                        "value": "customerId",
                        "type": "string(64)",
                        "required": "C",
                        "desc": "法人、受益人或股东唯一标识，新增之后出现在响应报文，传入则意味着修改此条数据"
                    },
                    {
                        "id": 280007,
                        "value": "customerType",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "法人、受益人或股东的身份类型\n" + "<ol><li>法人</li><li>受益人</li><li>股东</li></ol>"
                    },
                    {
                        "id": 280004,
                        "value": "idType",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "<ol><li>大陆身份证</li><li>香港身份证</li><li>护照</li><li>大陆往来通行证</li><li>其他</li></ol>"
                    },
                    {
                        "id": 280005,
                        "value": "frontImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片正面"
                    },
                    {
                        "id": 280006,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片背面<ul>" +
                            "<li>idType： 1-大陆身份证 必填</li>" +
                            "<li>idType： 2-香港身份证 必填</li>" +
                            "<li>其余不填</li>" +
                            "</ul>"
                    },
                    {
                        "id": 280008,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片背面<ul>" +
                            "<li>idType： 1-大陆身份证 必填</li>" +
                            "<li>idType： 2-香港身份证 必填</li>" +
                            "<li>其余不填</li>" +
                            "</ul>"
                    },
                    {
                        "id": 280009,
                        "value": "idCardNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "证件号码。"
                    },
                    {
                        "id": 2800010,
                        "value": "certEffectiveDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件生效日期 示例:2030-08-01。"
                    },
                    {
                        "id": 2800011,
                        "value": "certExpireDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件失效日期 <br/>长期有效:Long term <br/>不能填已过期时间<br/>示例:2030-08-01"
                    },
                    {
                        "id": 2800012,
                        "value": "chineseName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-中文<br/>nationality为中国大陆或者中国香港时候必填。"
                    },
                    {
                        "id": 2800013,
                        "value": "englishName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-英文<br/>nationality除中国大陆和中国香港之外必填。"
                    },
                    {
                        "id": 2800014,
                        "value": "phoneNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "联系电话"
                    },
                    {
                        "id": 2800015,
                        "value": "emailAddress",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "联系邮箱"
                    },
                    {
                        "id": 2800017,
                        "value": "address",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "中文居住地址。<br/> country字段为中国大陆或者中国香港时候必填。 <br/>示例:<br/>滨江区江陵路567号。"
                    },
                    {
                        "id": 2800018,
                        "value": "englishAddress",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "英文居住地址。 <br/>如果country值不是中国大陆和中国香港则必填。 <br/>示例:<br/>No. 587, Jiangling Road, Binjiang District, Hangzhou, Zhejiang。"
                    },
                    {
                        "id": 2800019,
                        "value": "dictArea",
                        "type": "string(64)",
                        "required": "O",
                        "desc": "居住地区，不填不做验证,否则根据不同的居住地验证传值<ul>" +
                            "<li>country是中国大陆大陆时候传省市区</li>" +
                            "<li>country是中国香港时传行政区划</li>" +
                            "<li>其余可不传</li>" +
                            "</ul>取值见<a href='/pages/f8636b/'>附录KYB-地区数据</a>"
                    },
                ]
            },
            {
                "id": 29,
                "value": "beneficiaryInfo",
                "type": "array",
                "required": "M",
                "desc": "受益人信息",
                "children":[
                    {
                        "id": 2900001,
                        "value": "institutionId",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "机构号"
                    },
                    {
                        "id": 2900002,
                        "value": "subClientId",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "子商户clientId"
                    },
                    {
                        "id": 2900003,
                        "value": "customerId",
                        "type": "string(64)",
                        "required": "C",
                        "desc": "法人、受益人或股东唯一标识，新增之后出现在响应报文，传入则意味着修改此条数据"
                    },
                    {
                        "id": 2900007,
                        "value": "customerType",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "法人、受益人或股东的身份类型\n" + "<ol><li>法人</li><li>受益人</li><li>股东</li></ol>"
                    },
                    {
                        "id": 2900004,
                        "value": "idType",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "<ol><li>大陆身份证</li><li>香港身份证</li><li>护照</li><li>大陆往来通行证</li><li>其他</li></ol>"
                    },
                    {
                        "id": 2900005,
                        "value": "frontImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片正面"
                    },
                    {
                        "id": 2900006,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片背面<ul>" +
                            "<li>idType： 1-大陆身份证 必填</li>" +
                            "<li>idType： 2-香港身份证 必填</li>" +
                            "<li>其余不填</li>" +
                            "</ul>"
                    },
                    {
                        "id": 2900008,
                        "value": "backImageFileName",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "证件图片背面<ul>" +
                            "<li>idType： 1-大陆身份证 必填</li>" +
                            "<li>idType： 2-香港身份证 必填</li>" +
                            "<li>其余不填</li>" +
                            "</ul>"
                    },
                    {
                        "id": 2900009,
                        "value": "idCardNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "证件号码。"
                    },
                    {
                        "id": 29000010,
                        "value": "certEffectiveDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件生效日期 示例:2030-08-01。"
                    },
                    {
                        "id": 29000011,
                        "value": "certExpireDate",
                        "type": "string(32)",
                        "required": "M",
                        "desc": "证件失效日期 <br/>长期有效:Long term <br/>不能填已过期时间<br/>示例:2030-08-01"
                    },
                    {
                        "id": 29000012,
                        "value": "chineseName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-中文<br/>nationality为中国大陆或者中国香港时候必填。"
                    },
                    {
                        "id": 29000013,
                        "value": "englishName",
                        "type": "string(32)",
                        "required": "C",
                        "desc": "姓名-英文<br/>nationality除中国大陆和中国香港之外必填。"
                    },
                    {
                        "id": 29000014,
                        "value": "phoneNumber",
                        "type": "string(64)",
                        "required": "M",
                        "desc": "联系电话"
                    },
                    {
                        "id": 29000015,
                        "value": "emailAddress",
                        "type": "string(128)",
                        "required": "M",
                        "desc": "联系邮箱"
                    },
                    {
                        "id": 29000017,
                        "value": "address",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "中文居住地址。<br/> country字段为中国大陆或者中国香港时候必填。 <br/>示例:<br/>滨江区江陵路567号。"
                    },
                    {
                        "id": 29000018,
                        "value": "englishAddress",
                        "type": "string(128)",
                        "required": "C",
                        "desc": "英文居住地址。 <br/>如果country值不是中国大陆和中国香港则必填。 <br/>示例:<br/>No. 587, Jiangling Road, Binjiang District, Hangzhou, Zhejiang。"
                    },
                    {
                        "id": 29000019,
                        "value": "dictArea",
                        "type": "string(64)",
                        "required": "O",
                        "desc":  "居住地区，不填不做验证,否则根据不同的居住地验证传值<ul>" +
                            "<li>country是中国大陆大陆时候传省市区</li>" +
                            "<li>country是中国香港时传行政区划</li>" +
                            "<li>其余可不传</li>" +
                            "</ul>取值见<a href='/pages/f8636b/'>附录KYB-地区数据</a>"
                    },
                ]
            },
            {
                "id": 35,
                "value": "serviceURL",
                "type": "string(64)",
                "required": "M",
                "desc": "图片访问路径前缀"
            },
            {
                "id": 33,
                "value": "signType",
                "type": "string(32)",
                "required": "M",
                "desc": "签名类型"
            },
            {
                "id": 34,
                "value": "sign",
                "type": "string(64)",
                "required": "M",
                "desc": "签名"
            },
        ]
    }
}