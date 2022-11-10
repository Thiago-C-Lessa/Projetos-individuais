const opC = document.getElementById("opCesar");
const opX = document.getElementById("opX64");
const inp = document.getElementById("entr");
const incr = document.getElementById("incremento");


opC.addEventListener("click", function (){
    document.getElementById("mov").style.display = "flex";
    opX.checked = false;
})

opX.addEventListener("click", function(){
    document.getElementById("mov").style.display = "none";
    opC.checked = false;
})

//chamadas do html

function cod(){
    veri();
}

function dec(){
    veriD();
}

//funções de verificaçâo

function veri(){
    if(inp.value == ""){
        alert("Preencha o campo de entrada");
       
    }else if((opC.checked == true) && (incr.value == "")) {
        alert("Adicione um valor numérico para incrementar a cifra");

    }else if(opC.checked == true){
        cifra();

    }else{
        x64();
    }
}

function veriD(){
    if(inp.value == ""){
        alert("Preencha o campo de entrada");
       
    }else if((opC.checked == true) && (opX.checked == true)){
        opC.checked = false;
        opX.checked = false;
        alert("Selecione apenas uma forma de cripitografia");

    }else if((opC.checked == true) && (incr.value == "")) {
        alert("Adicione um valor numérico para incrementar a cifra");

    }else if(opC.checked == true){
        dCifra();

    }else{
        dX64();
    }
}

//funções de codificação 

function cifra(){
    var i =Number(incr.value);
    var c = [];
    var cri = [];
    var ss = document.getElementById("saidaa");
    console.log("socorroooo");
        for(var b =0; b<inp.value.length;b++){
            c[b]=inp.value[b];

    }
    
     for (var n = 0; n < inp.value.length; n++){
            var b = c[n].charCodeAt(0);
         if ((b >= 65) && (b <= 90)) {
            var d = (((b-65+i)%26)+65);
            cri[n]=String.fromCharCode(d);
            console.log(cri[n]);
        }else if ((b >= 97) && (b <= 122)) {
            var dX= (((b-97+i)%26)+97);
            cri[n]=String.fromCharCode(dX);
            console.log(cri[n]);
        }else if(b==32){
            var s = 32;
            cri[n]=String.fromCharCode(s);
        }
    //array to string
   const vv = cri.join("");
   
   //por texto na textarea de saida
   console.log(ss.innerHTML = vv);
   
}

}

function x64(){
    var st = [];
    var saisai = document.getElementById("saidaa");
    for(var b =0; b<inp.value.length;b++){
        st[b]=inp.value[b];
    }
    //array to string
    var bb = st.join("");
    var codcod= btoa(bb); 
   //por texto na textarea de saida
    console.log(saisai.innerHTML = codcod);
}

//funções de decodificação

function dCifra(){
    var i =Number(incr.value);
    var c = [];
    var cri = [];
    var ss = document.getElementById("saidaa");
    console.log("socorroooo");
        for(var b =0; b<inp.value.length;b++){
            c[b]=inp.value[b];

        }
    
     for (var n = 0; n < inp.value.length; n++){
            //console.log(c[n].charCodeAt(0));
            var b = c[n].charCodeAt(0);
         if ((b >= 65) && (b <= 90)) {
            var d = (((b-65-i)%26)+65);
            cri[n]=String.fromCharCode(d);
            console.log(cri[n]);
        }else if ((b >= 97) && (b <= 122)) {
            var dX= (((b-97-i)%26)+97);
            cri[n]=String.fromCharCode(dX);
            console.log(cri[n]);
        }else if(b==32){
            var s = 32;
            cri[n]=String.fromCharCode(s);
    }
   //array to string
   const vv = cri.join("");
   //por texto na textarea de saida
   console.log(ss.innerHTML = vv);
   
    }
}

function dX64(){
    var sti = [];
    var saisa = document.getElementById("saidaa");

    for(var u = 0; u < inp.value.length; u++){
        sti[u]=inp.value[u];
    }
    //array to string
    var stis = sti.join("");
    var stist = atob(stis);
    //por texto na textarea de saida
    console.log(saisa.innerHTML = stist);
}
