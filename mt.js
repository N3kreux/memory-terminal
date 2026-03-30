function bootSequence() {
  const bootText = document.getElementById('boot-text');
  const bootLines = [
    "> Initializing System...",
    "> Scanning Device...",
    "> Checking Identity...",
    "> Accessing Memory Core...",
    "> Ready!"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = "";

  const speed = 50; // typing speed in ms

  function typeLine() {
    if (lineIndex < bootLines.length) {
      const line = bootLines[lineIndex];
      if (charIndex < line.length) {
        currentLine += line.charAt(charIndex);
        bootText.innerHTML = currentLine; // use innerHTML for adding <br>
        charIndex++;
        setTimeout(typeLine, speed);
      } else {
        // finished line → add line break
        currentLine += "<br>";
        bootText.innerHTML = currentLine;
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 500); // small pause between lines
      }
    } else {
      // Boot finished → show confirm button
      document.getElementById('confirm-button').style.display = "block";
    }
  }

  typeLine();
}

// Start sequence after DOM loads
document.addEventListener('DOMContentLoaded', bootSequence);