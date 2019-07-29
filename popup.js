function latin() {
  chrome.tabs.executeScript({
    file: 'latin.js'
  }); 
}
function cyril(){
  chrome.tabs.executeScript({
    file: 'cyril.js'
  });
}
document.getElementById('toLatin').addEventListener('click', latin);
document.getElementById('toCyril').addEventListener('click', cyril);