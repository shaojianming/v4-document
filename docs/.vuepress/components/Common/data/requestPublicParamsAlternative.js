export default {
    data: [
        {
            "id": 25,
            "value": "customer",
            "type": "Object",
            "required": "M",
            "desc": "Customer Information",
            "children": [
                {
                    "id": 27,
                    "value": "firstName",
                    "type": "string",
                    "required": "M",
                    "desc": "User first name"
                },
                {
                    "id": 29,
                    "value": "lastName",
                    "type": "string",
                    "required": "M",
                    "desc": "User last name"
                },
                {
                    "id": 30,
                    "value": "email",
                    "type": "string(128)",
                    "required": "M",
                    "desc": "User registration email"
                },
                {
                    "id": 31,
                    "value": "phone",
                    "type": "string(20)",
                    "required": "C",
                    "desc": "User contact number"
                },
                {
                    "id": 33,
                    "value": "identificationType",
                    "type": "string(20)",
                    "required": "C",
                    "desc": "User ID type (required for certain countries, such as Mexico)"
                },
                {
                    "id": 34,
                    "value": "identificationId",
                    "type": "string(20)",
                    "required": "C",
                    "desc": "User ID number (required for certain countries, such as Mexico)"
                }

            ]
        },
        {
            "id": 46,
            "value": "goods",
            "type": "Array",
            "required": "M",
            "desc": "Commodity Information",
            "children": [
                {
                    "id": 47,
                    "value": "name",
                    "type": "string(500)",
                    "required": "M",
                    "desc": "Product name, required for RMB withdrawal merchants"
                },
                {
                    "id": 48,
                    "value": "description",
                    "type": "string(500)",
                    "required": "M",
                    "desc": "Commodity description"
                },
                {
                    "id": 49,
                    "value": "sku",
                    "type": "string(500)",
                    "required": "M",
                    "desc": "Commodity number, product SKU"
                },
                {
                    "id": 50,
                    "value": "averageUnitPrice",
                    "type": "string(12)",
                    "required": "C",
                    "desc": "Average unit price of goods, required for RMB withdrawal merchants"
                },
                {
                    "id": 51,
                    "value": "number",
                    "type": "string(12)",
                    "required": "C",
                    "desc": "Quantity of commodity purchased"
                },
                {
                    "id": 52,
                    "value": "imgUrl",
                    "type": "string(255)",
                    "required": "M",
                    "desc": "Commodity main image link"
                },
                {
                    "id": 53,
                    "value": "virtualProduct",
                    "type": "string(1)",
                    "required": "O",
                    "desc": "Whether it is a virtual product, virtual commodity (Y/N)"
                },
            ]
        },
        {
            "id": 57,
            "value": "shippingAddress",
            "type": "object",
            "required": "M",
            "desc": "Delivery Address Information. This field can be left blank for virtual items",
            "children": [
                {
                    "id": 62,
                    "value": "street",
                    "type": "string(256)",
                    "required": "M",
                    "desc": "Consignee street address"
                },
                {
                    "id": 63,
                    "value": "postcode",
                    "type": "string(16)",
                    "required": "M",
                    "desc": "Zip code"
                },
                {
                    "id": 64,
                    "value": "city",
                    "type": "string(50)",
                    "required": "M",
                    "desc": "Consignee city"
                },
                {
                    "id": 65,
                    "value": "state",
                    "type": "string(128)",
                    "required": "M",
                    "desc": "Consignee's province: the two-character code for the United States and Canada. It can be left blank for and some areas without provinces. For details, see Country Code"
                },
                {
                    "id": 66,
                    "value": "country",
                    "type": "string(64)",
                    "required": "M",
                    "desc": "Consignee's country, (ISO two-character code). See the Appendix Country Code, which is required for RMB cash withdrawal merchants"
                }
            ]
        },
        {
            "id": 69,
            "value": "billingAddress",
            "type": "object",
            "required": "M",
            "desc": "Billing Information",
            "children": [
                {
                    "id": 74,
                    "value": "street",
                    "type": "string(256)",
                    "required": "M",
                    "desc": "Biller street address"
                },
                {
                    "id": 75,
                    "value": "postcode",
                    "type": "string(16)",
                    "required": "M",
                    "desc": "Zip code"
                },
                {
                    "id": 76,
                    "value": "city",
                    "type": "string(50)",
                    "required": "M",
                    "desc": "Biller city"
                },
                {
                    "id": 77,
                    "value": "state",
                    "type": "string(128)",
                    "required": "M",
                    "desc":  "Biller's province: the two-character code for the United States and Canada. It can be left blank for and some areas without provinces"
                },
                {
                    "id": 999,
                    "value": "country",
                    "type": "string(64)",
                    "required": "M",
                    "desc": "Biller country, (ISO two-character code) see <a href='/pages/24db23/'>Appendix Country Code</a>"
                }
            ]
        },
        {
            "id": 78,
            "value": "eCommerce",
            "type": "object",
            "required": "O",
            "desc": "E-commerce Industry Information",
            "children": [
                {
                    "id": 79,
                    "value": "freeShipping",
                    "type": "string(50)",
                    "required": "O",
                    "desc": "For free shipping situation, whether it is free shipping (Y/N)"
                },
                {
                    "id": 80,
                    "value": "shippingMethod",
                    "type": "string(128)",
                    "required": "O",
                    "desc": "Logistics mode: railway, sea, air, highway, multitransport"
                },
                {
                    "id": 190,
                    "value": "shippingFee",
                    "type": "string(128)",
                    "required": "O",
                    "desc": "shipping fee"
                }
            ]
        },
        {
            "id": 81,
            "value": "airline",
            "type": "object",
            "required": "C",
            "desc": "aviation industry information",
            "children": [
                {
                    "id": 82,
                    "value": "valueAdded",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Airline value-added (Y/N)"
                },
                {
                    "id": 83,
                    "value": "bestFare",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Is it the current best fare (Y/N)"
                },
                {
                    "id": 84,
                    "value": "thirdPartyBook",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Whether the cardholder is included in the passengers (Y/N)\n" +
                        "Y: The booking is made by a third party, and the cardholder is not the passenger;\n" +
                        "N: The booking is not made by a third party, and the cardholder is the passenger\n"
                },
                {
                    "id": 85,
                    "value": "haveChanged",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Has the booked flight ticket been changed (Y/N)\n" +
                        " Y stands for ticket change, that is, the current ticket has been changed;\n" +
                        " N stands for the original ticket, that is, it has not been changed.\n"
                },
                {
                    "id": 86,
                    "value": "insurance",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Whether to buy insurance (Y/N)"
                },
                {
                    "id": 87,
                    "value": "connectingTicket",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Whether it is a connecting ticket (Y/N)"
                },
                {
                    "id": 88,
                    "value": "ifRoundtripFlight",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Is there a round-trip flight (Y/N)"
                },
                {
                    "id": 89,
                    "value": "ifConnectingFlight",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Transit or not (Y/N)"
                },
                {
                    "id": 90,
                    "value": "bookChannel",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Booking channel:\n" +
                        "Web\n" +
                        "Call center\n" +
                        "Mobile app\n" +
                        "OTA\n"},
                {
                    "id": 91,
                    "value": "leaveRange",
                    "type": "string(1)",
                    "required": "C",
                    "desc": "Departure time, in hours"
                },
                {
                    "id": 92,
                    "value": "frequentFlyerNumber",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Frequent traveller number, if there is no frequent traveller number, this field will not be required "
                },
                {
                    "id": 93,
                    "value": "nationality",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Passenger nationality: only one nationality is shown for passengers from the same country, for example: If there are two passengers, one from the United States and one from Singapore, then: US, SG. If there are three passengers who are all from Hong Kong, then: HK"
                },
                {
                    "id": 94,
                    "value": "phone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Passenger phone"
                },
                {
                    "id": 95,
                    "value": "birthday",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Passenger's date of birth"
                },
                {
                    "id": 96,
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
                    "id": 97,
                    "value": "productType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Ticket，Hotel， Ticket&Hotel, Others"
                },
                {
                    "id": 98,
                    "value": "aircraftCabinType",
                    "type": "string(50)",
                    "required": "C",
                    "desc": "Aircraft cabin: First Class/Business Class/Premium Economy/Economy"
                },
                {
                    "id": 99,
                    "value": "tripType",
                    "type": "string(50)",
                    "required": "C",
                    "desc": "Trip Type:\n" +
                        "01: One way\n"
                },
                {
                    "id": 100,
                    "value": "hotelCountry",
                    "type": "string(2)",
                    "required": "C",
                    "desc":"The country where the hotel is located, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 101,
                    "value": "hotelCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "City where the hotel is located"
                },
                {
                    "id": 102,
                    "value": "hotelName",
                    "type": "string(50)",
                    "required": "64",
                    "desc": "Hotel name"
                },
                {
                    "id": 103,
                    "value": "hotelCustomerName",
                    "type": "string(50)",
                    "required": "C",
                    "desc": "Accommodation customer name"
                },
                {
                    "id": 104,
                    "value": "hotelStar",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Hotel star rating, 1-10"
                },
                {
                    "id": 105,
                    "value": "bookNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of rooms booked"
                },
                {
                    "id": 106,
                    "value": "bookRange",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of nights booked"
                },
                {
                    "id": 107,
                    "value": "refundPolicy",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Free Cancellation/Partial Refund/No Refund"
                },
                {
                    "id": 108,
                    "value": "checkInDate",
                    "type": "string(14)",
                    "required": "C",
                    "desc": "Check-in date (accurate to the day), yyyyMMdd"
                },
                {
                    "id": 109,
                    "value": "airlineCompanyID",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Airline identification number"
                },
                {
                    "id": 120,
                    "value": "flightNumber",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight identification number"
                },
                {
                    "id": 121,
                    "value": "airlinePnr",
                    "type": "string(512)",
                    "required": "C",
                    "desc": "Airline PNR (JSON?)"
                },
                {
                    "id": 122,
                    "value": "takeoffTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight departure time (yyyyMMddHH)"
                },
                {
                    "id": 123,
                    "value": "takeoffTimezone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Time zone corresponding to the flight departure time (UTC+N)"
                },
                {
                    "id": 124,
                    "value": "takeoffCountry",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 125,
                    "value": "takeoffCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure city"
                },
                {
                    "id": 126,
                    "value": "arrivalTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight arrival time (yyyyMMddHH)"
                },
                {
                    "id": 127,
                    "value": "arrivalTimezone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Arrival time zone"
                },
                {
                    "id": 128,
                    "value": "arrivalCountry",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Arrival country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 129,
                    "value": "arrivalCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure city"
                },
                {
                    "id": 130,
                    "value": "arrivalTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Flight arrival time (yyyyMMddHH)"
                },
                {
                    "id": 131,
                    "value": "changedTakeoffTime",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Departure time after flight change (yyyyMMddHH)"
                },
                {
                    "id": 132,
                    "value": "connectingCity",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "When passing through multiple transit stations, multiple fields are required in sequence, for example:\n" +
                        "If two transit stations of Nanjing and Beijing will be passed: \"connectingCity1\": \"Nanjing\", \"connectingCity2\": \"Beijing\" \n"
                },
                {
                    "id": 133,
                    "value": "adultsNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of adults"
                },
                {
                    "id": 134,
                    "value": "childrenNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of children"
                },
                {
                    "id": 135,
                    "value": "babyNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of babies"
                },
                {
                    "id": 136,
                    "value": "contactPhone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "The contact number filled in the order, without the symbols such as \"+\" or \"-\", only the data part is required"
                },
                {
                    "id": 137,
                    "value": "contactEmail",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Contact email address for filled in the order"
                },
                {
                    "id": 138,
                    "value": "contactName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "First Name+Last Name"
                },
                {
                    "id": 139,
                    "value": "passengerFirstName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Renter's first name"
                },
                {
                    "id": 140,
                    "value": "passengerLastName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Renter's last name"
                },
                {
                    "id": 141,
                    "value": "identificationType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Renter certificate type:\n" +
                        "passport\n" +
                        "id\n" +
                        "visa\n" +
                        "driving license\n"},
                {
                    "id": 142,
                    "value": "identificationId",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "ID No"
                }
            ]
        },
        {
            "id": 143,
            "value": "reCharge",
            "type": "Object",
            "required": "C",
            "desc": "Recharge options",
            "children": [
                {
                    "id": 144,
                    "value": "type",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Recharge type\n" +
                        "Game\n" +
                        "Platform\n"},
                {
                    "id": 145,
                    "value": "accountId",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Recharge account ID"
                },
                {
                    "id": 146,
                    "value": "accountName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Recharge account name: the name of the recharge account"
                },
                {
                    "id": 147,
                    "value": "platformCategory",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Platform recharge type:\n" +
                        "Direct\n" +
                        "Card\n" +
                        "Gift Card\n"
                },
                {
                    "id": 148,
                    "value": "gameName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Game name"
                },
                {
                    "id": 149,
                    "value": "gameTerminal",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Game terminal type:\n" +
                        "PC\n" +
                        "Mobile\n"
                },
                {
                    "id": 150,
                    "value": "gameCategory",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "\"Game recharge type:\\n\" +\n" +
                        "                        \"Point Card\\n\" +\n" +
                        "                        \"Prop\\n\" +\n" +
                        "                        \"Other\\n\""
                },
                {
                    "id": 151,
                    "value": "serverCountry",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "The country of the server to which the game account belongs (use the ISO two-character code)"
                }
            ]
        },
        {
            "id": 152,
            "value": "carRental",
            "type": "Object",
            "required": "C",
            "desc": "car rental industry",
            "children": [
                {
                    "id": 153,
                    "value": "rentCountry",
                    "type": "string(2)",
                    "required": "C",
                    "desc": "Car pick-up country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 154,
                    "value": "rentCity",
                    "type": "string(128)",
                    "required": "C",
                    "desc": "Pick-up city"
                },
                {
                    "id": 155,
                    "value": "rentTime",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "pick-up time, yyyyMMddHHmmss"
                },
                {
                    "id": 156,
                    "value": "returnCountry",
                    "type": "string(2)",
                    "required": "C",
                    "desc": "Car return country, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 157,
                    "value": "returnCity",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "Car return city"
                },
                {
                    "id": 158,
                    "value": "returnTime",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "Car return time, yyyyMMddHHmmss"
                },
                {
                    "id": 159,
                    "value": "purchasedInsurance",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Whether to buy insurance (Y/N)"
                },
                {
                    "id": 160,
                    "value": "insuranceType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Insurance type"
                },
                {
                    "id": 161,
                    "value": "insuranceLimit",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "Insurance amount"
                },
                {
                    "id": 162,
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
                    "id": 163,
                    "value": "personNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of people traveling"
                },
                {
                    "id": 164,
                    "value": "childrenNumber",
                    "type": "string(8)",
                    "required": "C",
                    "desc": "Number of children"
                },
                {
                    "id": 165,
                    "value": "rentalCompany",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Car rental company"
                },
                {
                    "id": 166,
                    "value": "firstName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "First name of the person using the car"
                },
                {
                    "id": 167,
                    "value": "lastName",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Last name of the person using the car"
                },
                {
                    "id": 168,
                    "value": "email",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Mailbox of the person using the car"
                },
                {
                    "id": 169,
                    "value": "phone",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Contact number of the person using the car"
                },
                {
                    "id": 170,
                    "value": "identificationType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Renter certificate type:" +
                        "passport" +
                        "id" +
                        "visa" +
                        "driving license"
                },
                {
                    "id": 171,
                    "value": "identificationId",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "ID No. of the person using the car:"
                },
                {
                    "id": 172,
                    "value": "nationality",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Nationality of the person using the car, (ISO two-character code). See Appendix Country Code"
                },
                {
                    "id": 173,
                    "value": "discountType",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Discount type, percentage, such as 30% off"
                },
                {
                    "id": 174,
                    "value": "discountAmount",
                    "type": "string(64)",
                    "required": "C",
                    "desc": "Discounted amount, unit: USD"
                }
            ]
        },
        {
            "id": 175,
            "value": "browserInfo",
            "type": "Object",
            "required": "O",
            "desc": "Browser information",
            "children": [
                {
                    "id": 177,
                    "value": "windowSize",
                    "type": "string(2)",
                    "required": "C",
                    "desc": "Window size"
                },
                {
                    "id": 178,
                    "value": "acceptHeader",
                    "type": "string",
                    "required": "C",
                    "desc": "http accept header information," +
                        "Example values: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*;q=0.8"
                },
                {
                    "id": 179,
                    "value": "colorDepth",
                    "type": "string(16)",
                    "required": "C",
                    "desc": "Window color, get browser screen.colorDepth\n" +
                        "Example value: 32\n"
                },
                {
                    "id": 180,
                    "value": "screenHeight",
                    "type": "string",
                    "required": "C",
                    "desc": "Window height"
                },
                {
                    "id": 181,
                    "value": "jetLag",
                    "type": "string",
                    "required": "C",
                    "desc": "UTC time and the cardholder's browser local time, in minutes"
                },
                {
                    "id": 182,
                    "value": "userAgent",
                    "type": "string",
                    "required": "C",
                    "desc": "Browser user agent information \n" +
                        "Example values: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36\n"
                }
            ]
        },
        {
            "id": 183,
            "value": "device",
            "type": "Object",
            "required": "C",
            "desc": "Device information，Access model value, can be left blank",
            "children": [
                {
                    "id": 184,
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
