const text = document.querySelector('#text');
const textError = document.querySelector('.text-class');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = " Name is Incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-class');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[\\w-+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]+)*(\\.[a-z]{2,})$');
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else emailError.textContent = " Email is incorrect";
});

const phone=document.querySelector('#tel');
const phoneError=document.querySelector('.phone-class');
phone.addEventListener('input',function () {
   let phoneRegex=RegExp('^([0-9]{2})+([ ])+([0-9]{10})$');
   if(phoneRegex.test(phone.value))
        phoneError.textContent="";
    else phoneError.textContent=" Phone is incorrect";
});