var x=document.getElementById("multiplo");


function numero(n){
    var s=x.value;
    x.value=s+n;
    
    
}
function cancelar3() {
    window.location="index4.html"
}
function correg() {
    document.getElementById("multiplo").value="";
    document.getElementById("multiplo").focus();
}

var saldo=5000;
function dinero(){
    if (x==""||x.value==0) {
        alert("Ingrese un monto")
        alert("Saldo actual: "+ saldo);
    }else{
        if (x.value>saldo) {
            alert("no cuentas con saldo suficiente")
        }else {
            if (x.value%10==0) {
                saldo=saldo-x.value;
            alert(saldo);
            window.location="index6.html"
            } else {
                alert("No es multiplo")

                return false;
            }
            
        }
    }
}
