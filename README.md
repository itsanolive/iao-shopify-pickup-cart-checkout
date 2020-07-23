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

## Basic implementation:
* **Add** all snippets files to your theme's snippet folder
* **Add** all asset files into your theme's assets folder
* **Edit** `cart.liquid`, `theme.liquid`, and `checkout.liquid` files using the included code sections. **Do not completely replace your theme.liquid or checkout.liquid files with the ones included in this repo.** 

## Implementation details:
#### Cart
Find the `input` or `button` with `type="submit" name="checkout"` and replace with `{%- include 'iao-cart-shipping-form' -%}` as specified in the `cart.liquid` in the templates folder. 

*Depending on your theme, this may or may not actually be in the cart.liquid file. It may be in a section or snippet file.*

#### Store Info
To update or add your own location info, update the `option` elements within the #storepickup `select` element.
	
```<option value="STORE_ID"{% if cart.attributes["StorePickup"] == "STORE_NAME" %} selected{% endif %}>STORE_NAME</option>```

&nbsp;&nbsp;&nbsp;&nbsp; Then head to the iao-cart-shipping-options.js and update the `storeInfo` object with the corresponding data as well as address, link if it has its own page on your site, etc.

```
var storeInfo = [
    {
        "id": "STORE_ID",
        "name": "STORE_NAME",
        "address": "1234 Main St, City, ST 12345",
        "link": "/some/path/1"
    }
},
```

#### Checkout
The `iao-checkout-shipping-method.liquid` snippet code assumes you have two shipping methods set up: "Ship to Store" as the free pickup option and "Standard Ground" as the regular shipping option. If you have additional shipping options, this code ignores them and they still show. But you could build in another conditional statement or change the existing ones to hide all shipping methods that do not match a value instead of only matching one value, depending on your use case.

This also works if you have multiple "Standard Ground" shipping methods set up - one for under a certain price threshold, one for over, for example. Just make sure they have the same name and you're good to go.

The snippet is based on the cart attribute `checkout.attributes['ShipMethod']` set up with cart snippets in this repo, but depending on your use case, you could change this as needed, just update the span id and textContent with the new liquid variable you want to use and the id selector in the script to match. 



## Contact
If you need help with this implementation or have questions about making it work for your use case, please contact me at [info@obeaty.com](mailto:info@obeaty.com?subject=[GitHub]%20IAO%20Shopify%20Cart%20Shipping%20Question)

# [CART DEMO](https://shopify.itsanolive.com/cart/add?id[]=35184199696545)
