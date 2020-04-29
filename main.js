// when nav button is pressed
function handleNavClick() {
  $("a.nav-link").click(function () {
    let section = this.text;
    let lowerCaseSection = section.toLowerCase();
    renderNav(lowerCaseSection);
    renderContent(lowerCaseSection);
    document.querySelector("a.nav-link").scrollIntoView({
      behavior: "smooth",
    });
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
