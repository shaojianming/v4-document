---
title: Asynchronous Notification
date: 2022-06-08 03:30:34
permalink: /pages/d0ddb3/
---

## Asynchronous notification Overview

First, the merchant configures the asynchronous callback notification Url address on their side.

- Whenever an event related to a transaction occurs(such as a successful transaction), the PingPongCheckOut notification service will create a JSON object containing the relevant data and information about the event.
- Then, the PingPongCheckOut notification service sends the JSON object via an HTTP POST request to the developer-configured callback notification Url. Upon receiving the callback notification, the merchant can perform the next step of their business process based on the asynchronous notification message.

This allows the merchant to receive real-time updates and take appropriate actions based on the received asynchronous notification.

The process can be described as follows：
<div style="width: 100%"><img style="width: 700px;height: 481px" :src="$withBase('/notify.png')"></div>




## Receiving Asynchronous Notifications

### Prepare a web service that supports HTTP POST
The PingPongCheckOut notification service will push JSON-formatted data via an HTTP POST request. Therefore, the web service provided by the developer needs to be able to receive and parse JSON data from HTTP POST requests and return the corresponding HTTP status code.
### Set up the callback notification address
Developers can configure the callback notification URL address through the notification Url parameter in the variousapiinput parameters.
> Asynchronous notifications can be affected by the network connectivity status of both parties involved. Therefore, please ensure that the notification address is publicly accessible over the internet

### Receive and Respond
For merchant transaction notification responses, the following conventions should be followed:

| Reception Result     | HTTP Code Conventions                           | Response Message Format Convention            |
|----------------------|-------------------------------------------------|-----------------------------------------------|
| Successful Reception | 200 <= `httpcode` < 300，for example：200、201、204 | No response message required                  |
 | Failed Reception     | `httpcode` > 300 or `httpcode` < 200            | Respond to any message                        |
| Failed Reception     | 200 <= `httpcode` < 300，for example：200、201、204 | A response message needs to be returned「FAIL」 |

> Retry Mechanism: In case of reception failure, the retry mechanism will be triggered. PingPongCheckout will resend the notification at increasing time intervals of 5s/5s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h. If a retry notification is successful, the retry process will be interrupted and will not continue.
<br/>
<div>
   <Common-Warring>
      <p>1. Before filling in the notifyUrl, the merchant needs to try the request and check the network connectivity by themselves.</p>
      <p>2. The notifyUrl should not carry parameters to avoid losing parameters. If it is necessary to carry parameters, please use the URL mode of pathInfo.</p>
      <p>3. The asynchronous notification code processing logic cannot perform login status verification.</p>
      <p>4. The same notification may be sent to the merchant system multiple times. The merchant system must be able to correctly handle duplicate notifications.</p>   
   </Common-Warring>
</div>
<br/>

## PingPongCheckout Callback Notification Server Information
If the merchant needs to configure their firewall before allowing the PingPongCheckout message notification service to push data, please set up the firewall according to the information below and add the IP address to the whitelist:

| Production Notify Sever IP | Sandbox Notify Sever IP |
|:---------------------------|:------------------------|
| 3.125.243.2                | 52.76.198.228           |
| 3.126.196.22               ||
| 18.195.199.34              ||


## Notification Message

<a href="/pages/5121a4/" target="_blank">Transaction Asynchronous Notification</a>
<br/>
<a href="/pages/71c886/" target="_blank">Refund Asynchronous Notification</a>
<br/>
<a href="/pages/ad0c0f/" target="_blank">Pre-authorization Confirmation Notification</a>
<br/>
<a href="/pages/f687d3/" target="_blank">Pre-authorization Cancellation Notification</a>






