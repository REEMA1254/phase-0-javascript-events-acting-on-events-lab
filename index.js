// Your code here
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      const rightNumbers = dodger.style.right.replace("px", "");
      const right = parseInt(leftNumbers, 10);
  
      dodger.style.right = `${left - 1}px`;
    }
  });