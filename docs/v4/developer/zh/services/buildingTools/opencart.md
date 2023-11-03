---
title: OpenCart-PPPay Plugin Installation Instructions
date: 2021-11-19 12:29:35
permalink: /pages/2ac081/
---


# OpenCart-PPPay Plugin Installation Instructions

## Prerequisites for Installation

> - opencart version 1.7，2.x，,3.x 
> - php version >=7.3
> - php Extensions:curl
> - chmod 777 /opencart_root/storage/logs


---


---

The following are non-essential settings. If a 504 error occurs, you can check the following options.

[ ] php ini execution timeout
[ ] Nginx or Apache set execution timeout
---


<div>
<Common-Warring>
        <ul>
            <li>Under the same accId, order numbers cannot be repeated and must be monotonically increasing, otherwise it will cause order status issues</li>
            <li>Orders from different databases cannot share the same accId</li>
            <li>If there have been transactions under the accId, the starting value of the ids should be set to greater than the maximum current order id before installing the plugin</li>
            <li>When resetting the database, store, or migrating the accId to another store, you should check the maximum order number under the accId</li>
        </ul>
</Common-Warring>
</div>

### Installation Process

#### Log in to the website backend

select`Extension->Installer` Click on "upload" to upload the plugin.

![image.png](/opencart/1629292078166-eb3edab4-8341-4667-8917-66c8477b671d-9476173.png)

As shown in the figure below, when this Modification takes effect, it can prevent emails from being sent before the order is confirmed.

![image.png](/opencart/1629292278420-322e1be0-8ea2-4d25-9e9c-29a9820b8e87.png)

#### As shown in the figure below, find the plugin in the plugin list.

![image.png](/opencart/1629292650702-ff44404c-b9b8-4090-a036-bf32beca35d1.png)

#### Click on "install" to install the plugin

![image.png](/opencart/1629292745283-0f647e99-e985-4e14-b0fc-8988b254f2f5.png)

#### Configure the plugin as shown in the figure below.

![image.png](/opencart/1629292956885-29af1e9c-f5b8-4aa2-8560-970951bb1ebe.png)

#### Enable the plugin.

![image.png](/opencart/1629292978126-c636fdf9-4ba1-4b71-bfc3-506d2da128f5.png)

### Environmental parameters

#### Sandbox store parameters

```
clientId: 2018092714313010016
accId: 2018092714313010016291
salt: F78BC96A55548B2319EE68E0   


```

#### Sandbox environment test card number

```
Card number：4200000000000000
Expiration date：12/22
cvv: 123
The CVV must be 3 digits and only contain numbers
3DS transaction card：4711100000000000
```

#### Environment address

```
Sandbox environment    https://sandbox-acquirer-payment.pingpongx.com
Production environment    https://acquirer-payment.pingpongx.com
```

### Integration process

#### Sandbox environment integration

1. Install the plugin according to the file.
2. After the plugin is installed, payment self-testing is required, and the following items should be completed:
- [ ] Screenshot of the page for entering card number
- [ ] Screenshot of the final redirect page after payment completion
- [ ] Send the screenshots to the docking group and notify technical support.



If there are any problems during the installation process, you can request technical support in the docking group.

---

Note:
> In the sandbox environment, no deduction will be made from the cardholder. Shipping after payment completion will result in losses, while not shipping may result in complaints from the cardholder. Therefore, during the docking period, operations should be cautious. After the docking test is passed, the payment channel should be immediately closed and wait for the production environment to go live before opening it again.


---

#### Production Environment Docking

1. After the sandbox environment docking is completed with technical support, the plugin will enter the website information and account review stage. After passing, production environment parameters will be issued.
2. After obtaining the production parameters, complete the following tasks:
- [ ] Replace the sandbox environment parameters with the production parameters.
- [ ] Self-test payment and complete screenshots.
- [ ] Prepare a $1 product link.
3. Send screenshots and product links, and notify technical support. The customer/technical support will initiate a real transaction test on the product link to verify the docking results and website payment availability.
4. After completing the real transaction test, the merchant needs to initiate a refund to verify the refund process.
5. After completing the above process, the website docking is completed, and the payment channel is officially launched and available for payment.

### Production environment configuration

#### Review process

Receive notification from the docking group or business/client that the review has been passed. [商户后台](https://pay.pingpongx.com/aq/websiteList)Receive notification from the docking group or business/client that the review has been passed. <br /> Login to [Merchant Back Office].(https://pay.pingpongx.com/aq/websiteList)
```shell
https://pay.pingpongx.com/aq/websiteList
```

#### Go to Website List

As shown in the figure below, go to Group Management->View Details->Website List.

#### Group Management

> -   Select [Website Management] - [Group Management] from the menu bar to enter the group management page.
> -   This function allows current merchants to create new groups by clicking "Create Group"; the system will automatically provide a default group.
> -   The website is attached to the group.
> -   Click on "View Details" to enter the group details page, where you can modify the group name, view/copy the ID number, and view the websites under the group.
![image.png](/opencart/1629468866673-c4edef47-9708-4141-959c-feab1b3f6c26-9476076.png)

#### Select Website

Based on the domain name of the current docking website, select the corresponding website from the list.
![image.png](/opencart/1629468928427-be88d189-e850-4479-a279-f853446fc371-20210821001452517-9476096.png)

#### Get the accId of the website corresponding to the domain name

![image.png](/opencart/1629468994781-7e5ba639-38ca-4593-a6cb-a3d213d71bb0-20210821001511062-9476120.png)

#### Get the Key

> Select [System Management] - [Key Management] from the menu bar to enter the key management page by default, where you can view the website keys.<br />After entering the key management, you can view all the keys corresponding to the websites. Click "Key Details" to view specific key fields.
> Keys with a status of "normal" can be used. When the status is "abnormal", it will not work and you can contact the relevant business personnel for processing.



![image.png](/opencart/1629469253929-79e2ba85-c8c9-460f-bb79-e6b9301ae557-20210821001534679.png)



