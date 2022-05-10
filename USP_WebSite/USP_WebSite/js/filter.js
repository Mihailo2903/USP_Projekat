function prikazGrada(){
    let drzava = document.getElementById("drzava").value;
    let grad = document.getElementById("divgrad");    
    grad.innerHTML="";

    if(drzava == "1"){
        let sel = document.createElement("select");
        sel.id="grad";

        let o1 = document.createElement("option");
        o1.value = "berlin";
        o1.innerText="Berlin";
        sel.appendChild(o1);

        let o2 = document.createElement("option");
        o2.value = "minhen";
        o2.innerText="Minhen";
        sel.appendChild(o2);
        grad.appendChild(sel);
    }

    if(drzava == "2"){
        let sel = document.createElement("select");
        sel.id="grad";

        let o1 = document.createElement("option");
        o1.value = "bec";
        o1.innerText="Beč";
        sel.appendChild(o1);

        let o2 = document.createElement("option");
        o2.value = "grac";
        o2.innerText="Grac";
        sel.appendChild(o2);
        grad.appendChild(sel);
    }

    if(drzava == "3"){
        let sel = document.createElement("select");
        sel.id="grad";

        let o1 = document.createElement("option");
        o1.value = "rim";
        o1.innerText="Rim";
        sel.appendChild(o1);

        let o2 = document.createElement("option");
        o2.value = "milano";
        o2.innerText="Milano";
        sel.appendChild(o2);
        grad.appendChild(sel);
    }

    if(drzava == "4"){
        let sel = document.createElement("select");
        sel.id="grad";

        let o1 = document.createElement("option");
        o1.value = "stokholm";
        o1.innerText="Stokholm";
        sel.appendChild(o1);

        let o2 = document.createElement("option");
        o2.value = "malme";
        o2.innerText="Malme";
        sel.appendChild(o2);
        grad.appendChild(sel);
    }
    
}