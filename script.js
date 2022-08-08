var initialpriceref=document.querySelector("#initial-price");
var qnty_stocks=document.querySelector("#qnty-stocks");
var cur_price=document.querySelector("#current-price");
var button=document.querySelector("#button");
var output_div=document.querySelector("#output-div")
var clickhandler=()=>{
  let initprice=Number(initialpriceref.value);
  let qntyofstocks=Number(qnty_stocks.value);
  let currentprice=Number(cur_price.value);
  let diffamount=Math.abs(initprice-currentprice);
  let percentage=Math.trunc(((diffamount)/initprice)*(100));
  if(currentprice > initprice)
  {
    output_div.innerText="We Made a profit of rupees "+((currentprice-initprice)*(qntyofstocks)+" with profit percentage "+percentage+"%");
  }
  else if(currentprice==initprice)
  {
    output_div.innerText="No Profit and No Loss both current price and initial price are same!!";
  }
  else
  {
    output_div.innerText="We Made a loss of rupees "+((initprice-currentprice)*(qntyofstocks)+" with loss percentage "+percentage)+"%";
  }
}
button.addEventListener("click",clickhandler);