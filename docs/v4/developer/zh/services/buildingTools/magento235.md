---
title: Magento2.3.5-PPPay Plugin installation instructions
date: 2021-11-19 12:29:34
permalink: /pages/26e730/
---


# Magento2.3.5-PPPay Plugin installation instructions

## Prerequisites for installation

> - magento version>=2.3.5
> - php version >=7.1
> - php extionsion:curl bcmath  
> - chmod 777 /magentoRoot/var/log


---

The following are non-essential settings. If a 504 error occurs, check the following options:

- [ ] php.ini execution timeout
- [ ] nginx or apache set execution timeout

---

<div>
<Common-Warring>
        <ul>
            <li>Order numbers under the same accId must not be repeated and must be monotonically increasing, otherwise it may cause issues with order status.</li>
            <li>Orders from different databases cannot share the same accId.</li>
            <li>If there have been transactions under the accId, the starting value for the ID of new orders should be set to a value greater than the maximum ID of existing orders before installing the plugin.</li>
            <li>When resetting the database, migrating a store or accId to another store, checking the maximum value of order numbers under the accId is necessary.</li>
        </ul>
</Common-Warring>
</div>

## Magento Installation path rules
After extracting the plugin package, we first look at the registration.php file of the plugin archive.
```php
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Pppay_Pppay',
    __DIR__
);
```
The name of the plugin package is Pppay,The name of the plugin is Pppay。
Therefore, the installation directory is app/code/Pppay/Pppay/
Just extract the plugin code to app/code/Pppay/Pppay/ directory.
## Installation process
Pppay comes with a complete directory structure, and the plugin contains an app/ directory after extraction. In this case, there is no need to check the registration.php file, just extract it directly into the project root directory.

After installing the plugin via FTP, it needs to be enabled as it is disabled by default. To do so, SSH into the server and navigate to the Magento project root directory.

---

### 1.Viewing the list of plugins
```shell
php bin/magento module:status
```
This command displays the list of plugins, and at the end of the list we can see Pppay_Pppay with the following information:
```shell
...
List of disabled modules:
Pppay_Pppay
```
The plugin is disabled
**If you do not see your plugin in the list, it means that your plugin was not installed correctly, the installation directory is incorrect, or the system did not recognize it.**

---

### 2.Enabling the plugin and installing plugin data
```shell
php bin/magento module:enable --clear-static-content Pppay_Pppay
php bin/magento setup:upgrade
php bin/magento setup:di:compile
```

---

### 3.deploy

If you are in default mode or production mode, you need to deploy static content

```shell
php bin/magento cache:clean
php bin/magento cache:flush
php bin/magento setup:static-content:deploy -f
```
### 4.RuntimeException

If you encounter an error such as [RuntimeException], it means that the code is cached and you need to update the system.

```shell
php bin/magento maintenance:enable 

rm -rf var/di/* && rm -rf var/generation/* && rm -rf var/cache/* && rm -rf var/page_cache/* && rm -rf var/view_preprocessed/* && rm -rf pub/static/* && rm -rf generated/* && mkdir var/di

php bin/magento setup:upgrade && php bin/magento setup:di:compile

php bin/magento setup:static-content:deploy -f && php bin/magento indexer:reindex && php bin/magento maintenance:disable && php bin/magento cache:clean && php bin/magento cache:flush

```

---

## Configuration process

1.  Log in to the website backend 
1. Select`STORES->Configuration->Sales->Payments Method->Ping Pong Pay`
   ![image.png](/magento235/1629294143209-dcc8a72d-8755-4f26-a375-98f613267516.png)
1. Configure the parameters as shown in the following picture！
   [image.png](/magento235/1629294335798-7a795d99-5669-4423-ba7c-6fd1d3226dee.png)




---

## Environment parameters
### Sandbox store parameters
```
clientId: 2018092714313010016
accId: 2018092714313010016291
salt: F78BC96A55548B2319EE68E0   


```
### Sandbox environment test card number
```
Card number：4200000000000000
Expiration date：12/22
cvv: 123
The CVV must be 3 digits and only contain numbers
3DS transaction card：4711100000000000
```
###  Environment address  
```
Sandbox environment    https://sandbox-acquirer-payment.pingpongx.com
Production environment    https://acquirer-payment.pingpongx.com
```



---


### Integration process
#### Sandbox environment integration

Install the plugin according to the file.
After the plugin is installed, you need to perform payment self-testing and complete the following items:
[ ] Screenshot of the page where the card number is entered
[ ] Screenshot of the final redirect page after payment is completed
[ ] Send the screenshots to the docking group and notify technical support.



