// NATHAN SHIRLEY (nes2ta) and JT Graass (jtg4de)
// enables user to click to decrease value of a Guru's ranking
downvoteVanilla = (id) => {
  targetID = "previewScore-" + id;
  var score = document.getElementById(targetID);
  score = score.textContent;
  score = parseInt(score) - 1;
  console.log(targetID);
  document.getElementById(targetID).innerHTML = score;
};
// enables user to click to increase value of a Guru's ranking
upvoteVanilla = (id) => {
  targetID = "previewScore-" + id;
  var score = document.getElementById(targetID);
  score = score.textContent;
  score = parseInt(score) + 1;
  console.log(targetID);
  document.getElementById(targetID).innerHTML = score;
};
// enables user to submit a comment on a Guru's page
checkCommentVanilla = () => {
  var comment = document.getElementById("commentTextArea").value;
  var errorMsg;
  if (comment.length > 0) {
    errorMsg = "";
    return comment;
  } else {
    errorMsg = "Type a comment.";
  }
  document.getElementById("commentError").innerHTML = errorMsg;
};
// enables user to submit a comment on a Guru's page
showCommentVanilla = (user, comment) => {
  if (comment.length > 0) {
    html =
      '<div class="comment-loop"><div class="comment-card"><div class="row comment-card-row user-row"><div class="comment-user">' +
      user +
      '</div></div><div class="row comment-card-row"><div class="comment">' +
      comment +
      "</div></div></div></div>";
    document.getElementById("recentComment").innerHTML =
      html + document.getElementById("recentComment").innerHTML;
    document.getElementById("commentTextArea").value = "";
    return true;
  } else return false;
};
// allows user to see how their submitted Guru's card would appear
previewGooVanilla = () => {
  var displayName = document.getElementById("displayName").value;
  var category = document.getElementById("category").value;
  var description = document.getElementById("description").value;
  //var youtube = document.getElementById("youtube").value;
  var otherLink = document.getElementById("link").value;
  console.log(otherLink);
  var isValid = checkAddInput(displayName, category, description, otherLink);
  if (isValid) {
    var htmlLeft =
      '<div class="card-wrap goo-loop"><div class="row goo-preview-card align-self-center"><div class="col-3 no-gutters preview-card-left"><div class="preview-card-left-content"><img src="../assets/pics/default-hand.png" alt="new guru" class="preview-card-avatar"/><div class="preview-card-score">&#8595;000&#8593;</div></div></div>';
    var htmlRight =
      '<div class="col-9 no-gutters preview-card-right"><div><div class="preview-card-right-header"><span class="preview-card-name name-select">' +
      displayName +
      '</span><span class="preview-card-category">' +
      category +
      '</span></div><p class="preview-card-description">' +
      description +
      '</p></div><div class="icon-row"><div class="icons"><span class="icon-span"><a href="' +
      //youtube +
      //'" target="_blank"><img src="../assets/icons/youtube1.png"alt="YouTube"class="icon"/></a></span><span class="icon-span"><a href="' +
      otherLink +
      '" target="_blank"><img src="../assets/icons/link.png"alt="website"class="icon-link"/></a></span></div></div></div></div></div>';
    document.getElementById("preview").innerHTML = htmlLeft + htmlRight;
    window.scrollTo(0, 10000);
  } else {
    document.getElementById("preview").innerHTML = "";
  }
};
// creates another Guru card for review
submitGooVanilla = () => {
  var displayName = document.getElementById("displayName").value;
  var category = document.getElementById("category").value;
  var description = document.getElementById("description").value;
  //var youtube = document.getElementById("youtube").value;
  var otherLink = document.getElementById("link").value;
  var isValid = checkAddInput(
    displayName,
    category,
    description,
    //youtube,
    otherLink
  );
  if (isValid) {
    let formData = [displayName, category, description, otherLink];
    document.getElementById("displayName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    //document.getElementById("youtube").value = "";
    document.getElementById("link").value = "";
    document.getElementById("preview").innerHTML =
      "Thank you for your submission. We look forward to reviewing it.";
    return formData;
  }
};
// checks the validity of a user's submitted Guru
checkAddInput = (displayName, category, description, otherLink) => {
  isValid = true;
  if (displayName.length < 1) {
    isValid = false;
    document.getElementById("name_error").innerHTML = "Add a name.";
  } else {
    document.getElementById("name_error").innerHTML = "";
  }
  if (category === "") {
    isValid = false;
    document.getElementById("category_error").innerHTML = "Select a category.";
  } else {
    document.getElementById("category_error").innerHTML = "";
  }
  if (description.length < 30) {
    isValid = false;
    document.getElementById("description_error").innerHTML =
      "Description must be 30 characters.";
  } else {
    document.getElementById("description_error").innerHTML = "";
  }
  /*   var checkYoutube = function (youtube) {
    var pattern = new RegExp("(?:https?://)?(?:www.)?youtube.com/.*");
    var checkPattern = pattern.test(youtube);
    return checkPattern;
  };
  if (!checkYoutube(youtube)) {
    isValid = false;
    document.getElementById("youtube_error").innerHTML =
      "Paste full youtube link, e.g., www.youtube.com/dropshipking";
    console.log(checkYoutube(youtube));
  } else {
    document.getElementById("youtube_error").innerHTML = "";
  } */
  if (otherLink.length < 1) {
    isValid = false;
    document.getElementById("otherLink_error").innerHTML =
      "Other link required.";
  } else {
    document.getElementById("otherLink_error").innerHTML = "";
  }
  return isValid;
};
// event listener for submitting comments on a Guru
addCommentListener = () => {
  document
    .getElementById("submitComment")
    .addEventListener("click", submitCommentVanilla);
};
