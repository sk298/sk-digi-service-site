

///expend of sub services tab///
const servicesData = {
  website: [
    "Website",
    "Private Sites",
    "Business Sites"
  ],
  graphic: [
    "Graphic Designs",
    "Social Media Posts",
    "Business Card Designs",
    "Promotion Banners",
    "Advertise Designs",
    "Visiting Card Designs",
    "Cover Page Designs",
    "Type Settings",
    "Logo Designs",
    "Brochure Designs",
    "Brand Designs",
    "Leaflet Designs",
    "Customize Designs"
  ],
  forms: [
    "Any Customized Forms"
  ],
  promotion: [
    "Business Posts",
    "Business Cards",
    "Visiting Cards",
    "Business Portfolios",
    "Office Wall Designs"
  ],
  typesettings: [
    "Tamil Language Typing",
    "English Language Typing",
    "Sinhala Language Typing"
  ]
};

const serviceButtons = document.querySelectorAll('.service-btn');
const subServicesDiv = document.getElementById('sub-services');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    serviceButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    // Get selected service key
    const key = button.getAttribute('data-service');

    // Build sub-services list HTML
    const subs = servicesData[key];
    let html = `<h2>${button.textContent} </h2>`;
    if (subs && subs.length > 0) {
      html += '<ul>';
      subs.forEach(item => {
        html += `<li>${item}</li>`;
      });
      html += '</ul>';
    } else {
      html += '<p>No sub-services listed.</p>';
    }

    // Update the sub-services div content
    subServicesDiv.innerHTML = html;
  });
});


// Lightbox script for gallery images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    captionText.textContent = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
