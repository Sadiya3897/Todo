
let MyJson = [
    {
        "Date": "26-02-19",
        "Desc": "Work"
    }
]
function todo() {
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    div.id = "1";
    let date = document.createElement("input");
    date.type = "date";
    date.id = "calendar";
    date.appendChild(document.createTextNode("Date"));
    div.appendChild(date);

    let input = document.createElement("input");
    input.type = "text";
    input.id = "descript";
     input.appendChild(document.createTextNode("Description"));
    div.appendChild(input);
    let btn = document.createElement("button");
    btn.id = "Okay";
    btn.onclick = okay;
    btnvalue = document.createTextNode("OKAY");

    btn.appendChild(btnvalue);
    div.append(btn);
    let btn1 = document.createElement("button");
    btn1value = document.createTextNode("Cancel");
    btn1.id = "Cancel";
    btn1.onclick = cancel;
    
    btn1.appendChild(btn1value);
    div.appendChild(btn1);
    body.appendChild(div)
}
function okay() {
    var mydate = document.getElementById("calendar").value;
    var mydesc = document.getElementById("descript").value;
    if (mydate == "" || mydesc == "") {
        alert("empty");
    } else {
        MyJson.push({ "Date": mydate, "Desc": mydesc })
        addItem();
    }
}


function addItem() {
    let mydata = MyJson;
    for (let i = 0; i < MyJson.length; i++) {
        var div = document.createElement("div");
        div.id = "listdiv"
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let span1 = document.createElement("span");
        span.innerHTML = mydata[i].Date;
        span1.innerHTML = mydata[i].Desc;
        li.appendChild(span);
        li.appendChild(span1);
        var removebtn = document.createElement("button");
        removebtn.setAttribute("class", "glyphicon glyphicon-remove");
        li.appendChild(removebtn)
        ul.appendChild(li);
        div.appendChild(ul);
        removebtn.onclick = remove;

    }
    document.body.appendChild(div);
}

function cancel() {
    document.getElementById('1').remove();


}

function remove() {

    document.getElementById('listdiv').remove()
}
let flag = true;
function tsortTable(param) {
    json.sort(compare);
    function compare(a, b) {
        if (a[param] > b[param] && flag) {
            console.log(json)
            return 1;
        }
        else {
            console.log(json)
            return -1;
        }
    }
    flag = !flag;
    createlist();
}
function dsortTable(param) {

}
