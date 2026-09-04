// Question 01

// 1. 🛒 Online Shopping Checkout
// Create a small shopping checkout system.
// Ask the customer for:
// Product name
// Product price
// Quantity
// Calculate the total amount and display a professional bill using document.write().
// Example:
// ========== SHOPPING BILL ==========
// Product: Wireless Mouse
// Price: $15
// Quantity: 2
// Total: $30
// ===================================

// document.write("<h2> 1. 🛒 Online Shopping Checkout </h2> " + "</br> ");
// let productName = prompt("Enter product name : ");
// let productPrice = +prompt("Enter product price : ");
// let productQuantity = +prompt("Enter Quantity of product : ");

// let totalPrice = productPrice * productQuantity;

// document.write("<h3>========== SHOPPING BILL ==========</h3>" + " </br>");
// document.write("Product : " + productName + "</br>");
// document.write("Price : $" + productPrice + "</br>");
// document.write("Quantity : " + productQuantity + "</br>");
// document.write("Total : $" + totalPrice + "</br> ");
// document.write("<h3> ===================================</h3>" + "</br> </br>");


// Question No 02 

// 2. 🎓 Student Result System
// Create a student result system.
// Ask the student for:
// Student name
// Total marks
// Obtained marks
// Calculate the percentage and use if...else if...else to display the grade.
// Example:
// Student: Muhammad Ali
// Percentage: 85%
// Grade: A
// Result: Pass


// document.write(" <h2> 2. 🎓 Student Result System </h2> "+"</br>");

// let studentName = prompt("Enter your name : ");
// let totalMarks = +prompt("Enter total marks : ");
// let obtainedMarks = +prompt("Enter Obtained Marks : ");
// let percentage = (( obtainedMarks / totalMarks ) * 100).toFixed(0);
// let grade;
// let result ;
// if( percentage >= 90 && percentage <= 100 ) {
//      grade = "A+";
//      result = "Pass";
// }else if( percentage >= 80 && percentage <= 90 ){
//      grade = "A";
//      result = "Pass";
// }else if( percentage >= 70 && percentage <= 80 ){
//      grade = "B";
//      result = "Pass";
// }else if( percentage >= 60 && percentage <= 70 ){
//      grade = "C";
//      result = "Pass";
// }else if( percentage >= 50 && percentage <= 60 ){
//      grade = "D";
//      result = "Pass";
// }else {
//      grade = "F";
//      result = "F";
// }


// document.write(" <h3>========== STUDENT EXAM RESULT CARD ==========</h3> "+"</br>");
// document.write("Student : " + studentName + "</br>");
// document.write("Percentage : " + percentage + "</br>");
// document.write("Grade : " + grade + "</br>");
// document.write("Result : " + result + "</br>");
// document.write(" <h3>================================================</h3> "+"</br> </br>");


// 3. 🏦 Bank Withdrawal System
// Create a simple ATM withdrawal system.
// Ask the user for:
// Account holder name
// Current balance
// Withdrawal amount
// If the withdrawal amount is available in the balance, calculate the remaining balance.
// Otherwise display:
// Transaction Failed
// Reason: Insufficient Balance

// document.write(" <h2> 3. 🏦 Bank Withdrawal System  </h2> " + "</br>");

// let accountHolderName = prompt("Enter Account holder name : ");
// let currentBalance = +prompt("Enter current balance : ");
// let withdrawAmount = +prompt("Enter Withdraw Amount : ");
// let remainingBalance = 0;

// document.write(" <h3>========== BANK TRANSACTION RECEIPT ==========</h3> "+"</br>");

//    document.write("Account Holder Name : "+ accountHolderName +"</br>");
//    document.write("Current Balance : " + currentBalance + "</br>");

// if(withdrawAmount <= currentBalance && withdrawAmount > 0){
//    remainingBalance = currentBalance - withdrawAmount;
//    document.write("Withdrawal Amount : " + withdrawAmount + "</br>");
//    document.write("Remaining Balance : " + remainingBalance +  "</br>");
// }else {
//     document.write("Transaction Failed "+"</br>");
//     document.write("Reason : Insufficient Balance !" +"</br>");
// }

// document.write(" <h3>================================================</h3> "+"</br> </br>");


// Question No 04 

// 4. 🚗 Driving License Eligibility
// Create a driving license eligibility system.
// Ask the user's:
// Name
// Age
// If the user is 18 or older, display:
// Name: Ahmed
// Age: 21
// Status: Eligible for Driving License
// Otherwise display:
// Status: Not Eligible
// Reason: Minimum age is 18


