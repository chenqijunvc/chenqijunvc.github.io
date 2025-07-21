// Dynamic Background Image Handler
document.addEventListener('DOMContentLoaded', function() {
  const masthead = document.querySelector('.masthead');
  
  if (masthead) {
    const backgroundImage = window.getComputedStyle(masthead).backgroundImage;
    
    // Extract URL from background-image CSS property
    const imageUrl = backgroundImage.slice(4, -1).replace(/"/g, "");
    
    // Test if the image loads successfully
    if (imageUrl && imageUrl !== 'none') {
      const img = new Image();
      
      img.onload = function() {
        // Image loaded successfully, no action needed
        console.log('Background image loaded successfully');
      };
      
      img.onerror = function() {
        // Image failed to load, use fallback
        console.log('Background image failed to load, using fallback');
        masthead.classList.add('fallback-bg');
        masthead.style.backgroundImage = 'url("/img/bg-post.jpg")';
      };
      
      img.src = imageUrl;
    }
  }
  
  // Handle post/page images in featured sections
  const postImages = document.querySelectorAll('.featured-post-card img, .recent-post-card img');
  
  postImages.forEach(img => {
    img.addEventListener('error', function() {
      // Replace failed images with placeholder
      this.style.display = 'none';
      const placeholder = this.parentElement.querySelector('.placeholder-image, .placeholder-image-small');
      if (placeholder) {
        placeholder.style.display = 'flex';
      } else {
        // Create a placeholder if it doesn't exist
        const newPlaceholder = document.createElement('div');
        newPlaceholder.className = 'placeholder-image d-flex align-items-center justify-content-center rounded';
        newPlaceholder.innerHTML = '<i class="fas fa-image fa-2x text-muted"></i>';
        this.parentElement.appendChild(newPlaceholder);
      }
    });
  });
});

// Utility function to get random Unsplash image
function getUnsplashImage(keywords, width = 1600, height = 900) {
  const baseUrl = 'https://source.unsplash.com';
  const size = `${width}x${height}`;
  return `${baseUrl}/${size}/?${keywords}`;
}

// Function to update background dynamically (can be called from other scripts)
function updatePageBackground(keywords) {
  const masthead = document.querySelector('.masthead');
  if (masthead) {
    const newImageUrl = getUnsplashImage(keywords);
    
    // Preload the new image
    const img = new Image();
    img.onload = function() {
      masthead.style.backgroundImage = `url('${newImageUrl}')`;
      masthead.classList.remove('fallback-bg');
    };
    img.onerror = function() {
      masthead.classList.add('fallback-bg');
    };
    img.src = newImageUrl;
  }
}
