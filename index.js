let inputBtn = document.getElementById("input-btn");
let inputEL = document.getElementById("input-el");
let ulEL = document.getElementById("ul-el")
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

inputBtn.onclick = () => {
    let inputValue = inputEL.value;
    myLeads.push(inputValue);
    console.log(myLeads);
    display()
};

function display() {
    let res = ""
    for (let i = 0; i < myLeads.length; i++) {
        res += ` <li><a target='_blank' href=${myLeads[i]}>${myLeads[i]}</a></li>`
    }
    ulEL.innerHTML = res
    inputEL.value=" "
}



