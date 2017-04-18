window.onload=function(){
  document.getElementById("addser").onclick = function() {
    addRow();
}
  document.getElementById('total').onclick = function() {
    calctots();
  }
  document.getElementById('alltotal').onclick = function() {
    caltfinaltotal();
  }
}

var num = 0;

function addRow(){
    num++;

  var table = document.getElementById("service_table");
  var tr = document.createElement("tr");

  var des = document.createElement("td");
  var quan = document.createElement("td");
  var cost = document.createElement("td");
  var td = document.createElement("td");

  var textarea = document.createElement("textarea");
  textarea.setAttribute('cols',100);
  textarea.setAttribute('rows',7);
  textarea.setAttribute('id',"text"+num);
  var input1 = document.createElement("input");
  input1.setAttribute('id',"quant"+num);
  input1.setAttribute('type','number');
  var input2 = document.createElement("input");
  input2.setAttribute('id',"cost"+num);step='.01'
  input2.setAttribute('step',.01);
  input2.setAttribute('min',.01);
  input2.setAttribute('type','number');
  td.setAttribute('id','total'+num);

  des.appendChild(textarea);
  quan.appendChild(input1);
  cost.appendChild(input2);

  tr.appendChild(des);
  tr.appendChild(quan);
  tr.appendChild(cost);
  tr.appendChild(td);
  table.appendChild(tr);
}

function calctots(){
  for(var i=num;i>0;i--){
    var x = document.getElementById("cost"+i);
    var cost = x.value;
    var y = document.getElementById("quant"+i);
    var q = y.value;

    document.getElementById("total"+i).innerHTML = "$"+cost * q+".00";
  }
}

function caltfinaltotal(){
  var sum = 0;

  for(var i=num;i>0;i--){
    var x = document.getElementById("cost"+i);
    var cost = x.value;
    var y = document.getElementById("quant"+i);
    var q = y.value;

    var total = q * cost;

    document.getElementById("total"+i).innerHTML = "$"+total+".00";
    sum = sum + total;
  }

  var table = document.getElementById("service_table");
  var tr = document.createElement("tr");
  var des = document.createElement("td");
  var quan = document.createElement("td");
  var cost = document.createElement("td");
  var total = document.createElement("td");

  total.innerHTML = "$"+sum+".00";

  tr.appendChild(des);
  tr.appendChild(quan);
  tr.appendChild(cost);
  tr.appendChild(total);
  table.appendChild(tr);
}
