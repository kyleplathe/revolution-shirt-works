# Revolution Shirt Works

Static marketing preview for Revolution Shirt Works (legal entity Revolution Screen Works, LLC), a screen printing shop in Brooklyn Center, Minnesota.

The current catalog and ordering stay on the InkSoft storefront at [revolutionworks.net](https://revolutionworks.net). This site is the front door for limited drops and custom quotes.

## Public preview

https://revolution-shirt-works.kyleplathe.workers.dev

Workers Builds deploys this repository to the `revolution-shirt-works` Worker. The `name` in `wrangler.jsonc` has to match that Worker, and the file needs a `previews` block, or the build fails. Pushes to `main` publish the Worker above. Other branches get a preview URL. A browser may have to clear a short Cloudflare security check. Pages stay `noindex`.

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
- Print spec: how many screens, and the exact ink colors. The hoodie and tote photos show an orange sun, teal, and a cream skyline. That is not a confirmed ink formula.
- The tee is the same print. There is no separate tee photograph.
- Turnaround. No number of days is published.
- PVC- and phthalate-free inks. Confirm the ink still on press. No brand or certification is named.
- Embroidery. The Instagram bio lists it. Garments and minimums are not confirmed.
- Team and fundraiser stores: how a store is opened, and what the shop keeps versus the organizer.
- Shop hours. Not posted.
- ZIP 55430, taken from the current website footer.
- Which email should receive quotes.

## Assets

- `assets/wordmark.svg` — Revolution Shirt Works wordmark, used as a CSS mask in the header and footer
- `favicon.svg` — typographic “RS” mark
- `assets/og.svg` and `assets/og.jpg` — share image, 1200×630
- `assets/hoodie.webp` and `assets/tote.webp` — Stone Arch garment photos
- `assets/squeegee.mp4` — squeegee-pull clip (no audio), with `assets/squeegee-poster.jpg`
