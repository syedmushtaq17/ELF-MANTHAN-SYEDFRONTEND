let table = document.createElement("table")
let thead = document.createElement("thead")
let tr = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")
let tbody = document.createElement("tbody")
let reset = document.createElement("button")


th1.textContent = "Name"
th2.textContent = "Email"
th3.textContent = "Mobile"
th4.textContent = "Password"
reset.textContent = "Clear"
input4.type = "password";

table.classList = "table container table-bordered table-hover mt-5 mb-5 col-md-8"
thead.classList = "thead-dark"
reset.classList = "btn btn-outline-info col-md-2 offset-5 mb-5"
reset.type = "submit"
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)


function addTable() {


    for (let i = 0; i < localStorage.length; i++) {

        let value = localStorage.getItem(localStorage.key(i)).split(",")


        if (value !== null && localStorage.key(i).startsWith("account")) {

            let tr1 = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let td4 = document.createElement("td")


            td1.textContent = value[0]
            td2.textContent = value[1]
            td3.textContent = value[2]
            td4.textContent = value[3]

            table.appendChild(tbody)
            tbody.appendChild(tr1)
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tr1.appendChild(td4)


        }

    }
}
show.addEventListener("click", function() {
    tbody.innerHTML = ""
    addTable()
    document.getElementById("show-li").classList = "active"
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(table)
    document.getElementById("content").appendChild(reset)


})

reset.addEventListener("click", function() {
    localStorage.clear()
    tbody.innerHTML = ""
})