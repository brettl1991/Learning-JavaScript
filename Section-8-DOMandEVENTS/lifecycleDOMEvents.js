'use strict';
//DOM Content Loaded
//event is fired when the HTML has been downloaded and added to the DOM  tree before this event can happen

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree filled', e);
}); //we get this event in teh console

//Load event: fired by the window not when the HTML parsed, all the img-es and external resourses
window.addEventListener;
'load',
  function (e) {
    console.log('Page fully loaded', e);
  };

//Before Unload Ebent: also gets fired on window, created immediately before the user is about to leave the page, it is good to use to ask users if they 100% sure they want to leave teh page, so a window will pop up
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  //need to set the return value to an empty string
  e.returnValue = '';
});
