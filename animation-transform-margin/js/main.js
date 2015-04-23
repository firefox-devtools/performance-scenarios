
var radioGroup = document.getElementById("radio-group");
var useMargin = document.getElementById("use-margin");
var useTransform = document.getElementById("use-transform");
var container = document.getElementById("container");
var startStopButton = document.getElementById("start-stop");

radioGroup.addEventListener("click", updateTransitionMethod, false);
startStopButton.addEventListener("click", startStop, false);

updateTransitionMethod();

function updateTransitionMethod() {
  if (useMargin.checked) {
    container.classList.remove("use-transform");
    container.classList.add("use-margin");
  }

  else if (useTransform.checked) {
    container.classList.add("use-transform");
    container.classList.remove("use-margin");
  }

}

var started = false;

function startStop() {
  started = !started;
  if (started) {
    container.classList.add("started");
    startStopButton.value = "Stop";
  }
  else {
   container.classList.remove("started");
   startStopButton.value = "Start";
  }
}
