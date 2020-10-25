function showProfilePic(src, target) {
    var fr = new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function (e) { target.src = this.result; };
    src.addEventListener("change", function () {
        // fill fr with image data    
        fr.readAsDataURL(src.files[0]);
    });
}

var src = document.getElementById("profile-pic-input");
var target = document.getElementById("profile-pic");
showProfilePic(src, target);