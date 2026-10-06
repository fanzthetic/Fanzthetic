
    alert("Welcome to Fanzthetic - Where Every Photo Tells a Story");

document.getElementById("photoInput").addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (file) {

        const image = document.createElement("img");

        image.src = URL.createObjectURL(file);

        image.style.width = "250px";
        image.style.height = "250px";
        image.style.objectFit = "cover";
        image.style.borderRadius = "18px";
        image.style.margin = "20px";

        document.getElementById("preview").appendChild(image);
    }

});



