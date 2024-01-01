
chrome.tabs.onActivated.addListener(function (tabID, changeInfo, tab) {
    // if(tab.url && tab.url.includes("https://www.youtube.com/")){

    // function injectedFunction(){
    //     let elms = document.querySelectorAll("#video-title");
    //     const parsed=JSON.parse(elms);
    //     console.log(elms);
    // }
    
 console.log(document);

       
        // // OR: 
        // window.addEventListener('DOMContentLoaded', yourFunction, false);
//  let elms = window.document.querySelector('.class-name')
            
            // Manipulating the DOM here
//  var myJsonString = JSON.stringify(elms);
    }
//}
);
    // //chrome.tabs.sendMessage(tabID, { name: 'Chrome Tabs updated >>>>>> ' + tab.url });
    // if (tab.status == 'complete' && tab.url.startsWith(_config.baseURL + '/login?signedout=1')) {
    //  console.log('Clearing extension state!');
     
    // }
    // if (tab.status == 'complete' && tab.url === _config.baseURL + '/dashboard?extension=1') {
    //            console.log("Login process");
    // }