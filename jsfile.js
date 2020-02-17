var maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var feemaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleidentifier;
var femaleidentifier;
var maleresult, femaleresult;
var dd, mm, yy;


function getInputValue(){
    var day= new Date(document.getElementById("date").value);
    dd= day.getDay();
    mm = day.getMonth();
    yy = day.getFullYear();
}

function outputs(){
    alert(dd);
    alert(mm);
    alert(yy);
}

function validation(){
    getInputValue();
    outputs();
    if(maleidentifier=true){
        maleresult=maleName[dd];
        alert(maleresult);
    }else if(maleidentifier=false){
        femaleidentifier=true;
    }else if(femaleidentifier=true){
        femaleresult=feemaleName[dd];
        alert(femaleresult);
    }else{
        maleidentifier=true;
    }
}

function male(){
    maleidentifier = true;
}

function female(){
    femaleidentifier = true;
}

