window.onload=function(){
  document.getElementById("addser").onclick = function() {
    addRow();
}
  document.getElementById('total').onclick = function() {
    calctots();
    document.getElementById('total').setAttribute('dissabled',true);
  }
}

var num = 1;

function addRow(){
  var table = document.getElementById("service_table");
  var tr = document.createElement("tr");

  var des = document.createElement("td");
  var quan = document.createElement("td");
  var cost = document.createElement("td");
  var td = document.createElement("td");

  var textarea = document.createElement("textarea");
  textarea.setAttribute('cols',120);
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


  num++;
}

function calctots(){
  var table = document.getElementById("service_table");
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var tot = document.createElement("td");

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(tot);
  table.appendChild(tr);
}
