chrome.webRequest.onHeadersReceived.addListener(function(details) {
    console.log(details);
}, { urls: [ '*://*/*' ] }, [ "responseHeaders" ]);
