function calljs() {
  addRowToTable();
};


function validation() {  
  var valid= true,
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  description = document.getElementById("desc").value;
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf("."); 
  date = document.getElementById("date").value;
  time = document.getElementById("time").value;
  var dt =new Date().toLocaleString();
  var year = date.slice(0,4).toString();
  var mon = date.slice(5,7).toString();
  var day = date.slice(8,10).toString();
  var curr_year = dt.slice(5,9).toString();
  var curr_mon = dt.slice(0,1).toString();
  var curr_day = dt.slice(2,4).toString();
  if(curr_day.length == 1){curr_day ="0"+curr_day}
  if(curr_mon.length == 1){curr_mon ="0"+curr_mon}
  var date_s = curr_day+curr_mon+curr_year;
  console.log(date_s);
  var date_g = day+mon+year;  
  console.log("Year is "+year+"And curr_year is"+curr_year)
  console.log("Month is "+mon+"And curr_mon is"+curr_mon)
  console.log("Day is "+day+"And curr_day is"+curr_day)  
  date_s = date_s.split("").reverse().join("");
  date_g = date_g.split("").reverse().join("");
  if(date_g<=date_s)
    {
     alert("Please Register before 24 hourse of Conducting Event");      
     valid = false;
    }
  if (name.length<3) 
    {
     alert("Invalid Name");
     valid = false;
    } 
  else if (name.length>30) 
    {
     alert("Invalid Name");
     valid = false;
    } 
  else if (isNaN(name)==false)
    {
     alert("Invalid Name");
     valid=false;
    } 
  else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) 
    {
     alert("Invalid Email id");
     valid = false;
    }
  else if (isNaN(phone)==true) 
    {
     alert("Invalid Phone Number");
     valid = false;
    } 
  else if (phone.length !=10 ) 
    {
     alert("Invalid Phone Number");
     valid = false;
    } 
  else if (desc.length < 10) 
    {
     alert("Description is too small");
     valid = false;
    }
  else
  return valid;
};

function addRowToTable() {    
  var table = document.getElementById("table");
  if (validation()) {
    alert("Congragulations ! All the best for your show")
    var newRow = table.insertRow(table.length),
      col1 = newRow.insertCell(0),
      col2 = newRow.insertCell(1),
      col3 = newRow.insertCell(2),
      col4 = newRow.insertCell(3),
      col5 = newRow.insertCell(4),
      col6 = newRow.insertCell(5),
      col7 = newRow.insertCell(6),
      col8 = newRow.insertCell(7);
      col9 = newRow.insertCell(8);
      col10 = newRow.insertCell(9);
      col11 = newRow.insertCell(10);
      col12 = newRow.insertCell(11);
    var num = document.getElementById('table').rows.length;
    console.log(num);
    num -=1;
    var gender = "";
    var venue = "";
    var event = ""; 
    if (document.getElementById('male').checked) {
    gender="Male";
    }
    else if(document.getElementById('female').checked){
    gender="Female";
    }
    else if(document.getElementById('other').checked){
    gender="Other";
    }
    if (document.getElementById('pune').checked) {
    venue="Pune Stage";
    }
    else if(document.getElementById('mumbai').checked){
    venue="Mumbai Stage";
    }
    else if(document.getElementById('delhi').checked){
    venue="Delhi Stage";
    }

    if (document.getElementById('Dancing').checked) {
    event="Dancing ";
    }
    if(document.getElementById('Singing').checked){
    event +="Singing ";
    }
    if(document.getElementById('Comedy').checked){
    event +="Comedy";
    }
    if (document.getElementById('Acting').checked) {
    event +="Acting";
    }
    var dt = new Date().toLocaleString();
    date = document.getElementById("date").value;
    time = document.getElementById("time").value;
    date = date.toString()+"   "+time.toString();
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    desc = document.getElementById("desc").value;
    col1.innerHTML = num;
    col2.innerHTML = name;
    col3.innerHTML = email;
    col4.innerHTML = phone;
    col5.innerHTML = gender;
    col6.innerHTML = venue;
    col7.innerHTML = event;
    col8.innerHTML = dt;
    col9.innerHTML = date;
    col10.innerHTML = desc;
    document.getElementById("forms").reset();

}
};