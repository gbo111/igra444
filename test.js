var message1= "café";
var key1 = "something";

var enc = CryptoJS.AES.encrypt(message1, key1);
var dec = CryptoJS.AES.decrypt(enc, key1);
console.log(enc);
console.log(dec);
