(function(){
  "use strict";
  var inputs, inputName;
  window.onload = function(){
    if (typeof(Storage)!=="undefined") {
      inputs = document.querySelectorAll("input,textarea");
  
      for (var i = inputs.length - 1; i >= 0; i--){
        inputName = inputs[i].name;
        if (sessionStorage[inputName] !== undefined && inputs[i].name !== "") {
          inputs[i].value = sessionStorage[inputName];
        }
      };
      document.onkeyup = function(event){
        for (var i = inputs.length - 1; i >= 0; i--){
          inputName = inputs[i].name;
          if (inputs[i].name !== "") {
            sessionStorage[inputName] = inputs[i].value;
          }
        };
      };
    };
  }
})();