//Email Pattern

let email = "abnoman330@yahoo.com";

let e_pattern = /^[a-z0-9_.]*@[a-z]{3,10}\.[a-z]{2,5}$/;

console.log(e_pattern.test(email));




//Username Patten

let username = 'Abdullah Al Noman';

let u_pattern = /^[A-Za-z ]{1,}$/ ;

console.log(u_pattern.test(username));




//Bangladeshi Mobile Number pattern

let p_num = "01717008811";

let m_pattern = /^(\+8801|01)[0-9]{9}$/

console.log(m_pattern.test(p_num));




//Password Pattern 

let password = 'abcd~!@#$XYZ123456';

let p_pattern = /^[a-zA-Z0-9!~@#$%^&*]{1,}$/;

console.log(p_pattern.test(password));




// //Zip Code Pattern 

let zip = '123456';

let z_pattern = /^[0-9]{1,10}$/;

console.log(z_pattern.test(zip));
