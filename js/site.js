(function () {
  var menuButton = document.querySelector("[data-menu-open]");
  var menu = document.querySelector("#site-menu");

  if (menuButton && menu && typeof menu.showModal === "function") {
    menuButton.addEventListener("click", function () {
      menu.showModal();
    });

    menu.addEventListener("click", function (event) {
      if (event.target === menu) menu.close();
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.close();
      });
    });
  }

  document.querySelectorAll("form[data-preview='true']").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector("[data-status]");
      if (!status) return;
      status.hidden = false;
      status.textContent =
        "This preview form is not connected to the shop yet. Email josh@revolutionworks.net or call 612-886-2338. What you typed is still on the page if you want to copy it into that email.";
      status.focus();
    });
  });

  var video = document.querySelector("[data-shop-video]");
  if (!video) return;

  var toggle = document.querySelector("[data-video-toggle]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wide = window.matchMedia("(min-width: 960px)").matches;

  function setLabel() {
    if (!toggle) return;
    var paused = video.paused;
    toggle.textContent = paused ? "Play clip" : "Pause clip";
    toggle.setAttribute("aria-pressed", paused ? "false" : "true");
  }

  if (!reduce && wide) {
    video.muted = true;
    var attempt = video.play();
    if (attempt && typeof attempt.catch === "function") attempt.catch(function () {});
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (video.paused) {
        video.muted = true;
        video.play();
      } else {
        video.pause();
      }
    });
  }

  video.addEventListener("play", setLabel);
  video.addEventListener("pause", setLabel);
  setLabel();
})();
