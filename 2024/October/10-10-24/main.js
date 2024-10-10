console.log('main.js');


const formElement = document.querySelector("form")
console.log(formElement);

function formSubmit (formObejct) {
    // console.log(formObejct.number);

    fetch(`https://random-d.uk/api/v2/${formObejct.number}.jpg`)
        .then(response => {
            console.log(response);
            return response.blob()
        })
        .then(imageBlob => {
            console.log(imageBlob);
            
            const imageURL = URL.createObjectURL(imageBlob);
            
            // Use imageURL in an <img> tag or as needed
        });

}

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(formElement);
    // console.log(formData);

    const formObject = Object.fromEntries(formData);
    // console.log(formObject);

    formSubmit(formObject);
})
