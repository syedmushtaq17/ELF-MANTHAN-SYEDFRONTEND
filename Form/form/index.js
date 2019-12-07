const loginButton = document.getElementById("login")

let p1Tag = document.getElementById('pName');
let nBox = document.getElementById('name');

let p2Tag = document.getElementById("pEmail");
let eBox = document.getElementById("email");

let p3Tag = document.getElementById("pAge");
let ageBox = document.getElementById("age");

let p4Tag = document.getElementById("pMobile");
let mBox = document.getElementById("mobile");

let table = document.createElement("table")
let thead = document.createElement("thead")
let rest = document.createElement("button")

let tr = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")

th1.textContent = "Name"
th2.textContent = "Email"
th3.textContent = "Age"
th4.textContent = "Mobile"
rest.textContent = "Clear"

table.classList = "table container table-bordered table-hover  col-md-8"
thead.classList = "thead-dark"
rest.classList = "btn btn-outline-info col-md-2 mb-5 mt-5 offset-5"
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)




addTable()

function validateForm() {

    let valid = false

    const form = document.forms['form']


    const emailElement = form.email
  
    const mobileElement = form.mobile

    
    const emailValue = emailElement.value.trim()
   
    const mobileValue = mobileElement.value.trim()

  
    const emailLength = emailValue.length
   
    const mobileLength = mobileValue.length

    if (nameLength === 0 && emailLength === 0 && ageLength === 0 && mobileLength === 0) {

        nBox.style.border = "2px solid red"
        eBox.style.border = "2px solid red"
        ageBox.style.border = "2px solid red"
        mBox.style.border = "2px solid red"

        p1Tag.style.display = "block";
        p2Tag.style.display = "block";
        p3Tag.style.display = "block";
        p4Tag.style.display = "block";

        return false
    }  if (emailLength < 3 || !emailValue.endsWith("@gmail.com")) {
        eBox.style.border = "2px solid red"
        p2Tag.style.display = "block";

    }  if (passwordLength < 1) {

        input4.style.border = "2px solid red"
        p4Tag.textContent = "Enter password"
        p4Tag.style.display = "block";
        valid = false

    }
    if (passwordValidation(passwordValue)) {

        input4.style.border = "2px solid red"
        p4Tag.textContent = `A minimum 8 characters password contains  
            a combination of uppercase and lowercase letter
            and number are required. 
            `
        p4Tag.style.display = "block";
        valid = false

        return false

    }
    let values = [ emailValue, passwordValue]


    addStorage(values)


}



loginButton.addEventListener("click", function () {

    nBox.style.border = "1px solid black"
    p1Tag.style.display = "none";
    eBox.style.border = "1px solid black"
    p2Tag.style.display = "none";
    ageBox.style.border = "1px solid black"
    p3Tag.style.display = "none";
    mBox.style.border = "1px solid black"
    p4Tag.style.display = "none";

})



function addTable() {


    for (let i = 0; i < localStorage.length; i++) {

        let value = localStorage.getItem(localStorage.key(i)).split(",")


        if (value !== null && localStorage.key(i).startsWith("value")) {

            let tbody = document.createElement("tbody")
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


            document.body.appendChild(table)
            document.body.appendChild(rest)
        }
    }

}







function addStorage(values) {
    let i = localStorage.length + 1
    localStorage.setItem(`values${i}`, values)



}

rest.addEventListener("click",function () {
    localStorage.clear()
    location.reload();
})

/* function addStorage(values) {

    let oldName=localStorage.getItem("nameValues")
    let oldAge=localStorage.getItem("ageValues")
    let oldEmail=localStorage.getItem("emailValues")
    let oldMobile=localStorage.getItem("mobileValues")



    let newName=[...oldName,...values[0]]
    let newEmail=[...oldEmail,...values[1]]
    let newAge=[...oldAge,...values[2]]
    let newMobile=[...oldMobile,...values[3]]

    localStorage.setItem("nameValues",newName)
    localStorage.setItem("emailValues",newEmail)
    localStorage.setItem("ageValues",newAge)
    localStorage.setItem("mobileValues",newMobile)

} */


