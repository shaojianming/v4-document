---
title: Status Code
date: 2021-11-19 12:29:35
permalink: /pages/183abf/
---



# Status code

## Request successful or transaction successful


| Response code | Description            |
|:--------------|:-----------------------|
| 000000        | Transaction succeeded  |
| 001000        | Successful request     |
| 002000        | Transaction processing |



## Configuration validation exception


| Response code | Description              |
|:--------------|:-------------------------|
| 101000        | Merchant is disabled     |
| 101001        | Error on merchant config |
| 101002        | Error on 3DS config      |


##  Basic validation exception

| Response code | Description                    |
|:--------------|:-------------------------------|
| 102000        | Invalid or missing parameter   |
| 103000        | Invalid authentication         |
| 104000        | Invalid signature              |
| 105000        | Invalid or expired transaction |



## Business validation exception

| Response code | Description                                                          |
|:--------------|:---------------------------------------------------------------------|
| 106000        | Invalid transaction currency                                         |
| 106001        | Invalid card scheme                                                  |
| 106002        | Invalid country                                                      |
| 106003        | Invalid language                                                     |
| 107000        | Transaction failed (duplicated Transaction)                          |
| 107001        | Transaction failed (transaction does not exist)                      |
| 107002        | Transaction failed (original transaction  does not exist)            |
| 107003        | Transaction failed (original transaction  transactionType not match) |
| 108000        | Refund failed (refund amount exceeded original transaction)          |
| 108001        | Refund failed (out of the range)                                     |
| 108002        | Refund failed (already chargeBacked)                                 |
| 108003        | Refund failed (refund amount exceeded refund balance)                |
| 109000        | Capture failed(original transaction was reverse)                     |
| 109001        | Capture failed (capture amount  exceeded original transaction)       |
| 109002        | Reverse failed (original transaction was captured)                   |


##  Risk control exception

| Response code | Description                                      |
|:--------------|:----------------------------------------|
| 200000        | Transaction reject(high risk)           |
| 201000        | Transaction reject(suspected fraud)     |
| 202000        | Transaction reject(expired card)        |
| 202001        | Transaction reject(stolen or lost card) |
| 203000        | Error on the risk system                |


## Bank return exception

| Response code | Description                                                                                                |
|:--------------|:-----------------------------------------------------------------------------------------------------------|
| 300000        | Transaction declined (invalid card)                                                                        |
| 300001        | Transaction declined (invalid CVV)                                                                         |
| 300002        | Transaction declined (wrong expiry date)                                                                   |
| 300003        | Transaction declined (account holder not valid)                                                            |
| 301001        | Transaction declined (format error)                                                                        |
| 301002        | Transaction declined (Do not honor,Please contact the issuing bank to confirm the bank card payment limit) |
| 301003        | Transaction declined (limit exceeded)                                                                      |
| 301004        | Transaction declined (too many invalid tries)                                                              |
| 301005        | Transaction declined (maximum transaction frequency exceeded)                                              |
| 301006        | Transaction declined (merchants limit exceeded)                                                            |
| 301007        | Transaction declined (restricted card)                                                                     |
| 301008        | Transaction declined (expired card)                                                                        |
| 301009        | Transaction declined (card lost)                                                                           |
| 301010        | Transaction declined (Incorrect personal identification number)                                            |
| 301011        | Transaction declined (cardholder authentication verification failure)                                      |
| 301012        | Transaction declined (invalid amount)                                                                      |
| 301013        | Transaction declined (duplicate transaction)                                                               |
| 301015        | Transaction declined (Retry using authentication,such as EMV 3DS)                                          |
| 301099        | Transaction declined (other reason)                                                                        |
| 302000        | Transaction declined (High risk transaction)                                                               |
| 303000        | Refund failed(refund volume exceeded  or tx reversed or invalid workflow)                                  |
 

## 3DS verification exception

| Response code | Description                                                        |
|:--------------|:-------------------------------------------------------------------|
| 400000        | Transaction failed (3DS validation failed)                         |
| 400001        | Transaction failed(customer not participating in 3DSecure program) |


## System exception

| Response code | Description                                                                            |
|:--------------|:---------------------------------------------------------------------------------------|
| 500000        | Error on the internal gateway                                                          |
| 500001        | Error on the internal gateway(invoke internal service error)                           |
| 500002        | Error on the internal gateway(state machine error)                                     |
| 500003        | Error on the internal gateway(invalid workflow                                         |
| 500004        | Error on the internal gateway(workflow was terminated)                                 |
| 500005        | Error on the internal gateway(threeDSecure transaction error)                          |
| 500006        | Error on the internal gateway(analysis response error)                                 |
| 500008        | Error on the internal gateway (Channel Route Error - there is no available subChannel) |
| 500009        | Channel Route Error - there is no available merchantId                                 |
| 600000        | Error on the external system                                                           |
| 600001        | Request the external gateway error                                                     |
| 600002        | Received external gateway response timeout                                             |










