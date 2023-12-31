export default {
    data: [
        {
            "id": 1,
            "value": "paymentMethod",
            "type": "Object",
            "required": "M",
            "desc": "Type of payment method to be used and required details",
            "children": [
                {
                    "id": 10,
                    "value": "type",
                    "type": "string(32)",
                    "required": "M",
                    "desc": "Payment method：" +
                        "<ul>" +
                        "<li>scheme International credit card payment</li>" +
                        "<li>Optional local payment methods：<a href='/pages/d590e1/' target='_blank'> Alternative Payment Methods (APMs)</a></li>" +
                        "</ul>"
                },
                {
                    "id": 16,
                    "value": "scanCodeId",
                    "type": "String",
                    "required": "O",
                    "desc": "Payment code generated by the customer's mobile wallet client using a payment app. It is typically displayed in the form of a barcode or QR code. The merchant terminal scans the customer's mobile screen to retrieve the code."
                },
                {
                    "id": 193,
                    "value": "cardInfo",
                    "type": "Object",
                    "required": "O",
                    "desc": "Cardholder information, required for credit card payment and when not using binding",
                    "children": [
                        {
                            "id": 110,
                            "value": "number",
                            "type": "string(64)",
                            "required": "M",
                            "desc": "international credit card number"
                        },
                        {
                            "id": 111,
                            "value": "pin",
                            "type": "string(2)",
                            "required": "O",
                            "desc": "The first two digits of the local card PIN"
                        },
                        {
                            "id": 112,
                            "value": "holderFirstName",
                            "type": "string",
                            "required": "M",
                            "desc": "Cardholder name, character type, no special characters"
                        },
                        {
                            "id": 113,
                            "value": "holderLastName",
                            "type": "string",
                            "required": "M",
                            "desc": "Cardholder's surname, character type, no special characters"
                        },
                        {
                            "id": 114,
                            "value": "expireMonth",
                            "type": "string(2)",
                            "required": "M",
                            "desc": "Expiration month, 2-digit number"
                        },
                        {
                            "id": 115,
                            "value": "expireYear",
                            "type": "string(4)",
                            "required": "M",
                            "desc": "Expiration year, 4-digit number"
                        },
                        {
                            "id": 116,
                            "value": "cvv",
                            "type": "string(4)",
                            "required": "M",
                            "desc": "The credit card CVV code for Visa/MasterCard/JCB/Discover/Diners Club consists of three digits, while the CVV code for American Express may consist of four digits"
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "value": "jsGeneratedData",
            "type": "string(256)",
            "required": "C",
            "desc": "Obtain a JSON string containing browser-related information by embedding the frontend JS provided by PingPong and pass it to this parameter (for merchants using risk control plugins)"
        },
    ]
}









