const BtnD = document.querySelectorAll(".snack_btn");
const SnackbarD = document.querySelector(".Base_snackbar");
const LeadSnackbarD = document.querySelector(".Lead_snackbar")
const StackedSnackbarD = document.querySelector(".Stacked_snackbar")

BtnD.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerText === "Baseline") {
            SnackbarD.style.display = "block";
            setTimeout(() => {
                SnackbarD.style.display = "none";
            }, 2000)
        } else if (e.target.innerText === "Leading") {
            LeadSnackbarD.style.display = "block";
            setTimeout(() => {
                LeadSnackbarD.style.display = "none";
            }, 2000)
        } else if (e.target.innerText === "Stacked") {
            StackedSnackbarD.style.display = "block";
            setTimeout(() => {
                StackedSnackbarD.style.display = "none";
            }, 2000)
        }
    })
})