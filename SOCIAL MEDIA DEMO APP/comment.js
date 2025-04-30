const socialMedia = document.querySelector(".social-media");

const commentButton = document.querySelector("#comment-section");

const commentSectionForm = document.querySelector("#comment-section-form");

const commentInput = document.querySelector("#comment-input");

const commentSendButton = document.querySelector("#comment-send-btn");

commentButton.addEventListener("click", () => {
  if (commentSectionForm.classList.contains("hidden")) {
    commentSectionForm.classList.remove("hidden");
  } else {
    commentSectionForm.classList.add("hidden");
  }
});

const renderComments = document.createElement("div");
renderComments.classList.add("comments-render");

const extractedComment = document.createElement("p");
extractedComment.classList.add("comments");
renderComments.innerText = "hello";

const commentRemoveButton = document.createElement("button");
commentRemoveButton.id = "remove-comment";

console.log(renderComments);

commentSendButton.addEventListener("click", (event) => {
  // let comments = commentInput.value.trim();
  // if(!comments) return;
    event.preventDefault();
    renderComments.appendChild(extractedComment);
    renderComments.appendChild(commentRemoveButton);
    socialMedia.appendChild(renderComments);
  // commentSectionForm.classList.remove("hidden");
});
