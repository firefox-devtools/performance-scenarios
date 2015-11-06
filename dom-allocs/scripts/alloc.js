var toolbarButtonCount = 20;
var toolbarCount = 200;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createToolbarButton() {
  var toolbarButton = document.createElement("span");
  toolbarButton.classList.add("toolbarbutton");
  // stop Spidermonkey from sharing instances
  toolbarButton[getRandomInt(0,5000)] = "foo";
  return toolbarButton;
}

function createToolbar() {
  var toolbar = document.createElement("div");
  // stop Spidermonkey from sharing instances
  toolbar[getRandomInt(0,5000)] = "foo";
  for (var i = 0; i < toolbarButtonCount; i++) {
    var toolbarButton = createToolbarButton();
    toolbar.appendChild(toolbarButton);
  }
  return toolbar;
}

function createToolbars() {
  var container = document.getElementById("container");
  for (var i = 0; i < toolbarCount; i++) {
    var toolbar = createToolbar();
    container.appendChild(toolbar);
  }
}

createToolbars();
