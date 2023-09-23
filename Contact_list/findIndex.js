var fruits_array = ['banana', 'apple', 'sweetpotato','mango'];
 var fruitIndex = fruits_array.findIndex(fruits => fruits == 'mango');
 if(fruitIndex !=  -1){
     console.log(fruitIndex);
     console.log(fruits_array[fruitIndex]);
 }


 var contactlist = [
    {
name :"priyanshi",
phone: 4444444534

 },{
    name:"himansh", 
    phone : 494083208

 },{
    name: "shubhi",
    phone: 32552424243
 }
]
// function a(cont) {
// return cont.phone == 494083208;
// }
// var contactindex = contactlist.findIndex(contact => contact.phone == 494083208);
var contactindex= contactlist.findIndex(function a(cont) 
{
    return cont.phone ==494083208;
})
 if(contactindex != -1){
 console.log(contactindex);
 console.log(contactlist[contactindex]);
}