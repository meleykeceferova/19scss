const forElem = document.querySelector(".for")

function allData() {
    axios.get("http://localhost:3000/posts")
        .then(res => res.data)
        .then(data => {
            data.forEach(element => {
                forElem.innerHTML += `
            <div class="item">
            <p>${element.title}</p>
            <h3>${element.author}</h3>
            <div class="btn">
                <a href="./deteils.html?id=${element.id}">Deteils</a>
                <div onclick="deleteFunc(${element.id})">DELETE</div>
            </div>
          </div>`
            });
        })
}
allData()



function deleteFunc(id) {
    axios.delete("http://localhost:3000/posts/" + id)
    window.location.reload()
}