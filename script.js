// var elms = document.querySelectorAll("[id='video-title']");
// var myJsonString = JSON.stringify(elms);

// var fs = require('fs');
// fs.writeFile("thing.json", myJsonString);
// function getText(){
//   return document.body.innerText
// }

function injectedFunction(){
    let elms = document.querySelectorAll("#video-title");
    const parsed=JSON.parse(elms);
    console.log(elms);
}


// function getHTML(){
//   return document.body.outerHTML
// }
// console.log(getText());             //Gives you all the text on the page
// console.log(getHTML());   
// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//       if(request.method == "getText"){
//           sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
//       }
//   }

// chrome.tabs.onUpdated.addListener
