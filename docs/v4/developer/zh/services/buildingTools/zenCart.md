---
title: ZenCart-PPPay Plugin Installation
date: 2021-11-19 12:29:35
permalink: /pages/3e3080/
---



# ZenCart-PPPay 插件安装说明

### Prerequisite for installation

> - ZenCart version>=1.7
> - php version >=7.1
> - php Extensions:curl bcmath  
> - chmod 777 /zenCartRoot/logs 


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

### ZenCart Installation Path Rules
#### Unzip the file
After unzipping, the directory structure is as follows.
These four directories correspond to the directories under zenCart/includes.
![image.png](/zencart/1629463595657-e90b21d9-ff38-4fe4-8a28-b1941f5be7df.png)

### Installation Process

#### Login to FTP
Use an FTP tool to upload the plugin compression package to the server.
If you don't have an FTP tool, you can use the command line. Use PowerShell on Windows.
SFTP command - connect to remote server:
```shell
sftp username@ip
```


#### File Upload
If you don't have an FTP tool, use the SFTP command to upload files to the server:
```shell
put [local file address] [location of file storage on the server]
```
#### File Decompression
Use the unzip command.
ZenCart-PPPay has a complete directory structure. After the plugin is unzipped, it will have an includes/ directory. After being unzipped in the ZenCart root directory, the plugin files will automatically merge with the existing files.

### Configuration Process
#### Login to the website backend
Go to the page `Modules->Payments->PingPongCheckout`.
![image.png](/zencart/1629465534493-004c763c-8f10-4b14-b668-fb1ffcd7d3fa.png)

#### To install and enable a module
Select the PingPongCheckout module and click on "Install" to install it
![image.png](/zencart/1629465589636-05ede39b-fb30-4200-850c-042ce15b678f.png)

#### Configure the Environment
Configure the environment parameters required for payment integration as shown in the image below.
![image.png](/zencart/1629465797236-c80930dd-85e0-4550-9aed-e502bcb2e4c5.png)


#### Save the configuration
![image.png](/zencart/1629465944926-5bb4e5c2-cfa4-4b82-8b72-656d4a963a86.png)


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
Production environment   https://acquirer-payment.pingpongx.com
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

![image.png](/zencart/1629468866673-c4edef47-9708-4141-959c-feab1b3f6c26-20210821003240351.png)
#### Select Website
Based on the domain name of the current docking website, select the corresponding website from the list.

![image.png](/zencart/1629468928427-be88d189-e850-4479-a279-f853446fc371-20210821003248766.png)

#### Get the accId of the website corresponding to the domain name
![image.png](/zencart/1629468994781-7e5ba639-38ca-4593-a6cb-a3d213d71bb0-20210821003259460.png)

#### Get the Key
> Select [System Management] - [Key Management] from the menu bar to enter the key management page by default, where you can view the website keys.<br />After entering the key management, you can view all the keys corresponding to the websites. Click "Key Details" to view specific key fields.
> Keys with a status of "normal" can be used. When the status is "abnormal", it will not work and you can contact the relevant business personnel for processing.



![image.png](/zencart/1629469253929-79e2ba85-c8c9-460f-bb79-e6b9301ae557-20210821003307842.png)


