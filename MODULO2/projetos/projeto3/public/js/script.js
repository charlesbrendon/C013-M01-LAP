// const btnMobile = document.getElementById('btnMobile');

// function toggleMenu(){
// const nav = document.getElementById('nav');
// nav.classList.toggleMenu('active')
// }

// btnMobile.addEventListener('click', toggleMenu);



    const viewDropdown = () =>{
    const buttons = document.querySelectorAll(".dropButton");

    buttons.forEach((btn)=>{
        btn.addEventListener("click", (event) =>{
            console.log(event)
        })
    })

};



viewDropdown(); 
