# GAURANG ENTERPRISES - Official Website

A modern, fast, responsive static website for **GAURANG ENTERPRISES** — dealing in **Government e-Marketplace (GeM)** supplies, **Wholesale**, and **Retail** of:
- **Computer Peripherals & IT Hardware** (Desktops, Printers, UPS, Keyboards, Routers, Cameras)
- **Classroom Whiteboards & Presentation Boards** (Ceramic Magnetic, Green Chalkboards, Notice Boards, Podiums)
- **Tables & Campus Desks** (Dual Student Desks, Computer Lab Workstations, Staff Desks, Almirahs)
- **Chairs & Ergonomic Seating** (Mesh Revolving Chairs, Study Chairs with Pad, Cantilever Visitor Chairs)
- **Smart Classroom Solutions** (Interactive Flat Panels, Short-throw Projectors, Motorized Screens)

Designed with **zero build step** (pure HTML5, Tailwind CSS via CDN, and vanilla modern JavaScript) so it can be hosted instantly on **GitHub Pages** for free.

---

## 🌟 Key Features

1. **GeM Portal Procurement Hub**:
   - GeM Seller ID verification badge & modal (`KT-GEM-2024-X99`).
   - L-1 bidding, direct purchase, and BOQ custom bid guidance for institutional & government buyers.
   - GSTIN and MSME compliance displays for institutional audit trust.

2. **Three Core Business Channels**:
   - **GeM Portal Supplies**: Government tenders, GFR compliance, direct and custom bids.
   - **Bulk Wholesale**: Tiered volume discounts for schools, universities, coaching academies.
   - **Retail Counter**: Walk-in store supply for teachers, students, and home/small offices.

3. **Interactive Product Catalog**:
   - Filter tabs: *All Products, Computer Peripherals, Whiteboards, Tables & Desks, Chairs, Smart Class*.
   - Instant real-time search with zero delay.
   - Specifications, GeM category codes, and ordering scale details.

4. **Dynamic RFQ (Request For Quotation) Basket**:
   - Buyers can click **"Add to RFQ"** on multiple products.
   - Slide-over drawer with item counters and quantity adjusters (`+` / `-`).
   - One-click **"Send Quote List to WhatsApp"** with formatted message.
   - Auto-population into the official RFQ inquiry form.

5. **Turnkey Institutional Package Inquiries**:
   - Pre-bundled solutions for **40-Student Classrooms**, **30-Seater Computer Labs**, and **Administrative Office Suites**.

---

## 🚀 How to Host on GitHub Pages (in 2 Minutes)

Because this website uses pure static files (`index.html`, `style.css`, `products.js`, `app.js`), no Node.js build process is required!

### Step 1: Initialize Git and Push to GitHub
Open your terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Initial commit of GAURANG ENTERPRISES website"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

*(Replace `<YOUR-USERNAME>` and `<YOUR-REPO-NAME>` with your GitHub account details)*

### Step 2: Enable GitHub Pages
1. Go to your repository on [GitHub](https://github.com).
2. Click on **Settings** (top tabs) -> **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait 30–60 seconds. GitHub will provide your live URL (e.g. `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`).

---

## ⚙️ Customization Guide

### 1. Update Contact Details, WhatsApp & GeM Credentials
Open `app.js` and look at lines 12–19:

```javascript
const CONFIG = {
    whatsappNumber: "919876543210", // International format without +
    phoneDisplay: "+91 98765 43210",
    email: "gaurangenterprises.gem@gmail.com",
    gemSellerId: "KT-GEM-2024-X99",
    gstin: "09AAACK1234F1Z5"
};
```
Modify these with your exact contact numbers and registration IDs.

In `index.html`, search for `9876543210` or `gaurangenterprises.gem@gmail.com` to customize any static text references if needed.

### 2. Adding / Editing Products
All products are neatly organized in `products.js`. To add a new product, append an object to the `PRODUCTS` array:

```javascript
{
    id: "comp-07",
    name: "Wireless Presenter Laser Pointer with USB Receiver",
    category: "computers", // 'computers', 'boards', 'tables', 'chairs', or 'smart-class'
    badge: "Faculty Ready",
    gemCategory: "Presentation Devices",
    gemCode: "GeM Cat: 45121520",
    specs: [
        "2.4GHz wireless range up to 100 meters",
        "Bright red laser pointer for whiteboards and projections",
        "Plug and play with Windows, Mac, and Linux"
    ],
    minOrder: "Single unit or batch",
    pricingType: "Retail & GeM",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80"
}
```

---

## 📁 Project Structure

```text
GAURANG ENTERPRISES/
├── index.html        # Main landing page with responsive layouts
├── style.css         # Custom animations, card hover effects & print styles
├── products.js       # Complete product inventory data with specifications
├── app.js            # Live search, catalog filtering, RFQ drawer, WhatsApp triggers
├── .nojekyll         # Disables Jekyll on GitHub Pages for clean static serving
└── README.md         # Deployment & customization guide
```

---

## 📄 License
Custom built for **GAURANG ENTERPRISES**. Free to modify and distribute.
