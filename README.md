# 💻 Mini Project: Smart Image Slider
📝 Project Definition
 📌 Title: Smart Image Slider
 💡 Objective:
To build a JavaScript-based image slider application where images slide one by one using arrays and objects. The user can navigate using Next/Prev buttons. The project uses ES6 features, loops, condition statements, functions, and array/object manipulation.

🧩 Project Flow (Tasks)
📋 Store Questions in Array of Objects
Each image is an object with:
{
  	img: "images/pic1.jpg",
  	caption: "Beautiful Sunset"
}
All images stored inside an array.

⏩ Slider Navigation System
Use a variable currentIndex to track which image is being displayed.
User can press:
Next → Show next image (if available).
Prev → Show previous image (if not first).
Use condition statements to check array boundaries.
If user is on the last slide and presses Next, show a message: "This is the last slide".
If user is on the first slide and presses Prev, show a message: "This is the first slide".

✅ Image Display Function
Function showSlide(index) → Displays image and caption in DOM (<img> + <p>).
Use template literals for captions.
Update DOM dynamically using document.getElementById().

🏁 Extra User Input Feature
Allow users to add their own image + caption through input fields.
Push the new object into the image array.
Refresh slider to include the new slide.

🎨 Extra User Input Feature
Auto-play mode: Image changes every 3 seconds using setInterval().
Pause/Resume buttons for controlling the slideshow.
Slide Counter → e.g., Slide 2 of 5.

💡 Example Output (Console):
Slide 1: Beautiful Sunset
[Image Displayed]

Slide 2: Mountain View
[Image Displayed]

Message: This is the last slide.
 
📚 JavaScript Concepts Covered:
Arrays → Store all image objects
Objects → Each image has fields (img, caption)
Loops → Optional auto-play, generating slides
Functions → For navigation, display, and input handling
ES6 Features → let, const, arrow functions, template literals, for...of
Condition Statements → To check navigation and boundary messages
DOM Manipulation → Updating <img> and <p> dynamically

Output:
![ImageSlider](https://github.com/jinaljain0705/Smart-Image-Slider/blob/main/Output/ImageSlider.png)
