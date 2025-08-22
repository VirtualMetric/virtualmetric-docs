export function persistDetailsState() {
  if (typeof window === 'undefined') return;

  const initializeDetailsState = () => {
    console.log('Initializing details persistence...');
    
    // For React Details components, we need to look for the actual rendered elements
    const detailsElements = document.querySelectorAll('[class*="details"], .details, details');
    console.log(`Found ${detailsElements.length} potential details elements`);

    detailsElements.forEach((element, index) => {
      // Try to find the summary element within
      const summaryElement = element.querySelector('summary, [class*="summary"]');
      const summary = summaryElement?.textContent?.trim() || element.textContent?.substring(0, 50) || '';
      
      const pageKey = window.location.pathname;
      const key = `details-${pageKey}-${summary.substring(0, 30)}-${index}`;

      console.log(`Processing element: ${key}`);

      // Check if element has 'open' attribute or class
      const isCurrentlyOpen = element.hasAttribute('open') || 
                             element.classList.contains('open') ||
                             element.getAttribute('data-collapsed') === 'false';

      // Restore state
      const savedState = sessionStorage.getItem(key);
      console.log(`Saved state for ${key}: ${savedState}`);
      
      if (savedState === 'true' && !isCurrentlyOpen) {
        // Try different ways to open the element
        if (element.hasAttribute('open')) {
          (element as HTMLDetailsElement).open = true;
        } else if (summaryElement) {
          // Click the summary to open
          (summaryElement as HTMLElement).click();
        }
        console.log(`Attempted to restore open state for ${key}`);
      }

      // Set up event listeners for state changes
      const handleStateChange = () => {
        const isOpen = element.hasAttribute('open') || 
                      element.classList.contains('open') ||
                      element.getAttribute('data-collapsed') === 'false';
        sessionStorage.setItem(key, String(isOpen));
        console.log(`Saved state for ${key}: ${isOpen}`);
      };

      // Listen for various events that might indicate state change
      ['toggle', 'click', 'change'].forEach(eventType => {
        element.removeEventListener(eventType, handleStateChange);
        element.addEventListener(eventType, handleStateChange);
      });

      if (summaryElement) {
        summaryElement.removeEventListener('click', handleStateChange);
        summaryElement.addEventListener('click', handleStateChange);
      }
    });
  };

  // Initialize with multiple attempts
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDetailsState);
  } else {
    initializeDetailsState();
  }

  // Multiple timeouts to catch dynamically rendered content
  [100, 300, 500, 1000].forEach(delay => {
    setTimeout(initializeDetailsState, delay);
  });
}
