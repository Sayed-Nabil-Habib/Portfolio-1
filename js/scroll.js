const cardContainers = document.querySelectorAll(".container");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  cardContainers.forEach((container) => {
    if (isInViewport(container)) {
      container.classList.add("animate-fade-in");
    }
  });
}

window.addEventListener("scroll", handleScroll);
