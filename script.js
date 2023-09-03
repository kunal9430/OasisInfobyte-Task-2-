var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active_link")
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active_tab")
    }

    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
}
// function for opening and closing menu 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = '0px';
}

function closemenu(){
    sidemenu.style.right = '-300px';
}
// Google sheet connection with form 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOP9DAE-_fWXPvNti0Bl-2QzJk1D_LefSATa2XV_f6EjYfb53W_iYyzMpFHb4f193e/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById('msg');
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {msg.innerHTML = "Message sent successfully!" 
                setTimeout(() => {
                    msg.innerHTML='';
                }, 5000)
            form.reset()})
          .catch(error => console.error('Error!', error.message))
      })

//changing display

function changeDisplay(){
        if(document.getElementById("dis1").style.display === 'inline-block'){
            document.getElementById("dis1").style.display = 'none';
            document.getElementById("dis1").style.display = 'none';
            document.getElementById("dis2").style.display = 'none';
            document.getElementById("dis3").style.display = 'none';
            document.getElementById("primary").innerHTML = "See More";
        }else{
            document.getElementById("dis1").style.display = 'inline-block';
            document.getElementById("dis2").style.display = 'inline-block';
            document.getElementById("dis3").style.display = 'inline-block';
            document.getElementById("primary").innerHTML = "See Less";
        }
        
}