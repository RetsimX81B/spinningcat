 const video = document.getElementById('video');
    const speedDisplay = document.getElementById('speedDisplay');

    document.body.addEventListener('mousemove', e => {
      const x = e.clientX / window.innerWidth;
      let rate = 0.25 + (15.75 * x); 
      rate = Math.max(0.25, Math.min(rate, 16));
      video.playbackRate = rate;
      speedDisplay.textContent = rate.toFixed(2);
    });
