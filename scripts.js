onload = function() {


    const validateEmail = () => {
        const inpt = document.querySelector(".ping-soon__email");
        const form = document.querySelector(".ping-soon__email-wrap");
        const submit = document.querySelector(".ping-soon__submit");
        const error = document.querySelector(".ping-soon__error-p");
        const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        submit.addEventListener("click", function(e) {
            e.preventDefault();
            if (!valid.test(inpt.value)) {
                inpt.style.borderColor = "hsl(354, 100%, 66%)";
                error.style.visibility = "visible";
            } else {
                form.submit();
            }
        })
    }

    validateEmail();































}
