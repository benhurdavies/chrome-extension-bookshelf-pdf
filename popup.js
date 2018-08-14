document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('btnsave');
  button.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
        alert(JSON.stringify(response));
        console.log('success');
      });
    });
  });
});
