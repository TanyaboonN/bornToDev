function getInputValue(txtweight,txtheight) 
{
    console.log(txtweight,txtheight)
    BmiCalculate(txtweight,txtheight)
    //alert(BmiCalculate(txtweight,txtheight)) แสดงผลผ่านการ alert
}


function BmiCalculate(weight, heightCm) {

    let heightMeter = (heightCm/100);
    console.log(heightMeter)
    let bmi = (weight / (heightMeter * heightMeter))
    console.log(bmi);

    let result;

    if (bmi < 18.5) {
        result = "ผอมไป"
    }
    else if (18 <= bmi && bmi <= 22.9) {
        result = "สมส่วน"
    }
    else if (23.0 <= bmi && bmi <= 24.9) {
        result = "ท้วม"
    }
    else if (25.9 <= bmi && bmi <= 29.9) {
        result = "อ้วน" 
    }
    else { result = "อ้วนมาก" }
    ;
    document.getElementById("BMI").innerHTML = result
}



//document.getElementById(demo).innerHTML = result
