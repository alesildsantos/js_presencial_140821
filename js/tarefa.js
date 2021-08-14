function validaFormulario() {
    /*alert("Entrei no Gerar Formulário");*/
    var dadosOk = true;
    var confName = document.getElementById("name").value;
    var confCpf = document.getElementById("cpf");

    if(confName.length>=10 && confName.length<=80) {
        dadosOk = true;
    }else {
        dadosOk = false;
    }
    if(confCpf.value.length == 14 && confCpf.checkValidity()) {
        dadosOk = true;
    }else {
        dadosOk = false;
    }

    var resultP = document.getElementById("checaDado");
    resultP.innerHTML = dadosOk;
    
}

function gerarJson() {
    /*alert("Entrei no Gerar Json");*/

    var obj_form = {
        aName : "",
        aNickname : "",
        aDay : 0,
        aMonth : 0,
        aYear : 0,
        aCpf : "",
        aTeam_id : "",
        aSport : []
    }
    
    obj_form.aName = document.getElementById("name").value;
    obj_form.aCpf = document.getElementById("cpf").value;
    var json = JSON.stringify(obj_form);

    var resultP = document.getElementById("checaDado");
    resultP.innerHTML = json;
}