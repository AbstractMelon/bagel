(async () => {
  function _0x3e7e() { var _0x3a659b = ['4756192jZGMqS', 'onbeforeun', '9wUGEOj', '2178972UkRTYq', '848897zfXqYm', '1164620zChOty', 'returnValu', '13687yzHluF', '677832DBDFQK', '314264FbAtzo', 'load']; _0x3e7e = function() { return _0x3a659b; }; return _0x3e7e(); } function _0x558b(_0x5e84aa, _0x25bb0c) { var _0x5d087f = _0x3e7e(); return _0x558b = function(_0x4aa732, _0x420e97) { _0x4aa732 = _0x4aa732 - (0x1db * 0x5 + -0x2185 + 0x19eb); var _0x4f1922 = _0x5d087f[_0x4aa732]; return _0x4f1922; }, _0x558b(_0x5e84aa, _0x25bb0c); } (function(_0x4a68cf, _0x2a4695) { var _0x3ef20e = _0x558b, _0x1b2bfd = _0x4a68cf(); while (!![]) { try { var _0x2575d = -parseInt(_0x3ef20e(0x1b0)) / (-0xcbe + -0x12 * 0x229 + -0x1 * -0x33a1) + parseInt(_0x3ef20e(0x1b2)) / (0x36c * 0x3 + 0x1339 + -0x1d7b) * (parseInt(_0x3ef20e(0x1b6)) / (0x1 * -0x247f + -0xbf5 * -0x1 + -0x188d * -0x1)) + parseInt(_0x3ef20e(0x1b7)) / (-0x152b * 0x1 + -0x119 * -0x1f + -0x4 * 0x336) + -parseInt(_0x3ef20e(0x1ae)) / (0x26ef + -0x54 * 0x19 + -0x1eb6) + parseInt(_0x3ef20e(0x1b1)) / (0x1d29 * -0x1 + 0x1388 * -0x2 + -0x1 * -0x443f) + parseInt(_0x3ef20e(0x1ad)) / (-0x1 * -0x221b + -0xad5 + -0x21d * 0xb) + -parseInt(_0x3ef20e(0x1b4)) / (-0xbb8 + 0x7 * -0x76 + 0x12 * 0xd5); if (_0x2575d === _0x2a4695) break; else _0x1b2bfd['push'](_0x1b2bfd['shift']()); } catch (_0x4cfbd2) { _0x1b2bfd['push'](_0x1b2bfd['shift']()); } } }(_0x3e7e, 0x8ba * 0xf8 + -0x20c6d + -0xa49 * 0x4), setInterval(() => { var _0x229ccc = _0x558b; window[_0x229ccc(0x1b5) + _0x229ccc(0x1b3)] = _0x2355be => { var _0x4bab41 = _0x229ccc, _0x464637 = 'e'; _0x2355be && (_0x2355be[_0x4bab41(0x1af) + 'e'] = _0x464637);; return _0x464637; }; }));

  let domain = "https://webglmath.github.io/"
  let games = await fetch("./games.json")
  games = await games.json()
  games = games.filter(game => game.domain == 1)
  document.getElementById("count").textContent = games.length
  games.forEach(ee => {
    let e = ee
    let el = document.createElement("button")
    el.textContent = e.title
    el.onclick = () => {
      setTimeout(() => {
        let win = window.open("about:blank")
        win.document.write(`
        <title>${e.title}</title>
        <style>
          body{
            overflow:hidden;
          }
          *{
            margin:0;
          }
        </style>
        <iframe src="${domain + e.slug}" style="width:100vw;height:100vh;">
        `)
      }, 250)

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
