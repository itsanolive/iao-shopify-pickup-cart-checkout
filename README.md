## Shopify Plus Cart Store Pickup and Checkout solution

### Cart
Give customers the option either ship to their home or to pick up from a selection of stores, added to the order as Cart Attributes for your internal reference.

### Checkout
Based on cart attribute key and value, the script in the checkout snippet removes the shipping method radio selection for a specified shipping method.

***Express Checkouts like ShopPay, ApplePay, GooglePay must be inactive for this to work all the time***

***Note:*** *If you do not have Shopify Plus, this solution will only help with cart pickup/shipping attributes, not hiding shipping options in the checkout.*

**Use case for hiding checkout shipping method options:**
* When customer selects **Store Pickup** option in shopping cart, remove "Standard Ground" options, show free "Ship to Store" option.
* When **regular shipping** is selected in cart (default option) remove free "Ship to Store" shipping, show "Standard Ground" options.

This will also work with other attributes you may have added to your cart, just change the `{{ checkout.attributes['ShipMethod'] }}` attribute name and the values being checked for in the script conditionals.

## Installation:
* **Add** all snippets files to your theme's snippet folder
* **Add** all asset files into your theme's assets folder
* **Edit** `cart.liquid`, `theme.liquid`, and `checkout.liquid` files using the included code sections. **Do not completely replace your theme.liquid or checkout.liquid files with the ones included in this repo.**

## Contact
If you need help with this implementation or have questions about making it work for your use case, please contact me at [info@obeaty.com](mailto:info@obeaty.com?subject=[GitHub]%20IAO%20Shopify%20Cart%20Shipping%20Question)
