//function toCelsius(fahrenheit)
//{

//let value = (fahrenheit-32)* 5 / 9
// document.getElementById("toCelcius").innerHTML = value.toFixed(2) + " C" ;
//}

function toCelsius(fahrenheit) {
 
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + " C";
}

//function display(elementId, value) 
//{
    //document.getElementById(elementId).innerHTML = value;
//}


function toFahrenheit(celcius) {
    console.log(celcius)
    let value = (celcius * 9) / 5 + 32
    return value.toFixed(2) + calllingF();

}


function toFahrenheitProgram(inputValue)
{
        alert(toFahrenheit(inputValue))
    
}

function toCelsiusProgram(inputValue)
{
    alert(toCelsius(inputValue))
}

function calllingF()
{
    return "F"
}



//toFixed() == การว่าค่าที่ออกมาจะมีทศนิยมกี่ตำแหน่ง (2) ก็คือสองตำแหน่ง

//สิ่งที่เขาต้องการให้ทำคือ ไม่ให้ function มีหน้าที่ซ้ำซ้อนจนเกินไปเลยต้องสร้าง fn นึงแค่แปลงหน่วย
//ส่วนอีก fn คือการเอาไปแสดงผล