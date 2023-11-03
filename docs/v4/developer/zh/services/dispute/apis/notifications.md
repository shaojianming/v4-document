---
title: Webhook notifications
date: 2023-05-06 14:54:43
permalink: /pages/32b78f/
---


The notificationapiis a URL, and different notification types are distinguished based on eventCode. If the notification message fails, it will be retried 3 times. After 3 times of failure, it will no longer continue to notify. 
Merchants can query the chargeback status through the query interface.

 
## eventCodeList

| eventCode                                               | Description        |
|---------------------------------------------------------|-----------|
| <a href='/pages/b79e06/'>REQUEST_FOR_INFORMATION</a>    | Getting Request For Information Details Notification      |
| <a href='/pages/7abae3/'>NOTIFICATION_OF_CHARGEBACK</a> | Chargeback Order Notification      |
| <a href='/pages/78da7b/'>PREARBITRATION</a>             | Arbitration preparation notice.    |
| <a href='/pages/4539a8/'>CHARGEBACK_REVERSED</a>        | Chargeback Reversal Notification    |
| <a href='/pages/7c3d93/'>PREARBITRATION_WON</a>         | Arbitration Decision Notification |
| <a href='/pages/99ae0e/'>PREARBITRATION_LOST</a>        | Arbitration Decision Failed Notification |


  