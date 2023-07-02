let inputBtn = document.getElementById("input-btn");
let inputEL = document.getElementById("input-el");
let ulEL = document.getElementById("ul-el")
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    display()
}

inputBtn.onclick = () => {
    let inputValue = inputEL.value;
    myLeads.push(inputValue);
    //console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    display()
    //console.log( localStorage.getItem("myLeads") )
};

function display() {
    let res = ""
    for (let i = 0; i < myLeads.length; i++) {
        res += ` <li><a target='_blank' href=${myLeads[i]}>${myLeads[i]}</a></li>`
    }
    ulEL.innerHTML = res
    inputEL.value=" "
}



