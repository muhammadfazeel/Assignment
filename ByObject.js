var Main=[];
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

AddRecord(1,"Fazeel","AJ&K","p.pakistan47@gmail.com","BS(SE)");
console.log(Main);