# Sloefit Shopify Theme

A complete Shopify Online Store 2.0 theme built with best practices.

## 📁 Folder Structure

### `layout/`
**Purpose**: Contains the main theme layout file that wraps all pages.

- **`theme.liquid`**: The main layout file that defines the HTML structure, includes CSS/JS, and renders header/footer sections. This file loads on every page.

### `templates/`
**Purpose**: JSON template files that define which sections appear on each page type.

- **`index.json`**: Homepage template (uses hero + featured-collection sections)
- **`product.json`**: Product page template (uses main-product section)
- **`collection.json`**: Collection listing template (uses main-collection section)
- **`page.json`**: Static page template (uses main-page section)
- **`article.json`**: Blog article template (uses main-article section)
- **`list-collections.json`**: All collections page template
- **`search.json`**: Search results template

**Why JSON templates?** Online Store 2.0 uses JSON templates so merchants can add/remove/reorder sections in the theme editor without touching code.

### `sections/`
**Purpose**: Reusable section files that can be added to any template via the theme editor.

**Core Sections:**
- **`header.liquid`**: Site header with logo, navigation menu, and cart icon
- **`footer.liquid`**: Site footer with links, newsletter signup, and social media
- **`hero.liquid`**: Large banner section for homepage/landing pages
- **`featured-collection.liquid`**: Display products from a selected collection

**Page-Specific Sections:**
- **`main-product.liquid`**: Full product page with images, variants, and add to cart
- **`main-collection.liquid`**: Collection product grid
- **`main-page.liquid`**: Static page content
- **`main-article.liquid`**: Blog article content
- **`main-list-collections.liquid`**: All collections grid
- **`main-search.liquid`**: Search results display

**Each section includes:**
- A `{% schema %}` block at the bottom with customizable settings
- Settings that merchants can adjust in the theme editor (colors, text, images, etc.)
- Clear labels and info text for non-developers

### `snippets/`
**Purpose**: Reusable code components that can be included in sections.

**Product Components:**
- **`product-card.liquid`**: Product card for displaying products in grids
- **`price.liquid`**: Price display with sale badges

**Collection Components:**
- **`collection-card.liquid`**: Collection card for displaying collections

**Icons:**
- **`icon-cart.liquid`**: Shopping cart icon
- **`icon-search.liquid`**: Search icon
- **`icon-account.liquid`**: Account icon
- **`icon-caret.liquid`**: Dropdown caret icon
- **`icon-facebook.liquid`**: Facebook social icon
- **`icon-instagram.liquid`**: Instagram social icon
- **`icon-twitter.liquid`**: Twitter social icon
- **`icon-error.liquid`**: Error message icon
- **`icon-success.liquid`**: Success message icon

**Other:**
- **`meta-tags.liquid`**: SEO meta tags for social sharing

**Why snippets?** Snippets allow you to write code once and reuse it across multiple sections, keeping your code DRY (Don't Repeat Yourself).

### `assets/`
**Purpose**: CSS, JavaScript, and other static assets.

- **`base.css`**: Foundation styles for the entire theme (typography, layout, buttons, cards, etc.)
- **`global.js`**: Core JavaScript functionality (variant selection, cart updates, form handling)

### `config/`
**Purpose**: Theme configuration files.

- **`settings_schema.json`**: Defines all theme settings available in the theme customizer (colors, fonts, layout, buttons, product cards, social media, etc.)

**Why settings_schema.json?** This file creates the theme settings panel in the Shopify admin, allowing merchants to customize the theme without code.

### `locales/`
**Purpose**: Translation files for different languages.

- **`en.default.json`**: English translations for all text strings used in the theme

**Why locales?** Using translation files makes it easy to translate your theme to other languages and keeps all text in one place.

## 🚀 Getting Started

1. **Upload to Shopify:**
   - Zip all theme files
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload zip file"
   - Select your zip file

2. **Customize Your Theme:**
   - Go to Online Store → Themes → Customize
   - Use the theme editor to:
     - Upload your logo
     - Set up navigation menus
     - Customize colors and fonts
     - Add sections to pages
     - Configure product cards and buttons

3. **Set Up Menus:**
   - Go to Online Store → Navigation
   - Create a "Main menu" for the header
   - Create a "Footer" menu for footer links

## 🎨 Customization Guide

### Adding a New Section

1. Create a new file in `sections/` (e.g., `sections/my-custom-section.liquid`)
2. Add your HTML/Liquid code
3. Add a `{% schema %}` block with settings
4. The section will automatically appear in the theme editor

### Modifying Colors

1. Go to Theme Customizer → Theme Settings → Colors
2. Adjust color values
3. Changes apply site-wide via CSS variables

### Adding a New Snippet

1. Create a new file in `snippets/` (e.g., `snippets/my-snippet.liquid`)
2. Include it in sections using: `{% render 'my-snippet' %}`

## 📝 Best Practices

- **Always use sections** for content that merchants should be able to add/remove
- **Use snippets** for reusable components
- **Include clear schemas** with helpful labels and info text
- **Use CSS variables** for colors (defined in theme.liquid)
- **Test on mobile** - all sections should be responsive
- **Use semantic HTML** for accessibility

## 🔧 Development Tips

- Use `{% schema %}` in every section for theme editor integration
- Use `{% render %}` to include snippets
- Use `{{ section.settings.setting_name }}` to access section settings
- Use `{{ settings.setting_name }}` to access global theme settings
- Test sections in the theme editor's "Add section" panel

## 📚 Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Online Store 2.0 Documentation](https://shopify.dev/themes/architecture)
- [Liquid Documentation](https://shopify.dev/api/liquid)

