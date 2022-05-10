// This code when runs checks for the type of device the accessor is using. If that person is using an IPhone, IPad, IPod, or Android in this case, it will redirect to a changable URL.

// Mobile Device Types
console.log("Checking device type being used to access this web-page...");
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
console.log("Device type found!");

// If that type of Mobile Device matches the list provided, the user will be redirected to a chosen URL.
var URL = "example.com";
var Redirect = "mobile-error"

if (isMobile) {
  window.location.replace(`https://${URL}.com/${Redirect}`)
};
