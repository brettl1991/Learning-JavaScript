'use strict';
//DOM Content Loaded
//event is fired when the HTML has been downloaded and added to the DOM  tree before this event can happen

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree filled', e);
}); //we get this event in the console

//Load event: fired by the window not just when the HTML parsed, all the img-es and external resourses
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

//Before Unload Event: also gets fired on window, created immediately before the user is about to leave the page, it is good to use to ask users if they 100% sure they want to leave teh page, so a window will pop up
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  //need to set the return value to an empty string
  e.returnValue = '';
});

//EFFICIENT SCRIPT LOADING: DEFER AND ASYNC
//Up until now we just used the normal script tag for js in HTML but we can add the defer or async attributes to it:
//this will influence the way how the js will be fetched, and than executed
//we can write the js scrip in HTML in the head or end of the body:
//all because of page loading process

//                                                  //HEAD                                                                BODY END
//Regular script                      parsing the html...  waiting....         finish parsing html           parsing html - fetch script - execute
//                                    time -              fetch script - execute                                       good usecase
//                                    not good usecase to put in the head like this

//ASYNC                                parsing the html...  waiting....         finish parsing html
//                                           fetch script -    execute
//                                      script has been loaded same time as html been parsed, but still
//                                      the html parsing stipp stops before execution

//DEFER                                 parsing the html - execute
//                                        fetch script
//                                      //never gets interrupted the parsing, best solution to use

//picture scriptloading
