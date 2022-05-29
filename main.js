function GetSelected() {

    var selected = new Array();

    var checkListe = document.getElementById("checkListe");

    var chks = checkListe.getElementsByTagName("INPUT");

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }
    if (selected.length > 0) {
        alert("Du forstod: " + selected.join(","));
    }
    else {
      return false;
    }
};
