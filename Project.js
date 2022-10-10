function getInputValue(txtweight,txtheight) 
{
    console.log(txtweight,txtheight)
    BmiCalculate(txtweight,txtheight)
    //alert(BmiCalculate(txtweight,txtheight)) แสดงผลผ่านการ alert
}


function BmiCalculate(weight, heightCm) {

    let heightMeter = (heightCm/100);
    console.log(heightMeter)
    let bmi = (weight / (heightMeter * heightMeter));

    let result;

    if (bmi < 18.5) {
        result = "ผอมไป"
    }
    else if (25 < bmi && bmi < 30) {
        result = "สมส่วน"
    }
    else if (bmi > 30.0) {
        result = "อ้วน"
    }
    else { result = "อ้วนมาก" }
    ;
    document.getElementById("BMI").innerHTML = result
}



//document.getElementById(demo).innerHTML = result
