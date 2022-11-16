let round = prompt("จำนวนรอบที่คุณต้องการเล่น")
for (var i = 0; i < round; i++) {
    var answer = prompt("หัวหรือก้อยเลือกมา ! ")
    var random_answer = ""
    if (Math.floor(Math.random() * 10) <= 4) {
        random_answer = "หัว"
    }
    else {
        random_answer = "ก้อย"
    }



    // condition เช็คคำตอบที่ user กรอกเข้ามาว่าถูกต้องมั้ย
    if (answer == "หัว" || answer == "Head") {
        alert("ผลที่ออกก็คือ" + "  " + random_answer)
    }
    else if (answer == "ก้อย" || answer == "Tail") {
        alert("ผลที่ออกก็คือ"+ "  " + random_answer)
    }
    else {
        alert("คุณกรอกข้อมูลไม่ถูกต้องนะ !!")
    }



    if (answer == random_answer) {
        alert("คุณทายถูกยินดีด้วย")
    }
    else if (answer != random_answer){
        alert("คุณทายผิดเสียใจด้วย")
    }
     
    console.log(random_answer + "  :  " + answer)



    // if(answer=="หัว"){
    //document.getElementById("game-list").innerHTML=random_answer
    //}
    //else if(answer=="Head"){
    // document.getElementById("game-list").innerHTML=random_answer

    // }
    // else if(answer=="ก้อย"){
    //   document.getElementById("game-list").innerHTML=random_answer        
    // }
    // else if(answer=="Tail"){
    // document.getElementById("game-list").innerHTML=random_answer
    // }
    //else {
    //alert("คุณกรอกข้อมูลไม่ถูกต้อง !!")
    // }

    //console.log(random_answer)

}

//มีการใส่ตัวเลขลงไปว่าจะเล่นกี่รอบ
// สุ่มก่อนทาย / ทายก่อนสุ่ม ???