// when nav button is pressed
function handleNavClick() {
  $("a.nav-link").click(function () {
    let section = this.text;
    let lowerCaseSection = section.toLowerCase();
    renderNav(lowerCaseSection);
    renderContent(lowerCaseSection);
    if (lowerCaseSection === "projects") {
      document
        .querySelector("a.nav-link")
        .scrollIntoView({ block: "start", inline: "nearest" });
    }
    if (lowerCaseSection === "about") {
      window.scrollTo(0, 0);
    }
  });
}

function renderContent(section) {
  $(".section-container").addClass("hidden");
  $(".section-container").removeClass("show");
  $(`#${section}`).removeClass("hidden");
  $(`#${section}`).addClass("show");
}

function renderNav(section) {
  $("a.nav-link").removeClass("selected");
  $(`#${section}-button`).addClass("selected");
  // remove all other nav button effects
  // add nav button effect to pressed button
}

function startNav() {
  handleNavClick();
}

$(startNav);
