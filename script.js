var initialpriceref=document.querySelector("#initial-price");
var qnty_stocks=document.querySelector("#qnty-stocks");
var cur_price=document.querySelector("#current-price");
var button=document.querySelector("#button");
var output_div=document.querySelector("#output-div")
var clickhandler=()=>{
  let initprice=Number(initialpriceref.value);
  let qntyofstocks=Number(qnty_stocks.value);
  let currentprice=Number(cur_price.value);
  if(currentprice > initprice)
  {
    output_div.innerText="We Made a profit of rupees "+((currentprice-initprice)*(qntyofstocks));
  }
  else
  {
    output_div.innerText="We Made a loss of rupees "+((initprice-currentprice)*(qntyofstocks));
  }
}
button.addEventListener("click",clickhandler);