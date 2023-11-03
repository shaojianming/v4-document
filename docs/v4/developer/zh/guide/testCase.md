---
title: Test Case
date: 2022-06-07 12:47:58
permalink: /pages/3bfaab/
---

# Acceptance test scenarios

<div>
   <Common-Warring>
        <p>1.In the sandbox environment, parameters are not verified for transmission.</p>
        <p>2.Please make sure to provide accurate and complete information for the required parameters as stated in the documentation. Otherwise, it may affect the success rate of transactions.</p>
        <p>3.If you go live with critical parameters missing, it may result in a batch failure of transactions. It is crucial to ensure all essential parameters are properly configured before going live to avoid such issues！！！</p>
   </Common-Warring>
</div>


## Test Case


> Please use USD for transactions in the sandbox environment, as other currencies may not be configured and could result in transaction failures. Please make sure to set the order amount and currency to USD for testing purposes.
>

| no | test case                             | des                                               | operation                                                                                                                                                                        |
|----|---------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A  | Decimal Order Amount Testing          | Basic test                                        | Set the test product amount with decimal values                                                                                                                                  |
| B  | United States or Canada Order Testing | Basic test                                        | Set the shipping address to the United States or Canada                                                                                                                          |
| C  | Risk Order Verification               | Basic test                                        | Set the total payment amount to 2 USD and place two orders for both APPROVE and REJECT scenarios                                                                                 |
| D  | 3D Secure Order Verification          | If integrating risk control plugin                | Set accId and salt to 'sandbox-accId-B (for 3DS testing)', set the order amount to 3 USD, and place an order. It should trigger the 3D Secure challenge if everything goes well. |
| E  | Full Refund Testing                   | When integrating refund service                   | Perform a full refund                                                                                                                                                            |
| F  | Partial Refund Testing                | When integrating refund service                   | Perform a partial refund, refund twice on the same order                                                                                                                         |
| G  | Pre-Authorization Transaction         | If the merchant integrates pre-authorization mode | Set paymentType as AUTH, record transaction information after a successful transaction                                                                                           |
| H  | Pre-Authorization Confirmation        | If the merchant integrates pre-authorization mode | Set paymentType as CAPTURE, use the order from test case G for pre-authorization confirmation transaction, record transaction information after a successful transaction         |

