// 1. Μια εταιρία πρόκειται να δώσει αύξηση στους εργαζομένους της με βάση τις μηνιαίες απολαβές τους.
//    Έτσι, αν κάποιος εργαζόμενος έχει μηνιαίες απολαβές έως και 1000 ευρώ θα πάρει αύξηση 14%,
//    αν έχει απολαβές μεγαλύτερες από 1000 και έως και 1800 ευρώ θα πάρει αύξηση 11%, 
//    και αν έχει μηνιαίες απολαβές μεγαλύτερες των 1800 ευρώ θα πάρει αύξηση 7%.
//    Να γραφτεί πρόγραμμα που θα διαβάζει τον μισθό ενός εργαζομένου και θα εκτυπώνει το ποσό αύξησης και τον τελικό μισθό του.


var salary = +prompt("State your salary");
var raise = 0;
var newSalary = 0;

if (salary <= 1000){
    raise = salary*0.14;
    newSalary = salary + raise;
}else if(salary > 1000 && salary <= 1800){
    raise = salary*0.11;
    newSalary = salary + raise;
}else if(salary > 1800){
    raise = salary*0.07;
    newSalary = salary + raise;
}
console.log(`Your earliest salary of ${salary} got raised by ${raise} to a new total of ${newSalary}`);










// 2. Ένα Internet Cafe έχει την ακόλουθη πολιτική χρέωσης (κλιμακωτά) 
//    Τα πρώτα τριάντα λεπτά: 1.40 ευρώ 
//    Τα επόμενα τρία 30λεπτα: 1.10 ευρώ το κάθε 30λεπτο 
//    Ο υπόλοιπος χρόνος: 0.03 ανά δευτερόλεπτο 
//    Να γραφτεί πρόγραμμα που θα διαβάζει τον χρόνο στον οποίο κάποιος πελάτης έκανε χρήση των υπηρεσιών του 
//    Internet Café και θα εκτυπώνει τη χρέωση. 


var time = +prompt("Give time in minutes");
var price = 4.70;

if(time <= 30){
    price = 1.40;
}else if(time > 30 && time <= 60){
    price = 2.50;
}else if(time > 60 && time <=90){
    price = 3.60;
}else if(time > 90 && time <=120){
    price = 4.70;
}else if(time > 120){
    for(i = 120; i <= time;i++){
        price += 1.8;
    }
}
 console.log(`You used the services for ${time} minutes.Your fee is ${price}`);

