var x=document.getElementById("clave");


function numero(n){
    var s=x.value;
    x.value=s+n;
    
    
}
function cancelar(){
    var a=document.getElementById("clave");
    a.value="";
}
function limp() {
    var a=document.getElementById("clave");
    a.value=a.value.substring(0,a.value.length-1);

    
}

class Usuario{
    constructor(clave){
        this.clave=clave;
    };
    validar(){
        var x;
        if (this.clave=="12345678") {
            x=1;
            
        }else{
            x=0;
        }
        return x;
    };
};
var o=0;
function login() {
    var u = new Usuario(
    
        document.getElementById("clave").value,


    )
    if (u.validar()==1) {
        limpiar();
        alert("Bienvenido");
        window.location.href="index2.html";
        o=0;
    } else {
        o++;
        alert("Intentos: "+o);
        limpiar();
        if (o==3) {
            desabilitar();
            

        }
        
    }
    
}

function desabilitar() {
    document.getElementById("clave").disabled = true;
    
}
function limpiar() {
    document.getElementById("clave").value="";
    document.getElementById("clave").focus();
}