//  document.write(" <h2> 4. 🚗 Driving License Eligibility  </h2> " + "</br>");

//  let userName = prompt("Enter your name : ");
//  let userAge = prompt("Enter your age : ",10);

//   document.write(" <h3>========== DRIVING LICENSE ELIGIBILITY CARD ==========</h3> "+"</br>");

//     document.write("Name :  "+ userName + "</br>");
//     document.write("Age :   "+ userAge + "</br>");

//   if(userAge >= 18){
//     document.write("Status : " + "Eligible for driving license" +"</br>");   
//   } else {
//     document.write("Status : "+ "Not Eligible" +"</br>");
//     document.write("Reason : "+ "Minimum age is 18" +"</br>");
//   }

//   document.write(" <h3>======================================================</h3> "+"</br> </br>");


// Question No 05 

// 5. 🏨 Hotel Room Booking
// Create a simple hotel booking system.
// Ask the customer for:
// Customer name
// Number of nights
// Price per night
// Calculate the total hotel bill and display it using document.write().
// Example:
// ========== HOTEL BOOKING ==========
// Guest: Ali Ahmed
// Nights: 3
// Price Per Night: $50
// Total Amount: $150
// ===================================

//  document.write(" <h2> 5. 🏨 Hotel Room Booking  </h2> " + "</br>");

//  let customerName = prompt("Enter your name : ");
//  let numberOfNights = +prompt("Enter number of nights you stay here in hotel : ");
//  let pricePerNight = +prompt("Enter price per night you stay here in hotel : ");
//  let totalBill = numberOfNights * pricePerNight;


//  document.write(" <h3>========== HOTEL ROOM BOOKING RECEIPT ==========</h3> "+"</br>");

//  document.write("Guest : "+ customerName +"</br>");
//  document.write("Nights : "+ numberOfNights +"</br>");
//  document.write("Price Per Night : $"+ pricePerNight +"</br>");
//  document.write("Total Amount : $"+totalBill);

//  document.write(" <h3>===================================================</h3> "+"</br> </br>");



// 6. 🔐 Employee Login System
// Create a simple employee login system.
// Store a correct:
// ● Username
// ● Password
// Ask the employee to enter their username and password using prompt().
// If both are correct:
// Welcome to Employee Dashboard
// Login Status: Successful
// Otherwise:
// Login Failed
// Invalid Username or Password


//   document.write(" <h2> 6. 🔐 Employee Login System  </h2> " + "</br>");

//   const correctUsername = "exampledemo@gmail.com";
//   const correctPassword = "Demo@123"

//   const username = prompt("Enter username : ");
//   const password = prompt("Enter password : ");

//    document.write(" <h3>=========== Employee Login System ===========</h3> "+"</br>");

//    if(username !== correctUsername && password !== correctPassword){
//         document.write("Invalid Username and Password!" + "</br>")
//    } else if(username !== correctUsername){
//         document.write("Invalid Username!" + "</br>");
//    } else if(password !== correctPassword){
//         document.write("Invalid Password!"+"</br>")
//    } else {
//         document.write("Welcome to Employee Dashboard" + "</br>");
//         document.write("Login Status : Successful"+"</br>")
//    }
//    document.write(" <h3>=========================================</h3> "+"</br> </br>");




// 7. 📦 Delivery Charges System
// Create an online delivery charge calculator.
// Ask the customer for the order amount.
// Use these conditions:
// ● Amount $100 or more → Free Delivery
// ● Amount 50–99 → Delivery = $5
// ● Amount below $50 → Delivery = $10
// Display the order amount, delivery charges, and final amount.


// document.write(" <h2> 7. 📦 Delivery Charges System   </h2> " + "</br>");

// let orderAmount = +prompt("Enter order amount : ");
// let deliveryCharges = 0;
// let dollarSign = "$";

// if(orderAmount >= 100){
//    deliveryCharges = 0;
// } else if (orderAmount >= 50 && orderAmount <= 99){
//      deliveryCharges = 5;
// } else if(orderAmount < 50){
//      deliveryCharges = 10;
// }

// const finalAmount = orderAmount + deliveryCharges;

// let deliveryDisplay = deliveryCharges === 0 ? "Free Delivery" : "$" + deliveryCharges ;

// document.write(" <h3>=========== Online Delivery Charge Calculator  ===========</h3> "+"</br>");

