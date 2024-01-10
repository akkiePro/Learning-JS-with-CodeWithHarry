// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with SRC: " + src)
    callback(null, src);
  }
  script.onerror = function () {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

// callback hell / Pyramid of doom
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
  if (error) {
    console.log(error)
    sendEmergencyMessageToCeo();
    return
  }
  loadScript("https://cdn.jsdelivr2.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
      return
    }
    loadScript("https://cdn.jsdelivr3.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
      if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
      }
      loadScript("https://cdn.jsdelivr4.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
        if (error) {
          console.log(error)
          sendEmergencyMessageToCeo();
          return
        }
        loadScript("https://cdn.jsdelivr5.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
          if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
          }
        });
      });
    });
  });
});