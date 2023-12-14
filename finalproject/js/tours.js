//get all images
let imagesToLoad = document.querySelectorAll("img[data-src]");

//changes the path from data-src to src
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  }
}

//verify if intersection observer is supported
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  //iterate to each imgs
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });

  //load all imgs
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}