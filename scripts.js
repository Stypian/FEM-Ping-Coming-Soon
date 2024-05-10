onload = function() {


    const validateEmail = () => {
        const inpt = document.querySelector(".ping-soon__email");
        const form = document.querySelector(".ping-soon__email-wrap");
        const submit = document.querySelector(".ping-soon__submit");
        const error = document.querySelector(".ping-soon__error-p");
        const valid = /^([a-zA-Z0-9\.\-\\_\]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/;

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
