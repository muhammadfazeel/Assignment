var Main=[];
//To Add Record...
function AddRecord(Id,Name,Address,Email,Class)
{
    Main.push(
        {
        i:Id,
        nam:Name,
        adrs:Address,
        emal:Email,
        cls:Class
    }
    
);
}
//To Delete Record..
function DeleteRecord(Id)
{
  var key=Id;
  delete Main[key];
}

AddRecord(0,"Fazeel","AJ&K","p.pakistan47@gmail.com","BS(SE)");
AddRecord(1,"Uxama","Mirpur AJ&K","uxama@gmail.com","BS(CV)");
AddRecord(2,"Zohaib","Rawalpindi","Zohaib@gmail.com","BS(SE)");
DeleteRecord(0);
console.log(Main);