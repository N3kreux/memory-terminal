function bootSequence() {
  const bootText = document.getElementById('boot-text');
  let i = 0;
  const message = "> Initializing System...\n> Scanning Device...\n> Checking Identity...\n> Accessing Memory Core...\n> Ready!";
  
  const interval = setInterval(() => {
    bootText.textContent += message[i];
    i++;
    if (i >= message.length) {
      clearInterval(interval);
      
      // Show the confirm button after boot
      document.getElementById('button-icon').style.display = 'block';
    }
  }, 50);
}
