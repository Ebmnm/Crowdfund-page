let bookmark = document.querySelector(".bookmark-button")
 let buttons = document.querySelectorAll(".button")
 let bookTag = document.querySelector("#bookmark")
let popup = document.querySelector(".pledge-popup")
let closebutton = document.querySelector(".close-popup")
let inputTitle = document.querySelectorAll(".input-title")
let inputs = document.querySelectorAll("input")
let progress = document.querySelector(".progress")
let moneyRaised = document.querySelector("#money-raised")
let backers = document.querySelector("#backers")
let bamboo = document.querySelector("#bamboo-left")
let black = document.querySelector("#black-left")
let mahogany = document.querySelector("#mahogany-left")
let radioInputs = document.querySelectorAll('input[type=radio]')
let thankYouCard = document.querySelector(".thanks-popup")
let bambooCard = document.querySelector("#bamboo-card")
let blackCard = document.querySelector("#black-card")
let mahoganyCard = document.querySelector("#mahogany-card")
let noRewardCard = document.querySelector(".pledge-popup-card")
let hamberger = document.querySelector(".mobile-burger")
let mobileLinks = document.querySelector(".mobile-links")
let bookmarkImage = document.querySelector("#bookmark-img")
let outside = document.querySelector(".outside")



hamberger.addEventListener("click", () => {
    mobileLinks.classList.toggle("show")
   
})


     bookmark.addEventListener("click", () => {
         bookmark.classList.toggle("main-color")
         bookTag.classList.toggle("main-color")
        bookmarkImage.classList.toggle("bookmark-border")
     })



     function buttonSelect() {
         buttons[1].addEventListener("click", () => {
            radioInputs[1].checked = true
            checkInputs()
            inputValidate()
           
         })
         
         buttons[2].addEventListener("click", () => {
            radioInputs[2].checked = true
            checkInputs()
           inputValidate()
         })

         buttons[3].addEventListener("click", () => {
            radioInputs[3].checked = true
            checkInputs()
           inputValidate()
         })
        
     }   
     buttonSelect()


     for(let i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click", () => {
popup.classList.add("active")
outside.classList.add("active")
})
closebutton.addEventListener("click", () => {
    popup.classList.remove("active")
    outside.classList.remove("active")
} )

}

outside.addEventListener("click", () => {
    popup.classList.remove("active")
    outside.classList.remove("active")
    thankYouCard.classList.remove("active")
})


inputTitle.forEach(title => {
    title.addEventListener("click", () => {
        title.querySelector("input").checked = true

         checkInputs()
         inputValidate()

    }
    )}
    
)





let childText = document.createElement("p")
childText.innerHTML = "Enter your pledge"
childText.classList.add("childText")

let amountInput = document.createElement("input")
amountInput.type = "number"
amountInput.placeholder = "$0.00"
amountInput.classList.add("amountInput")
amountInput.name = "donate"
amountInput.addEventListener("click", () => {
    inputValidate()
})
amountInput.addEventListener("keyup", () => {
    inputValidate()
})



let continueButton = document.createElement("button")
continueButton.innerHTML = "Continue"
continueButton.classList.add("continuebutton")

let enterPledge = document.createElement("div")
enterPledge.classList.add("enterPledge")
let pledgeChildren = [childText, amountInput, continueButton]

function appendTheChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child)
    })
}

appendTheChildren(enterPledge, pledgeChildren)


//adds the selected effect 
function checkInputs() {
    inputs.forEach(input => {
        if(input.checked) {
           //this returns the checked input, now we have to apply the class to the parent element
           input.closest(".pledge-popup-card").classList.add("changeborder")
            input.closest("h3").classList.add("changefontcyan")

            input.closest(".pledge-popup-card").appendChild(enterPledge)

        } else if (input.checked == false) {
            input.closest(".pledge-popup-card").classList.remove("changeborder")
            input.closest("h3").classList.remove("changefontcyan")

        }
   
   }
   )

}


  //top number inputs 

 
  


