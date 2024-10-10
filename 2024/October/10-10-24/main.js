console.log('main.js');


const formElement = document.querySelector("form")
const containerElement = document.querySelector(".container")
const listBtnElement = document.querySelector("#get-list")

// console.log(formElement);
// console.log(containerElement);
console.log(listBtnElement);

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

const getDuckList = () => {
    fetch('https://random-d.uk/api/v2/list', {
        AccessControlAllowOrigin: '*'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log('Images:', data.images);
            console.log('GIFs:', data.gifs);
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

listBtnElement.addEventListener("click", () => {
    getDuckList()
})
