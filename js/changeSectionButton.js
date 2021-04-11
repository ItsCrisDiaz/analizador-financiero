const changeSectionButton = function (hiddenSectionTrue, hiddenSectionFalse) {
  //Hides the node in the parameter hiddenSectionTrue
  hiddenSectionTrue.hidden = true;

  //Shows the node in the parameter hiddenSectionFalse
  hiddenSectionFalse.hidden = false;

  window.location = `#${hiddenSectionFalse.id}`;
};

export default changeSectionButton;
