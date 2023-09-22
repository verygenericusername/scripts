//coded by verygenericusername aka Chevy.
console.log("Collision System Loaded! In the detect function, the first element in parentheses will be the element to check collision with the collisionElement. Code will return true or false if the element is colliding with the collisionElement or not. If the code returned text, you got an error. Read the error message and try to fix the problem.")
var initializeCheck = false;
var collisionSystem = {
initialize: function(element){
if(element && element.style){
element.classList.add("collisionElement");
console.log("Element Initialized!");
}
},
detect: function(elementToCheck,collisionElement){
if(elementToCheck.classList.contains("collisionElement") && !collisionElement.classList.contains("collisionElement")){
console.log("Error: Element to check is initialized, but the collision element is not initialized.");
}
if(!elementToCheck.classList.contains("collisionElement") && collisionElement.classList.contains("collisionElement")){
console.log("Error: Element to check is not initialized, but the collision element is initialized.");
}
if(elementToCheck.classList.contains("collisionElement") && collisionElement.classList.contains("collisionElement")){
console.log("ElementToCheck, and CollisionElement Existing, and initialized.");
initializeCheck = true;
}
if(initializeCheck){
var etcRect = elementToCheck.getBoundingClientRect();
var ceRect = collisionElement.getBoundingClientRect();
if(etcRect.left < ceRect.right && etcRect.right > ceRect.left && etcRect.top < ceRect.bottom && etcRect.bottom > ceRect.top){
return true;
}else {
  return false;
}
}
}
}
