
function ClearText() {
    var element = document.getElementById("speed_typing");
    element.value = "";
    clearstate();
    element.setAttribute("style", "background-color: #E8E8E8;");
    var buttonelement = document.getElementById("sbutton");
    buttonelement.value = "Clear text";
    starttime = Date.now();

}
function CountKeys(event) {
    //keycode = backspace
    if (event.keyCode === 13) {
        return;
    }
    updatelastkey(event.key);
}

function updatelastkey(key) {
    var element = document.getElementById("last_key");
    element.innerHTML = key;
    wpm(key);
}
function congratulations(wpm){
    var element = document.getElementById("last_key");
    element.innerHTML = "Congratulations! WPM:" + wpm;
}
    


function updatecount(count) {
    var element = document.getElementById("count");
    element.innerHTML = count;
}
function wordstoarray(id) {
    var words = [];
    var element = document.getElementById(id);
    var str = element.textContent;
    str = str.trim();
    words = str.split(' ');
    return words;
}
function clearstate() {
    index = 0;
    position = 0;
    w = "";
}
var starttime = null;
var endtime = null;
var words = wordstoarray("Text");
var index = 0;
var position = 0;
var space = 0;
var w = "";
function wpm(key) {
    if (position == words.length) {
        
        endtime = Date.now();
        var time = (endtime - starttime) / ( 1000 * 60);
        var wpm = words.length / time;
        wpm = Math.floor(wpm); 
        congratulations(wpm);
    }
    if (key == " ") {
        space = space + 1;
    } else {
        space = 0;
    }
    if (space > 1) {
        red();
    }
    var currentword = words[position];
    var currentletter = currentword.charAt(index);
    if (index != 0 && key == " ") {
        red();
        return;
    }

    if (key == currentletter) {
        index = index + 1;
        if (index == currentword.length) {
            position = position + 1;
            index = 0;
            updatecount(position);
        }
        green();
    } else if (key == " ") {
        return;
    } else {
        red();
        return;
    }

}
function red() {
    var element = document.getElementById("speed_typing");
    element.setAttribute("style", "background-color: red;")
}
function green() {
    var element = document.getElementById("speed_typing");
    element.setAttribute("style", "background-color: #ADFF2F;")
}