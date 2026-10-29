/* PAWAN BUILDZ — app logic: render, search, filter, PWA install, nav */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") links.classList.remove("open");
  });

  /* ---------- Projects: render + search + filter ---------- */
  var grid = document.getElementById("projectGrid");
  var search = document.getElementById("projectSearch");
  var emptyState = document.getElementById("emptyState");
  var statProjects = document.getElementById("statProjects");
  var activeFilter = "all";
  var data = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];

  statProjects.textContent = data.length;

  function linkBtn(href, label, cls) {
    if (!href || href === "#") {
      return '<span class="link-btn soon" title="Coming soon — add the link in projects.js">' + label + " · soon</span>";
    }
    return '<a class="link-btn ' + cls + '" href="' + href + '" target="_blank" rel="noopener">' + label + "</a>";
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cardHTML(p) {
    var tags = (p.technologies || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    return (
      '<article class="card">' +
      '<div class="card-top"><span class="badge ' + esc(p.status).replace(" ", "-") + '">' + esc(p.status) + '</span>' +
      '<span class="cat">' + esc(p.category) + "</span></div>" +
      "<h3>" + esc(p.title) + "</h3>" +
      "<p>" + esc(p.description) + "</p>" +
      '<div class="tags">' + tags + "</div>" +
      '<div class="card-links">' +
      linkBtn(p.repo, "💻 GitHub Repo", "repo") +
      linkBtn(p.demo, "🚀 Live Demo", "demo") +
      "</div></article>"
    );
  }

  function render() {
    var q = search.value.trim().toLowerCase();
    var shown = data.filter(function (p) {
      var inCat = activeFilter === "all" || p.category === activeFilter;
      if (!inCat) return false;
      if (!q) return true;
      var hay = (p.title + " " + p.description + " " + (p.technologies || []).join(" ") + " " + p.category).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    grid.innerHTML = shown.map(cardHTML).join("");
    emptyState.hidden = shown.length !== 0;
  }

  search.addEventListener("input", render);
  document.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-filter");
      render();
    });
  });
  render();



  /* ---------- PWA: service worker + install prompt ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () { /* offline support optional */ });
    });
  }
  var installBtn = document.getElementById("installBtn");
  var deferred = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    installBtn.hidden = false;
  });
  installBtn.addEventListener("click", function () {
    if (!deferred) return;
    deferred.prompt();
    deferred.userChoice.then(function () { deferred = null; installBtn.hidden = true; });
  });
})();
