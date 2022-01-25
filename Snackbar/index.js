const BtnD = document.querySelector(".snack_btn");
const SnackbarD = document.querySelector(".Base_snackbar");



BtnD.addEventListener("click",()=>{
    SnackbarD.style.display = "block"
    setTimeout(()=>{
     SnackbarD.style.display = "none";
    },3000)
    
})

