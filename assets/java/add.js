const id = new URLSearchParams(window.location.search).get("id")
const boxM = document.querySelector(".box")
const file = document.querySelector(".file")
const title = document.querySelector(".title")
const author = document.querySelector(".author")
const save = document.querySelector(".save")
const btn = document.querySelector(".btn")
const img = document.querySelector("img")
const image = document.querySelector(".image")



//sozlerin dolmagi
if (id) {
    axios.get("http://localhost:3000/posts/" + id)
        .then(res => res.data)
        .then(data => {
            title.value = data.title
            author.value = data.author
        })

}

//sekil gelmesi

file.addEventListener("input", () => {
    const i = file.files[0]
    if (i) {
        const reader = new FileReader
        reader.readAsDataURL(i)
        reader.addEventListener("load", () => {
            img.src = reader.result
        })
    }
})
save.addEventListener("click", () => {
    //update edit
    if (id) {
        axios.put("http://localhost:3000/posts/" + id, {
            author: author.value,
            title: title.value
        })

    }
    else (id) {
        axios.post("http://localhost:3000/posts/" + id, {
            author: author.value,
            title: title.value
        })
    }
    window.location="./index.html"
})