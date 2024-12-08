var startMyDay = function () {
    return `Time for coffee and a puzzle!`;
};
console.log(startMyDay());

var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("chocolate chip"));

var introduce = function (name, occupation) {
    return `Hi! My name is ${name}, and I am a ${occupation}.`;
};

console.log(introduce("Jen", "front end developer"));
console.log(introduce("Tabor", "marketing guru"));

var hydrationFeedback = function (){
    var numGlasses = Number(prompt("How many glasses of water did you have today?"));
    if (numGlasses >= 8) {
        console.log(`Congratulations on staying hyrdrated!`);
    } else {
        console.log(`Not bad, but let's try for a bit more tomorrow!`);
    }
};

hydrationFeedback();