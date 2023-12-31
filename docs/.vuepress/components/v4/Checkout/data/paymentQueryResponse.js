export default {
    data: [
        {
            "id": 1,
            "value": "transactionId",
            "type": "String",
            "required": "M",
            "desc": "PingPong Transaction Number "
        },
        {
            "id": 2,
            "value": "merchantTransactionId",
            "type": "String(64)",
            "required": "M",
            "desc": "Merchant Website Transaction Number "
        },
        {
            "id": 3,
            "value": "captureDelayHours",
            "type": "int",
            "required": "C",
            "desc": "Auto Capture: <ul><li>0 means to capture immediately</li><li>-1 means manual capture, after successfully calling the Unified Order API, you still need to call <a href='/pages/b110ca/' target='_blank'>Pre-Authorization Confirmation</a>. Local payment does not support this option.</li></ul>"
        },
        {
            "id": 4,
            "value": "currency",
            "type": "String(3)",
            "required": "M",
            "desc": "<a href='/pages/3c0bdf/' target='_blank'>Transaction currency</a>"
        },
        {
            "id": 5,
            "value": "amount",
            "type": "String(12)",
            "required": "M",
            "desc": "<a href='/pages/3c0bdf/' target='_blank'>transaction amount</a>"
        },
        {
            "id": 6,
            "value": "transactionTime",
            "type": "String(64)",
            "required": "M",
            "desc": "Transaction initiation time, timestamp "
        },
        {
            "id": 7,
            "value": "transactionEndingTime",
            "type": "String(64)",
            "required": "M",
            "desc": "Transaction finalization time, timestamp"
        },

        {
            "id": 8,
            "value": "status",
            "type": "String(32)",
            "desc": "Transaction status<a href='/pages/59d103/' target='_blank'>View Detail</a> " +
                "<li>INIT</li>" +
                "<li>PROCESSING</li>"+
                "<li>SUCCESS</li>" +
                "<li>FAILED</li>" +
                "<li>AUTH_SUCCESS</li>" +
                "<li>CANCEL</li>" +
                "<li>CLOSED</li>",
            "required": "M"
        },
        {
            "id": 9,
            "value": "remark",
            "type": "String(255)",
            "required": "O",
            "desc": " Merchant extension field, can be used to specify specific parameters, and will be returned in the response body as is"
        },
        {
            "id": 10,
            "value": "payResultUrl",
            "type": "String(255)",
            "required": "C",
            "desc": "Merchant-defined URL to receive the result of redirection. For 3DS verification, bank online transfers, virtual wallets, and similar payment methods, the final redirection will be made to the merchant-specified page address"
        },
        {
            "id": 21,
            "value": "issuerInfo",
            "type": "Object",
            "required": "O",
            "desc": "Bank Response",
            "children": [
                {
                    "id": 2101,
                    "value": "issuerResultCode",
                    "type": "String",
                    "required": "O",
                    "desc": "Bank Response Code"
                },
                {
                    "id": 2102,
                    "value": "issuerResultMsg",
                    "type": "String",
                    "required": "O",
                    "desc": "Bank Response Message"
                },
            ]
        },
        {
            "id": 22,
            "value": "token",
            "type": "String(64)",
            "required": "C",
            "desc": "Can be used for Quick Pay or One-Click Payment, Please view<a href='/pages/5f7027/' target='_blank'> Quick Pay Details</a>"
        },
        {
            "id": 11,
            "value": "threeDContinue",
            "type": "String(32)",
            "required": "C",
            "desc": "Do you need a 3DS (Three-Domain Secure) verification processing for merchants integrating with anti-fraud plugins：<br/><ul><li>true</li><li>false</li></ul>"
        },
        {
            "id": 12,
            "value": "threeDUnionParams",
            "type": "Object",
            "required": "C",
            "desc": "The collection of 3DS verification parameters should be passed as the return value of this parameter when a transaction requires 3DS verification processing. You need to pass this parameter to the function specified in PingPong's plugin JavaScript code. This is applicable for merchants integrating with anti-fraud plugins"
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
            "desc": "exchanged Currency"
        },
        {
            "id": 13,
            "value": "paymentMethod",
            "type": "Object",
            "required": "O",
            "desc": "paymentMethod Types And Detail",
            "children": [
                {
                    "id": 161,
                    "value": "type",
                    "type": "String(32)",
                    "required": "M",
                    "desc": "paymentMethod：" +
                        "<ul>" +
                        "<li>scheme (International Credit Card Payment)</li>" +
                        "<li>Local payment methods </li>" +
                        "</ul>"
                },
            ]
        },
        {
            "id": 14,
            "value": "requestId",
            "type": "String(64)",
            "required": "M",
            "desc": "Unique Request ID, globally unique "
        },
        {
            "id": 15,
            "value": "resultCode",
            "type": "String(6)",
            "required": "C",
            "desc": "Status Result Code"
        },
        {
            "id": 16,
            "value": "resultDescription",
            "type": "String(500)",
            "required": "C",
            "desc": "Status Result Description"
        },
        {
            "id": 18,
            "value": "cardInfo",
            "type": "Object",
            "required": "O",
            "desc": "Credit Card Info",
            "children": [
                {
                    "id": 181,
                    "value": "cardLevel",
                    "type": "String(32)",
                    "required": "M",
                    "desc": "cardLevel"
                },
                {
                    "id": 182,
                    "value": "cardType",
                    "type": "String",
                    "required": "M",
                    "desc": "<ul>" +
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
                    "desc": "firstName"
                },
                {
                    "id": 184,
                    "value": "lastName",
                    "type": "String",
                    "required": "M",
                    "desc": "lastName"
                },
                {
                    "id": 185,
                    "value": "firstSixDigits",
                    "type": "String(12)",
                    "required": "M",
                    "desc": "First 6 digits of the card number  "
                },
                {
                    "id": 186,
                    "value": "lastFourDigits",
                    "type": "String(12)",
                    "required": "M",
                    "desc": "Last 4 digits of the card number"
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
                    "desc": "Issuing country"
                },
                {
                    "id": 189,
                    "value": "issuringBank",
                    "type": "String",
                    "required": "M",
                    "desc": "Issuing bank "
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
                    "desc": " Card brand：VISA / Mastercard / American Express/ JCB / Discover   "
                }
            ]
        },
        {
            "id": 19,
            "value": "threeDSInfo",
            "type": "Object",
            "required": "O",
            "desc": "3ds Parameters",
            "children": [
                {
                    "id": 191,
                    "value": "cavv",
                    "type": "String",
                    "required": "O",
                    "desc": "cavv"
                },
                {
                    "id": 192,
                    "value": "authenticationResult",
                    "type": "String",
                    "required": "O",
                    "desc": "3DS Verification Result, with the following enumerated values:<ul><li>Y: Authentication successful</li><li>N: Authentication failed</li><li>U: Authentication could not be performed</li><li>C: Challenge requested</li><li>A: Attempted authentication, but could not be verified</li><li>D: Challenge requested and attempted authentication</li><li>R: Recurring transaction</li></ul>"
                },
                {
                    "id": 193,
                    "value": "liabilityShift",
                    "type": "String",
                    "required": "O",
                    "desc": "Responsibility Transfer"
                },
                {
                    "id": 194,
                    "value": "eci",
                    "type": "String",
                    "required": "O",
                    "desc": "This field is only returned for transactions involving Visa, American Express, ICB, Diners Club, and Discover. When the authentication fails, this field will be empty. It can contain one of the following values:<ul><li>01: Attempted authentication (Mastercard)</li><li>02: Successful authentication (Mastercard)</li><li>05: Successful authentication (Visa, American Express, JCB, Diners Club, and Discover)</li><li>06: Attempted authentication (Visa, American Express, JCB, Diners Club, and Discover)</li></ul>"
                },
                {
                    "id": 195,
                    "value": "authentication3DSecure",
                    "type": "String",
                    "required": "M",
                    "desc": "threeDSServerTransactionId / directoryServerTransactionId "
                },
                {
                    "id": 196,
                    "value": "specificationVersion",
                    "type": "String",
                    "required": "M",
                    "desc": "3DS version"
                }
             ]
        },
        {
            "id": 20,
            "value": "authenticationInfo",
            "type": "Object",
            "required": "O",
            "desc": "Authentication Information ",
            "children": [
                {
                    "id": 201,
                    "value": "avsResult",
                    "type": "String",
                    "required": "O",
                    "desc": "<ul>"+
                        "<li>Unknown</li>"+
                        "<li>Address matches, but the postal code does not match.</li>"+
                        "<li>Neither postal code nor address match.</li>"+
                        "<li>Neither postal code nor address match.</li>"+
                        "<li>AVS unavailable.</li>"+
                        "<li>AVS not supported for this card type.</li>"+
                        "<li>Postal code matches, but the address does not match.</li>"+
                        "<li>Both postal code and address match.</li>"+
                        "<li>Address matches, postal code not checked.</li>"+
                        "<li>Postal code matches, address not checked.</li>"+
                        "<li>Neither postal code nor address were checked.</li>"+
                        "<li>Card member name and ZIP match</li>"+
                        "<li>Card member name and street address match</li>"+
                        "</ul>"
                },
                {
                    "id": 202,
                    "value": "cvvResult",
                    "type": "String",
                    "required": "O",
                    "desc": "CVV Verification Result"
                },
                {
                    "id": 203,
                    "value": "threeDSecure",
                    "type": "String",
                    "required": "O",
                    "desc": "3DS verification,Y/N"
                },
            ]
        }
    ]
}