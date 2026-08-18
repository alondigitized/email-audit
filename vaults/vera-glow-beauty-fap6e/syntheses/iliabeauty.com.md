---
kind: synthesis
persona: vera-glow-beauty-fap6e
brand: iliabeauty.com
reactions: 78
through: 2026-08-17T17:02:08.000Z
created_at: 2026-06-15T18:19:01.733Z
updated_at: 2026-08-18T18:18:39.694Z
---

# It looks like the CSS import statements for external fonts in your email are being improperly cut off. To ensure these i

Here’s how you can address this issue:

### 1. **External Stylesheet Method:**

If you have control over a server that can host your CSS file (e.g., `styles.css`), you can reference it in the `<head>` of your email template like so:

```html
<head>
    <link href="https://yourdomain.com/styles.css" rel="stylesheet">
</head>
```

Ensure this external stylesheet includes all necessary font imports and styles.

### 2. **Inline Styles with Base64 Encoding:**

Alternatively, you can embed the fonts directly into your CSS using base64 encoding:

```css
@font-face {
    font-family: 'YourFontName';
    src: url('data:application/x-font-ttf;charset=utf-8;base64,T2Zma...) format('truetype');
}
```

Here’s an example of how to embed a Google Font in your email CSS using base64 encoding:

```css
@font-face {
    font-family: 'Roboto';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAA...);
}
```

You can use tools like [Base64 Encode](https://www.base64encode.org/) to convert your font files into base64 format.

### 3. **Klaviyo/MJML Approach:**

If you’re using Klaviyo, you might want to leverage their built-in support for fonts:

```html
<mjml>
    <mj-body background-color="#ffffff">
        <!-- Your MJML content here -->
        <mj-font name="Roboto" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>
    </mj-body>
</mjml>
```

This approach ensures that Klaviyo handles the font loading for you.

### 4. **Fallback Fonts:**

Ensure your CSS includes fallback fonts to prevent rendering issues:

```css
body {
    font-family: 'Roboto', Arial, sans-serif;
}
```

By addressing these points, you can ensure better compatibility and performance across different email clients while avoiding stripping of external resources.

If you need further assistance or specific code examples for embedding fonts in your Klaviyo/MJML templates, feel free to ask!
