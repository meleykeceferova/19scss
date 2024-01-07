const forElem = document.querySelector(".for")

function alldata() {
    fetch("http://localhost:3000/Data")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                forElem.innerHTML += `
                <div class="item3">
                <img src="${element.image}" alt="">
                <span>${element.title}</span>
                <h5>${element.description}</h5>
            </div>
            `
            });
        })

}
alldata()