During the installation process, if you have any issues, you can request technical support in the docking group.

---

Note:

> In the sandbox environment, no debit will be made to the cardholder. Shipping after payment will cause a loss, and not shipping may result in cardholder complaints. Therefore, during the docking period, you need to operate with caution. After the integration test is passed, close the payment channel immediately and wait until the production environment is online before opening it.

---

## Production environment integration:

1. After the plugin has completed the first round of sandbox environment docking with technical support, it will enter the website information and account review stage. Once approved, production environment parameters will be provided.
2. After obtaining the production parameters, complete the following items:
- [ ] Replace the sandbox environment parameters with the production parameters.
- [ ] Perform payment self-testing and take screenshots.
- [ ] Prepare a link for a $1 product.
3. Send the screenshots and product link, and notify technical support. The customer/technical support will initiate a real transaction test on the product link to verify the docking result and website payment availability.
4. After the real transaction test is completed, the merchant needs to initiate a refund to verify the refund process.
5. After completing the above process, the website integration is finished, and the payment channel is officially launched and available for use.



## Production Environment Configuration
### Review Process
Receive notification from the integration group or business/client and approve the review.

Log in to the [Merchant Backoffice](https://pay.pingpongx.com/aq/websiteList)
```shell
https://pay.pingpongx.com/aq/websiteList
```
#### Go to the website list
As shown in the picture, go to Group Management -> View Details -> Website List.
#### Group Management
> - Select [Website Management] - [Group Management] from the menu bar to enter the Group Management page.
> - This function allows current merchants to click "Create Group" to create a new group; the system will provide a default group by default.
> - Websites are attached to groups.
> - Click "View Details" to enter the group details page, where you can modify the group name, view and copy the ID number, and view the websites under the group.

![image.png](/magento235/1629468866673-c4edef47-9708-4141-959c-feab1b3f6c26-20210821002721004.png)
#### Select Website

Select the corresponding website in the list based on the domain name of the current integrated website.
![image.png](/magento235/1629468928427-be88d189-e850-4479-a279-f853446fc371-20210821002730498.png)

#### Get the accId for the corresponding domain website
![image.png](/magento235/1629468994781-7e5ba639-38ca-4593-a6cb-a3d213d71bb0-20210821002739821.png)


#### Get the secret key.
> Select [System Management] - [Key Management] from the menu bar by default to enter the Key Management page, where you can view the website's secret key.
After entering Key Management, you can view the secret keys for all websites, and click "Key Details" to view specific key fields.
Keys with a status of "Normal" can be used, and when the status is "Abnormal", they will not be available and relevant business personnel should be contacted to resolve the issue.


![image.png](/magento235/1629469253929-79e2ba85-c8c9-460f-bb79-e6b9301ae557-20210821002748739.png)

---

### Common M2 Commands

#### Display Admin URI.
```shell
php bin/magento info:adminuri 
```
#### Uninstall Module.
比如插件名为Pppay_Pppay
```shell
php bin/magento module:uninstall --clear-static-content Pppay_Pppay 
```
#### Enable Module Plugin.
For example, if the plugin name is Pppay_Pppay
```shell
php bin/magento module:enable --clear-static-content Pppay_Pppay 
```
#### Disable Module Plugin.
For example, if the plugin name is Pppay_Pppay
```shell
php bin/magento module:disable --clear-static-content Pppay_Pppay 
```
#### Plugin List (Enabled and Disabled)
```shell
php bin/magento module:status 
```
#### Switch to Production Mode
```shell
php bin/magento deploy:mode:set production
```

#### Switch to Developer Mode
```bash
php bin/magento deploy:mode:set developer 
```
#### Code Compilation
Check if there are syntax errors in the code, such as whether the called class exists, etc.
```shell
bin/magento setup:di:compile  
```
#### Generate Static Files.

Generates the latest static files to pub/static. These static files are required in both default and production modes, otherwise an error will occur.
```shell
bin/magento setup:static-content:deploy -f 
```
It will automatically generate static files for the default language (usually English).

That is to say, the above command only generates static files for en_US. If you want to generate static files for both English and Chinese, you need to specify the language package name at the end of the command:
```
bin/magento setup:static-content:deploy en_US zh_Hans_CN -f
```


#### Update Magento Database Data.

Use this command to update any data related to database tables, such as custom tables added by plugins, added product attributes, or modified fields.
```shell
php bin/magento setup:upgrade
```



