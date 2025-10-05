function orderCake(cakeName) {
  alert("You selected " + cakeName + "! 🎂 Thank you for your order.");
}
// Form submission
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let cake = document.getElementById("cake").value;
  if(name && phone && cake){
    alert(`Thank you ${name}! Your order for ${cake} has been received. We will contact you at ${phone}.`);
    document.getElementById("orderForm").reset(); // clear form
  } else {
    alert("Please fill all fields!");
  }
});