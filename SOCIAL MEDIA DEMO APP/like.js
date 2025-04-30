const likeButton = document.getElementById("like-button");

let likeCounter = 0;

likeButton.addEventListener("click", () => {
    likeCounter++;
    
    console.log(likeCounter);
    alert(`Total Likes : ${likeCounter}`);
});