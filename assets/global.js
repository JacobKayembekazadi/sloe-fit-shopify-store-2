/**
 * Global JavaScript for Shopify Theme
 * Location: assets/global.js
 * Purpose: Core JavaScript functionality for the theme
 */

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

function initTheme() {
  // Initialize variant selectors
  initVariantSelectors();
  
  // Initialize product forms
  initProductForms();
  
  // Initialize cart functionality
  initCart();

  // Initialize mobile menu
  initMobileMenu();
}

/**
 * Variant Selector Functionality
 * Handles product variant selection and updates
 */
function initVariantSelectors() {
  const variantSelects = document.querySelectorAll('variant-selects');
  
  variantSelects.forEach((variantSelect) => {
    const selects = variantSelect.querySelectorAll('select');
    const productForm = document.getElementById(variantSelect.dataset.section);
    
    selects.forEach((select) => {
      select.addEventListener('change', () => {
        updateVariant(variantSelect);
      });
    });
  });
}

function updateVariant(variantSelect) {
  const selects = variantSelect.querySelectorAll('select');
  const options = Array.from(selects).map((select) => select.value);
  const variants = JSON.parse(variantSelect.querySelector('script').textContent);
  
  const selectedVariant = variants.find((variant) => {
    return variant.options.every((option, index) => option === options[index]);
  });
  
  if (selectedVariant) {
    const form = document.querySelector(`#product-form-${variantSelect.dataset.section}`);
    const input = form.querySelector('input[name="id"]');
    input.value = selectedVariant.id;
    input.disabled = false;
    
    // Update price display
    updatePrice(selectedVariant);
    
    // Update availability
    updateAvailability(selectedVariant, form);
  }
}

function updatePrice(variant) {
  // Price update logic would go here
  // This is a placeholder for price display updates
}

function updateAvailability(variant, form) {
  const submitButton = form.querySelector('button[type="submit"]');
  
  if (variant.available) {
    submitButton.disabled = false;
    submitButton.textContent = window.variantStrings.addToCart;
  } else {
    submitButton.disabled = true;
    submitButton.textContent = window.variantStrings.soldOut;
  }
}

/**
 * Product Form Functionality
 * Handles add to cart form submissions
 */
function initProductForms() {
  const productForms = document.querySelectorAll('product-form');
  
  productForms.forEach((form) => {
    const formElement = form.querySelector('form');
    
    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(formElement);
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const data = await response.json();
        updateCartCount(data.item_count);
        showCartNotification();
      } else {
        alert(window.cartStrings.error);
      }
    });
  });
}

/**
 * Cart Functionality
 * Handles cart updates and display
 */
function initCart() {
  // Cart initialization logic
  updateCartCount();
}

function updateCartCount(count) {
  const cartIcon = document.getElementById('cart-icon-bubble');
  if (cartIcon) {
    const countBubble = cartIcon.querySelector('.cart-count-bubble');
    if (countBubble) {
      countBubble.textContent = count || 0;
    }
  }
}

function showCartNotification() {
  // Cart notification logic would go here
  // This is a placeholder for cart notification display
}

// Export functions for use in other scripts
window.theme = {
  updateVariant,
  updatePrice,
  updateAvailability,
  updateCartCount
};

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
  const toggle = document.querySelector('.header__mobile-menu-toggle');
  const menu = document.querySelector('.header__mobile-menu');
  if (!toggle || !menu) return;

  const panel = menu.querySelector('.header__mobile-menu__panel');
  const overlay = menu.querySelector('.header__mobile-menu__overlay');
  const closeBtn = menu.querySelector('.header__mobile-menu__close');

  function openMenu() {
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

