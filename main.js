// when nav button is pressed
function handleNavClick() {
  $("a.nav-link").click(function() {
    let section = this.text
    let lowerCaseSection = section.toLowerCase();
    renderNav();
    renderContent(lowerCaseSection);
  })
}

function renderContent(section) {
  $(".section-container").addClass("hidden")
  $(`#${section}`).removeClass("hidden");
}

function renderNav() {
// remove all other nav button effects
// add nav button effect to pressed button
}

function startNav() {
  handleNavClick();
}

$(startNav);
