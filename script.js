var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.getElementById("slidemenu");
function openmenu() {
    sideMenu.style.right = "0";
}
function closemenu() {
    sideMenu.style.right = "-200px"
}

// google spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbz1usL4NAQbMLhUudZ4s3ZcQyXprQcuY0QiSQWDaVUCyV_pfn47xQLah2U8CyL3XqJk/exec'
  const form = document.forms['submit-to-google-sheet']
  const success_msg = document.getElementById("success");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success_msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            success_msg.innerHTML=""
        }, 2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
