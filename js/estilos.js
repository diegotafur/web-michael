

  function windowBlurFocus(){
    var focused = true;
    window.onfocus = function() {
        focused = true;
        onFocus();
    };
    window.onblur = function() {
        focused = false;
        onBlur();
    };
  }
  // CHANGE SOMETHING ON EACH STATE
  function onBlur() {
    document.title = "¡Ey! no me olvides";      // NEW TITLE FOR THE PAGE
    //document.body.className = 'blur'; // CHANGE BODY CLASS
  };
  function onFocus(){
    document.title = "Olycarp";     // NEW TITLE FOR THE PAGE
    //document.body.className = 'focus';  // CHANGE BODY CLASS
  };
  // UNIT
  windowBlurFocus();

 
