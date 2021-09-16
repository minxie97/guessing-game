'use strict'

function identify(){
    let identity = prompt('Hello! What is your name?');
    while (!identity) {
        identity = prompt('Ok but actually what is your name?')
    }


    // console.log('Nice to meet you ' + identity + '! Thank you for visiting my site!');
    alert('Nice to meet you ' + identity + '! Thank you for visiting my site!');
}




function quiz(){
    let score = 0    

    let questions = ['I am originally from California.', 'My favorite nba team is the Golden State Warriors.',
                    'I love to cook.', 'I have a cat named Pilot Jones (Jonesy for short).', 'My favorite band is Radiohead']
    let answers = ['yes', 'y', 'no', 'n']
    let yesResponses = ['That\'s right! I am originally from the Bay Area!', 'Hell yeah, Dubnation baby',
                        'Yup! It\'s one of my favorite activities! Even though I can never figure out what to make lol.',
                        'Yup wanna see pictures?', 'Ding ding ding! I\'ll trade my first born child for another album.']
    let noResponses = ['Nope! I\'m actually originally from the Bay Area.', 'If you get to know me, you\'ll see that all I ever talk about are the Warriors.',
                    'Let me cook something for you sometimes, you\'ll see.', 'I do so! Wanna see pictures?', 'I mean don\'t I look sad and pretenious to you?']

    for(let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i])
        if((userAnswer.toLowerCase() == answers[0]) || (userAnswer.toLowerCase() == answers [1])){
            alert(yesResponses[i]);
            score++
        } else if((userAnswer.toLowerCase() == answers[2]) || (userAnswer.toLowerCase() == answers[3])){
            alert(noResponses[i])
        } 
    }

    let favNum = Math.floor(Math.random() * 10) + 1;
    let numGuesses = 4;
    for(numGuesses; numGuesses > 0; numGuesses--){
        let favNumAnswer = prompt('What\'s my favorite number? (Hint it\'s within 1-10)');
        if(favNumAnswer == favNum) {
            alert('That\'s right! My favorite number is ' + favNum + '!')
            score++
            break;
        }else if(favNumAnswer > favNum) {
            alert('Nope, that\'s too high.');
        }else if(favNumAnswer < favNum) {
            alert('Nope, that\'s too low.');
        }   
    } 

    if(numGuesses === 0){
        alert('Alright, I\'ll just give you the answer. My favorite number is ' + favNum + '!')
    }

    let travel = ['cuba', 'vietnam', 'japan', 'germany', 'china', 'canada', 'mexico', 'denmark']
    let travelGuesses = 6
    let correct = false

    while(travelGuesses > 0 && !correct){
        let travelAnswer = prompt('What is a country that I have traveled to?')
        for(let i = 0; i < travel.length; i++){
            if(travelAnswer.toLowerCase() == travel[i]) {
                alert('That\'s correct! I\'ve been there!');
                correct = true
                score++;
                break; 
            }
        }
        if(correct != true){
            alert('That\'s wrong. Let\'s try again.');
        }
        travelGuesses--;
    }
    if(travelGuesses === 0){
        alert('I\'ll just give you the answers! I\'ve been to Cuba, Denmark, Germany, Vietnam, Japan, China, Canada, and Mexico!')
    }
    //Shout out Audrey and my roommate Ahsan for helping me with this^
        
    // console.log('You are all done ' + identity + '! Thanks for taking the quiz!');
    alert('You are all done ' + identity + '! Thanks for taking the quiz!');
    alert('You got ' + score + ' out of 7 points!');
}

identify();

let consent = prompt('I made a little quiz about myself, would you like to take it?');
if(consent.toLowerCase() == 'yes' || consent.toLowerCase() == 'y'){
    // console.log('Alright let\'s get started!');
    alert('Alright let\'s get started!');

quiz();

} else if(consent.toLowerCase() == 'no' || consent.toLowerCase() == 'n'){
    // console.log('I mean I don\'t blame you ' + identity + ', who would choose to do a quiz voluntarily?');
    alert('I mean I don\'t blame you ' + identity + ', who would choose to do a quiz voluntarily?');
    }



    



