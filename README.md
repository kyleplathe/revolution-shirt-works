# Revolution Shirt Works

Static marketing preview for Revolution Shirt Works (legal entity Revolution Screen Works, LLC), a screen printing shop in Brooklyn Center, Minnesota.

The current catalog and ordering stay on the InkSoft storefront at [revolutionworks.net](https://revolutionworks.net). This site is the front door for limited drops and custom quotes.

## Preview locally

From this directory:

```bash
python3 -m http.server 8765
```

Open `http://127.0.0.1:8765/`.

Pages:

- `/` home
- `/drops/` Stone Arch pre-order preview
- `/custom/` screen printing, embroidery, team stores
- `/quote/` quote request

## Before this is public

Every page has `<meta name="robots" content="noindex, follow">`. Remove that tag when the marketing site should be indexed.

`sitemap.xml`, canonical URLs, Open Graph, and LocalBusiness JSON-LD use `https://revolutionworks.net`. Change that origin if the marketing site lives on a different domain. The Open Graph image is `assets/og.jpg` and has to be reachable at the `og:image` URL.

### Connect the forms

Quote and drop-list forms are marked `data-preview="true"` and do not submit anywhere. Each form has `data-formspree="https://formspree.io/f/REPLACE_WITH_FORM_ID"`.

1. Create a form at Formspree and replace `REPLACE_WITH_FORM_ID`.
2. Set the form `action` to that URL and `method` to `POST`.
3. Remove `data-preview="true"`.
4. Confirm which inbox should receive them (`josh@revolutionworks.net`, or another shop address).

The honeypot field is `_gotcha`. Hidden subject lines are set for each form.

## Placeholders for Josh to confirm

- Stone Arch pre-order dates, size runs, blank styles, and prices. None are posted.
- Pickup versus shipping for the drop.
- Hoodie and tote photographs. This preview shows the limited-drop poster (the tee on press) and the flat Stone Arch art. Separate hoodie and tote flat-lays were not in the project files.
- Poster lockup says “Revolution Screenworks.” The site uses **Revolution Shirt Works**.
- “3-color screen print” is the label printed on the sample art.
- Turnaround. No number of days is published.
- PVC- and phthalate-free inks. Confirm the ink still on press. No brand or certification is named.
- Embroidery. The Instagram bio lists it. Garments and minimums are not confirmed.
- Team and fundraiser stores: how a store is opened, and what the shop keeps versus the organizer.
- Shop hours. Not posted.
- ZIP 55430, taken from the current website footer.
- Which email should receive quotes.

## Assets

- `assets/promo.webp` and `assets/og.jpg` — limited-drop poster
- `assets/print.webp` — Stone Arch artwork
- `assets/squeegee.mp4` — squeegee-pull clip (no audio), with `assets/squeegee-poster.jpg`
