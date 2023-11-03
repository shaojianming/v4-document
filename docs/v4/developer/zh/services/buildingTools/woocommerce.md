---
title: wordpress-PPPay Plugin Installation
date: 2021-11-19 12:29:35
permalink: /pages/b78815/
---


# wordpress-PPPay Plugin Installation

## Prerequisite for installation

> - wordpress version 3.x 5.6 5.7 
> - php version >=7.3
> - php-Extensions:curl  
> - chmod 777 /webRoot/wordpress/wp-content/log


---

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

Log in to the website backend.

Select Modules->Module Manager->Upload Plugin

After installation, select WooCommerce->Settings->Payments and open the plugin enable switch as shown below.

Click on "manage" in the figure below to open the plugin parameter configuration page.



![image-7](/wordpress/image-7.png)



As shown in the figure below, configure the operating environment parameters (sandbox, production), and finally click on "Save".

![image-8](/wordpress/image-8.png)



Configure the plugin log directory (note that the directory must be writable).

Login to the server via FTP and modify the code. In wp-config.php, find ABSPPATH and define your plugin log directory on the line after it. The permission of the log directory must be writable.

![image-9](/wordpress/image-9.png)

```php
/** The absolute path of the WordPress directory */
if ( !defined('ABSPATH') ){
    define('ABSPATH', dirname(__FILE__) . '/');
}

define('WP_TEMP_DIR', ABSPATH . 'wp-content/tmp');
```
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
Receive notification from the docking group or business/client that the review has been passed. <br /> Login to [Merchant Back Office].(https://pay.pingpongx.com/aq/websiteList)
```shell
https://pay.pingpongx.com/aq/websiteList
```
#### Go to Website List
As shown in the figure, go to Group Management->View Details->Website List.
#### Group Management
> -   Select [Website Management] - [Group Management] from the menu bar to enter the group management page.
> -   This function allows current merchants to create new groups by clicking "Create Group"; the system will automatically provide a default group.
> -   The website is attached to the group.
> -   Click on "View Details" to enter the group details page, where you can modify the group name, view/copy the ID number, and view the websites under the group.
![image-4](/wordpress/image-4.png)



#### Select Website

Based on the domain name of the current docking website, select the corresponding website from the list.


![image-5](/wordpress/image-5.png)



#### Get the accId of the website corresponding to the domain name
![image-6](/wordpress/image-6.png)




#### Get the Key
> Select [System Management] - [Key Management] from the menu bar to enter the key management page by default, where you can view the website keys.<br />After entering the key management, you can view all the keys corresponding to the websites. Click "Key Details" to view specific key fields.
> Keys with a status of "normal" can be used. When the status is "abnormal", it will not work and you can contact the relevant business personnel for processing.

![image](/wordpress/image-9475334.png)













