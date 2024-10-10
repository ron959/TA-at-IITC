console.log('main.js');


const formElement = document.querySelector("form")
// console.log(formElement);

const containerElement = document.querySelector(".container")
console.log(containerElement);

function formSubmit (formObejct) {
    // console.log(formObejct.number);
    const url = `https://random-d.uk/api/v2/${formObejct.number}.jpg`;
    console.log(url);

    // Insert image

    const imageElement = document.createElement("img");
    imageElement.src = url;
    containerElement.innerHTML = "";
    containerElement.appendChild(imageElement);
}

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(formElement);
    // console.log(formData);

    const formObject = Object.fromEntries(formData);
    // console.log(formObject);

    formSubmit(formObject);
})
