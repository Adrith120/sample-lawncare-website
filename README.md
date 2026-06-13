# Sample Lawncare

Sample Lawncare is a beginner-friendly static website for a fictional local lawn care company. It uses only plain HTML, CSS, and JavaScript, so it can be hosted easily on GitHub Pages.

This project uses fictional business information for practice only.

## Files Included

- `index.html` - Home page with a hero section, service cards, and a short reasons-to-choose section.
- `about.html` - About page with mission copy, service summary, and a CSS-only visual card.
- `contact.html` - Contact page with contact details, copy-phone button, and a sample contact form.
- `styles.css` - Shared styling for layout, colors, buttons, cards, forms, and responsive behavior.
- `script.js` - Shared JavaScript for the mobile menu, copy-phone feature, and contact form validation.
- `README.md` - Project notes and setup instructions.

## How to Open Locally

1. Open the project folder on your computer.
2. Double-click `index.html`.
3. The website should open in your browser.

You can also right-click `index.html` and choose your preferred browser.

## How to Host on GitHub Pages

1. Create a new GitHub repository.
2. Upload these project files to the repository.
3. In the repository, go to **Settings**.
4. Open the **Pages** section.
5. Choose the branch that contains the files, usually `main`.
6. Choose the root folder as the publishing source.
7. Save the settings and wait for GitHub to publish the site.

GitHub will provide a website link once publishing is ready.

## How to Customize the Website

### Change the Business Name

Search for `Sample Lawncare` in the HTML files and replace it with your new business name. Also update the title and description text in each page's `<head>` section.

### Change the Phone Number

Search for `(555) 123-4567` and replace it with the new display number. Also update the `tel:+15551234567` links so they match the new number.

### Change the Services

The three services appear on the home page and about page:

- Lawn Mowing
- Yard Cleanup
- Hedge Trimming

Edit the service headings and descriptions in `index.html`, then update the service list in `about.html`.

### Change the Colors

Open `styles.css` and look near the top for the `:root` section. The main color variables are:

- `--color-green`
- `--color-green-dark`
- `--color-green-light`
- `--color-green-soft`
- `--color-gray-dark`

Change those values to adjust the color palette across the whole website.
