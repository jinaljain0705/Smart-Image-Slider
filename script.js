let slides = [
  { img: "https://picsum.photos/id/1015/400/250", caption: "Beautiful Sunset" },
  { img: "https://picsum.photos/id/1016/400/250", caption: "Mountain View" },
  { img: "https://picsum.photos/id/1018/400/250", caption: "Calm Lake" },
];

let currentIndex = 0;
let autoPlayInterval;

const showSlide = (index) => {
  if (index >= 0 && index < slides.length) {
    document.getElementById("slide-img").src = slides[index].img;
    document.getElementById("caption").textContent = `${slides[index].caption}`;
    document.getElementById("counter").textContent = `Slide ${index + 1} of ${
      slides.length
    }`;
    document.getElementById("message").textContent = "";
  }
};

const nextSlide = () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  } else {
    document.getElementById("message").textContent = "This is the last slide";
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  } else {
    document.getElementById("message").textContent = "This is the first slide";
  }
};

const addSlide = () => {
  const imgUrl = document.getElementById("img-url").value;
  const imgCaption = document.getElementById("img-caption").value;

  if (imgUrl && imgCaption) {
    slides.push({ img: imgUrl, caption: imgCaption });
    document.getElementById("img-url").value = "";
    document.getElementById("img-caption").value = "";
    showSlide(slides.length - 1);
    currentIndex = slides.length - 1;
  }
};

const startAutoPlay = () => {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }, 3000);
};

const pauseAutoPlay = () => {
  clearInterval(autoPlayInterval);
};

showSlide(currentIndex);

