const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

async function start() {
  console.log("den er startet")
  window.interval = setInterval(async () => {
    // call rust function that should move the character
    await invoke("move_character")
    //const result = await invoke("test");
    console.log("her burde det komme")
    //console.log(result)
  }, 10000)

  console.log("den er færdig")
}

function stop()
{
  clearInterval(interval);
}

window.addEventListener("DOMContentLoaded", () => {
  const buttonStart = document.getElementById('start-button')
  const buttonClose = document.getElementById('close-button')
  const spinner = document.getElementById('spinner')

  buttonStart.addEventListener('click', event => {
    if(buttonStart.innerHTML === "Start"){
      buttonStart.textContent = "Stop"
      spinner.style.display = "block"
      start()
    }
    else if(buttonStart.innerHTML === "Stop"){
      buttonStart.textContent = 'Start';
      spinner.style.display = "none";
      stop()
    }
  })
});
