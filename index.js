document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    //check the value of age input field
    const age = document.getElementById('age').value;
    if (age < 18) {
        alert('You must be at least 18 years old to proceed with the checkout.');
        return; // Stop the form submission
    }
    else{
        alert('Form submitted successfully!');
    }
});
function controlFlow(score){

    if(score >= 90){
      console.log 'A';
    } else if(score >= 70){
         console.log'B';
    }
    else if (score >= 60){
        console.log 'C';
    }
    else if(score >= 50){
         console.log 'D';
    }
    else{
         console.log 'Fail';
    }

} 
controlFlow('85')
