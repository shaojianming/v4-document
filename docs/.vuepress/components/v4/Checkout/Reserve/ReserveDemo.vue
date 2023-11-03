<template>
  <div id="container">
    <div class="form">
      <el-form :inline="true" :model="requestData" label-position="right" label-width="160px" label-suffix=":">
        <el-form-item label="收单方式">
          <el-select v-model="requestData.acquirerType" placeholder="acquirerType">
            <el-option
                v-for="item in acquirerTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="支付工具">
          <el-select v-model="requestData.paymentBrand" filterable @change="paymentBrandChange"
                     placeholder="paymentBrand" clearable>
            <el-option
                v-for="item in paymentBrands"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="支付币种">
          <el-select v-model="requestData.currency"   placeholder="currency" filterable  >
            <el-option
                v-for="item in currencies"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="支付类型">
            <el-select v-model="requestData.payType" filterable placeholder="payType">
              <el-option
                  v-for="item in payTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="requestData.amount"></el-input>
        </el-form-item>
        <el-form-item label="shopperResultUrl">
          <el-input v-model="requestData.shopperResultUrl"></el-input>
        </el-form-item>
        <el-form-item label="notificationUrl">
          <el-input v-model="requestData.notificationUrl"></el-input>
        </el-form-item>
      </el-form>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style="display: flex;justify-content: flex-end">
        <el-tooltip content="点击之后会请求API:/acquirer/payment,打开控制台可以查看签名过程信息" placement="top">
          <el-button type="primary" @click="onSubmit" :loading="isLoading">立即创建</el-button>
        </el-tooltip>
        <el-tooltip content="点击之后可以查看请求信息和响应信息" placement="top">
          <el-button type="primary" @click="drawer = true">查看数据</el-button>
        </el-tooltip>
        <el-tooltip content="请在触发立即创建并且获得响应信息后点击，点击之后前往本地支付页面" placement="top">
          <el-button type="primary" @click="jump" :disabled="isDisabled">前往支付</el-button>
        </el-tooltip>
        <el-tooltip content="点击之后刷新订单数据，可以重新请求" placement="top">
          <el-button type="primary" @click="refreshOrder" >刷新订单</el-button>
        </el-tooltip>
      </div>
      <div class="drawer">
        <el-drawer
            title="请求和响应数据"
            :visible.sync="drawer"
            direction="rtl"
        >
          <template>
            <el-tabs v-model="activeName" type="border-card">
              <el-tab-pane label="request" name="first">
                <component v-if="dynamicComponent" :is="dynamicComponent" copyable :value="requestData" :expanded="true"
                           :expand-depth="5" boxed sort>

                </component>
              </el-tab-pane>
              <el-tab-pane label="response" name="second">
                <component v-if="dynamicComponent" :is="dynamicComponent" copyable :value="responseData" :expanded="true"
                           boxed sort>

                </component>
              </el-tab-pane>
            </el-tabs>
          </template>
        </el-drawer>
      </div>

    </div>
  </div>
</template>

<style>

</style>

<script>

import signUtil from "/utils/signUtil";
import service from '/utils/request';


