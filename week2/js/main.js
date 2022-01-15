function calcNum(){

  var numInput = document.getElementById("myNumber");
  var sum = 0;
  for (let i = 0; i < numInput; i++ ) 
{
  
  sum += i + 1;
}
  let output = document.createElement('p');
  
  output.textContent = "Total is: " + sum;
  document.querySelector('div#Output').appendChild(output);
}
  
  


