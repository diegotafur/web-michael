

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
    document.title = "No te olvides de mi";      // NEW TITLE FOR THE PAGE
    //document.body.className = 'blur'; // CHANGE BODY CLASS
  };
  function onFocus(){
    document.title = "Policarp";     // NEW TITLE FOR THE PAGE
    //document.body.className = 'focus';  // CHANGE BODY CLASS
  };
  // UNIT
  windowBlurFocus();

 
