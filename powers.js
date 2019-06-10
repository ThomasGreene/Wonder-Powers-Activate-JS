const eventHandlerFunction =  () => {
    if (event.target.id === 'activate-flight') {
        let  flight = document.getElementById("flight")
        flight.classList.add('enabled');
        flight.classList.remove('disabled');
    }  else if (event.target.id === 'activate-mindreading') {
        let mindreading = document.getElementById("mindreading")
        mindreading.classList.add('enabled');
        mindreading.classList.remove('disabled');
    }   else if (event.target.id === 'activate-xray') {
        let xray = document.getElementById("xray")
        xray.classList.add('enabled');
        xray.classList.remove('disabled');
    }
}

// used a different way of formatting to answer for the querySelectorAll part
let allSection = document.querySelectorAll('section');

document.querySelector("#activate-all").addEventListener("click", function () {
   allSection.forEach(allSection => {
       if (allSection.classList = "disabled") {
           allSection.classList.remove('disabled')
           allSection.classList.add("enabled")
       }
   })
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
   allSection.forEach(allSection => {
       if (allSection.classList = "enabled") {
           allSection.classList.remove('enabled')
           allSection.classList.add("disabled")
       }
   })
})

document.querySelector("#activate-flight").addEventListener("click", eventHandlerFunction)

document.querySelector("#activate-mindreading").addEventListener("click", eventHandlerFunction)

document.querySelector("#activate-xray").addEventListener("click", eventHandlerFunction)

// below is not necessary because of the different way I answered the queryselectorAll portion of the assignment.

// document.querySelectorAll("#activate-all").addEventListener("click", eventHandlerFunction)

// document.querySelectorAll("#deactivate-all").addEventListener("click", eventHandlerFunction)