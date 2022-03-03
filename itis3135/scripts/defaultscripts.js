//importPackage(java.io);


function timeAndDate()
{
    var today = new Date();
    var monthNumber = today.getMonth() + 1;
    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    //var dayOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    let fullTimeDate = "Today is " + today.getHours() + ":" + today.getMinutes() + " on " + monthName[monthNumber] + " " + today.getDate() + ", " + today.getFullYear();
    document.getElementById("current").innerHTML = fullTimeDate;
}

function welcomeText(){
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;

    let fullWelcomeText = "The Tyrian Discus welcomes you, " + name + "!! We are glad that you are feeling " + feeling + ".";

    document.getElementById("welcomeOutput").innerHTML = fullWelcomeText;
}

function guessGame(){
    //prompt
    var guessPrompt = prompt("I'm thinking of a color...");

    // guess a random value
    var randGuessNum = Math.floor(Math.random() * colors.length);
    let colors = new Array("Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "White");
    var answer = colors[randGuessNum];

    if (guessPrompt == answer) {
        alert("That is correct, the answer is " + guessPrompt);
    } else {
        alert("That is wrong, try again");
    }
}

function randFact() {
    //prompt
    var guessPrompt = prompt("Please choose a number 1-10");
    
    if (guessPrompt > 10 || guessPrompt < 1){
        prompt("That is not a valid number");
    } else {
        switch (guessPrompt) {
            case 1:
                prompt("They appear to derive their bright colors from combinations of pigments within skin cells.");
                break;
            case 2:
                prompt("Discus prefer to congregate in large groups with dozens of members for protection and feeding.");
                break;
            case 3:
                prompt("For good reason this fish has earned the name of discus with its relatively flat, rounded body.");
                break;
            case 4:
                prompt("Except for breeding season, when the female’s abdomen is enlarged, it is very difficult to tell the sexes apart");
                break;
            case 5:
                prompt("The fish also have remarkable Color-changing abilities based on age, mood, environmental conditions, and stress levels.");
                break;
            case 6:
                prompt("The main predators of these fish include turtles, birds, and larger species of fish");
                break;
            case 7:
                prompt("Discus are known to act as cannibals to unrelated larvae of its own species.");
                break;
            case 8:
                prompt("The discus is often raised in artificial environments for the purpose of selling it on the pet market, where it has proven to be incredibly valuable.");
                break;
            case 9:
                prompt("Discuses belong to the Kingdom Animalia.");
                break; 
            case 10:
                prompt("If it receives the proper care and maintenance, the discus can survive at least 10 to 15 years in captivity");
                break;
            default: 
                prompt("That is not a valid number, please try again");
        }
    }
}

function 
