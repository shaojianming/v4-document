export default {
    data() {
        return [
            {
                "id": 3,
                "value": "merchantAccId",
                "type": "string(64)",
                "required": "C",
                "desc": "机构侧店铺唯一标识"
            },
            {
                "id": 4,
                "value": "accId",
                "type": "string(64)",
                "required": "C",
                "desc": "店铺唯一标识，新增后会在响应报文中出现，传入意味着更新数据"
            },
            {
                "id": 5,
                "value": "storeName",
                "type": "string(255)",
                "required": "M",
                "desc": "店铺名称"
            },
            {
                "id": 6,
                "value": "industryType",
                "type": "string(128)",
                "required": "M",
                "desc": "网站贸易类型, 跟账户创建时保持一致,<ul>" +
                    "<li>Goods_Goods        货物贸易</li>"+
                    "<li>Service_CarRental  服务贸易-租车</li>"+
                    "<li>Service_Other      服务贸易-其它</li>"+
                    "</ul>"
            },
            {
                "id": 7,
                "value": "storeUrl",
                "type": "string(255)",
                "required": "M",
                "desc": "店铺地址"
            },
            {
                "id": 8,
                "value": "websiteType",
                "type": "Number(2)",
                "required": "M",
                "desc": "业务类型:<ul>" +
                    "<li>0-申请独立站无交易流水，且无网站运营历史</li>" +
                    "<li>1-申请独立站已有交易流水</li>" +
                    "<li>2-申请独立站暂无交易流水，但有网站运营历史</li>" +
                    "</ul>"
            },
            {
                "id": 9,
                "value": "bankStatement",
                "type": "Array<FileImageInfo>",
                "required": "C",
                "desc": "银行对账单。<br/>若WebsiteType 是申请独立站无交易流水，且无网站运营历史需要提供 <br/>支持图片、Excel、PDF格式；<br/>图片支持多张，其它文件类型支持单个"
            },
            {
                "id": 10,
                "value": "financialReport",
                "type": "Array<FileImageInfo>",
                "required": "C",
                "desc": "财务报告<ul>" +
                    "<li>请提供近3个月网站财务汇总报表及争议事件报告，需与此次提报业务内容相同。</li>" +
                    "<li>WebsiteType 是申请独立站已有交易流水/申请独立站暂无交易 流水，但有网站运营历史，则需要提供</li>" +
                    "<li>IMG/PDF/EXCEL 都可以。</li>" +
                    "<li>图片支持多张，其它文件类型支持单个</li>" +
                    "</ul>"
            },
            {
                "id": 11,
                "value": "additionInfo",
                "type": "Array<AdditionInfo>",
                "required": "O",
                "desc": "附件文件<br/>支持图片、Excel、PDF格式; 附加信息"
            },
            {
                "id": 12,
                "value": "websiteDomain",
                "type": "Array<FileImageInfo>",
                "required": "O",
                "desc": "网站域名注册证明<br/>图片/PDF格式</br>不会校验字段是否必填，若不填需要事后人工报送"
            },
            {
                "id": 13,
                "value": "applicationForm",
                "type": "Array<FileImageInfo>",
                "required": "C",
                "desc": "商户申请表<br/>若商户公司主体是美国，则需要提供表格Docx文档格式<br/>参考商户申请表模板；"
            },
            {
                "id": 18,
                "value": "websiteJournal",
                "type": "Array<FileImageInfo>",
                "required": "O",
                "desc": "支持Excel/PDF格式；网站流水记录"
            },
            {
                "id": 19,
                "value": "independentWebsite",
                "type": "string(64)",
                "required": "M",
                "desc": "建站工具"
            }
        ]
    }
}