function valForm() {
    var dadosOk = false;
    var confName = document.getElementById("name").value;
    var confNickname = document.getElementById("nickname").value;
    var confDay = document.getElementById("day").value;
    var confMonth = document.getElementById("month").value;
    var confYear = document.getElementById("year").value;
    var confTeam_id = document.getElementById("team_id");
    var confCpf = document.getElementById("cpf");

    var sportList = document.getElementsByName("sport");
    var sportListSelected = []
    if(sportList[0].checked) {
        sportListSelected.push(sportList[0].id);
    }
    if(sportList[1].checked) {
        sportListSelected.push(sportList[1].id);
    }
    if(sportList[2].checked) {
        sportListSelected.push(sportList[2].id);
    }
    if(sportList[3].checked) {
        sportListSelected.push(sportList[3].id);
    }
    if(sportList[4].checked) {
        sportListSelected.push(sportList[4].id);
    }
    if(sportList[5].checked) {
        sportListSelected.push(sportList[5].id);
    }
    if(sportList[6].checked) {
        sportListSelected.push(sportList[6].id);
    }

    if (confName.length >= 10 && confName.length <= 80) {
        if (confNickname.length >= 2 && confNickname.length <= 20) {
            if (confDay >= 1 && confDay <= 31) {
                if (confMonth >= 1 && confMonth <= 12) {
                    if (confYear >= 1900 && confYear <= 2021) {
                        if (confTeam_id != "") {
                            if (confCpf.value.length == 14 && confCpf.checkValidity()) {
                                if(sportListSelected.length>0) {
                                    dadosOk = true;
                                } else {
                                    dadosOk = false;
                                }
                                } else {
                                dadosOk = false
                            }
                        } else {
                            dadosOk = false;
                        }
                    } else {
                        dadosOk = false;
                    }
                } else {
                    dadosOk = false;
                }
            } else {
                dadosOk = false;
            }
        } else {
            dadosOk = false;
        }
    } else {
        dadosOk = false;
    }

    var confResultadoP = document.getElementById("confResult");
    confResultadoP.innerHTML = dadosOk;
}

function geraJson() {
    var obj_form = {
        name: "",
        nickname: "",
        day: 0,
        month: 0,
        year: 0,
        cpf: "",
        team_id: "",
        sport: []
    }

    obj_form.name = document.getElementById("name").value;
    obj_form.nickname = document.getElementById("nickname").value;
    obj_form.day = document.getElementById("day").value;
    obj_form.month = document.getElementById("month").value;
    obj_form.year = document.getElementById("year").value;
    obj_form.cpf = document.getElementById("cpf").value;
    obj_form.team_id = document.getElementById("team_id").value;

    var sportList = document.getElementsByName("sport");

    if(sportList[0].checked) {
        obj_form.sport.push(sportList[0].id);
    }
    if(sportList[1].checked) {
        obj_form.sport.push(sportList[1].id);
    }
    if(sportList[2].checked) {
        obj_form.sport.push(sportList[2].id);
    }
    if(sportList[3].checked) {
        obj_form.sport.push(sportList[3].id);
    }
    if(sportList[4].checked) {
        obj_form.sport.push(sportList[4].id);
    }
    if(sportList[5].checked) {
        obj_form.sport.push(sportList[5].id);
    }
    if(sportList[6].checked) {
        obj_form.sport.push(sportList[6].id);
    }

    var vJson = JSON.stringify(obj_form);
    var confResultadoP = document.getElementById("confResult");
    confResultadoP.innerHTML = vJson;
}