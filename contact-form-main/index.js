//getting all the error message so that i can iterate through them and see if any is set to block
const errormessage = document.querySelectorAll('.error-message');

// btn
const btn = document.getElementById('submit');

// firstname
const firstnameInput = document.getElementById('firstName')
const firstnameErrormessage = document.getElementById('first-name-errormessage')

// last name
const lastnameInput = document.getElementById('lastName')
const lastnameErrormessage = document.getElementById('last-name-errormessage')

// email
const emailInput = document.getElementById('email-address')
const emailErrormessage = document.getElementById('email-error-message')

// The funtion check is responsible for setting the visibility of error message to hidden if any of them is set to visible. it does this by looping through all the error message.
function check() {
    errormessage.forEach(errorMessage => {
        setTimeout(function(){
            if(errorMessage.style.visibility === 'visible'){
                errorMessage.style.visibility = 'hidden';
            }
        }, 2500);
    });

}

function validateInput(){
    let isInputValid = true
    if(firstnameInput.value.trim() ===""){
        firstnameErrormessage.style.visibility = 'visible'
        isInputValid = false
    }
    if(lastnameInput.value.trim() ===""){
        lastnameErrormessage.style.visibility = 'visible'
        isInputValid = false
    }
    if(emailInput.value.trim() === "") {
        emailErrormessage.style.visibility = "visible"
        isInputValid = false
    }
    return isInputValid
}

////////////////////// Radio buttons ///////////////////////////

const radBtn = document.querySelectorAll('.radio-btn'); // Select all elements with the class 'radio-btn';

const radioImageContainer = document.querySelectorAll('.radio-image-query');
//iterate through the radioImage container

radioImageContainer.forEach(container => {
    container.addEventListener('click', (event) =>{
        // checkSubcontainer() set the defult state of buttons on click
        checkSubcontainer(event.currentTarget)
    })
})

// Checks if Subcontainer was clicked and sets each container to default state i.e background color to "--white" and radioBtn to "unchecked"

function checkSubcontainer(clickedElement) {
    radioImageContainer.forEach(radioImage => {
        // set background color to default(white) when button is clicked
        radioImage.style.background = 'hsl(0, 0%, 100%)';
        const radioBtnImage = radioImage.querySelector('.radio-btn');
        // sets radiobtnimage to default image i.e unchecked. The if and else conditional statement is just checking if the radioBtnImage is pointing in the direction it should i.e the class .radiobtn in the index.html
        if(radioBtnImage) {
            radioBtnImage.src = 'assets/images/radio_button_unchecked_24dp_FILL0_wght400_GRAD0_opsz24.svg';
        } else {
            console.log('Error: radio button image is not present')
        }
    });


// sets background color of clicked event
    clickedElement.style.background = 'hsl(148, 38%, 91%)';

    const clickedimage = clickedElement.querySelector('.radio-btn');

    if(clickedimage) {
        clickedimage.src = 'assets/images/check_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg';
    } else {
        console.log('Error: clicked image is not present');
    }
}



/////////////// Query message function //////////////////////////// 

const queryErrorMEssage = document.querySelector(".queryErrorMEssage")

function checkEmptyRadio(){
    let isRadioValid = true;
    radBtn.forEach(function(elmt) {
        if(elmt.src.includes('assets/images/check_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg')){
            isRadioValid = false
        }
    })

    if(isRadioValid) {
        queryErrorMEssage.style.visibility = 'visible'
        return false
    }else{
        return true
    }

    
}

// /////////////////////// message function //////////////////////

const messageErrorMessage = document.querySelector('.messageInputErrorMessage');

const messageInput = document.getElementById('message');
function checkMessageInput(){
    if(messageInput.value.trim() === ""){
        messageErrorMessage.style.visibility = 'visible'
        return false
    }else{
        return true
    }

}

// //////////////// check box ///////////////////// //

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', function(){

    if(this.src.includes('assets/images/check_box_outline_blank_24dp_FILL0_wght400_GRAD0_opsz24.svg')){
        this.src = 'assets/images/icon-checkbox-check.svg';
    }else{
        this.src = 'assets/images/check_box_outline_blank_24dp_FILL0_wght400_GRAD0_opsz24.svg'
    }
})

const consentErrorMessage = document.getElementById('consentErrorMessage')

function validateCheckBox(){
    if(checkbox.src.includes('assets/images/check_box_outline_blank_24dp_FILL0_wght400_GRAD0_opsz24.svg')){
        consentErrorMessage.style.visibility = 'visible';
        return false
    }else{
        return true
    }
}

// overall validation

function validateForm(){
    const inputValidation = validateInput();
    const radioValidation = checkEmptyRadio()
    const messageValidation = checkMessageInput()
    const checkboxValidation = validateCheckBox()
    return inputValidation && radioValidation && messageValidation && checkboxValidation;
}

// success message

const successfullySentContainer = document.querySelector('.successfullySent-container');
successfullySentContainer.style.display = 'none'

btn.addEventListener('click', function() {
    validateInput()
    check()
    checkEmptyRadio()
    checkMessageInput()
    validateCheckBox()

    if(validateForm()){
        successfullySentContainer.style.display = 'block'
    }

    setTimeout(function(){
        if(successfullySentContainer.style.display = 'block'){
            successfullySentContainer.style.display = 'none'
        }
    }, 3000)
        
    });
