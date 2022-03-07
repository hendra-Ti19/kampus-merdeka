// event on focus
function kosong1(){
    let form = document.getElementById("formulir");
    form.a1.value = "";
}
function kosong2(){
    let form = document.getElementById("formulir");
    form.a2.value = "";
}

// onclic operasi
function hitung(x){
    let form = document.getElementById("formulir");
    let a1 = form.a1.value;
    let a2 = form.a2.value;
    //pilihan operasi 
    let hasil;
    switch (x){
        case "tambah" : hasil = parseInt(a1) + parseInt(a2); break;
        case "kurang" : hasil = parseInt(a1) - parseInt(a2); break;
        case "kali" : hasil = parseInt(a1) * parseInt(a2); break;
        case "bagi" : hasil = parseInt(a1) / parseInt(a2); break;
        case "pangkat" : hasil = Math.pow(parseInt(a1) , parseInt(a2)); break;
    }
    //validasi inputan
    if (a1 == ""){
        document.getElementById("ket1").innerHTML=`kolom tidak boleh kosong`;
        form.a1.className = "danger";
        document.getElementById("ket2").innerHTML=``;
        form.a2.className = "";
    }else if(isNaN(a1)){
        document.getElementById("ket1").innerHTML=`Input hanya boleh angka`;
        form.a1.className = "danger";
        document.getElementById("ket2").innerHTML=``;
        form.a2.className = "";
    }else if(a2 == ""){
        document.getElementById("ket2").innerHTML=`kolom tidak boleh kosong`;
        form.a2.className = "danger";
        document.getElementById("ket1").innerHTML=``;
        form.a1.className = "";
    }else if(isNaN(a2)){
        document.getElementById("ket2").innerHTML=`Input hanya boleh angka`;
        form.a2.className = "danger";
        document.getElementById("ket1").innerHTML=``;
        form.a1.className = "";
    }else{
        document.getElementById("ket2").innerHTML=``;
        form.a2.className = "";
        document.getElementById("ket1").innerHTML=``;
        form.a1.className = "";
        form.hasil.value = hasil;
    }
}



//batal
function bersih(){
    let form = document.getElementById("formulir");
    form.a1.value = 'Input Angka pertama';
    form.a2.value = 'Input Angka kedua';
    form.hasil.value = '0';
    document.getElementById("ket2").innerHTML=``;
    form.a2.className = "";
    document.getElementById("ket1").innerHTML=``;
    form.a1.className = "";
}