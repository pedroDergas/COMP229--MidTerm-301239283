/* created by Pedro da Silva Dergado
File name: app.js
Student’s Name: Pedro da Silva Dergado
StudentID: 301239283
Date: 10/28/2022
*/
(function () {

    function Start() {
        console.log("App Started!");

        // use AJAX to read JSON file

        // Step 1: Create a new XHR object
        let XHR = new XMLHttpRequest();

        // Step 2: Create the request
        XHR.open("GET", "../data/data.json");

        // Step 3: Send the request
        XHR.send();

        // Step 4: create an event listener/handler
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }

    window.addEventListener("load", Start);

})();