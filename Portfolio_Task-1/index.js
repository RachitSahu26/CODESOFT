const colors = [
    '#3498db', // Blue
    '#e74c3c', // Red
    '#27ae60', // Green
    '#f1c40f', // Yellow
    '#9b59b6', // Purple
    '#34495e', // Dark Blue
    '#e67e22', // Orange
    '#2ecc71', // Light Green
    '#e74c3c', // Light Red
    '#16a085'  // Teal
];

let detailAnimated = document.getElementsByClassName("Detail-box");


// Function to change the background color automatically
function changeColors() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    for (let i = 0; i < detailAnimated.length; i++) {
        detailAnimated[i].style.backgroundColor = randomColor;
    }

   


}

setInterval(changeColors, 3000);










const detailBoxes = document.querySelectorAll(".Detail-box");

detailBoxes.forEach(detailBox => {
    let h3 = detailBox.querySelector("h3");
    let myDetail = detailBox.querySelector(".my-selft-detail");

    // Hide the content initially using CSS
    myDetail.style.display = "none";

    // Add a click event listener to the h3 element
    h3.addEventListener("click", function (e) {
        // Toggle the display property to show/hide the content for the specific Detail-box
        if (myDetail.style.display === "none") {
         
            myDetail.style.display = "block";

       
        } 
        else {
            myDetail.style.display = "none";


        }










    });
});