//will convert comma numbered string to integer
let str = "9,999"
parseInt(str.replace(/,/g, ''), 10)


//will return a number into a comma string
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function progressBar() {
    if(parseInt(moneyRaised.innerHTML.slice(1).replace(/,/g, ''), 10)  < 100000 ) {
        progress.style.width = `${parseInt(moneyRaised.innerHTML.slice(1).replace(/,/g, ''), 10) / 1000 }%`
    } else if (parseInt(moneyRaised.innerHTML.slice(1).replace(/,/g, ''), 10)  > 100000 ){
    progress.style.width = "100%"
    progress.style.backgroundColor = "lightgreen"
    }
    }
    progressBar()

//updates pledge number
function updatePledge() {
    if (radioInputs[1].checked == true) {
        let bambooNum = bamboo.innerHTML 
        if(bamboo.innerHTML == 0){
         return
        } else {
        bamboo.innerHTML = bambooNum - 1
       
        }
     }
     
     if (radioInputs[2].checked == true) {
         let blackNum = black.innerHTML 
         if(black.innerHTML == 0){
          return
         } else {
         black.innerHTML = blackNum - 1
         }
      }
     
      if (radioInputs[3].checked == true) {
         let mahoganyNum = mahogany.innerHTML 
         if(mahogany.innerHTML == 0){
          return
         } else {
         mahogany.innerHTML = mahoganyNum - 1
         }
      }
    }

    let error = document.createElement("div")
    error.innerHTML = "Please enter a valid number"
    error.style.color = "red"



    function inputValidate() {

        if(radioInputs[0].checked == true && amountInput.value == "") {
            noRewardCard.appendChild(error)
            amountInput.classList.add("error")
            continueButton.disabled = true
        } else if(radioInputs[0].checked == true && amountInput.value) {
            continueButton.disabled = false
            amountInput.classList.remove("error")
            noRewardCard.removeChild(error)
        }


        if (radioInputs[1].checked == true) {
            if(amountInput.value < 25) {
                console.log("its under 25")
                continueButton.disabled = true
                amountInput.classList.add("error")
                bambooCard.appendChild(error)

            } else  if (radioInputs[1].checked == false || amountInput.value >= 25){
                continueButton.disabled = false
                amountInput.classList.remove("error")
                bambooCard.removeChild(error)
            }
    
         }
         
         
         if (radioInputs[2].checked == true) {
            if(amountInput.value < 75) {
                console.log("its under 75")
                continueButton.disabled = true
                amountInput.classList.add("error")
                blackCard.appendChild(error)

            } else if (radioInputs[2].checked == false || amountInput.value >= 75) {
                continueButton.disabled = false
                amountInput.classList.remove("error")
                blackCard.removeChild(error)
            }
          }
         
         
          if (radioInputs[3].checked == true) {
            if(amountInput.value < 200) {
                console.log("its under 200")
                continueButton.disabled = true
                amountInput.classList.add("error")
                mahoganyCard.appendChild(error)

            } else if (radioInputs[3].checked == false || amountInput.value >= 200) {
                continueButton.disabled = false
                amountInput.classList.remove("error")
                mahoganyCard.removeChild(error)
            }
          }


       
    }


   
//this updates the backers and amount raised
//validate
//try to prevent ------ in the input?



continueButton.addEventListener("click", () => {
 
let raisednumber = moneyRaised.innerHTML.slice(1)
popup.classList.remove("active")
let newMoneyRaised = parseInt(raisednumber.replace(/,/g, ''), 10)  + parseInt(amountInput.value)

moneyRaised.innerHTML = `$${numberWithCommas(newMoneyRaised)}`   

let newBackers = parseInt(backers.innerHTML.replace(/,/g, ''), 10) + 1;
backers.innerHTML = numberWithCommas(newBackers)

thankYouCard.classList.add("active")
  progressBar();
  
  updatePledge()
 




}
)


let gotItButton = document.querySelector(".gotit")
gotItButton.addEventListener("click", () => {
    thankYouCard.classList.remove("active")
    outside.classList.remove("active")
})






