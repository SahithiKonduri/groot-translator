var btnTranslate = document.querySelector("#btn-translate");
var txtInp = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/groot.json"
//Translating the url
function getTranslateUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

btnTranslate.addEventListener("click", function clickHandler() {
    var textInp = txtInp.value;
    fetch(getTranslateUrl(textInp)) 
    .then(response => response.json())
    .then(json => {output.innerText = json.contents.translated})
     
})