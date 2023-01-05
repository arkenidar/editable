var text=`<pre contenteditable id=code 
  style="background-color: yellowgreen; overflow-y: scroll; width: 100%; "></pre>`
document.currentScript.insertAdjacentHTML("afterend", text)
fetch("").then(res=>res.text()).then(res=>code.innerText=res)