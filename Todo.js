
let MyJson = [
    {
        "Date": "26-Jan-2019",
        "Desc": "Work"
    },
    {
        "Date": "03-Aug-2019",
        "Desc": "MyWOrk"
    }
]
function todo() {
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    div.id = "1";
    let date = document.createElement("input");
    date.type = "date";
    date.value = "time";
    date.id = "calendar";
    date.appendChild(document.createTextNode("Date"));
    div.appendChild(date);
    let input = document.createElement("input");
    input.type = "text";
    input.value = "";
    input.id = "descript";
    console.log(div)
    div.appendChild(input);
    input.appendChild(document.createTextNode("Description"));
    let btn = document.createElement("button");
    btn.id = "Okay";
    btn.onclick = okay;
    btnvalue = document.createTextNode("OKAY");

    btn.appendChild(btnvalue);
    div.appendChild(btn);
    let btn1 = document.createElement("button");
    btn1.id = "Cancel";
    btn.onclick = cancel;
    btn1value = document.createTextNode("Cancel");
    btn1.appendChild(btn1value);
    div.appendChild(btn1);
    body.appendChild(div)
}
function okay() {
    let myday = document.getElementById("calendar").value;
    let myval = document.getElementById("descript").value;
    if (myday == "" || myval == "") {
        alert("not valid fields");
    }
    else {
        MyJson.push({ "Date": myday, "Desc": myval })
        addItem();
    }


}
function cancel() {
    todo();


}
function addItem() {
    var ul = document.createElement("Mylist");
    var myinput = document.createElement("date");
    var myinput1 = document.createElement("input");
    var li = document.createElement("li");
    li.setAttribute('id', myinput.value);
    li.setAttribute('id', myinput1.value);
    li.appendChild(document.createTextNode(myinput.value));
    ul.appendChild(li);
    console.log(myinput);
}

function removeItem() {
    var ul = document.getElementById("Mylist");
    var myinput = document.getElementById("input");
    var item = document.getElementById(myinput.value);
    ul.removeChild(item);
}