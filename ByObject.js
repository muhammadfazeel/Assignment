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
//To Update Record...
function UpdateRecord(Id)
{
Main.map(function(Value)
{
Value[1]="Adeel";
Value[2]="PodriChok";
Value[3]="Adeel@gmail.com";
});
}
function DisplayREcord()
{
    Main.map(function(Value)
    {
        console.log(Value);
    });
}




AddRecord(0,"Fazeel","AJ&K","p.pakistan47@gmail.com","BS(SE)");
AddRecord(1,"Uxama","Mirpur AJ&K","uxama@gmail.com","BS(CV)");
AddRecord(2,"Zohaib","Rawalpindi","Zohaib@gmail.com","BS(SE)");
DeleteRecord(0);
UpdateRecord(1);
DisplayREcord();
console.log(Main);