// alert("Hello Welcome to your shop")
let Name = prompt("what is name ")

let user = prompt("select one opation student or custom")

let user1 = "student"

let user2 = "custom"

if(user == user1){
    if( student = prompt("select your age")){
        if(student <=12){
            alert(Name + " your ticket price is $5")
        }else if(student ==12||student == 13||student == 14||student ==15||student ==16|| student == 17  || student == 18){
            alert(Name + " your ticket price is $8")
        }else{
            alert(Name + "your ticket price is $12")
        }

    }
}else if(user == user2){
    if(student2 = prompt("select your age")){
      if(student2  <=12 || student2 == 13 || student2 ==14 || student2 || 15 || student2 == 16 || student2 == 17 || student2 ==18){
        alert(Name  + " your ticket price is $10")
      }else{
        alert(Name +"Your ticket price is $12")
      }
    }
}else{
    alert(Name + " please fill the form")
}

if(user == user1){
// 12 - 18 = $8
// < 12 = $5
// > = 

}else if(user == user2){
    alert("custom")
}else{
    alert("not valid")
}


