const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "❤️ Thanks to accept me as your valentines!! Let's plan a date to celebrate ❤️";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGlyem4xMjM1OHowM21oNDhjMnM1cTZ1b3FsdzMxamNoaHk4Zm84biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41JWw65TcBGjPpRK/giphy.gif";
    
    var scalar = 2;
    var unicorn = confetti.shapeFromText({ text: '❤️', scalar });
    
    var defaults = {
        spread: 360,
        ticks: 60,
        gravity: 0,
        decay: 0.96,
        startVelocity: 20,
        shapes: [unicorn],
        scalar
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30
        });
      
        confetti({
          ...defaults,
          particleCount: 5,
          flat: true
        });
      
        confetti({
          ...defaults,
          particleCount: 60,
          scalar: scalar / 2,
          shapes: [unicorn]
        });
      }

      // Hide the No button
      noBtn.style.display = "none";

      setTimeout(shoot, 0);
      var interval = setInterval(function() {
        shoot();
      }, 1000);

    
    
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Make the No button move randomly on hover
noBtn.addEventListener("click", () => {
    noBtn.style.position = "absolute";
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
