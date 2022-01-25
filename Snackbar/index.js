const BtnD = document.querySelector(".snack_btn");
const SnackbarD = document.querySelector(".Base_snackbar");



BtnD.addEventListener("click",()=>{
    
    setTimeout(()=>{
     
        SnackbarD.style.display = "block";
    },300)
    
})

