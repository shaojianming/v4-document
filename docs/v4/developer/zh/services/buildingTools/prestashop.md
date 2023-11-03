---
title: Prestashop-PPPay Plugin Installation
date: 2021-11-19 12:29:35
permalink: /pages/89889b/
---



# Prestashop-PPPay Plugin Installation

## Prerequisite for installation
> - Prestashop version =1.7.5.2
> - php version >=7.0
> - php-Extensions:curl  
> - chmod 777 /webRoot/Prestashop/var/logs

The following are optional settings. If a 504 error occurs, you can check the following options:

[ ] PHP ini execution timeout
[ ] Nginx or Apache execution timeout setting
  payResultUrl
---



<div>
<Common-Warring>
        <ul>
            <li>Order numbers under the same accId cannot be duplicated and must be monotonically increasing, otherwise it will cause problems with the order status.</li>
            <li>Orders from different databases cannot share the same accId.</li>
            <li>If there have been transactions under the accId, the starting value of the ids should be set to greater than the maximum current order id before installing the plugin.</li>
            <li>When resetting the database, store, or migrating the accId to another store, you should check the maximum order number under the accId.</li>
        </ul>
</Common-Warring>
</div>



### Installation process

1. Log in to the website backend
2. Select "Modules" > "Module Manager" > "Upload Plugin".
    
![image.png](/Prestashop/image-10.png)

3. Drag the plugin package into the upload dialog and wait for the unpacking and installation to complete.

![image.png](/Prestashop/image-11.png)

4. Wait for the installation to complete.

![image.png](/Prestashop/image-12.png)

5. After the installation is complete, a configuration button appears. Click on it to start configuring the merchant parameters.
   ![image.png](/Prestashop/image-13.png)
6. Merchant parameter configuration

```
Sandbox environment    https://sandbox-acquirer-payment.pingpongx.com        
Production environment    https://acquirer-payment.pingpongx.com
Sandbox store parameters 
       clientId: 2018092714313010016
       accId: 2018092714313010016291
       salt: F78BC96A55548B2319EE68E0
Sandbox environment test card number
        Card number：4200000000000000
        Expiration date：12/22
        cvv: 123
        The CVV must be 3 digits and only contain numbers
```

![image.png](/Prestashop/image-14.png)

7. Click on "Save" to save the merchant parameters. After installation is complete, you can test the payment process.



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


####  Environment address  

```
Sandbox environment    https://sandbox-acquirer-payment.pingpongx.com
Production environment    https://acquirer-payment.pingpongx.com
```
<br />



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

<br />

<a name="JnqxP"></a>

### Production environment configuration

<a name="nAQot"></a>

#### Review process

Receive notification from the docking group or business/client that the review has been passed. <br /> Login to [Merchant Back Office].(https://pay.pingpongx.com/aq/websiteList)
```shell
https://pay.pingpongx.com/aq/websiteList
```
<a name="RP9KE"></a>

#### Go to Website List
As shown in the figure, go to Group Management->View Details->Website List.
<a name="EKdMI"></a>
#### Group Management

> -   Select [Website Management] - [Group Management] from the menu bar to enter the group management page.
> -   This function allows current merchants to create new groups by clicking "Create Group"; the system will automatically provide a default group.
> -   The website is attached to the group.
> -   Click on "View Details" to enter the group details page, where you can modify the group name, view/copy the ID number, and view the websites under the group.
![image.png](/Prestashop/1629468928427-be88d189-e850-4479-a279-f853446fc371-20210821000959569.png)

#### Select Website
Based on the domain name of the current docking website, select the corresponding website from the list.

![image.png](/Prestashop/1629468928427-be88d189-e850-4479-a279-f853446fc371-9475791.png)

#### Get the accId of the website corresponding to the domain name

![image.png](/Prestashop/1629468994781-7e5ba639-38ca-4593-a6cb-a3d213d71bb0.png)

#### Get the Key

> Select [System Management] - [Key Management] from the menu bar to enter the key management page by default, where you can view the website keys.<br />After entering the key management, you can view all the keys corresponding to the websites. Click "Key Details" to view specific key fields.
> Keys with a status of "normal" can be used. When the status is "abnormal", it will not work and you can contact the relevant business personnel for processing.

![](/Prestashop/1629469253929-79e2ba85-c8c9-460f-bb79-e6b9301ae557-9475769.png)



