document.getElementById("play").addEventListener("click", function() {
            
    // 1. Ask for the first input
    // Note: \n creates a new line in the popup box
    let choice = prompt(
        "You are a hunter in search of a deadly demon. Where do you go first?\n" +
        "[1] Go to the cave\n" +
        "[2] Go to the abandoned mansion"
    );

    // 2. Process the first choice
    // prompt() returns a String, so we compare against "1" rather than the number 1
    if (choice === "1") {
        
        alert("The cave is pitch black. You hear growling...");
        alert("A pack of lions surrounds you! All you have is salt and a knife.");
        alert("GAME OVER: You were eaten by lions.");

    } else if (choice === "2") {
        
        alert("You enter the mansion. The floorboards creak beneath your boots.");
        
        // 3. Nested Input
        let secondChoice = prompt(
            "You see a silver locket on the floor. Do you pick it up?\n" +
            "[1] Yes\n" +
            "[2] No"
        );

        if (secondChoice === "1") {
            alert("The locket glows! You feel stronger. You are ready for the demon.");
        } else {
            alert("You leave it behind. A cold breeze chills your spine...");
        }

    } else {
        alert("Invalid choice. You stood still for too long and the demon found you!");
    }
});