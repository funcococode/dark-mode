const toggleBtn = document.querySelector("#btn");
const labelWrapper = document.querySelector("#labelWrapper");
toggleBtn.addEventListener("change",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        labelWrapper.innerHTML = '<i class="fas fa-sun"></i>'
    }else{
        labelWrapper.innerHTML = '<i class="far fa-moon"></i>'
    }

})