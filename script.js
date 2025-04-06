document.addEventListener("DOMContentLoaded", function () {
    const callButton = document.querySelector(".call-button");
    const phoneNumber = "+33 6 88 71 07 12  ";
    let clickedOnce = false;

    callButton.addEventListener("click", function () {
        if (!clickedOnce) {
            callButton.textContent = phoneNumber;
            clickedOnce = true;
        } else {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                callButton.textContent = "Numéro copié ! ";
                setTimeout(() => {
                    callButton.textContent = "Appelez-nous";
                    clickedOnce = false;
                }, 3000);
            }).catch(err => {
                console.error("Erreur lors de la copie : ", err);
                callButton.textContent = "Erreur copie";
            });
        }
    });

    const logo = document.getElementById("welcomeLogo");
    const buttons = document.getElementById("choiceButtons");
    let hasInteracted = false;

    logo.addEventListener("mouseenter", () => {
        if (!hasInteracted) {
            hasInteracted = true;
            buttons.classList.add("visible");
            setTimeout(() => {
                buttons.classList.add("visible");
                hasInteracted = false;
            }, 10);
        }
    });
});
