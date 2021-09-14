'use strict'

let identity = prompt('Hello! What is your name?');
// console.log('Nice to meet you ' + identity + '! Thank you for visiting my site!');
alert('Nice to meet you ' + identity + '! Thank you for visiting my site!');

let consent = prompt('I made a little quiz about myself, would you like to take it?');
if(consent.toLowerCase() == 'yes' || consent.toLowerCase() == 'y') {
    // console.log('Alright let\'s get started!');
    alert('Alright let\'s get started!');
    
        let location = prompt('I am originally from California.');
        if(location.toLowerCase() == 'yes' || location.toLowerCase() == 'y'){
            // console.log('That\'s right! I am originally from the Bay Area!');
            alert('That\'s right! I am originally from the Bay Area!')
        } else if(location.toLowerCase() == 'no' || location.toLowerCase() == 'n'){
            // console.log('Nope! I\'m actually originally from the Bay Area.');
            alert('Nope! I\'m actually originally from the Bay Area.');
        }
        let basketball = prompt('My favorite nba team is the Golden State Warriors.');
        if(basketball.toLowerCase() == 'yes' || basketball.toLowerCase() == 'y'){
            // console.log('Hell yeah, Dubnation baby');
            alert('Hell yeah, Dubnation baby')
        } else if(basketball.toLowerCase() == 'no' || basketball.toLowerCase() == 'n'){
            // console.log('If you get to know me, you\'ll see that all I ever talk about are the Warriors.');
            alert('If you get to know me, you\'ll see that all I ever talk about are the Warriors.')
        }
        let cooking = prompt('I love to cook.');
        if(cooking.toLowerCase() == 'yes' || cooking.toLowerCase() == 'y'){
            // console.log('Yup! It\'s one of my favorite activities! Even though I can never figure out what to make lol.');
            alert('Yup! It\'s one of my favorite activities! Even though I can never figure out what to make lol.')
        } else if(cooking.toLowerCase() == 'no' || cooking.toLowerCase() == 'n'){
            // console.log('Let me cook something for you sometimes, you\'ll see.');
            alert('Let me cook something for you sometimes, you\'ll see.');
        }
        let cat = prompt('I have a cat named Pilot Jones (Jonesy for short).')
        if(cat.toLowerCase() == 'yes' || cat.toLowerCase() == 'y'){
            // console.log('Yup wanna see pictures?');
            alert('Yup wanna see pictures?');
        } else if(cat.toLowerCase() == 'no' || cat.toLowerCase() == 'n'){
            // console.log('I do so! Wanna see pictures?');
            alert('I do so! Wanna see pictures?');
        }
        let band = prompt('My favorite band is Radiohead');
        if(band.toLowerCase() == 'yes' || band.toLowerCase() == 'y'){
            // console.log('Ding ding ding! I\'ll trade my first born child for another album.');
            alert('Ding ding ding! I\'ll trade my first born child for another album.');
        } else if(band.toLowerCase() == 'no' || band.toLowerCase() == 'n'){
            // console.log('I mean don\'t I look depressed and pretenious to you?');
            alert('I mean don\'t I look depressed and pretenious to you?');
        }
        // console.log('You are all done ' + identity + '! Thanks for taking the quiz!');
        alert('You are all done ' + identity + '! Thanks for taking the quiz!');
        
} else if(consent.toLowerCase() == 'no' || consent.toLowerCase() == 'n'){
    // console.log('I mean I don\'t blame you ' + identity + ', who would choose to do a quiz voluntarily?');
    alert('I mean I don\'t blame you ' + identity + ', who would choose to do a quiz voluntarily?');
}



