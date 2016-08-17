
userInput();
function userInput() {
    var greeting = prompt("To allow access, please enter your full phone number, including dashes. All information recieved will be disclosed only for our records");
    alert(greeting);

    if (greeting.length < 12) {
        return false;
    }
    else if(greeting.charAt(3) == "-" && greeting.charAt(7) == "-") {
        userBirthday();
        return true;
    }
}

function userBirthday() {
    var greetingTwo = prompt("What is your birthdate?");
    alert(greetingTwo);

    if (greetingTwo.length < 8) {
        alert("invalid birthdate");
    }
    else if(greetingTwo.charAt(2) == "/" && greetingTwo.charAt(5) == "/") {
        userPostal();
        return true;
    }
}

function userPostal() {
    var greetingThree = prompt("Please enter your postal code");
    alert(greetingThree);

    if (greetingThree.length > 10) {
        alert("invalid number");
    }
    else if(greetingThree.length === 5 && 9) {
        userState();
        return true;
    }
}
function userState() {
    var greetingFour = prompt("Please enter your two digit state abbreviation in capitilization");

    if (greetingFour.length > 2) {
        alert("invalid state");
    }
    if(greetingFour.length == 2) {
        console.log(greetingFour.toUpperCase());
        userMarital();
        return true;
     }
} 
function userMarital() {
    var greetingFive = prompt("Are you currently married, yes or no?");
    if(greetingFive == "yes" || greetingFive == "Yes" || greetingFive == "YES"){
        alert("yay for love!");
    } else if(greetingFive == "no" || greetingFive == "No" || greetingFive == "NO") {
    } else {
        alert("oh happy days!");
    }
}