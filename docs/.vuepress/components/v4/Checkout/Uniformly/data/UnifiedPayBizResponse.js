export default {
    data: [
        {
            "id": 1,
            "value": "transactionId",
            "type": "String",
            "required": "M",
            "desc": "PingPong Transaction Number"
        },
        {
            "id": 2,
            "value": "merchantTransactionId",
            "type": "String(64)",
            "required": "M",
            "desc": "Merchant Website Transaction Number"
        },
        {
            "id": 3,
            "value": "amount",
            "type": "String(12)",
            "required": "M",
            "desc": "Transaction amount. The number of decimal places and currency depend on the specific details mentioned in the appendix<a href='/pages/3c0bdf/' target='_blank'>Transaction currency </a>"
        },
        {
            "id": 4,
            "value": "transactionTime",
            "type": "String(64)",
            "required": "M",
            "desc": "Transaction initiation time,yyyyMMddHHmmss"
        },
        {
            "id": 5,
            "value": "transactionEndingTime",
            "type": "String(64)",
            "required": "M",
            "desc": "Transaction finalization time in timestamp format"
        },
        {
            "id": 6,
            "value": "currency",
            "type": "String(3)",
            "required": "M",
            "desc": "Transaction currency, following the ISO 4217 three-letter currency code. Please refer to the attachment for the supported currency codes<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a>"
        },
        {
            "id": 7,
            "value": "status",
            "type": "String(32)",
            "required": "M",
            "desc": "Transaction status：<a href='/pages/59d103/' target='_blank'>Status idempotent</a>" +
                "<ul><li>SUCCESS</li><li>FAILED</li><li>PROCESSING</li></ul>"
        },
        {
            "id": 8,
            "value": "remark",
            "type": "String(255)",
            "required": "O",
            "desc": "Merchant extension field, can be used to specify specific parameters, and will be returned in the response body as is"
        },
        {
            "id": 9,
            "value": "requestId",
            "type": "String(64)",
            "required": "M",
            "desc": "Unique request number, globally unique"
        },
        {
            "id": 10,
            "value": "issuerInfo",
            "type": "Object",
            "required": "O",
            "desc": "Bank Response",
            "children": [
                {
                    "id": 101,
                    "value": "issuerResultCode",
                    "type": "String",
                    "required": "O",
                    "desc": "Bank Response Code"
                },
                {
                    "id": 102,
                    "value": "issuerResultMsg",
                    "type": "String",
                    "required": "O",
                    "desc": "Bank Response Message"
                },
            ]
        },
        {
            "id": 23,
            "value": "exchangedAmount",
            "type": "String",
            "required": "O",
            "desc": "Exchange Amount"
        },
        {
            "id": 24,
            "value": "exchangedCurrency",
            "type": "String",
            "required": "O",
            "desc": "Exchanged Currency"
        },
        {
            "id": 11,
            "value": "token",
            "type": "String(64)",
            "required": "C",
            "desc": "Can be used for Quick Pay or One-Click Payment, Please view<a href='/pages/5f7027/' target='_blank'> Quick Pay Details</a>"
        },
        {
            "id": 12,
            "value": "captureDelayHours",
            "type": "int",
            "required": "C",
            "desc": " <ul>" +
                "<li>0 indicates immediate capture</li>" +
                "<li>-1 indicates manual capture. After a successful call to the Accept a Payment API, an additional call is required<a href='/pages/b110ca/' target='_blank'>Pre-authorization confirmation</a> ,Not supported for local payment</li>" +
                "</ul>"
        },
        {
            "id": 13,
            "value": "payResultUrl",
            "type": "String(255)",
            "required": "C",
            "desc": "Merchant-defined URL to receive the result of redirection. For 3DS verification, bank online transfers, virtual wallets, and similar payment methods, the final redirection will be made to the merchant-specified page address"
        },
        {
            "id": 14,
            "value": "threeDContinue",
            "type": "String(32)",
            "required": "C",
            "desc": "Whether 3DS is required (for merchants using risk control plugin integration):<ul><li>true</li><li>false</li></ul>"
        },
        {
            "id": 15,
            "value": "threeDUnionParams",
            "type": "Object",
            "required": "C",
            "desc": "Collection of 3DS verification parameters. When a transaction requires 3DS verification processing, pass the return value of this parameter to the function specified in the JavaScript plugin provided by PingPong (for merchants using risk control plugin integration) (English)"
        },
        {
            "id": 16,
            "value": "paymentMethod",
            "type": "Object",
            "required": "M",
            "desc": "Payment method type and the required details for the chosen payment method",
            "children": [
                {
                    "id": 161,
                    "value": "type",
                    "type": "String(32)",
                    "required": "M",
                    "desc": "Payment method: " +
                        "<ul>" +
                        "<li>Scheme: International Credit Card Payment</li>" +
                        "<li>Local payment methods. Available values:<a href='/pages/bd336f/' target='_blank'>Non-Hosted supported Alternative Payment Methods</a></li>" +
                        "</ul>"
                },
            ]
        },
        {
            "id": 17,
            "value": "action",
            "type": "Object",
            "required": "M",
            "desc": "Payment method type and the required detailed information",
            "children": [
                {
                    "id": 171,
                    "value": "type",
                    "type": "String(32)",
                    "required": "M",
                    "desc": "Local payment method result types:\n" +
                        "<ul>" +
                        "<li>QR_CODE: QR code string that needs to be manually converted into a QR code</li>" +
                        "<li>QR_URL: URL of the QR code image that can be directly displayed</li>" +
                        "<li>PAYMENT_REDIRECT_URL:Redirect URL for payment</li>" +
                        "</ul>"
                },
                {
                    "id": 172,
                    "value": "qrCode",
                    "type": "String(32)",
                    "required": "O",
                    "desc": "Local payment method - QR code string that needs to be manually converted into a QR code"
                },
                {
                    "id": 173,
                    "value": "qrUrl",
                    "type": "String",
                    "required": "O",
                    "desc": "Local payment method - URL of the QR code image that can be directly displayed"
                },
                {
                    "id": 174,
                    "value": "paymentRedirectUrl",
                    "type": "String",
                    "required": "O",
                    "desc": "Local payment method - Payment transaction redirection URL"
                },
            ]
        },
        {
            "id": 18,
            "value": "cardInfo",
            "type": "Object",
            "required": "O",
            "desc": "Credit card payment information",
            "children": [
                {
                    "id": 181,
                    "value": "cardLevel",
                    "type": "String(64)",
                    "required": "M",
                    "desc": "Card transaction - Card level"
                },
                {
                    "id": 182,
                    "value": "cardType",
                    "type": "String",
                    "required": "M",
                    "desc": "Card transaction - Card type, enumeration value:" +
                        "<ul>" +
                        "<li>DEBIT</li>" +
                        "<li>CREDIT</li>" +
                        "<li>CHARGE</li>" +
                        "<li>CARD</li>" +
                        "</ul>"
                },
                {
                    "id": 183,
                    "value": "firstName",
                    "type": "String",
                    "required": "M",
                    "desc": "Cardholder name, character type, excluding special characters"
                },
                {
                    "id": 184,
                    "value": "lastName",
                    "type": "String",
                    "required": "M",
                    "desc": "Cardholder last name, character type, excluding special characters"
                },
                {
                    "id": 185,
                    "value": "firstSixDigits",
                    "type": "String(12)",
                    "required": "M",
                    "desc": "First six digits of the card number"
                },
                {
                    "id": 186,
                    "value": "lastFourDigits",
                    "type": "String(12)",
                    "required": "M",
                    "desc": "Last four digits of the card number"
                },
                {
                    "id": 187,
                    "value": "ipCountry",
                    "type": "String(4)",
                    "required": "M",
                    "desc": "User transaction country"
                },
                {
                    "id": 188,
                    "value": "isoCountry",
                    "type": "String",
                    "required": "M",
                    "desc": "issuing country"
                },
                {
                    "id": 189,
                    "value": "issuringBank",
                    "type": "String",
                    "required": "M",
                    "desc": "card issuing bank"
                },
                {
                    "id": 190,
                    "value": "isoCountryA2",
                    "type": "String",
                    "required": "C",
                    "desc": "Country code, compliant with ISO 3166 standard"
                },
                {
                    "id": 200,
                    "value": "paymentBrand",
                    "type": "String",
                    "required": "M",
                    "desc": "Card transaction - Card brand：VISA / Mastercard / American Express/ JCB / Discover"
                }
            ]
        }
    ]
}