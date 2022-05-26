function GetSelected() {
    //Create an Array.
    var selected = new Array();

    //Reference the Table.
    var tblFruits = document.getElementById("knapperalle");

    //Reference all the CheckBoxes in Table.
    var chks = tblFruits.getElementsByTagName("INPUT");

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }
    //Display the selected CheckBox values.
    if (selected.length > 0) {
        alert("Du forstod: " + selected.join(","));
    }
    else {
      return false;
    }
};
