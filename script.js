let jokes = [

    'Did you hear about the mathematician who’s afraid of negative numbers?<br><br>He’ll stop at nothing to avoid them',
    'Did you hear about the claustrophobic astronaut?<br><br>He just needed a little space',
    'Why don’t scientists trust atoms?<br><br>Because they make up everything',
    'Where are average things manufactured?<br><br>The satisfactory',
    'A man tells his doctor, “Doc, help me. I’m addicted to Twitter!”<br><br>The doctor replies, “Sorry, I don’t follow you …”',
    'What’s the different between a cat and a comma?<br><br>A cat has claws at the end of paws; A comma is a pause at the end of a clause',
    'What did the Tin Man say when he got run over by a steamroller?<br><br>“Curses! Foil again!”',
    'What did the Buddhist say to the hot dog vendor?<br><br>Make me one with everything'

]

function generateJoke(){

    let jokePicker = Math.floor(Math.random()*Math.floor(jokes.length));

    document.getElementById("joke").innerHTML = jokes[jokePicker];

}