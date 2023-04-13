var canSend = true
$(function () {
    window.addEventListener("message", function (event) {
      var data = event.data;
  
      if (data.action == "show") {
        $("body").removeClass("isDisable")
      }
      if (data.action == "hide") {
        $("body").addClass("isDisable")
        $("#textToRead").val("")
      }
    });
  
    $(document).ready(function () {
    });

    document.onkeyup = function (data) {
        if (data.key == "Esc" || data.key == "Escape") {
            $.post("http://pth_sign_lang/closeAll", JSON.stringify({}), function (datab) {
            });
        }
      };
  });

  function sendTextToRead(){
    var text = $("#textToRead").val()

    if(text && canSend){
        canSend = true
        $.post("http://pth_sign_lang/ReadText", JSON.stringify(text), function (datab) {
            canSend = true
        });
    }
  }