let tab = document.querySelectorAll('active-head');
let content = document.querySelectorAll('tab-content');

tab.forEach((val, i) => {
    val.addEventListener("Cl", () => {
        content.forEach((ct) => {
            tab[i].onclick=function(){
                ct.classList.remove("Is");
                
            }

            
            
           
        })
        tab.forEach((val)=>{
            val.classList.remove("Is");
        });
        content[i].classList.add("Is")
        tab[i].classList.add("Is")
    })
})
