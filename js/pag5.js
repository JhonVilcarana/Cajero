var x=document.getElementById("multiplo");


function numero(n){
    var s=x.value;
    x.value=s+n;
    
    
}
var saldo=5000;
function dinero(){
    if (x==""||x.value==0) {
        alert("Ingrese un monto")
        alert(saldo);
    }else{
        if (x.value>saldo) {
            alert("no cuentas con saldo suficiente")
        }else {
            saldo=saldo-x.value;
            alert(saldo);
            window.location="index6.html"
        }
    }
}
