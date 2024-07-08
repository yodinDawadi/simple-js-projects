function data(){
    var a= document.getElementById("ip1").value;
    var b= document.getElementById("ip2").value;
    var c= document.getElementById("ip3").value;
    var d= document.getElementById("ip4").value;

    if(a=="" || b=="" || c=="" || d=="")
    {
        alert("All Fields Are Mandetory !!")
        return false;
    }
    else if(b.length>10 || b.length<10)
    {
        alert("Number Should Be Of 10 Digits !!")
        return false;
    }
    else if(isNaN(b))
    {
        alert("Please Enter A Valid Number !!")
        return false;
    }
    else if(c!=d)
    {
        alert("Enter Same Password !!")
        return false;
    }
    else
    {
        return true;
    
    }
}