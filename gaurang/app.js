/**
 * GAURANG ENTERPRISES - Core Application Logic
 * Zero-dependency, pure vanilla JavaScript for static hosting on GitHub Pages.
 */

// Application State
let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// GAURANG ENTERPRISES Contact Configuration
const CONFIG = {
    whatsappNumber: "919876543210", // International format without +
    phoneDisplay: "+91 98765 43210",
    email: "gaurangenterprises.gem@gmail.com",
    gemSellerId: "KT-GEM-2024-X99",
    gstin: "09AAACK1234F1Z5"
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderProducts();
    updateCartUI();
});

// ---------------- PRODUCT CATALOG RENDERING ----------------

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const emptyState = document.getElementById('no-products');
    if (!grid) return;

    // Filter by Category and Search Query
    const filtered = PRODUCTS.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = !searchQuery || 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.gemCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.gemCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(product => {
        const isInCart = cart.some(c => c.id === product.id);
        
        return `
            <div class="product-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between group">
                <div>
                    <!-- Product Image Container -->
                    <div class="product-img-wrapper h-48 w-full bg-slate-100 relative">
                        <img 
                            src="${product.image}" 
                            alt="${product.name}" 
                            class="w-full h-full object-cover"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=80';"
                        >
                        <!-- Category / Status Badge -->
                        <div class="absolute top-3 left-3 flex flex-col gap-1 items-start">
                            <span class="bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                                ${product.badge}
                            </span>
                        </div>
                        <div class="absolute top-3 right-3">
                            <span class="bg-emerald-900/90 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                                <i class="fa-solid fa-check-circle text-[9px]"></i> GeM Listed
                            </span>
                        </div>
                    </div>

                    <!-- Details Body -->
                    <div class="p-5">
                        <div class="flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-medium">
                            <span class="text-gem-700 font-semibold">${product.gemCategory}</span>
                            <span class="font-mono text-slate-400">${product.gemCode}</span>
                        </div>

                        <h3 class="text-base font-bold text-slate-900 font-display group-hover:text-gem-800 transition leading-snug mb-3">
                            ${product.name}
                        </h3>

                        <!-- Specs list -->
                        <ul class="text-xs space-y-1.5 text-slate-600 mb-4">
                            ${product.specs.slice(0, 3).map(spec => `
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-angle-right text-gem-600 text-[11px] mt-0.5 shrink-0"></i>
                                    <span class="line-clamp-1">${spec}</span>
                                </li>
                            `).join('')}
                        </ul>

                        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                            <span>Order Scale:</span>
                            <span class="font-semibold text-slate-700">${product.minOrder}</span>
                        </div>
                    </div>
                </div>

                <!-- Action Button in Card -->
                <div class="p-5 pt-0">
                    <div class="flex items-center gap-2">
                        <button 
                            onclick="toggleCartItem('${product.id}')" 
                            class="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                                isInCart 
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                                : 'bg-slate-900 text-white hover:bg-gem-800'
                            }"
                        >
                            <i class="fa-solid ${isInCart ? 'fa-circle-check' : 'fa-plus'}"></i>
                            <span>${isInCart ? 'Added to Quote' : 'Add to RFQ'}</span>
                        </button>
                        <button 
                            onclick="quickInquiry('${product.id}')" 
                            class="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200 transition" 
                            title="Chat on WhatsApp for this item"
                        >
                            <i class="fa-brands fa-whatsapp text-base"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ---------------- TAB FILTERING & LIVE SEARCH ----------------

function filterCatalog(category) {
    currentCategory = category;

    // Update Tab Styles
    document.querySelectorAll('.filter-tab').forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    renderProducts();
}

function handleCatalogSearch(query) {
    searchQuery = query.trim();
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) {
        if (searchQuery.length > 0) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
    }
    renderProducts();
}

function clearSearch() {
    searchQuery = '';
    const input = document.getElementById('catalog-search');
    if (input) input.value = '';
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) clearBtn.classList.add('hidden');
    renderProducts();
}

// ---------------- QUOTE CART / RFQ BASKET LOGIC ----------------

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem('gaurang_enterprises_rfq_cart');
        if (saved) {
            cart = JSON.parse(saved);
        }
    } catch (e) {
        console.error("Could not load cart:", e);
        cart = [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem('gaurang_enterprises_rfq_cart', JSON.stringify(cart));
    } catch (e) {
        console.error("Could not save cart:", e);
    }
}

function toggleCartItem(productId) {
    const existingIndex = cart.findIndex(item => item.id === productId);
    const product = PRODUCTS.find(p => p.id === productId);

    if (existingIndex > -1) {
        cart.splice(existingIndex, 1);
        showToast(`Removed "${product.name}" from Quote Basket`, "info");
    } else {
        if (product) {
            cart.push({
                id: product.id,
                name: product.name,
                gemCode: product.gemCode,
                image: product.image,
                qty: 1
            });
            showToast(`Added "${product.name}" to Quote Basket!`, "success");
        }
    }

    saveCartToStorage();
    updateCartUI();
    renderProducts();
}

function updateItemQty(productId, delta) {
    const item = cart.find(c => c.id === productId);
    if (!item) return;

    item.qty = Math.max(1, item.qty + delta);
    saveCartToStorage();
    updateCartUI();
}

function removeItemFromCart(productId) {
    cart = cart.filter(c => c.id !== productId);
    saveCartToStorage();
    updateCartUI();
    renderProducts();
    showToast("Item removed from Quote Basket", "info");
}

function clearCart() {
    cart = [];
    saveCartToStorage();
    updateCartUI();
    renderProducts();
    showToast("Quote Basket cleared", "info");
}

function updateCartUI() {
    // Header Badge Count
    const countBadge = document.getElementById('rfq-count');
    if (countBadge) {
        countBadge.innerText = cart.length;
        if (cart.length > 0) {
            countBadge.classList.add('animate-bounce');
            setTimeout(() => countBadge.classList.remove('animate-bounce'), 1000);
        }
    }

    // Drawer Item Count
    const drawerCount = document.getElementById('drawer-item-count');
    if (drawerCount) drawerCount.innerText = cart.length;

    const drawerContainer = document.getElementById('drawer-items-container');
    const drawerEmpty = document.getElementById('drawer-empty');
    const drawerFooter = document.getElementById('drawer-footer');
    const drawerTotalQty = document.getElementById('drawer-total-qty');

    if (!drawerContainer) return;

    if (cart.length === 0) {
        drawerContainer.innerHTML = '';
        if (drawerEmpty) drawerEmpty.classList.remove('hidden');
        if (drawerFooter) drawerFooter.classList.add('opacity-50', 'pointer-events-none');
        if (drawerTotalQty) drawerTotalQty.innerText = "0 units";
        return;
    }

    if (drawerEmpty) drawerEmpty.classList.add('hidden');
    if (drawerFooter) drawerFooter.classList.remove('opacity-50', 'pointer-events-none');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (drawerTotalQty) drawerTotalQty.innerText = `${totalQty} units`;

    drawerContainer.innerHTML = cart.map(item => `
        <div class="pt-4 first:pt-0 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded-lg border border-slate-200">
                <div>
                    <h4 class="text-xs font-bold text-slate-900 leading-tight line-clamp-1">${item.name}</h4>
                    <p class="text-[11px] text-slate-500 font-mono">${item.gemCode}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <button onclick="updateItemQty('${item.id}', -1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">-</button>
                        <span class="text-xs font-bold text-slate-800 px-1">${item.qty}</span>
                        <button onclick="updateItemQty('${item.id}', 1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">+</button>
                    </div>
                </div>
            </div>
            <button onclick="removeItemFromCart('${item.id}')" class="text-slate-400 hover:text-red-600 p-1" title="Remove">
                <i class="fa-solid fa-trash-can text-sm"></i>
            </button>
        </div>
    `).join('');
}

// ---------------- DRAWER TOGGLE ----------------

function openRFQDrawer() {
    const drawer = document.getElementById('rfq-drawer');
    if (drawer) {
        drawer.classList.add('open');
        document.body.classList.add('overflow-hidden');
    }
}

function closeRFQDrawer() {
    const drawer = document.getElementById('rfq-drawer');
    if (drawer) {
        drawer.classList.remove('open');
        document.body.classList.remove('overflow-hidden');
    }
}

// ---------------- WHATSAPP / RFQ INTEGRATIONS ----------------

function sendCartToWhatsApp() {
    if (cart.length === 0) {
        showToast("Your quote basket is empty! Please add products first.", "warning");
        return;
    }

    let text = `*OFFICIAL QUOTATION REQUEST - GAURANG ENTERPRISES*\n`;
    text += `Hello, we would like to request official pricing & GeM procurement availability for the following items:\n\n`;

    cart.forEach((item, index) => {
        text += `${index + 1}. *${item.name}*\n   - Quantity: ${item.qty} Unit(s)\n   - ${item.gemCode}\n\n`;
    });

    const totalUnits = cart.reduce((acc, curr) => acc + curr.qty, 0);
    text += `*Total Units:* ${totalUnits}\n`;
    text += `*Procurement Channel:* GeM Portal / Wholesale Bulk\n`;
    text += `Please send the GST inclusive quotation & lead time at your earliest.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
}

function quickInquiry(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let text = `*PRODUCT INQUIRY - GAURANG ENTERPRISES*\n`;
    text += `Hello, I am interested in:\n`;
    text += `*${product.name}*\n`;
    text += `GeM Specification: ${product.gemCode}\n`;
    text += `Category: ${product.gemCategory}\n\n`;
    text += `Please share current price slabs, GeM catalog link, and availability for wholesale/institutional supply.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
}

function fillFormFromCart() {
    if (cart.length === 0) {
        showToast("Your quote basket is empty!", "warning");
        return;
    }

    closeRFQDrawer();

    const detailsField = document.getElementById('rfq-details');
    if (detailsField) {
        let summary = "Requested Products from Live Catalog:\n";
        cart.forEach((item, index) => {
            summary += `${index + 1}. ${item.name} (Qty: ${item.qty}) [${item.gemCode}]\n`;
        });
        detailsField.value = summary;
    }

    // Scroll to form smoothly
    const formSection = document.getElementById('rfq-form-section');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }

    showToast("Items populated into Quotation form!", "success");
}

function requestBundleQuote(bundleName) {
    const detailsField = document.getElementById('rfq-details');
    const categorySelect = document.getElementById('rfq-category');
    const modeSelect = document.getElementById('rfq-mode');

    if (detailsField) {
        detailsField.value = `Interested in Turnkey Solution: "${bundleName}".\nPlease provide detailed Bill of Quantities (BOQ), GeM compliance verification, and turnaround timeline for our institution.`;
    }

    if (categorySelect) {
        categorySelect.value = "All Items / Mixed Lab Package";
    }

    if (modeSelect) {
        modeSelect.value = "GeM Portal Purchase";
    }

    const formSection = document.getElementById('rfq-form-section');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }

    showToast(`Loaded details for "${bundleName}" into the quote form`, "info");
}

function handleRFQSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('rfq-name')?.value || '';
    const phone = document.getElementById('rfq-phone')?.value || '';
    const org = document.getElementById('rfq-org')?.value || 'Not specified';
    const email = document.getElementById('rfq-email')?.value || 'Not specified';
    const mode = document.getElementById('rfq-mode')?.value || '';
    const category = document.getElementById('rfq-category')?.value || '';
    const details = document.getElementById('rfq-details')?.value || '';

    // Show instant success alert
    showToast(`Thank you, ${name}! Your RFQ has been received. Our sales team will get back to you shortly.`, "success");

    // Optional: offer to send via WhatsApp as well
    const sendWhatsApp = confirm("RFQ Recorded! Would you like to also send a copy directly to our WhatsApp desk for fastest response?");
    if (sendWhatsApp) {
        let text = `*OFFICIAL RFQ SUBMISSION - GAURANG ENTERPRISES*\n\n`;
        text += `*Buyer Name:* ${name}\n`;
        text += `*Phone:* ${phone}\n`;
        text += `*Organization/School:* ${org}\n`;
        text += `*Email:* ${email}\n`;
        text += `*Procurement Channel:* ${mode}\n`;
        text += `*Category Interest:* ${category}\n\n`;
        text += `*Requirement Details:*\n${details}\n`;

        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    }

    // Reset Form
    document.getElementById('rfq-form')?.reset();
}

function sendViaWhatsApp() {
    const name = document.getElementById('rfq-name')?.value;
    const phone = document.getElementById('rfq-phone')?.value;
    const details = document.getElementById('rfq-details')?.value;

    if (!name || !phone || !details) {
        showToast("Please fill in Name, Phone, and Details before sending.", "warning");
        return;
    }

    const org = document.getElementById('rfq-org')?.value || 'Institutional Buyer';
    const mode = document.getElementById('rfq-mode')?.value || 'Direct Supply';
    const category = document.getElementById('rfq-category')?.value || 'General Supplies';

    let text = `*INSTANT RFQ - GAURANG ENTERPRISES*\n\n`;
    text += `*Contact Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Organization:* ${org}\n`;
    text += `*Procurement Mode:* ${mode}\n`;
    text += `*Product Focus:* ${category}\n\n`;
    text += `*Requirements & Quantities:*\n${details}\n`;

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
}

// ---------------- GeM MODAL LOGIC ----------------

function openGeMModal() {
    const modal = document.getElementById('gem-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
}

function closeGeMModal() {
    const modal = document.getElementById('gem-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied "${text}" to clipboard!`, "success");
        }).catch(() => {
            showToast(`Code: ${text}`, "info");
        });
    } else {
        showToast(`Code: ${text}`, "info");
    }
}

