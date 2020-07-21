## Shopify Plus checkout snippet - hide/show shipping methods based on cart attributes

Based on cart attribute key and value, this script removes the shipping method radio selection for a specified shipping method.

Use case:
* When customer selects **Store Pickup** option in shopping cart, remove "Standard Ground" options, show free "Ship to Store" option.
* When **regular shipping** is selected in cart (default option) remove free "Ship to Store" shipping, show "Standard Ground" options.

This will also work with other attributes you may have added to your cart, just change the ```{{ checkout.attributes['ShipMethod'] }}``` attribute name and the values being checked for in the script conditionals.

## Installation:
**Simply add ```{%- include 'iao-checkout-iao-shipping-method' -%}``` to your ```checkout.liquid``` layout file.**

*If you do not have Shopify Plus, this solution will not help, sorry!*


## Cart Shipping/Pickup option form - COMING SOON
