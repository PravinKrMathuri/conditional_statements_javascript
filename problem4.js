// Problem 4: Given stored username and password and input username and password, Print if the user can log in or not.

let reg_email = "masai@gmail.com"
let reg_password = "QwertPoiuy"

let ent_email = "masai@gmail.com"
let ent_password = "QwertPoiuy"

if (reg_email == ent_email) {
  if(reg_password == ent_password) {
    console.log ("Log in Successfull");
  } else {
    console.log ("incorrect password");
  }
} else {
  console.log ("wrong credential");
}