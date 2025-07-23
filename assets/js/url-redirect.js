/**
 * URL Redirect Handler for Trailing Slashes
 * Automatically redirects URLs with trailing slashes to URLs without trailing slashes
 * This prevents 404 errors and improves SEO by maintaining consistent URL structure
 */

(function() {
  'use strict';
  
  // Get current URL components
  var currentPath = window.location.pathname;
  var currentSearch = window.location.search;
  var currentHash = window.location.hash;
  
  // Check if URL ends with trailing slash (but not root path)
  if (currentPath.length > 1 && currentPath.endsWith('/')) {
    // Remove trailing slash
    var newPath = currentPath.slice(0, -1);
    
    // Construct new URL without trailing slash
    var newUrl = window.location.protocol + '//' + 
                 window.location.host + 
                 newPath + 
                 currentSearch + 
                 currentHash;
    
    // Redirect using replace to avoid adding to browser history
    window.location.replace(newUrl);
  }
})();
