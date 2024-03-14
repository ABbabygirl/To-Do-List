document.getElementById("but").onclick = function () {
    let text = document.getElementById("text").value
    let date = document.getElementById("date").value
    let time = document.getElementById("time").value



    if (text == "" || date == "" || time == "") {
        alert("field cannot be empty");
    } else {

        let data = {
            thetext: text,
            thedate: date,
            thetime: time,
        }
        // let converted = JSON.stringify(data)

        // localStorage.setItem("tasks", converted)

        let check = localStorage.getItem("tasks")

        if (check == null) {
            localStorage.setItem("tasks", JSON.stringify([data]));
            location.reload()

        } else {
            let originalForm = JSON.parse(check)
            originalForm.unshift(data)

            localStorage.setItem("tasks", JSON.stringify(originalForm))
            location.reload()
        }
    }



}

let storeData = localStorage.getItem("tasks")
let convertedData = JSON.parse(storeData)

for (each of convertedData) {
    let div = document.createElement("div") // <div><div>
    div.setAttribute("class", "task") //<div class="task"></div>

    let p = document.createElement("p") //<p></p>
    p.innerText = each.thetext

    let small = document.createElement("small")
    small.innerText = each.thedate + " " + each.thetime

    div.appendChild(p)
    div.appendChild(small)

    document.getElementById("tasks").append(div)

    div.onclick = function () {
        let ask = confirm("Are you sure you want to delete?")
        if (ask == true) {

            let newTasks = convertedData.filter(function (each) { return each.thetext != p.innerText })

            localStorage.setItem("tasks", JSON.stringify(newTasks))
            location.reload()
        }
        // alert(p.innerText)

    }


}





