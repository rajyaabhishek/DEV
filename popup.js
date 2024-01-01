chrome.tabs.onSelectionChanged.addListener(function(tabId,changeInfo,tab) {
    chrome.tabs.getSelected(null,function(tab) {
      chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function (response) {
        selectedtext = response.data;
      });
      chrome.tabs.sendRequest(tab.id, {method: "getText"}, function (response) {
        alltext = response.data;
      });
    });
  });