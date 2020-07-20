## Shopify Plus checkout snippet - hide/show shipping methods based on cart attributes

Based on cart attribute key and value, this script removes the shipping method radio selection for a specified shipping method. 

Use case: show free Store Pickup/Ship to Store method when "Ship to Store" is selected in shopping cart and remove "Standard Ground" options. Alternatively, remove "Ship to Store" free shipping option if "Ship to my address" is selected (default) in cart. 

This will also work with other attributes you may have added to your cart, just change the ```{{ checkout.attributes['ShipMethod'] }}``` attribute name and the values being checked for in the script conditionals.

### Installation:
**Simply add ```{%- include 'checkout-iao-shipping-method' -%}``` to your ```checkout.liquid``` layout file.**

*If you do not have Shopify Plus, this solution will not help, sorry!*
