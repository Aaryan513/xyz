const form=document.querySelector("form");
form.addEventListener("submit",function() {
    alert("thank you! your message has been sent");
    form.reset();
});
