var CartShipping = function(){
  storeDiv();
  $("#pickup").hide();
  $(".store-info").hide();


 function shipmethodChange(shipmethodValue){
   // console.log(shipmethodValue);
     switch(shipmethodValue){
      case 'Shipping':
       $("#shipping").show();
       $("#pickup").hide();
       $(".store-info").hide();
       break;
      case 'Store Pickup':
       $("#pickup").show();
       $("#shipping").hide();
       break;
      // so on and so on...
   }
 };

 $("#ShipMethod").change(function(){
   shipmethodChange($(this).val());
 });

 $("#storepickup").change(function(){
   pickupChange($(this).val());
 });

 function pickupChange(pickupValue){
   $(".store-info").hide();
   $("#" + pickupValue).show();
   console.log("store div: ", $("#" + pickupValue));
 };

 function storeDiv() {
   var cont = document.getElementById('storeInfo');
     console.log('cont: ', cont);
   var html = '';
   for (var i = 0; i < storeInfo.length; i++) {
     html += '<div id="' + storeInfo[i].id + '" class="store-info"><input type="submit" name="checkout" class="cart__submit btn" value="checkout"><br><h4>' + storeInfo[i].name + '</h4><p>' + storeInfo[i].address + '</p><p><a target="_blank" href="' + storeInfo[i].link + '">More info</a></p></div>';
   }
   console.log('html: ', html);
   cont.innerHTML = html;
   console.log('cont.innerHTML: ', cont.innerHTML);
 }
};

var storeInfo = [
  {
    "id": "1",
    "name": "Store 1",
    "address": "1234 Main St, City, ST 12345",
    "link": "/some/path/1"
  },
  {
    "id": "2",
    "name": "Store 2",
    "address": "1234 Main St, City, ST 12345",
    "link": "/some/path/2"
  },
  {
    "id": "3",
    "name": "Store 3",
    "address": "1234 Main St, City, ST 12345",
    "link": "/some/path/3"
  }
]

$(document).ready(function(){
  CartShipping();
});
