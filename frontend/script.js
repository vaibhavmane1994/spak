var selectedRow = null;
function onformsubmit(){
    var Formdata = readformdata(); 
    if(selectedRow==null)
    insertNewRecord(Formdata);
    else
     updateRecord(Formdata);
    
     resetform();
    

}
function readformdata(){
    var formdata={};
    var firstName=document.getElementById("name").value;
    var lastName=document.getElementById("add").value;
    var fullName=firstName + " " + lastName;
    formdata["fullname"]=fullName;
    var dob=document.getElementById("birth").value;
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
    }
      formdata["birt"]=age;
    formdata["add"]=document.getElementById("add").value;
    formdata["addd"]=document.getElementById("addd").value;
    formdata["birth"]=document.getElementById("birth").value;
    formdata["country"]=document.getElementById("country").value;
    return formdata;
}

function insertNewRecord(data){
    var table = document.getElementById("employelist").getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     cell1=newRow.insertCell(0);
     cell1.innerHTML = data.fullname;
     cell2=newRow.insertCell(1);
     cell2.innerHTML = data.addd;
     cell3=newRow.insertCell(2);
     cell3.innerHTML = data.birt;
     cell4=newRow.insertCell(3);
     cell4.innerHTML = data.country;
     cell4=newRow.insertCell(4);
     cell4.innerHTML = `<a onClick ="onEdit(this)">Edit<a> <a onClick="onDelete(this)">DELETE<a>`;
}

   function resetform(){
       document.getElementById("name").value ="";
       document.getElementById("addd").value ="";
       document.getElementById("add").value ="";
       document.getElementById("birth").value ="";
       document.getElementById("country").value ="";
       var selectedRow = null;
   }

        function onEdit(td){
            selectedRow = td.parentElement.parentElement;
            document.getElementNyId("name").value = selectedRow.cells[0].innerHTML;
            document.getElementNyId("add").value = selectedRow.cells[1].innerHTML;
            document.getElementNyId("birth").value = selectedRow.cells[2].innerHTML;
            document.getElementNyId("country").value = selectedRow.cells[3].innerHTML;

        }
             function updateRecord(formdata){
                selectedRow.cells[0].innerHTML= formdata.name;
                 selectedRow.cells[1].innerHTML= formdata.add;
                 selectedRow.cells[2].innerHTML= formdata.birth;
                 selectedRow.cells[3].innerHTML= formdata.country;

           }
            function onDelete(td){
                if(confirm("Are you sure to delete the Data?"))
                row = td.parentElement.parentElement;
                document.getElementById("employelist").deleteRow(row.rowIndex);
                resetform();
            }