
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordionPanel');
    if  (!activePanel) return;
});

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordionContent");

    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    });

    contents.forEach((content) => {
        content.setAttribute("aria-hidden", true);
    });

    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
    panelToActivate.querySelector(".accordionContent").setAttribute("aria-hidden", false);
}