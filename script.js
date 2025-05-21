
  document.querySelectorAll('.sec2-product-card').forEach(card => {
    const img = card.querySelector('.sec2-product-img');
    const dots = card.querySelectorAll('.sec2-color-dot');

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        // Update image
        const newSrc = dot.getAttribute('data-img');
        img.src = newSrc;

        // Update active dot styling
        dots.forEach(d => d.classList.remove('sec2-color-selected'));
        dot.classList.add('sec2-color-selected');
      });
    });
  });


  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
  }



