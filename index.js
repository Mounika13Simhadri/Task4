
function s1(event){
    debugger
    event.preventDefault();
  
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle1").style.color = "black";
    document.getElementById("step1").style.display = "block";

      
    document.getElementById("circle2").style.backgroundColor = "transparent";
    document.getElementById("circle2").style.color = "white";
    document.getElementById("circle3").style.backgroundColor = "transparent";
    document.getElementById("circle3").style.color = "white";
    document.getElementById("circle4").style.backgroundColor = "transparent";
    document.getElementById("circle4").style.color = "white";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
    document.getElementById("step5").style.display = "none";
    //validate1(event);
    
}
function validate1(event)
{
    event.preventDefault();
    let name;
    let email;
    let phone;
    let value1=true;
    let value2=true;
    let value3=true;

        name=document.getElementById("txt1").value;
        if(name==""){
           alert("please enter the Name!"); 
           value1=false;
        }

        email=document.getElementById("txt2").value;
        if(email==""){
            alert("please enter the email!");
            value2=false;
        }
        
        phone=parseInt(document.getElementById("txt3").value);
        if(phone=="null"||isNaN(phone)){
           alert("please enter the phone number!");
           value3=false;
        }
        
        if((value1==true)&&(value2==true)&&(value3==true))
        {
            s2(event);
        }
    
} 

function s2(event){
    event.preventDefault();
    
    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle2").style.color = "black";
    document.getElementById("step2").style.display = "block";
  
    document.getElementById("circle1").style.backgroundColor = "transparent";
    document.getElementById("circle1").style.color = "white";
    document.getElementById("circle3").style.backgroundColor = "transparent";
    document.getElementById("circle3").style.color = "white";
    document.getElementById("circle4").style.backgroundColor = "transparent";
    document.getElementById("circle4").style.color = "white";
    document.getElementById("step1").style.display = "none"; 
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
    document.getElementById("step5").style.display = "none";
}
function msecond(event){
    event.preventDefault();
    event.preventDefault();
    document.getElementById("m2").style.display="block";
    document.getElementById("t22").style.display="block";

    document.getElementById("y2").style.display="none";
    document.getElementById("t23").style.display="none";
}
function ysecond(event){
    event.preventDefault();

    document.getElementById("y2").style.display="block";
    document.getElementById("t23").style.display="block";

    document.getElementById("m2").style.display="none";
    document.getElementById("t22").style.display="none";
}


function validate2(event)
{
    event.preventDefault();
    let value1=false;


    if((document.getElementById("m21").checked == true)||(document.getElementById("m22").checked == true)||(document.getElementById("m23").checked == true)||(document.getElementById("y21").checked == true)||(document.getElementById("y22").checked == true)||(document.getElementById("y23").checked == true))
    {
        
        s3(event)
    }   
    else
    {
        alert("Select any one plan!");
        
    }


       
}

function s3(event){
    event.preventDefault();
    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle3").style.color = "black";
    document.getElementById("step3").style.display = "block"; 

    document.getElementById("circle1").style.backgroundColor = "transparent";
    document.getElementById("circle1").style.color = "white";
    document.getElementById("circle2").style.backgroundColor = "transparent";
    document.getElementById("circle2").style.color = "white";
    document.getElementById("circle4").style.backgroundColor = "transparent";
    document.getElementById("circle4").style.color = "white";
    document.getElementById("step1").style.display = "none"; 
    document.getElementById("step2").style.display = "none";
    document.getElementById("step4").style.display = "none";
    document.getElementById("step5").style.display = "none"; 
}

function calculate1(event){
    event.preventDefault();

    if(document.getElementById("m21").checked== true){
        document.getElementById("l1").value="Arcade(Monthly)";
        document.getElementById("r1").value="$9/mo";
    }
    else if(document.getElementById("m22").checked == true)
    {
        document.getElementById("l1").value="Advanced(Monthly)";
        document.getElementById("r1").value="$12/mo";
    }
    else if(document.getElementById("m23").checked == true){
        document.getElementById("l1").value="Pro(Monthly)";
        document.getElementById("r1").value="$15/mo";
    } 

    else if(document.getElementById("y21").checked == true)
    {
        document.getElementById("l1").value="Arcade(Yearly)";
        document.getElementById("r1").value="$90/year";
    }
    else if(document.getElementById("y22").checked == true)
    {
        document.getElementById("l1").value="Advanced(Yearly)";
        document.getElementById("r1").value="$120/year";
    }
    else  {
        document.getElementById("l1").value="Pro(Yearly)";
        document.getElementById("r1").value="$150/year";
    }
}

 

