const id = new URLSearchParams(window.location.search).get("id")
const blokElement = document.querySelector(".blok2")

function deteil() {
    axios.get("http://localhost:3000/posts/" + id)
        .then(res => res.data)
        .then(data => {
                blokElement.innerHTML =`
        <div class="blok2">
        <p>${data.title}</p>
        <h3>${data.author}</h3>
    </div>`
        })
}
deteil()