var startMyDay = function() {
    return "Time for coffee and a puzzle!";
};
console.log(startMyDay());

var favoriteCookie = function(cookie) {
    return `My favorite cookie is ${cookie}`;
}
console.log(favoriteCookie());
console.log(favoriteCookie("white chocolate macadamia nut"));

var introduce = function(name, occupation) {
    return `My name is ${name}, and I am a ${occupation}`;
}
console.log(introduce("Jen", "front end developer"));

var hydrationFeedback = function() {
    var numGlasses = Number(prompt("How many glasses of water did you have today?"));
    if (numGlasses >=8) {
        console.log("Congratulations on meeting your water goals!")
    } else {
        console.log("Not bad, but try to drink at least 8 glasses tomorrow!")
    }
    };

hydrationFeedback();