// ---------------- MOBILE MENU TOGGLE ----------------

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');
    const btn  = document.getElementById('mobile-menu-btn');
    if (!menu) return;

    const isOpen = menu.classList.contains('is-open');

    if (isOpen) {
        menu.classList.remove('is-open');
        if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
        if (btn)  { btn.setAttribute('aria-expanded', 'false'); }
    } else {
        menu.classList.add('is-open');
        if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-xmark'); }
        if (btn)  { btn.setAttribute('aria-expanded', 'true'); }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const btn  = document.getElementById('mobile-menu-btn');
    if (!menu || !menu.classList.contains('is-open')) return;
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Add scrolled class to header for extra shadow on scroll
(function () {
    const header = document.getElementById('main-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
})();

// ---------------- TOAST NOTIFICATION UTILITY ----------------

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-msg max-w-sm p-4 rounded-xl shadow-xl border flex items-center gap-3 text-xs font-semibold ${
        type === 'success' 
            ? 'bg-slate-900 text-white border-emerald-500' 
            : type === 'warning'
            ? 'bg-amber-900 text-white border-amber-500'
            : 'bg-slate-900 text-white border-sky-500'
    }`;

    const iconClass = type === 'success' 
        ? 'fa-solid fa-circle-check text-emerald-400' 
        : type === 'warning'
        ? 'fa-solid fa-triangle-exclamation text-amber-400'
        : 'fa-solid fa-circle-info text-sky-400';

    toast.innerHTML = `
        <i class="${iconClass} text-base shrink-0"></i>
        <div class="flex-1">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'all 0.4s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}
