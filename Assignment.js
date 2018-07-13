//Create An Array
var Main=[];
function AddRecord(Id,Name,Address,Email,Class)
{
    var Add =[Id,Name,Address,Email,Class];
    Main.push(Add);
}
//To Remove Record...
function RemoveRecord(Id)
{
Main.map(function(Value)
{
if(Value[0]===Id)
{
    delete Main[0];
    console.log("Record Deleted Successfully");
}
});
}
//To Update Record...
function UpdateRecord(Id)
{
    Main.map(function(Value)
    {
        if(Value[0]===Id)
        {
            Value[1]="Jamal Khan";
            console.log("Updated Record = : "+Value);
        }

    });
}
//Display Record...
function DisplayREcord(Id)
{
    Main.map(function(Value)
    {
        if(Value[0]===Id)
        {
            console.log("Display Record of Specific Id : "+Value);
        }
    });
}

AddRecord(1,"Fazeel","AJ&K","p.pakistan47@gmail.com","BS(SE)");
AddRecord(2,"Jamal","Abbotabad","jimikhan@gmail.com","BS(SE)");
AddRecord(3,"Zohaib","RawalPinid","Zohaib@gmail.com","BS(SE)");
RemoveRecord(1);
UpdateRecord(2);
DisplayREcord(3);