export default {
    data: [
        {
            "id": 1,
            "value": "customer",
            "type": "Object",
            "required": "M",
            "desc": "Customer Information",
            "children": [
                {
                    "id": 10,
                    "value": "firstName",
                    "type": "string",
                    "required": "C",
                    "desc": "firstName"
                },
                {
                    "id": 11,
                    "value": "lastName",
                    "type": "string",
                    "required": "C",
                    "desc": "lastName"
                },
                {
                    "id": 12,
                    "value": "email",
                    "type": "string(128)",
                    "required": "M",
                    "desc": "email"
                },
                {
                    "id": 13,
                    "value": "phone",
                    "type": "string(20)",
                    "required": "C",
                    "desc": "User contact number"
                },
                {
                    "id": 14,
                    "value": "birthDate",
                    "type": "string(10)",
                    "required": "C",
                    "desc": "Date of Birth, formatted as YYYY-MM-DD"
                },
                {
                    "id": 15,
                    "value": "identificationType",
                    "type": "string(20)",
                    "required": "C",
                    "desc": "User ID type (required for certain countries, such as Mexico)"
                },
                {
                    "id": 16,
                    "value": "identificationId",
                    "type": "string(20)",
                    "required": "C",
                    "desc": "User ID number (required for certain countries, such as Mexico)"
                },
            ]
        },
        {
            "id": 2,
            "value": "goods",
            "type": "Array",
            "required": "M",
            "desc": "Commodity Information",
            "children": [
                {
                    "id": 20,
                    "value": "name",
                    "type": "string(500)",
                    "required": "M",
                    "desc": "Commodity name"
                },
                {
                    "id": 21,
                    "value": "description",
                    "type": "string(500)",
                    "required": "O",
                    "desc": "Commodity description"
                },
                {
                    "id": 22,
                    "value": "sku",
                    "type": "string(500)",
                    "required": "O",
                    "desc": "Commodity number, product SKU"
                },
                {
                    "id": 23,
                    "value": "unitPrice",
                    "type": "string(12)",
                    "required": "M",
                    "desc": "Commodity price"
                },
                {
                    "id": 24,
                    "value": "number",
                    "type": "string(12)",
                    "required": "M",
                    "desc": "Quantity of commodity purchased"
                },
                {
                    "id": 25,
                    "value": "imgUrl",
                    "type": "string(255)",
                    "required": "M",
                    "desc": "Commodity main image link"
                },
                {
                    "id": 26,
                    "value": "virtualProduct",
                    "type": "string(1)",
                    "required": "O",
                    "desc": "Whether it is a virtual product, virtual commodity (Y/N)"
                },
            ]
        },
        {
            "id": 3,
            "value": "shippingAddress",
            "type": "object",
            "required": "C",
            "desc": "Delivery Address Information. This field can be left blank for virtual items",
            "children": [
                {
                    "id": 30,
                    "value": "street",
                    "type": "string(256)",
                    "required": "M",
                    "desc": "Consignee street address"
                },
                {
                    "id": 31,
                    "value": "postcode",
                    "type": "string(16)",
                    "required": "M",
                    "desc": "Zip code"
                },
                {
                    "id": 32,
                    "value": "city",
                    "type": "string(50)",
                    "required": "M",
                    "desc": "Consignee city"
                },
                {
                    "id": 33,
                    "value": "state",
                    "type": "string(128)",
                    "required": "M",
                    "desc": "Consignee's province: the two-character code for the United States and Canada. It can be left blank for and some areas without provinces. For details, see Country Code"
                },
                {
                    "id": 34,
                    "value": "country",
                    "type": "string(64)",
                    "required": "M",
                    "desc": "Consignee's country, (ISO two-character code). See the Appendix Country Code, which is required for RMB cash withdrawal merchants"
                }
            ]
        },
        {
            "id": 4,
            "value": "billingAddress",
            "type": "Object",
            "required": "M",
            "desc": "Billing Information",
            "children": [
                {
                    "id": 40,
                    "value": "street",
                    "type": "string(256)",
                    "required": "M",
                    "desc": "Biller street address"
                },
                {
                    "id": 41,
                    "value": "postcode",
                    "type": "string(16)",
                    "required": "M",
                    "desc": "Zip code"
                },
                {
                    "id": 42,
                    "value": "city",
                    "type": "string(50)",
                    "required": "M",
                    "desc": "Biller city"
                },
                {
                    "id": 43,
                    "value": "state",
                    "type": "string(128)",
                    "required": "M",
                    "desc": "Biller's province: the two-character code for the United States and Canada. It can be left blank for and some areas without provinces"
                },
                {
                    "id": 44,
                    "value": "country",
                    "type": "string(64)",
                    "required": "M",
                    "desc": "Biller country, (ISO two-character code) see <a href='/pages/24db23/'>Appendix Country Code</a>"
                }
            ]
        },
        {
            "id": 5,
            "value": "eCommerce",
            "type": "object",
            "required": "O",
            "desc": "E-commerce Industry Information",
            "children": [
                {
                    "id": 50,
                    "value": "freeShipping",
                    "type": "string(50)",
                    "required": "O",
                    "desc": "For free shipping situation, whether it is free shipping (Y/N)"
                },
                {
                    "id": 51,
                    "value": "shippingMethod",
                    "type": "string(128)",
                    "required": "O",
                    "desc": "Logistics mode: railway, sea, air, highway, multitransport"
                },
                {
                    "id": 52,
                    "value": "shippingFee",
                    "type": "string(12)",
                    "required": "O",
                    "desc": "shipping fee"
                }
            ]
        },
        {
            "id": 6,
            "value": "airline",
            "type": "object",
            "required": "C",
            "desc": "aviation industry information",
            "children": [
                {
                    "id": 60,
                    "value": "valueAdded",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Airline value-added (Y/N)"
                },
                {
                    "id": 61,
                    "value": "bestFare",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Is it the current best fare (Y/N)"
                },
                {
                    "id": 62,
                    "value": "thirdPartyBook",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Whether the cardholder is included in the passengers (Y/N)\n" +
                        "Y: The booking is made by a third party, and the cardholder is not the passenger;\n" +
                        "N: The booking is not made by a third party, and the cardholder is the passenger\n"
                },
                {
                    "id": 63,
                    "value": "haveChanged",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Has the booked flight ticket been changed (Y/N)\n" +
                        " Y stands for ticket change, that is, the current ticket has been changed;\n" +
                        " N stands for the original ticket, that is, it has not been changed.\n"
                },
                {
                    "id": 64,
                    "value": "insurance",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Whether to buy insurance (Y/N)"
                },
                {
                    "id": 65,
                    "value": "connectingTicket",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Whether it is a connecting ticket (Y/N)"
                },
                {
                    "id": 66,
                    "value": "ifRoundtripFlight",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Is there a round-trip flight (Y/N)"
                },
                {
                    "id": 67,
                    "value": "ifConnectingFlight",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Transit or not (Y/N)"
                },
                {
                    "id": 68,
                    "value": "bookChannel",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Booking channel:\n" +
                        "Web\n" +
                        "Call center\n" +
                        "Mobile app\n" +
                        "OTA\n"
                },
                {
                    "id": 69,
                    "value": "leaveRange",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Departure time, in hours"
                },
                {
                    "id": 691,
                    "value": "frequentFlyerNumber",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Frequent traveller number, if there is no frequent traveller number, this field will not be required "
                },
                {
                    "id": 692,
                    "value": "nationality",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Passenger nationality: only one nationality is shown for passengers from the same country, for example: If there are two passengers, one from the United States and one from Singapore, then: US, SG. If there are three passengers who are all from Hong Kong, then: HK"
                },
                {
                    "id": 693,
                    "value": "phone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Passenger phone"
                },
                {
                    "id": 694,
                    "value": "birthday",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Passenger's date of birth"
                },
                {
                    "id": 695,
                    "value": "routeType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Aircraft cabin:\n" +
                        "First Class\n" +
                        "Business Class\n" +
                        "Premium Economy\n" +
                        "Economy\n"
                },
                {
                    "id": 696,
                    "value": "productType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Ticket，Hotel， Ticket&Hotel, Others"
                },
                {
                    "id": 697,
                    "value": "aircraftCabinType",
                    "type": "string(50)",
                    "required": "C",
                    "desc": "Aircraft cabin: First Class/Business Class/Premium Economy/Economy"
                },
                {
                    "id": 698,
                    "value": "tripType",
                    "type": "string(50)",
                    "required": "C",
                    "desc": "Trip Type:\n" +
                        "01: One way\n"
                },
                {
                    "id": 699,
                    "value": "hotelCountry",
                    "type": "string(2)",
                    "required": "C",
                    "desc": "The country where the hotel is located, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 680,
                    "value": "hotelCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "City where the hotel is located"
                },
                {
                    "id": 681,
                    "value": "hotelName",
                    "type": "string(50)",
                    "required": "64",
                    "desc": "Hotel name"
                },
                {
                    "id": 682,
                    "value": "hotelCustomerName",
                    "type": "string(50)",
                    "required": "C",
                    "desc": "Accommodation customer name"
                },
                {
                    "id": 683,
                    "value": "hotelStar",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Hotel star rating, 1-10"
                },
                {
                    "id": 684,
                    "value": "bookNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of rooms booked"
                },
                {
                    "id": 685,
                    "value": "bookRange",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of nights booked"
                },
                {
                    "id": 686,
                    "value": "refundPolicy",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Free Cancellation/Partial Refund/No Refund"
                },
                {
                    "id": 687,
                    "value": "checkInDate",
                    "type": "string(14)",
                    "required": "C",
                    "desc": "Check-in date (accurate to the day), yyyyMMdd"
                },
                {
                    "id": 688,
                    "value": "airlineCompanyID",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Airline identification number"
                },
                {
                    "id": 689,
                    "value": "flightNumber",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight identification number"
                },
                {
                    "id": 670,
                    "value": "airlinePnr",
                    "type": "string(512)",
                    "required": "C",
                    "desc": "Airline PNR (JSON?)"
                },
                {
                    "id": 671,
                    "value": "takeoffTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight departure time (yyyyMMddHH)"
                },
                {
                    "id": 672,
                    "value": "takeoffTimezone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Time zone corresponding to the flight departure time (UTC+N)"
                },
                {
                    "id": 673,
                    "value": "takeoffCountry",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 674,
                    "value": "takeoffCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure city"
                },
                {
                    "id": 675,
                    "value": "arrivalTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight arrival time (yyyyMMddHH)"
                },
                {
                    "id": 676,
                    "value": "arrivalTimezone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Arrival time zone"
                },
                {
                    "id": 677,
                    "value": "arrivalCountry",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Arrival country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 678,
                    "value": "arrivalCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure city"
                },
                {
                    "id": 679,
                    "value": "arrivalTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight arrival time (yyyyMMddHH)"
                },
                {
                    "id": 660,
                    "value": "changedTakeoffTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure time after flight change (yyyyMMddHH)"
                },
                {
                    "id": 661,
                    "value": "connectingCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "When passing through multiple transit stations, multiple fields are required in sequence, for example:\n" +
                        "If two transit stations of Nanjing and Beijing will be passed: \"connectingCity1\": \"Nanjing\", \"connectingCity2\": \"Beijing\" \n"
                },
                {
                    "id": 662,
                    "value": "adultsNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of adults"
                },
                {
                    "id": 663,
                    "value": "childrenNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of children"
                },
                {
                    "id": 664,
                    "value": "babyNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of babies"
                },
                {
                    "id": 665,
                    "value": "contactPhone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "The contact number filled in the order, without the symbols such as \"+\" or \"-\", only the data part is required"
                },
                {
                    "id": 666,
                    "value": "contactEmail",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Contact email address for filled in the order"
                },
                {
                    "id": 667,
                    "value": "contactName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "First Name+Last Name"
                },
                {
                    "id": 668,
                    "value": "passengerFirstName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Renter's first name"
                },
                {
                    "id": 669,
                    "value": "passengerLastName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Renter's last name"
                },
                {
                    "id": 650,
                    "value": "identificationType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Renter certificate type:\n" +
                        "passport\n" +
                        "id\n" +
                        "visa\n" +
                        "driving license\n"
                },
                {
                    "id": 651,
                    "value": "identificationId",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "ID No"
                }
            ]
        },
        {
            "id": 7,
            "value": "reCharge",
            "type": "Object",
            "required": "C",
            "desc": "Recharge options",
            "children": [
                {
                    "id": 70,
                    "value": "type",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Recharge type\n" +
                        "Game\n" +
                        "Platform\n"
                },
                {
                    "id": 71,
                    "value": "accountId",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Recharge account ID"
                },
                {
                    "id": 72,
                    "value": "accountName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Recharge account name: the name of the recharge account"
                },
                {
                    "id": 73,
                    "value": "platformCategory",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Platform recharge type:\n" +
                        "Direct\n" +
                        "Card\n" +
                        "Gift Card\n"
                },
                {
                    "id": 74,
                    "value": "gameName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Game name"
                },
                {
                    "id": 75,
                    "value": "gameTerminal",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Game terminal type:\n" +
                        "PC\n" +
                        "Mobile\n"
                },
                {
                    "id": 76,
                    "value": "gameCategory",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Game recharge type:\n" +
                        "Point Card\n" +
                        "Prop\n" +
                        "Other\n"
                },
                {
                    "id": 77,
                    "value": "serverCountry",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "The country of the server to which the game account belongs (use the ISO two-character code)"
                }
            ]
        },
        {
            "id": 8,
            "value": "carRental",
            "type": "Object",
            "required": "C",
            "desc": "car rental industry",
            "children": [
                {
                    "id": 80,
                    "value": "rentCountry",
                    "type": "string(2)",
                    "required": "C",
                    "desc": "Car pick-up country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 81,
                    "value": "rentCity",
                    "type": "string(128)",
                    "required": "C",
                    "desc": "Pick-up city"
                },
                {
                    "id": 82,
                    "value": "rentTime",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "pick-up time, yyyyMMddHHmmss"
                },
                {
                    "id": 83,
                    "value": "returnCountry",
                    "type": "string(2)",
                    "required": "C",
                    "desc": "Car return country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 84,
                    "value": "returnCity",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "Car return city"
                },
                {
                    "id": 158,
                    "value": "rentTime",
                    "type": "String(16)",
                    "required": "C",
                    "desc": "Car return time, yyyyMMddHHmmss"
                },
                {
                    "id": 86,
                    "value": "purchasedInsurance",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Whether to buy insurance (Y/N)"
                },
                {
                    "id": 87,
                    "value": "insuranceType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Insurance type"
                },
                {
                    "id": 88,
                    "value": "insuranceLimit",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "Insurance amount"
                },
                {
                    "id": 89,
                    "value": "model",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Vehicle model used:" +
                        "small" +
                        "medium" +
                        "large" +
                        "Premium" +
                        "suv" +
                        "Truck" +
                        "Van" +
                        "Convertible"
                },
                {
                    "id": 9,
                    "value": "personNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of people traveling"
                },
                {
                    "id": 90,
                    "value": "childrenNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of children"
                },
                {
                    "id": 91,
                    "value": "rentalCompany",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Car rental company"
                },
                {
                    "id": 92,
                    "value": "firstName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "First name of the person using the car"
                },
                {
                    "id": 93,
                    "value": "lastName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Last name of the person using the car"
                },
                {
                    "id": 94,
                    "value": "email",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Mailbox of the person using the car"
                },
                {
                    "id": 95,
                    "value": "phone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Contact number of the person using the car"
                },
                {
                    "id": 96,
                    "value": "identificationType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "用⻋Certificate type of the person using the car:" +
                        "passport" +
                        "id" +
                        "visa" +
                        "driving license"
                },
                {
                    "id": 97,
                    "value": "identificationId",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "ID No. of the person using the car"
                },
                {
                    "id": 98,
                    "value": "nationality",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Nationality of the person using the car, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 99,
                    "value": "discountType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Discount type, percentage, such as 30% off"
                },
                {
                    "id": 100,
                    "value": "discountAmount",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Discounted amount, unit: USD"
                }
            ]
        },
        {
            "id": 10,
            "value": "browserInfo",
            "type": "Object",
            "required": "O",
            "desc": "Browser information",
            "children": [
                {
                    "id": 101,
                    "value": "windowSize",
                    "type": "string(2)",
                    "required": "C",
                    "desc": "Window size"
                },
                {
                    "id": 102,
                    "value": "acceptHeader",
                    "type": "string",
                    "required": "C",
                    "desc": "Window size:" +
                        "01-250x400" +
                        "02-390x400" +
                        "03-500x600" +
                        "04-600x400" +
                        "05 - Full screen" +
                        "http accept header information," +
                        "Example values: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*;q=0.8"
                },
                {
                    "id": 103,
                    "value": "colorDepth",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "Window color, get browser screen.colorDepth\n" +
                        "Example value: 32\n"
                },
                {
                    "id": 104,
                    "value": "screenHeight",
                    "type": "string",
                    "required": "C",
                    "desc": "Window height"
                },
                {
                    "id": 105,
                    "value": "jetLag",
                    "type": "string",
                    "required": "C",
                    "desc": "UTC time and the cardholder's browser local time, in minutes"
                },
                {
                    "id": 106,
                    "value": "userAgent",
                    "type": "string",
                    "required": "C",
                    "desc": "Browser user agent information \n" +
                        "Example values: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36\n"
                },
                {
                    "id": 107,
                    "value": "language",
                    "type": "String(2)",
                    "required": "O",
                    "desc": "The value of navigator.language in the shopper's browser (as defined in IETF BCP 47)"
                },
                {
                    "id": 108,
                    "value": "screenWidth",
                    "type": "int",
                    "required": "C",
                    "desc": "Screen width (unit: pixels)"
                },
                {
                    "id": 109,
                    "value": "screenHeight",
                    "type": "int",
                    "required": "C",
                    "desc": "Screen height (unit: pixels)"
                },
                {
                    "id": 110,
                    "value": "javaEnabled",
                    "type": "Boolean",
                    "required": "C",
                    "desc": "Whether the cardholder's terminal is capable of executing Java"
                },
                {
                    "id": 111,
                    "value": "javaScriptEnabled",
                    "type": "Boolean",
                    "required": "C",
                    "desc": "Indicates whether the shopper's browser is capable of executing JavaScript. If the field does not exist, it is assumed to have a default value of true"
                }
            ]
        },
        {
            "id": 11,
            "value": "device",
            "type": "Object",
            "required": "M",
            "desc": "Device information，Access model value",
            "children": [
                {
                    "id": 112,
                    "value": "orderTerminal",
                    "type": "string(2)",
                    "required": "O",
                    "desc": "<ul>" +
                        "<li>01-Mobile browser (app) </li>"+
                        "<li>02-PC browser (pc) </li>"+
                        "<li>03-SDK(ios)</li>"+
                        "<li>04-SDK(Android)</li>"+
                        "</ul>"
                }
            ]
        },
    ]
}
