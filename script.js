(async () => {
  let domain = "https://webglmath.github.io/"
  let games = await fetch("./games.json")
  games = await games.json()
  games = games.filter(game => game.domain == 1)
  games.forEach(ee => {
    let e = ee
    let el = document.createElement("button")
    el.textContent = e.title
    el.onclick = () => {
      let win = window.open("about:blank")
      win.document.write(`<style>
        body{
          overflow:hidden;
        }
        *{
          margin:0;
        }
      </style>
      <iframe src="${domain + e.slug}" style="width:100vw;height:100vh;">`)
      // document.getElementById("game").src = domain + e.slug
    }

    document.getElementById("games").appendChild(el)
  })

  setInterval(() => {
    let search = document.getElementById("search").value
    Array.from(document.querySelectorAll("button")).forEach((el) => {
      if (/^\s*$/.test(search)) {
        el.style.display = "inline-block"
        return
      }
      el.style.display = el.textContent.toLowerCase().includes(search.toLowerCase()) ? "inline-block" : "none"
    })
  }, 20)
})()
