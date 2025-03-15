let story = document.getElementById("story"); // Get story text
let choices = document.getElementById("choices"); // Get choices div

function makeChoice(choice) {
    if (choice === "ray") {
        story.innerHTML = `
            <p>Ray says, "My frat's throwing a party tonight, wanna come?"</p>
            
            <p>What do you reply?</p>
        `
        choices.innerHTML = `
            <button onclick="makeChoice('yes')">Yeah, I'll pull up!</button>
            <button onclick="makeChoice('no')">No, not my thing. (NONSENSE MUTATION)</button>
        `;
    } 
    else if (choice === "yes"){
        story.innerHTML = "You go to the party and Ray offers you a drink there. Do you take the drink?"
        choices.innerHTML = `
            <button onclick="makeChoice('drink')">Sure! (FRAMESHIFT MUTATION))</button>
            <button onclick="makeChoice('sober')">No thanks, I'm sober</button>
            `
    }
    else if (choice === "drink"){
        title.innerHTML = "You and Ray don't become friends :("
        story.innerHTML = `
            <p>You end up drinking a lot at the party. You slur all your words and everything you say is incomprehensible. After the next LS7A lecture, Rae says to you, "Hey what's up... you were kinda acting weird at the party not gonna lie. I guess you're really different when you're drunk haha."</p>
            
            <p>You laugh it off, but you can tell that Ray's acting more distant. </p>

            <p style="color: gray;">Wanna make other choices? REFRESH the website to replay the game.</p>
        `
        choices.innerHTML = ""
    }
    else if (choice === "sober"){
        title.innerHTML = "You and Ray become friends :)"
        story.innerHTML = `
            <p>You have a great time at the party and end up going to more functions with Ray, making a lot of good memories together!</p>
            
            <p style="color: gray;">Wanna make other choices? REFRESH the website to replay the game.</p>
        `
        choices.innerHTML = ""
    }

    else if (choice === "no") {
        title.innerHTML = "You and Ray don't become friends :("
        story.innerHTML = `
        <p>You and Ray end up losing touch with each other, though you both still wave hi when you see each other around.</p>
        
        <p style="color: gray;">Wanna make other choices? REFRESH the website to replay the game.</p>
    `
        choices.innerHTML = ""
    }

    else if (choice === "emma") {
        story.innerHTML = `
        <p>Emma tells you she's an English major. She says, "We're studying "War and Peace" in class right now, it's really interesting."</p>
        
        <p>What do you reply?</p>
        `
        choices.innerHTML = `
            <button onclick="makeChoice('warrenpeace')">Who's Warren Peace? (MISSENSE MUTATION)</button>
            <button onclick="makeChoice('book')">Omg I love that book!</button>
        `
    }
    else if (choice === "warrenpeace") {
        title.innerHTML = "You and Emma become study buddies :)"
        story.innerHTML = `
        <p>Emma laughs. She says, "Haha it's not a person, it's a book! I assume you're a STEM major then, lol. I could definitely use some help for this class, we should study together sometime!</p>
        
        <p>Although you and Emma never become real friends, you become study buddies and help each other earn A's in LS7A!</p>

        <p style="color: gray;">Wanna make other choices? REFRESH the website to replay the game.</p>

        `
        choices.innerHTML = ""
    }
    else if (choice === "book") {
        story.innerHTML = `
        <p>You and Emma hit it off chatting about the book. She asks you, "My poetry club's hosting a rooftop poetry reading tonight, wanna come?"</p>
        
        <p>What do you reply?</p>
        `
        choices.innerHTML = `
            <button onclick="makeChoice('ofc')">Yes of course!</button>
            <button onclick="makeChoice('sure')">Sure, I can't wait! (SILENT MUTATION)</button>
        `
    }
    else if (choice === "ofc") {
        title.innerHTML = "You and Emma become friends! :)"
        story.innerHTML = `
        <p>You have a great time at the poetry reading! You and Emma go to a more functions together and you end up joining the poetry club.</p>

        <p style="color: gray;">Wanna make other choices? REFRESH the website to replay the game.</p>
        `
        choices.innerHTML = ""
    }
    else if (choice === "sure") {
        title.innerHTML = "You and Emma become friends! :)"
        story.innerHTML = `
        <p>You have a great time at the poetry reading! You and Emma go to a more functions together and you end up joining the poetry club.</p>

        <p style="color: gray;">Wanna make other choices? REFRESH the website to replay the game.</p>
        `
        choices.innerHTML = ""
    }

    

}
