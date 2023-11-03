module.exports = {
    mode: 'auto',
    collapsable: false,
    '/v4/developer/zh/': [
        {
            title: 'Introduction',
            lang: 'en-US',
            collapsable: false,
            children: [
                {title: 'Overview', path: '/v4/developer/zh/guide/start'},
                //{title: 'Technical Terms', path: '/v4/developer/zh/guide/nounContract'},
                {title: 'Getting Started', path: '/v4/developer/zh/guide/step'},
                {title: 'Sandbox Merchant Account', path: '/v4/developer/zh/guide/sandbox'},
            ]
        },
        {
            title: 'Services',
            lang: 'en-US',
            collapsable: false,
            children: [
                {
                    title: 'Checkout',
                    lang: 'en-US',
                    collapsable: false,
                    children: [
                        {title: 'Integration Overview', path: '/v4/developer/zh/services/checkout/overview1'},
                        {title: 'Hosted', path: '/v4/developer/zh/services/checkout/hosted/hosted'},
                        {title: 'Non-Hosted', path: '/v4/developer/zh/services/checkout/non-hosted/non-hosted'},


                        {
                            title: 'APIs',
                            lang: 'en-US',
                            collapsable: true,
                            children: [
                                {title: 'Create a Payment Intent', path: '/v4/developer/zh/services/checkout/api/reserve'},
                                {title: 'Accept a Payment', path: '/v4/developer/zh/services/checkout/api/uniformly'},
                                {title: 'Transaction Detail', path: '/v4/developer/zh/services/checkout/api/getOne'},
                                {title: 'Refund', path: '/v4/developer/zh/services/checkout/api/twice/refund'},
                                {title: 'Refund Detail', path: '/v4/developer/zh/services/checkout/api/getRefund'},
                                {title: 'Capture', path: '/v4/developer/zh/services/checkout/api/twice/capture'},
                                {title: 'Capture Detail', path: '/v4/developer/zh/services/checkout/api/getCapture'},
                                {title: 'Void', path: '/v4/developer/zh/services/checkout/api/twice/void'},
                                {title: 'Void Detail', path: '/v4/developer/zh/services/checkout/api/getVoid'},
                                {title: 'Asynchronous Notifications', path: '/v4/developer/zh/services/checkout/api/status/notify'},
                                {title: 'Upload Logistics Information', path: '/v4/developer/zh/services/checkout/api/LogisticsUpload'},
                                // {
                                //     title: 'Fund Statement Report',
                                //     path: '/v4/developer/zh/services/checkout/api/fundStatementDownload'
                                // },
                                // {
                                //     title: 'Transaction Statement Report',
                                //     path: '/v4/developer/zh/services/checkout/api/transactionStatementDownload'
                                // },

                            ]
                        },
                    ]
                },
                // {
                //     title: 'Recurring',
                //     lang: 'en-US',
                //     collapsable: false,
                //     children: [
                //         {title: 'Overview', path: '/v4/developer/zh/services/recurring/overview'},
                //         {title: 'Integration Guide', path: '/v4/developer/zh/services/recurring/recurring'},
                //     ]
                // },
                // {
                //     title: 'Tokenization',
                //     lang: 'en-US',
                //     collapsable: false,
                //     children: [
                //         {title: 'Overview', path: '/v4/developer/zh/services/tokenization/overview'},
                //         {title: 'Integration Guide', path: '/v4/developer/zh/services/tokenization/tokenization'},
                //         {
                //             title: 'APIs',
                //             lang: 'en-US',
                //             collapsable: true,
                //             children: [
                //                 {title: 'Token Unbinding', path: '/v4/developer/zh/services/tokenization/api/unbind'},
                //                 {title: 'Token list of card Bindings', path: '/v4/developer/zh/services/tokenization/api/list'},
                //             ]
                //         },
                //     ]
                // },
                // {
                //     title: 'Disputes',
                //     lang: 'en-US',
                //     collapsable: false,
                //     children: [
                //         {title: 'Overview', path: '/v4/developer/zh/services/dispute/overview'},
                //         {title: 'Integration Guide', path: '/v4/developer/zh/services/dispute/dispute'},
                //         {
                //             title: 'APIs',
                //             lang: 'en-US',
                //             collapsable: true,
                //             children: [
                //                 {title: 'Query chargeback records', path: '/v4/developer/zh/services/dispute/chargeback'},
                //                 {title: 'Query chargeback operation records', path: '/v4/developer/zh/services/dispute/chargebackTrace'},
                //                 {title: 'Getting Request For Information Details', path: '/v4/developer/zh/services/dispute/apis/getRetrievalDispute'},
                //                 {title: 'Getting Chargeback Details', path: '/v4/developer/zh/services/dispute/apis/getDisputeInfo'},
                //                 {title: 'Getting Required Information for Chargeback', path: '/v4/developer/zh/services/dispute/apis/getDefenseReasons'},
                //                 {title: 'Information Supplied', path: '/v4/developer/zh/services/dispute/apis/supplyDefenseDocument'},
                //                 {title: 'Delete Chargeback Information', path: '/v4/developer/zh/services/dispute/apis/deleteDefenseDocument'},
                //                 {title: 'Merchant Submits Documentation and Disputes the Chargeback', path: '/v4/developer/zh/services/dispute/apis/defendDispute'},
                //                 {title: 'Merchant Accepts dispute', path: '/v4/developer/zh/services/dispute/apis/acceptDispute'},
                //                 {title: 'Webhook notifications', path: '/v4/developer/zh/services/dispute/apis/notifications'},
                //             ]
                //         },
                //     ]
                // },
                // {
                //     title: 'KYB',  //组名
                //     collapsable: true,
                //     children: [
                //         ['/v4/developer/zh/services/kyb/overview', '概览'],
                //         {
                //             title: 'APIs',
                //             lang: 'en-US',
                //             collapsable: true,
                //             children: [
                //                 {title: '子商户注册', path: '/v4/developer/zh/services/kyb/api/addSubClient'},
                //                 {
                //                     title: '批量新增法人股东受益人',
                //                     path: '/v4/developer/zh/services/kyb/api/addPersonalBatch'
                //                 },
                //                 {title: '新增法人股东受益人', path: '/v4/developer/zh/services/kyb/api/addPersonal'},
                //                 {title: '删除法人股东受益人', path: '/v4/developer/zh/services/kyb/api/delPersonal'},
                //                 {title: '查询子商户详情', path: '/v4/developer/zh/services/kyb/api/subMerchant'},
                //                 {title: '新增公司信息', path: '/v4/developer/zh/services/kyb/api/addCompany'},
                //                 {title: '保存店铺', path: '/v4/developer/zh/services/kyb/api/saveStore'},
                //                 {title: '店铺列表', path: '/v4/developer/zh/services/kyb/api/storeList'},
                //                 {title: '店铺详情', path: '/v4/developer/zh/services/kyb/api/storeDetail'},
                //                 {title: '异步通知', path: '/v4/developer/zh/services/kyb/api/notify'},
                //                 {title: '上传文件', path: '/v4/developer/zh/services/kyb/api/upload'},
                //             ]
                //         },
                //     ]
                // },
                // {
                //     title: '支付链',
                //     lang: 'en-US',
                //     collapsable: true,
                //     children: [
                //         {title: '概览', path: '/v4/developer/zh/services/payByLink/overview'},
                //         {title: '操作手册', path: '/v4/developer/zh/services/payByLink/operation'},
                //     ]
                // },
                // {
                //     title: 'Website builder tool',
                //     lang: 'en-US',
                //     collapsable: true,
                //     children: [
                //         {title: 'SaaS website builder platform', path: '/v4/developer/zh/services/buildingTools/sass', target: '_blank'},
                //         {title: 'Plugins', path: '/v4/developer/zh/services/buildingTools/plugin', target: '_blank'},
                //     ]
                // },
            ]
        },
        // {
        //     title: '工具',  //组名
        //     collapsable: true,
        //     children: [
        //         ['/v4/developer/zh/tools/sign', '签名工具'],
        //     ],
        // },
        {
            title: 'Appendix',  //组名
            collapsable: true,
            lang: 'en-US',
            children: [
                ['/v4/developer/zh/appendix/countryCode', 'Country Codes'],
                ['/v4/developer/zh/appendix/stateCode', 'State Codes'],
                ['/v4/developer/zh/appendix/transactionCurrency', 'Currency Codes'],
                ['/v4/developer/zh/appendix/successCodeList', 'Error Codes'],
               // ['/v4/developer/zh/appendix/disputesEnumeration', 'Enumeration'],
                ['/v4/developer/zh/appendix/APMList', 'Alternative Payment Methods'],
                ['/v4/developer/zh/appendix/lang', 'Locale'],
                {
                    title: 'Professional Terms',
                    lang: 'en-US',
                    collapsable: true,
                    children: [
                        ['/v4/developer/zh/appendix/accId', 'accId'],
                        ['/v4/developer/zh/appendix/clientId', 'clientId'],
                        ['/v4/developer/zh/appendix/secret', 'secret'],
                        ['/v4/developer/zh/appendix/transactionId', 'transactionId'],
                    ]
                },
            ],
        }
    ],
}


