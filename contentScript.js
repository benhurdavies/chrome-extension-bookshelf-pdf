chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('something happening from the extension');
  var data = request.data || {};

  var title = document.getElementsByTagName('title')[0].innerHTML;

  sendResponse({ data: title, success: true });
});
