document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
});

particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ['#000000', '#6A82FB', '#A4EBF3', '#ffe'] },
      // ... more options to customize the look and feel
    },
    // ... other particles.js settings
  });
  