export default {
  name: "UniformlyDemo.vue",
  created() {
    this.refreshOrder();
  },
  mounted() {
    import('vue-json-viewer').then(module => {
      // use code
      this.dynamicComponent = module.default
    })
  },
  data() {
    return {
      dynamicComponent: null,
      drawer: false,
      activeName: 'first',
      salt: "CB5B634C617453B10FEC4479",
      responseData: "",
      isDisabled: true,
      isLoading: false,
      requestData: {
        "acquirerType": "CHECKOUT",
        "requestId": "PShop20220915173138FH11231612",
        "accId": "2022090211352610185423",
        "amount": "10000",
        "merchantUserId": "12604896051315",
        "currency": "VND",
        "merchantTransactionId": "PShop20220915173138FH1241512",
        "paymentType": "SALE",
        "notificationUrl": "https://test-acquirerpay.pingpongx.com/qa/notify",
        "shopperCancelUrl": "https://www.example.com",
        "shopperResultUrl": "https://test-acquirerpay.pingpongx.com/qa/result.html",
        "threeDSecure": "N",
        "signType": "SHA256",
        "sign": "5051EE220D42CACB85097C689A89EDAD",
        "paymentBrand": "MoMo Wallet",
        "payType": "APM",
        "customer": {
          "acquisitionChannel": "SEARCH_ENGINE",
          "customerId": "20191201001",
          "firstOrder": "N",
          "identificationId": "",
          "identificationType": "ID",
          "lastPayTime": "201905120330",
          "loginIp": "222.126.52.24",
          "loginTime": "201912010032",
          "middleName": "von",
          "nonMemberOrder": "N",
          "orderCountry": "US",
          "orderIp": "222.126.52.23",
          "orderTime": "20191201001",
          "payCountry": "US",
          "payIp": "222.126.52.25",
          "phone": "18301770495",
          "preferentialOrder": "Y",
          "registerCountry": "US",
          "registerIp": "222.126.52.26",
          "registerRange": "3",
          "registerTerminal": "PC",
          "registerTime": "20191201122000",
          "registerUserEmail": "test@pingpongx.com"
        },
        "device": {
          "fingerprintId": "sad",
          "orderTerminal": "01"
        },
        "goods": [
          {
            "averageUnitPrice": "18.64",
            "description": "Colorful macaron",
            "name": "Macaron",
            "number": "1",
            "sku": "20191201331",
            "virtualProduct": "N"
          },
          {
            "averageUnitPrice": "996.14",
            "description": "Naruto Shikamaru 107CM",
            "name": "Clay",
            "number": "1",
            "sku": "20191201223",
            "virtualProduct": "N"
          }
        ]
      },
      acquirerTypes: [
        {
          label: "收银台",
          value: "CHECKOUT",
        },
        {
          label: "直接支付",
          value: "PAY",
        },
      ],
      paymentBrands: [
        {
          label: "VTC Pay",
          value: "VTC Pay",
          accId: "2022090211352610185423",
          salt: "CB5B634C617453B10FEC4479",
        },
        {
          label: "MPay",
          value: "MPay",
          accId: "",
          salt: "",
        },
        {
          label: "ZaloPay",
          value: "ZaloPay",
          accId: "2022090211352610185423",
          salt: "CB5B634C617453B10FEC4479",
        },
        {
          label: "MoMo Wallet",
          value: "MoMo Wallet",
          accId: "2022090211352610185423",
          salt: "CB5B634C617453B10FEC4479",
        },
        {
          label: "VINID",
          value: "VINID",
          accId: "2022090211352610185423",
          salt: "CB5B634C617453B10FEC4479",
        },
        {
          label: "Shopeepay Wallet",
          value: "Shopeepay Wallet",
          accId: "2022090211352610185423",
          salt: "CB5B634C617453B10FEC4479",
        },
        {
          label: "BIDV Bank",
          value: "BIDV Bank",
          accId: "",
          salt: "",
        },
        {
          label: "DongA Bank",
          value: "DongA Bank",
          accId: "",
          salt: "",
        },
        {
          label: "Agribank",
          value: "Agribank",
          accId: "",
          salt: "",
        },
        {
          label: "HD Bank",
          value: "HD Bank",
          accId: "",
          salt: "",
        },
        {
          label: "MSB Bank",
          value: "MSB BANK",
          accId: "",
          salt: "",
        },
        {
          label: "MB BANK",
          value: "MB BANK",
          accId: "",
          salt: "",
        },
        {
          label: "Nam A Bank",
          value: "Nam A Bank",
          accId: "",
          salt: "",
        },
        {
          label: "National Citizen Bank",
          value: "National Citizen Bank",
          accId: "",
          salt: "",
        },
        {
          label: "OCB Bank",
          value: "OCB Bank",
          accId: "",
          salt: "",
        },
        {
          label: "Ocean Bank",
          value: "Ocean Bank",
          accId: "",
          salt: "",
        },
        {
          label: "PVCombank",
          value: "PVCombank",
          accId: "",
          salt: "",
        },
        {
          label: "Sacombank",
          value: "Sacombank",
          accId: "",
          salt: "",
        },
        {
          label: "Seabank",
          value: "Seabank",
          accId: "",
          salt: "",
        },
        {
          label: "SHB Bank",
          value: "SHB Bank",
          accId: "",
          salt: "",
        },
        {
          label: "Techcombank",
          value: "Techcombank",
          accId: "",
          salt: "",
        },
        {
          label: "VIB Bank",
          value: "VIB Bank",
          accId: "",
          salt: "",
        },
        {
          label: "VietA Bank",
          value: "VietA Bank",
          accId: "",
          salt: "",
        },
        {
          label: "Vietcombank",
          value: "Vietcombank",
          accId: "",
          salt: "",
        },
        {
          label: "Viettin Bank",
          value: "Viettin Bank",
          accId: "",
          salt: "",
        },
        {
          label: "VPB Bank",
          value: "VPB Bank",
          accId: "",
          salt: "",
        },
        {
          label: "ViettelMoney",
          value: "ViettelMoney",
          accId: "",
          salt: "",
        },
        {
          label: "Line Pay",
          value: "Line Pay",
          accId: "",
          salt: "",
        },
        {
          label: "True Money",
          value: "True Money",
          accId: "",
          salt: "",
        },
        {
          label: "Prompt Pay QR",
          value: "Prompt Pay QR",
          accId: "",
          salt: "",
        },
        {
          label: "GrabPay TH QR",
          value: "GrabPay TH QR",
          accId: "",
          salt: "",
        },
        {
          label: "AirPay QR",
          value: "AirPay QR",
          accId: "",
          salt: "",
        }
      ],
      currencies: [
        {
          label: "AFN",
          value: "AFN",
        },
        {
          label: "DZD",
          value: "DZD",
        },
        {
          label: "ARS",
          value: "ARS",
        },
        {
          label: "AMD",
          value: "AMD",
        },
        {
          label: "AWG",
          value: "AWG",
        },
        {
          label: "AUD",
          value: "AUD",
        },
        {
          label: "BSD",
          value: "BSD",
        }, {
          label: "BHD",
          value: "BHD",
        }, {
          label: "THB",
          value: "THB",
        }, {
          label: "PAB",
          value: "PAB",
        }, {
          label: "BBD",
          value: "BBD",
        }, {
          label: "BYN",
          value: "BYN",
        }, {
          label: "BZD",
          value: "BZD",
        }, {
          label: "BMD",
          value: "BMD",
        }, {
          label: "VEF",
          value: "VEF",
        }, {
          label: "BOB",
          value: "BOB",
        }, {
          label: "BRL",
          value: "BRL",
        }, {
          label: "BND",
          value: "BND",
        }, {
          label: "BGN",
          value: "BGN",
        }, {
          label: "BIF",
          value: "BIF",
        }, {
          label: "CVE",
          value: "CVE",
        }, {
          label: "CAD",
          value: "CAD",
        }, {
          label: "KYD",
          value: "KYD",
        }, {
          label: "XOF",
          value: "XOF",
        }, {
          label: "XAF",
          value: "XAF",
        }, {
          label: "XPF",
          value: "XPF",
        }, {
          label: "CLP",
          value: "CLP",
        }, {
          label: "COP",
          value: "COP",
        }, {
          label: "KMF",
          value: "KMF",
        }, {
          label: "CDF",
          value: "CDF",
        }, {
          label: "BAM",
          value: "BAM",
        }, {
          label: "NIO",
          value: "NIO",
        }, {
          label: "CRC",
          value: "CRC",
        }, {
          label: "CUP",
          value: "CUP",
        }, {
          label: "CZK",
          value: "CZK",
        }, {
          label: "GMD",
          value: "GMD",
        }, {
          label: "DKK",
          value: "DKK",
        }, {
          label: "MKD",
          value: "MKD",
        }, {
          label: "DJF",
          value: "DJF",
        }, {
          label: "STD",
          value: "STD",
        },
        {
          label: "DOP",
          value: "DOP",
        }, {
          label: "VND",
          value: "VND",
        }, {
          label: "XCD",
          value: "XCD",
        }, {
          label: "EGP",
          value: "EGP",
        }, {
          label: "SVC",
          value: "SVC",
        }, {
          label: "ETB",
          value: "ETB",
        }, {
          label: "EUR",
          value: "EUR",
        }, {
          label: "FKP",
          value: "FKP",
        }, {
          label: "FJD",
          value: "FJD",
        }, {
          label: "HUF",
          value: "HUF",
        }, {
          label: "GHS",
          value: "GHS",
        }, {
          label: "GIP",
          value: "GIP",
        }, {
          label: "HTG",
          value: "HTG",
        }, {
          label: "PYG",
          value: "PYG",
        }, {
          label: "GNF",
          value: "GNF",
        }, {
          label: "GYD",
          value: "GYD",
        }, {
          label: "HKD",
          value: "HKD",
        }, {
          label: "UAH",
          value: "UAH",
        }, {
          label: "ISK",
          value: "ISK",
        }, {
          label: "INR",
          value: "INR",
        }, {
          label: "IRR",
          value: "IRR",
        }, {
          label: "IQD",
          value: "IQD",
        }, {
          label: "JMD",
          value: "JMD",
        }, {
          label: "JOD",
          value: "JOD",
        }, {
          label: "KES",
          value: "KES",
        }, {
          label: "PGK",
          value: "PGK",
        }, {
          label: "LAK",
          value: "LAK",
        },
        {
          label: "HRK",
          value: "HRK",
        }, {
          label: "KWD",
          value: "KWD",
        }, {
          label: "AOA",
          value: "AOA",
        }, {
          label: "MMK",
          value: "MMK",
        }, {
          label: "GEL",
          value: "GEL",
        }, {
          label: "LBP",
          value: "LBP",
        }, {
          label: "ALL",
          value: "ALL",
        }, {
          label: "HNL",
          value: "HNL",
        }, {
          label: "SLL",
          value: "SLL",
        }, {
          label: "LRD",
          value: "LRD",
        },
        {
          label: "LYD",
          value: "LYD",
        }, {
          label: "SZL",
          value: "SZL",
        }, {
          label: "LSL",
          value: "LSL",
        }, {
          label: "MGA",
          value: "MGA",
        }, {
          label: "MWK",
          value: "MWK",
        }, {
          label: "MYR",
          value: "MYR",
        }, {
          label: "MUR",
          value: "MUR",
        }, {
          label: "MXN",
          value: "MXN",
        }, {
          label: "MXV",
          value: "MXV",
        }, {
          label: "MDL",
          value: "MDL",
        },
        {
          label: "MAD",
          value: "MAD",
        },
        {
          label: "MZN",
          value: "MZN",
        },
        {
          label: "BOV",
          value: "BOV",
        },
        {
          label: "NGN",
          value: "NGN",
        },
        {
          label: "ERN",
          value: "ERN",
        },
        {
          label: "NAD",
          value: "NAD",
        },
        {
          label: "NPR",
          value: "NPR",
        },
        {
          label: "ANG",
          value: "ANG",
        },
        {
          label: "ILS",
          value: "ILS",
        },
        {
          label: "TWD",
          value: "TWD",
        },
        {
          label: "NZD",
          value: "NZD",
        },
        {
          label: "BTN",
          value: "BTN",
        },
        {
          label: "KPW",
          value: "KPW",
        },
        {
          label: "NOK",
          value: "NOK",
        },
        {
          label: "MRO",
          value: "MRO",
        },
        {
          label: "TOP",
          value: "TOP",
        },
        {
          label: "PKR",
          value: "PKR",
        },
        {
          label: "MOP",
          value: "MOP",
        },
        {
          label: "CUC",
          value: "CUC",
        },
        {
          label: "UYU",
          value: "UYU",
        },
        {
          label: "PHP",
          value: "PHP",
        },
        {
          label: "GBP",
          value: "GBP",
        },
        {
          label: "BWP",
          value: "BWP",
        },
        {
          label: "QAR",
          value: "QAR",
        },
        {
          label: "GTQ",
          value: "GTQ",
        }, {
          label: "ZAR",
          value: "ZAR",
        }, {
          label: "OMR",
          value: "OMR",
        }, {
          label: "KHR",
          value: "KHR",
        }, {
          label: "RON",
          value: "RON",
        }, {
          label: "MVR",
          value: "MVR",
        },
        {
          label: "IDR",
          value: "IDR",
        }, {
          label: "RUB",
          value: "RUB",
        }, {
          label: "RWF",
          value: "RWF",
        }, {
          label: "SHP",
          value: "SHP",
        }, {
          label: "SAR",
          value: "SAR",
        }, {
          label: "RSD",
          value: "RSD",
        }, {
          label: "SCR",
          value: "SCR",
        }, {
          label: "SGD",
          value: "SGD",
        }, {
          label: "PEN",
          value: "PEN",
        }, {
          label: "SBD",
          value: "SBD",
        }, {
          label: "KGS",
          value: "KGS",
        }, {
          label: "SOS",
          value: "SOS",
        }, {
          label: "TJS",
          value: "TJS",
        }, {
          label: "SSP",
          value: "SSP",
        }, {
          label: "LKR",
          value: "LKR",
        }, {
          label: "SDG",
          value: "SDG",
        }, {
          label: "SRD",
          value: "SRD",
        }, {
          label: "SEK",
          value: "SEK",
        }, {
          label: "CHF",
          value: "CHF",
        }, {
          label: "SYP",
          value: "SYP",
        }, {
          label: "BDT",
          value: "BDT",
        }, {
          label: "WST",
          value: "WST",
        }, {
          label: "TZS",
          value: "TZS",
        }, {
          label: "KZT",
          value: "KZT",
        }, {
          label: "TTD",
          value: "TTD",
        }, {
          label: "MNT",
          value: "MNT",
        }, {
          label: "TND",
          value: "TND",
        }, {
          label: "TRY",
          value: "TRY",
        }, {
          label: "TMT",
          value: "TMT",
        }, {
          label: "AED",
          value: "AED",
        }, {
          label: "UGX",
          value: "UGX",
        }, {
          label: "CLF",
          value: "CLF",
        }, {
          label: "COU",
          value: "COU",
        }, {
          label: "UYI",
          value: "UYI",
        }, {
          label: "USD",
          value: "USD",
        }, {
          label: "USN",
          value: "USN",
        }, {
          label: "UZS",
          value: "UZS",
        }, {
          label: "CHE",
          value: "CHE",
        }, {
          label: "CHW",
          value: "CHW",
        }, {
          label: "KRW",
          value: "KRW",
        }, {
          label: "YER",
          value: "YER",
        }, {
          label: "CNY",
          value: "CNY",
        }, {
          label: "JPY",
          value: "JPY",
        }, {
          label: "ZMW",
          value: "ZMW",
        }, {
          label: "ZWL",
          value: "ZWL",
        }, {
          label: "PLN",
          value: "PLN",
        }
      ],
      payTypes:[
        {
          label: "信用卡支付",
          value: "CREDIT",
        },
        {
          label: "本地支付",
          value: "APM",
        },
      ]
    }
  },
  methods: {
    onSubmit() {
      this.sign();
      this.requestServer();

    },
    sign() {
      this.requestData.sign = signUtil.sign(this.requestData, this.salt);
    },
    requestServer() {
      this.isLoading = true;
      service.post("https://sandbox-acquirer-payment.pingpongx.com/acquirer/payment", this.requestData)
          .then((response) => {
            this.isLoading = false;
            if (response.code === '000000' ||response.code==="001000"|| response.code === '002000') {
              this.responseData = response;
              this.isShow();
            }else {
              this.$message.error(response.description);
            }
          });
    },
    paymentBrandChange() {
      this.paymentBrands.forEach((item) => {
        if (item.value === this.requestData.paymentBrand) {
          this.requestData.accId = item.accId
          this.salt = item.salt
        }
      });
    },
    jump() {
      window.open(this.responseData.paymentRedirectUrl);
    },
    isShow() {
      if (this.responseData != null && this.responseData.paymentRedirectUrl != null && this.responseData.paymentRedirectUrl != "") {
        this.isDisabled = false;
        return;
      }
      this.isDisabled = true;
    },
    refreshOrder(){
      this.requestData.requestId = Date.now();
      this.requestData.merchantTransactionId = "PCD"+Date.now();
      this.requestData.amount = Math.floor(Math.random()*10000+1)
    }
  }
}
</script>

<style scoped>

</style>