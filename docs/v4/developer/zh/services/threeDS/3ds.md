---
title: 3ds
date: 2023-05-08 22:21:28
permalink: /pages/c62136/
---


>This document is only applicable for end-to-end integration. The Cashier JS-SDK has already integrated 3D Secure internally, so there is no need for additional integration.

## PingPongCheckout supports various 3DS decisioning solutions

| executeThreeD |                                Supported in the Checkout                                 | Sever-to-Server Mode Supported                                   | Description                                     |
|:--------------|:--------------------------------------------------------------------:|:-----------------------------------------------------------------|:------------------------------------------------|
| Y             |   <div style="width:28px"><img src="/v4/threeDS/check.svg" ></div>   | <div style="width:28px"><img src="/v4/threeDS/check.svg" ></div> | To enforce 3DS verification and utilize PingPongCheckout's 3DS solution             |
| depends       |   <div style="width:28px"><img src="/v4/threeDS/check.svg" ></div>   | <div style="width:28px"><img src="/v4/threeDS/check.svg" ></div> | The decision of whether to perform 3DS verification is determined by PingPongCheckout's risk assessment and decision-making process             |
| external      | <div style="width:28px"><img src="/v4/threeDS/unChecked.svg" ></div> | <div style="width:28px"><img src="/v4/threeDS/check.svg" ></div> | It is required to perform 3DS verification, and the merchant will initiate the 3DS process. The 3DS result will then be passed to PingPongCheckout for further processing. |

<div><img style="width: 100%;height: 100%" src="/v4/threeDS/3dsDecisionSchemes.png"></div>

The value of the executeThreeD parameter in the "Unified Order" API call determines the action to be taken

<div><v4-Checkout-threeDS-3DSDecisions/></div>


## 3D Secure Authentication Process

### Frictionless

In the Frictionless flow, the buyer, issuer, and card scheme exchange all necessary information in the background through passive authentication using the buyer's device fingerprint. The transaction is completed without any further interaction from the buyer.
<div><img style="width: 100%;height: 100%" src="/v4/threeDS/frictionlessFlow.png"></div>

### Challenge

In the Challenge flow, the bank or payment processor automatically creates a 3D Secure challenge page for the cardholder, requiring additional interaction from the buyer. The issuing bank ensures transaction security through methods such as biometric recognition, two-factor authentication, or SCA (Strong Customer Authentication) based on similar authentication factors.

Once the cardholder completes the identity verification steps on the 3D Secure challenge page, their identity is verified, and the bank or payment processor can decide whether to approve the transaction.

<div><img style="width: 100%;height: 100%" src="/v4/threeDS/challengeFlow.png"></div>
