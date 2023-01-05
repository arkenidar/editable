var text=`<pre contenteditable id=code 
  style="background-color: yellowgreen; overflow-y: scroll; "></pre>`
document.currentScript.insertAdjacentHTML("afterend", text)
fetch("").then(res=>res.text()).then(res=>code.textContent=res)