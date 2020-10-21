
function tipcalc(){
  var billAmount = document.getElementById("billtopay").value;
  var quality = document.getElementById("quality").value;
  var sharing = document.getElementById("peoplesharing").value;

  if(billAmount == 0 || quality == 0){
    alert("please enter some value");
  }

  var amount= (billAmount*quality)/(sharing);
  amount = Math.round(amount);
  console.log(amount);
  amount.print;
  document.getElementById("tip").innerHTML = amount;
}

document.getElementById("calculate").addEventListener("click",tipcalc);
