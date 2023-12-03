const enableRareEventsCheckbox = document.getElementById("enable-rare-events");
const randomNameLengthsCheckbox = document.getElementById("do-random");
const maxPairsSlider = document.getElementById("max-pairs");
const maxPairsValue = document.getElementById("max-pairs-value");

maxPairsValue.textContent = maxPairsSlider.value;

maxPairsSlider.addEventListener("input", () => {
  maxPairsValue.textContent = maxPairsSlider.value;
});


const generateBtn = document.getElementById("generate-btn");
    const resultDiv = document.getElementById("result");

    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",
                        "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",
                        "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",
                        "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",
                        "ll","bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
    const vowels = ["a", "e", "i", "o", "u",
                    "a", "e", "i", "o", "u",
                    "a", "e", "i", "o", "u",
                    "a", "e", "i", "o", "u",
                    "a", "e", "i", "o", "u",
                    "a", "e", "i", "o", "u",
                    "a", "e", "i", "o", "u",
                    "a", "e", "i", "o", "u",
                    "y", "ai", "au", "aw", "ay", "ea", "ee", "ei", "eu", "ew", "ey", "ie", "oi", "oo", "ou", "ow", "oy"];

    function getRandomChar(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function generateRandomWord() {
      const word = [];

      let numPairs;
      const rand = Math.random();

      if (enableRareEventsCheckbox.checked) {
        if (rand < 0.001) {
          resultDiv.innerText = "Agemobium";
          return;
        } else if (rand < 0.051) {
          numPairs = 10;
        } else if (rand < 0.061) {
          numPairs = 20;
        } else {
          numPairs = maxPairsSlider.value;
        }
      } else {
        numPairs = maxPairsSlider.value;
      }

      if (randomNameLengthsCheckbox.checked) {
        numPairs = Math.floor(Math.random() * 5) + 1;
      }

      for (let i = 0; i < numPairs; i++) {
        word.push(getRandomChar(consonants));
        word.push(getRandomChar(vowels));
      }

      word.push(getRandomChar(consonants));

      const suffixes = ["ium", "ite","ium","ium","ite","alt","il","ide", "ine", "ose", "ite", "ide", "one", "ene", "ate"];
      const suffix = getRandomChar(suffixes);

      word.push(suffix);

      const capitalizedWord = word.join("").charAt(0).toUpperCase() + word.join("").slice(1);

      resultDiv.innerText = capitalizedWord;

      // generate two random colors
      const color1 = getRandomColor();
      const color2 = getRandomColor();

      // set background gradient to random colors
      document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
    }

    generateBtn.addEventListener("click", generateRandomWord);

    const helpBtn = document.getElementById("help-btn");
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = "Random Element Generator: Press Generate for a new custom element with a unique name. Background changes color to represent the element. Change the controls on the bottom to adjust settings. Have fun exploring!";
    
    helpBtn.appendChild(tooltip);
    
    helpBtn.addEventListener("mouseover", () => {
      tooltip.style.display = "block";
    });
    
    helpBtn.addEventListener("mouseout", () => {
      tooltip.style.display = "none";
    });