window.onload=function(){
  document.getElementById("addser").onclick = function() {
    addRow();
}
  document.getElementById('alltotal').onclick = function() {
    calc_cost();
  }
}

var num = 0;

function addRow(){
  // increment the # of rows
  num++;
  // get the table from html
  var table = document.getElementById("service_table");
  // create row in table
  var tr = document.createElement("tr");
  // creation of cell in table.
  var des = document.createElement("td");
  var quan = document.createElement("td");
  var cost = document.createElement("td");
  var td = document.createElement("td");
  // service dexcription
  var textarea = document.createElement("textarea");
  textarea.setAttribute('cols',50);
  textarea.setAttribute('rows',2);
  textarea.setAttribute('id',"text"+num);
  // quantity input
  var input1 = document.createElement("input");
  input1.setAttribute('id',"quant"+num);
  input1.setAttribute('type','number');
  input1.setAttribute('maxlength',5);
  // cost input
  var input2 = document.createElement("input");
  input2.setAttribute('id',"cost"+num);step='.01'
  input2.setAttribute('step',.01);
  input2.setAttribute('min',.01);
  input2.setAttribute('type','number');
  td.setAttribute('id','total'+num);
  // append objects to cells
  des.appendChild(textarea);
  quan.appendChild(input1);
  cost.appendChild(input2);
  // append cells to row
  tr.appendChild(des);
  tr.appendChild(quan);
  tr.appendChild(cost);
  tr.appendChild(td);
  // append row to table
  table.appendChild(tr);
 }

function calc_cost(){
  // create the sum @ 0
  var sum = 0;
  // loop through the rows
  for(var i=num;i>0;i--){
    var x = document.getElementById("cost"+i);
    var cost = x.value;
    var y = document.getElementById("quant"+i);
    var q = y.value;
    // total the current rows
    var total = q * cost;
    // set the row total to the calculated
    document.getElementById("total"+i).innerHTML = total;
    // add the total to sum.
    sum = sum + total;
	 document.getElementById("subtot").innerHTML = sum;
	 var tax = sum * .05;
	 document.getElementById("tax").innerHTML = tax;
	 var fintot = sum + tax;
	 document.getElementById("fintotal").innerHTML = fintot;
  }
}
