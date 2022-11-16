let qrt = prompt("จำนวนสินค้า")
let total = 0 
for(var i = 1; i <= qrt; i++)
{
    let itemPrice = prompt("ราคาสินค้าชิ้นที่" + i)
    document.getElementById("price-list").innerHTML +=
     "รายการสินค้าชินที่ " + i + " : " + itemPrice +"฿<br>"

     total += parseInt(itemPrice)
     //หมายถึง การเอา itemPriceของแต่ละชิ้นมาบวกกันแล้วเก็บค่าเข้าไปใน total 
    // total = total + parseInt(itemprice)
    // total = total + parseInt(itemprice) จนจบ loop

}

  document.getElementById("result").innerHTML= total + " ฿"

    /// ตัวแปร i เอาไว้เก็บจำนวนรอบที่จะ loop
    /// บรรทัดที่ 4 ถ้าเราใส่ = เฉยๆ มันจะแสดงค่าของ loop สุดท้ายแค่ค่าเดียว 
 
