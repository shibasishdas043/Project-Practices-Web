const socialMedia = document.querySelector(".social-media");

const commentButton = document.querySelector("#comment-section");

const commentSectionForm = document.querySelector("#comment-section-form");

const commentInput = document.querySelector("#comment-input");

const commentSendButton = document.querySelector("#comment-send-btn");

commentButton.addEventListener("click", () => {
  // if (commentSectionForm.classList.contains("hidden")) {
  //   commentSectionForm.classList.remove("hidden");
  // } else {
  //   commentSectionForm.classList.add("hidden");
  // }
  commentSectionForm.classList.toggle("hidden");
});

// const renderComments = document.createElement("div");
// renderComments.classList.add("comments-render");

// const extractedComment = document.createElement("span");
// extractedComment.classList.add("comments");

// const commentRemoveButton = document.createElement("button");
// commentRemoveButton.id = "remove-comment";

// console.log(renderComments);

// const renderComments = document.createElement("div");
// renderComments.classList.add("comments-render");
//
// const extractedComment = document.createElement("span");
// extractedComment.classList.add("comments");
//
// const commentRemoveButton = document.createElement("button");
// commentRemoveButton.id = "remove-comment";
//
// const removeCommentImage = document.createElement("img");
// removeCommentImage.src = "./icons_img/removeBtn.svg";
// removeCommentImage.alt = "Remove-Comment-Img";
// removeCommentImage.id = "remove-comment-img";

function add_new_comment(comments) {
  const renderComments = document.createElement("div");
  renderComments.classList.add("comments-render");

  const extractedComment = document.createElement("span");
  extractedComment.classList.add("comments");

  const commentRemoveButton = document.createElement("button");
  commentRemoveButton.id = "remove-comment";

  const removeCommentImage = document.createElement("img");
  removeCommentImage.src = "./icons_img/removeBtn.svg";
  removeCommentImage.alt = "Remove-Comment-Img";
  removeCommentImage.id = "remove-comment-img";

  extractedComment.innerText = comments;

  renderComments.appendChild(extractedComment);
  renderComments.appendChild(commentRemoveButton);
  commentRemoveButton.appendChild(removeCommentImage);
  socialMedia.appendChild(renderComments);
}

commentSendButton.addEventListener("click", (event) => {
  event.preventDefault();

  const comments = commentInput.value.trim();

  if (!comments) {
    commentSectionForm.classList.add("hidden");
    return;
  }
  add_new_comment(comments);

  commentSectionForm.classList.add("hidden");
  
  commentInput.value = "";
});