// document.write("The Order Amount is : "+ dollarSign +orderAmount  +"<br>");
// document.write("The Delivery Charges are : "+ deliveryDisplay+"<br>");
// document.write("The Final Amount is : "+ dollarSign + finalAmount +"<br>")

// document.write(" <h3>=================================================</h3> "+"</br> </br>");



// 8. 🏫 School Attendance System
// Create an attendance system for a class.
// Create an array containing 10 student names.
// Use a for loop to display every student with their serial number.
// Example:
// ========== CLASS ATTENDANCE ==========
// 1. Ahmed
// 2. Muhammad
// 3. Sara
// 4. Zainab
// ...
// ======================================
// Total Students: 10


//  document.write(" <h2> 8. 🏫 School Attendance System   </h2> " + "</br>");

//  document.write(" <h3>=========== Class Attendance ===========</h3> "+"</br>");

//  const studentNames = ["Ahmed" , "Muhammad" , "Sara" , "Zainab" , "Duaa" , "Iqra" , "Kainaat" , "Saheer" , "Sartaj" , "Sultan"];

//  for(let i = 0 ; i < studentNames.length ; i++){
//      document.write( ( i+1 ) + ".&emsp; " + studentNames[i] + "<br>");
//  }

//  document.write(" <h3>==========================================</h3>");
//  document.write("Total Students : "+ studentNames.length)




// 9. 📱 Mobile Store Inventory
// Create an array containing 5 mobile phone names.
// Perform the following operations:
// 1. Add a new mobile to the array.
// 2. Remove one mobile from the array.
// 3. Display all available mobiles using a for loop.
// 4. Display the total number of mobiles using .length.
// Example:
// ========== MOBILE INVENTORY ==========
// 1. iPhone 15
// 2. Samsung S24
// 3. Google Pixel 9
// 4. OnePlus 12
// 5. Xiaomi 14
// Total Mobiles: 5
// ======================================



//  document.write(" <h2>  9. 📱 Mobile Store Inventory </h2> " + "</br>");

//  const mobileNames = ["iPhone 15" , "Samsung S24" , "Google Pixel 9" , "OnePlus 12" , "Xiaomi"];

//  mobileNames.push("Infinix Hot 9 Play");

//  mobileNames.splice(4,1);

//  document.write(" <h3>=========== Mobile Inventory ===========</h3> "+"</br>");
  
//  for(let i = 0 ; i < mobileNames.length ; i++){
//      document.write( ( i + 1 ) + ".&emsp; " + mobileNames[i] + "<br>")
//  }
//  document.write("<br>" + "Total Mobiles : " + mobileNames.length);


//  document.write(" <h3>==========================================</h3>");



// 10. �  Employee Salary Calculator 
// Create an employee salary calculator. 
// Ask the employee for: 
// ● Employee name 
// ● Basic salary 
// Calculate a bonus according to salary: 
// ● Salary ≥ $5,000 → 20% bonus 
// ● Salary ≥ $3,000 → 10% bonus 
// ● Salary below $3,000 → 5% bonus 
// Display: 
// ========== SALARY SLIP ========== 
// Employee: Ahmed Khan 
// Basic Salary: $4000 
// Bonus: $400 
// Final Salary: $4400 
// ================================= 

 document.write(" <h2>  10. �  Employee Salary Calculator  </h2> " + "<br>");

 let employeeName = prompt("Enter your name : ");
 let employeeBasicSalary = +prompt("Enter Basic Salary : ");
 let bonus = 0;

 if( employeeBasicSalary <= 0) {
   document.write("Invalid Basic Salary!"+"<br>")
 } else {
     if( employeeBasicSalary >= 5000 ) {
          bonus =  Number((( 20 / 100 ) * employeeBasicSalary).toFixed(0)) ;
     } else if ( employeeBasicSalary >= 3000 ) {
          bonus =  Number((( 10 / 100 ) * employeeBasicSalary).toFixed(0)) ;
     } else {
          bonus =  Number((( 5 / 100 ) * employeeBasicSalary).toFixed(0) );
     } 


  const finalSalary = employeeBasicSalary + bonus;

  document.write(" <h3>=========== Salary Slip ===========</h3> "+"<br>");
  
  document.write("Employee Name : "+employeeName + "<br>");
  document.write("Employee Basic Salary : $"+employeeBasicSalary + "<br>");
  document.write("Bonus : $" + bonus + "<br>");
  document.write("Final Salary : $" + finalSalary + "<br>")
  document.write(" <h3>======================================</h3>");



 }
 

  
