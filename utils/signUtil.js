const sha256 = require('crypto-js/sha256')

const signUtil = {
    sign: (requestData, salt) => {
        let signScope = ["requestId", "accId", "clientId", "merchantTransactionId", "transactionId", "amount", "cardNum", "currency", "signType"];
        let needSignKeyMap = [];
        let needSignMap = [];
        for (let requestDataKey in requestData) {
            if (signScope.includes(requestDataKey)) {
                needSignKeyMap.push(requestDataKey);
            }
        }
        needSignKeyMap = needSignKeyMap.sort();
        needSignKeyMap.forEach((key) => {
            needSignMap[key] = requestData[key];
        })
        console.log("current request data:", requestData)
        console.log("Key value pairs within the signature range：", needSignMap);
        let OSignContent = new URLSearchParams();
        needSignKeyMap.forEach(function (key, idx, array) {
            OSignContent.append(key, needSignMap[key]);
        });
        let signContent = OSignContent.toString()
        signContent = salt + signContent;
        console.log("signContent:", signContent)
        let sign = sha256(signContent);
        // sign = base64.stringify(sign);
        sign = sign.toString();
        sign = sign.toUpperCase();
        console.log("sign:", sign)
        requestData.sign = sign;
        return sign;
    }


}

module.exports = signUtil