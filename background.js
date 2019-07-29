function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

chrome.browserAction.onClicked.addListener(async function(tab) {
  chrome.tabs.executeScript({
    code: 'var myalphalatin = ["A", "Á", "B", "D", "E", "F", "G", "Ǵ", "H", "I", "I", "I", "J", "K", "L", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Sh", "Ch", "T", "U", "Ú", "V", "Y", "Ý", "Z", "Ia", "Yu", "a", "á", "b", "d", "e", "f", "g", "ǵ", "h", "i", "ı", "ı", "j", "k", "l", "m", "n", "ń", "o", "ó", "p", "q", "r", "s", "sh", "ch", "t", "u", "ú", "v", "y", "ý", "z", "ia", "yu"]; var myalphacyril = ["А", "Ә", "Б", "Д", "Е", "Ф", "Г", "Ғ", "Х", "І", "И", "Й", "Ж", "К", "Л", "М", "Н", "Ң", "О", "Ө", "П", "Қ", "Р", "С", "Ш", "Ч", "Т", "Ұ", "Ү", "В", "Ы", "У", "З", "Я", "Ю", "а", "ә", "б", "д", "е", "ф", "г", "ғ", "х", "і", "и", "й", "ж", "к", "л", "м", "н", "ң", "о", "ө", "п", "қ", "р", "с", "ш", "ч", "т", "ұ", "ү", "в", "ы", "у", "з", "я", "ю"]; var element = document.querySelector("html").innerHTML;var newWord = "";for(var i = 0; i < element.length; i++){if(myalphacyril.indexOf(element[i]) != -1){newWord += myalphalatin[myalphacyril.indexOf(element[i])];} else{newWord += element[i];}}document.querySelector("html").innerHTML = newWord;'
  });
});