function mthird(event){
    event.preventDefault();
  
    document.getElementById("m3").style.display="block";
    document.getElementById("t32").style.display="block";

    document.getElementById("y3").style.display="none";
    document.getElementById("t33").style.display="none";
}
function ythird(event){
    event.preventDefault();
    document.getElementById("y3").style.display="block";
    document.getElementById("t33").style.display="block";

    document.getElementById("m3").style.display="none";
    document.getElementById("t32").style.display="none";
}

function validate3(event){
    event.preventDefault();
    if((document.getElementById("mos").checked==true)||(document.getElementById("mls").checked == true)||(document.getElementById("mcp").checked == true)||(document.getElementById("yos").checked== true)||(document.getElementById("yls").checked == true)||(document.getElementById("ycp").checked == true))
    {
           s4(event);
    }
    else{
            alert("select any one plan");
        } 
    

}

function s4(event){
    event.preventDefault();
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle4").style.color = "black";
    document.getElementById("step4").style.display = "block";

    document.getElementById("circle1").style.backgroundColor = "transparent";
    document.getElementById("circle1").style.color = "white";
    document.getElementById("circle2").style.backgroundColor = "transparent";
    document.getElementById("circle2").style.color = "white";
    document.getElementById("circle3").style.backgroundColor = "transparent";
    document.getElementById("circle3").style.color = "white";
    document.getElementById("step1").style.display = "none"; 
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step5").style.display = "none";  
    
}
function calculate2(event){
    event.preventDefault();
   let x=0;
   let y=0;
   let z=0;
   let m=false;
    
    
    if(document.getElementById("mos").checked== true)
    {
        document.getElementById("l2").value="Online Services";
        document.getElementById("r2").value="+$1/mo";
        x=1;
        m=true;
    }

    else if(document.getElementById("yos").checked== true)
    {
        document.getElementById("l2").value="Online Services";
        document.getElementById("r2").value="+$10/Year";
        x=10;
    }

    if(document.getElementById("mls").checked == true)
    {
        document.getElementById("l3").value="Larger Storage";
        document.getElementById("r3").value="+$2/Month";
        z=2;
        m=true;
    }
    else if(document.getElementById("yls").checked == true)    {
        document.getElementById("l3").value="Larger Storage";
        document.getElementById("r3").value="+$20/Month";
        z=20;
    }
    if(document.getElementById("mcp").checked== true)
    {
        document.getElementById("l4").value="Customizable Profile";
        document.getElementById("r4").value="+$2/Month";
        y=2;
        m=true;
    }
    else if(document.getElementById("ycp").checked == true)
    {
        document.getElementById("l4").value="Customizable Profile";
        document.getElementById("r4").value="+$20/year";
        y=20;
    }
    let s=x+y+z;
    if(m==true){
        document.getElementById("total").value=s+"$/month";
    }
    else
    document.getElementById("total").value=s+"$/year";
    

}
function mthird(event){
    event.preventDefault();
    event.preventDefault();
    document.getElementById("m3").style.display="block";
    document.getElementById("t32").style.display="block";

    document.getElementById("y3").style.display="none";
    document.getElementById("t33").style.display="none";
}
function ythird(event){
    event.preventDefault();
    document.getElementById("y3").style.display="block";
    document.getElementById("t33").style.display="block";

    document.getElementById("m3").style.display="none";
    document.getElementById("t32").style.display="none";
}

function s4(event){
    event.preventDefault();
    document.getElementById("circle4").style.backgroundColor = "white";
    document.getElementById("circle4").style.color = "black";
    document.getElementById("step4").style.display = "block";

    document.getElementById("circle1").style.backgroundColor = "transparent";
    document.getElementById("circle1").style.color = "white";
    document.getElementById("circle2").style.backgroundColor = "transparent";
    document.getElementById("circle2").style.color = "white";
    document.getElementById("circle3").style.backgroundColor = "transparent";
    document.getElementById("circle3").style.color = "white";
    document.getElementById("step1").style.display = "none"; 
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step5").style.display = "none";  
    
}

function s5(event){
    event.preventDefault();
  
    document.getElementById("circle4").style.backgroundColor = "transparent";
    document.getElementById("circle4").style.color = "white";
    document.getElementById("step1").style.display = "none"; 
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";

    document.getElementById("step5").style.display = "block";

}