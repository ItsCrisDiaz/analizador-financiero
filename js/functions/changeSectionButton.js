const changeSectionButton = function (hiddenSectionTrue, hiddenSectionFalse) {
  //Hides the node in the parameter hiddenSectionTrue
  hiddenSectionTrue.hidden = true;

  //Shows the node in the parameter hiddenSectionFalse
  hiddenSectionFalse.hidden = false;

  let pageUrl = `${hiddenSectionFalse.id}.html`;

  let pageTitle = hiddenSectionFalse.querySelector("h2").innerHTML;

  history.pushState({ page_id: 1 }, pageTitle, pageUrl);
  document.title = `${pageTitle}`;
};

export default changeSectionButton;
