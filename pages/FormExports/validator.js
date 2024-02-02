import Steam from "./FormInputs/Steam"

function validator() {
    const Steam = document.querySelector('#ref').value
    if(!Steam){
        alert('thats not your steam id')
        return false
    }
} 