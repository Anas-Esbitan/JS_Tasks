// "used strict"
// let cash=1000;
// let current_liabilities=500;
// let resulCash_flow_ratio  = cash/current_liabilities;
// console.log(resulCash_flow_ratio, "resulCash_flow_ratio");
// //_______________________________________________
// let revenues=1000;
// let expenses=500;
// let Net_income=revenues-expenses;
// console.log(Net_income,"Net_income");
// // _________________________________________________
// let liabilities=1000;
// let equity=500;
// let Total_assets=liabilities+equity;
// console.log(Total_assets,"Total_assets");
//     // ___________________________________________
// let profit =1000;
// let sales =500;
// let NetINcome= profit*sales;
// console.log("NetINcome",NetINcome);
// // ___________________________________________
// let A=7;
// let B=9;
// let C=2;
// let AVG=(A+B+C)/3;
// console.log(AVG ,"Average");
// // ____________________________________________
// let price=150;
// let discount=0.3;
// let Dis=price-(discount*price);
// console.log(Dis);
// // ____________________________________________
// let age=20
// if (age >18 && age<30) {
//     console.log(true ,"Age limit" );
// }
// // _______________________________________________
// let Number = Math.pow(2,3);
// console.log(Number);

// let Num1=10;
// let Num2=4;
// let Remainder=Num1%Num2;
// console.log(Remainder);

// // ________________________________________________
// console.log(typeof(100));
// console.log(73.9);
// console.log(typeof(Nan));
// console.log(typeof("Water"));
// console.log(typeof (false))
// console.log(typeof(9 != 11));
// console.log("orange"+"e")
// console.log("Orange" - "s")
// console.log("4" + "8")
// console.log("4" - "8")
// console.log("name" + 3)
// console.log("name" - 3)
// console.log(82 * "word")
// console.log(1 + "hello")
// console.log("hello" + 1)
// console.log("hello" + true)
// console.log(typeof(Infinity))
// console.log(1 == '1')
// console.log(1 === '1')
// // ________________________________________________________
// let li_st =["Coding", "Academy", "By", "Orange"];
// li_st.push("jordan")
// console.log(li_st,"jordan");
// console.log(li_st.splice(0,2));

//  li_st.unshift("welcome","to");
//  console.log(li_st,"3");
// // ------------------------------------------
// console.log(li_st.slice(1));
// console.log(li_st.join(" "));
// console.log(li_st);
// li_st.splice(1,2);
// li_st.splice(2,1);
// console.log(li_st);

// let fruit = ["banana", "apple", "orange", "watermelon"];
// let vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// vegetables.pop();
// console.log(vegetables);
// fruit.shift();
// console.log(fruit)
// console.log(fruit.indexOf("orange"));

// fruit.push(fruit.length);
// console.log(fruit);
// console.log(vegetables.length);
// let food = vegetables.concat(fruit);
// console.log(food);
// food.splice(4,2);
// console.log(food);
// food.reverse();
// console.log(food);
// console.log(food.toString());

// function wordToarr(input){
//     return input.split(" ");
// }
// let inputString="Orange jordan Amman";
// let result =wordToarr(inputString);
// console.log(result);

// function hidphone(phonenum){
//     let hiddp="*******";
//     let vesable=phonenum.slice(7);
//     return hiddp+vesable;
// }
// let inputphone="0778915445"
// let result =hidphone(inputphone)
// console.log(result);

// console.log(typeof console.log);

// function sayHellow(userName , age){
    
// if (age <20) {
//     console.log("app is not sutable for you");
    
// }else{
//     console.log(`hi ${userName} yor age ${age}`);
// }
// }
// // 
// sayHellow("Anas",38);
// sayHellow("yazan",20);
// sayHellow("ahmad",22);
// sayHellow("omar",11);

// function generateYears(Start, end,excloud){
//     for (let i = Start; i <= end; i++) {
//     if (i==excloud) {
//         continue;
//     }
//         console.log(i);
        
//     }
// // }
// // 
// // generateYears(1982,2021,2020);
// // 
// // function hideEmail(email) {
//     // Split the email into two parts: the local part and the domain
//     // let [localPart, domain] = email.split('@');

//     // Get the first part of the local part (e.g., first 6 characters)
//     // let visiblePart = localPart.substring(0, 6);
// // 
//     // Join the visible part with ellipsis and the domain
//     // return `${visiblePart}...@${domain}`;
// // 
// // }
// // 
// // Example usage:
// let email = "orange_academy@orange.jo";
// let hiddenEmail = hideEmail(email);
// console.log(hiddenEmail); // Output: orange...@orange.jo

// function hidem(email){
//     let [localPart,domain]=email.split('@');
//     let visiblePart = localPart.substring(0,6);
//     return `${visiblePart}...@${domain}`;
// // 
// // 
// }
// let email="orange_academy@orange.come"
// let hiidem=hidem(email);
// console.log(hiidem);

// function cappetal(str ){
//     return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase()+ word.slice(1)) // تحويل الحرف الأول من كل كلمة إلى حرف كبير

//     .map(word => word.charAt(0).toUpperCase()+ word.slice(1))
//     // .join(' ')
// // 
// // 
// // }
// let sensatev ="Hello welcome to orange "
// let cappetallll = cappetal(sensatev);
// console.log(cappetallll);

// document.getElementById('applicationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // input user
//     const birthYear = document.getElementById('birthYear').value;
    
//     // calculate year
//     const currentYear = new Date().getFullYear();
    
    
//     const age = currentYear - birthYear;
//     const result = document.getElementById('result');
// if (age>60) {
//     console.log("You may join the seniors’ program.");
    
// }else if(age>30){
//     console.log("نت غير مؤهل. يمكنك الانضمام إلى برامج أخرى.");
    
// }else if(age>=18 && age<=30){
//     console.log("أنت مؤهل. ابدأ طلبك الآن.");
    
// }else if(age<18){
//     console.log("يمكنك الانضمام إلى برنامج الأطفال");
    
// }else{
//     console.log("clic bod");
// }
// })

// function SwitchWorld(str){
//     let switchstr ="";
//     for(let i=0; i< str.length; i++){
//         let char = str[i];
//         if (char == char.toUpperCase()) {
//             switchstr +=char.toLowerCase();
//         }else{
//             switchstr += char.toUpperCase();
//         }
//     }
//     return switchstr;
// }
// let inp="OrAnGe"
// console.log(SwitchWorld(inp));
// function tocamelcase(str){
    // let word= str.split(' ');
// 
    // let camelCase = words[0].toLowerCase();
    // for(let i=1;i<words.length;i++){
        // let word = words[i].toLowerCase();
        // camelCase +=word.chaAt(0).toUpperCase()+word.sice(1);
// 
    // }
// return camelCase;
// }
// let inp="hello im anas esbitan";
// 
// console.log(tocamelcase(inp));
// 
function toCamelCase(str) {
    const words = str.split(' ');
    let camelCaseStr = words[0].toLowerCase(); 
    for (let i = 1; i < words.length; i++) {
        let word = words[i].toLowerCase(); 
        camelCaseStr += word.charAt(0).toUpperCase() + word.slice(1);
    }

    return camelCaseStr;
}
const input = "hello im Anas esbitan";

// طباعة الناتج
console.log(toCamelCase(input));
