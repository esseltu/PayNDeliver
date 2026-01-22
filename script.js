// Product Data
const products = [
    {
        id: 1,
        name: "Campus Hoodie - Black",
        price: 150.00,
        momo_price: 150.00, // No discount for now to simplify
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
        category: "hoodies",
        badge: "BESTSELLER",
        description: "Premium cotton hoodie with embroidered campus logo. Perfect for chilly lectures.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 2,
        name: "Varsity Jacket - Blue",
        price: 200.00,
        momo_price: 200.00,
        image: "https://images.unsplash.com/photo-1551028919-ac7edd248ffb?auto=format&fit=crop&q=80&w=600",
        category: "jackets",
        badge: "NEW",
        description: "Classic varsity jacket with leather sleeves. Stand out on campus.",
        sizes: ["M", "L", "XL"]
    },
    {
        id: 3,
        name: "Student Cap - Grey",
        price: 45.00,
        momo_price: 45.00,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600",
        category: "accessories",
        description: "Adjustable snapback cap. Essential for bad hair days.",
        sizes: ["One Size"]
    },
    {
        id: 4,
        name: "Graphic Tee - White",
        price: 60.00,
        momo_price: 60.00,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600",
        category: "t-shirts",
        description: "Soft cotton tee with unique campus art graphic.",
        sizes: ["S", "M", "L", "XL"]
    }
];

// --- Removed Google Forms/Sheets integration for simplicity ---

 // --- FormSubmit Configuration ---
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/pixelforge926@gmail.com";

const PRODUCT_FALLBACK_IMAGE = "https://placehold.co/800x600?text=PayNDeliver+Product";

// Formatting Helper
const formatPrice = (amount) => `GHC ${amount.toFixed(2)}`;

// Cart State Management
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('payndeliver_cart')) || [];
} catch (e) {
    console.warn("LocalStorage access failed. Cart will not persist.", e);
    cart = [];
}

function saveCart() {
    try {
        localStorage.setItem('payndeliver_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn("Could not save cart to LocalStorage.", e);
    }
    updateCartUI();
    if (document.body.dataset.page === 'order') {
        setupOrderPage();
    }
}

function addToCart(product, size, qty) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += parseInt(qty);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            momo_price: product.momo_price,
            image: product.image,
            size: size,
            quantity: parseInt(qty)
        });
    }
    saveCart();
    // Open cart drawer
    document.getElementById('cart-overlay')?.classList.add('active');
    document.querySelector('.cart-drawer')?.classList.add('active');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    // Update Badge
    const countEls = document.querySelectorAll('.cart-count');
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEls.forEach(el => el.textContent = totalQty);

    // Update Cart Drawer Items
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-price');
    
    if (cartItemsContainer && cartTotalEl) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; margin-top: 2rem; color: #888;">Your cart is empty.</p>';
            cartTotalEl.textContent = formatPrice(0);
        } else {
            cartItemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image || PRODUCT_FALLBACK_IMAGE}" alt="${item.name}" onerror="this.src='${PRODUCT_FALLBACK_IMAGE}'">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>Size: ${item.size} | Qty: ${item.quantity}</p>
                        <p>${formatPrice(item.price * item.quantity)}</p>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `).join('');
            cartTotalEl.textContent = formatPrice(getCartTotal());
        }
    }
}

// DOM Elements & Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;

    setupHamburgerMenu();
    setupCartDrawer();
    updateCartUI();
    setupScrollReveal();

    if (page === 'home') {
        setupHomePage();
        setupProductModal();
    } else if (page === 'order') {
        setupOrderPage();
    } else if (page === 'thankyou') {
        setupThankYouPage();
    }
});

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

function setupCartDrawer() {
    const icon = document.querySelectorAll('.cart-icon-container');
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    const closeBtn = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Logic fix: Allow cart icon click even if overlay is missing (navigate to order page)
    icon.forEach(ic => {
        ic.addEventListener('click', () => {
            if (overlay) {
                overlay.classList.add('active');
                drawer.classList.add('active');
            } else {
                window.location.href = 'order.html';
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            drawer.classList.remove('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                drawer.classList.remove('active');
            }
        });
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            window.location.href = 'order.html';
        });
    }
}

// --- Home Page Functions ---
const PAGE_SIZE = 8;
let currentCategory = 'all';
let currentOffset = 0;

function setupHomePage() {
    setupCategoryFilters();
    renderProducts('all', false);
    setupLoadMore();
}

function setupProductModal() {
    const modalOverlay = document.getElementById('product-modal-overlay');
    const modalClose = document.getElementById('modal-close');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('active');
        });
    }
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalOverlay = document.getElementById('product-modal-overlay');
    const img = document.getElementById('modal-img');
    const title = document.getElementById('modal-title');
    const price = document.getElementById('modal-price');
    const desc = document.getElementById('modal-desc');
    const sizeSelect = document.getElementById('modal-size');
    const qtyInput = document.getElementById('modal-qty');
    const addBtn = document.getElementById('modal-add-to-cart');
    const buyBtn = document.getElementById('modal-buy-now');

    img.src = product.image || PRODUCT_FALLBACK_IMAGE;
    img.onerror = () => img.src = PRODUCT_FALLBACK_IMAGE;
    title.textContent = product.name;
    price.textContent = formatPrice(product.price);
    desc.textContent = product.description || "No description available.";
    
    // Reset inputs
    qtyInput.value = 1;
    sizeSelect.innerHTML = product.sizes && product.sizes.length > 0 
        ? product.sizes.map(s => `<option value="${s}">${s}</option>`).join('')
        : '<option value="One Size">One Size</option>';

    // Button Actions
    addBtn.onclick = () => {
        addToCart(product, sizeSelect.value, qtyInput.value);
        modalOverlay.classList.remove('active');
    };

    buyBtn.onclick = () => {
        // Direct buy: Clear cart? Or add and go to checkout?
        // Usually "Buy Now" means checkout this item immediately.
        // Let's add to cart and go to checkout.
        addToCart(product, sizeSelect.value, qtyInput.value);
        window.location.href = 'order.html';
    };

    modalOverlay.classList.add('active');
}

function renderProducts(category = 'all', append = false) {
    const grid = document.getElementById('product-grid');
    const loadMoreBtn = document.getElementById('load-more');
    if (!grid) return;

    try {
        if (!append) {
            grid.innerHTML = '';
            currentOffset = 0;
        }

        const filtered = category === 'all' 
            ? products 
            : products.filter(p => p.category === category);

        // Simple pagination logic
        const pagedProducts = filtered.slice(0, currentOffset + PAGE_SIZE);
        
        // Hide Load More if all products are shown
        if (loadMoreBtn) {
            if (pagedProducts.length >= filtered.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }

        if (pagedProducts.length === 0) {
            grid.innerHTML = '<p class="text-secondary" style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found in this category.</p>';
            return;
        }

        // If appending, we only want to render the NEW items.
        // But simplistic approach: Clear and Render All up to currentOffset + PAGE_SIZE
        // To support true 'append', we need to slice correctly.
        // Let's stick to "Render All visible" for simplicity as grid.innerHTML = '' is fast enough for small lists.
        
        // If we are appending, we shouldn't clear grid.
        // But my logic above `if (!append) grid.innerHTML = '';` handles that.
        // However, if append is true, I need to render ONLY the new ones.
        // OR, easier: Always clear and render (0 to currentLimit).
        
        // Let's change strategy: Always render everything from 0 to limit.
        grid.innerHTML = ''; 
        pagedProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image || PRODUCT_FALLBACK_IMAGE}" alt="${product.name}" class="product-image" onerror="this.src='${PRODUCT_FALLBACK_IMAGE}'">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span class="product-category">${product.category}</span>
                        <span class="product-price">${formatPrice(product.price)}</span>
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <button class="btn btn-primary" onclick="openProductModal(${product.id})" style="width: 100%; margin-top: 10px;">View Options</button>
                </div>
            `;
            grid.appendChild(card);
        });

    } catch (e) {
        console.error("Error rendering products:", e);
        grid.innerHTML = '<p style="color: red; text-align: center;">Unable to load products. Please try refreshing.</p>';
    }
}

function setupCategoryFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.dataset.category;
            currentOffset = 0;
            renderProducts(currentCategory, false);
        });
    });
}

function setupLoadMore() {
    const btn = document.getElementById('load-more');
    if (!btn) return;
    btn.addEventListener('click', () => {
        currentOffset += PAGE_SIZE;
        renderProducts(currentCategory, true);
    });
}

function setupScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('in'));
        return;
    }
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}
// --- Order Page Functions ---
function setupOrderPage() {
    const orderSummary = document.getElementById('order-summary');
    const form = document.getElementById('checkout-form');

    if (!cart || cart.length === 0) {
        orderSummary.innerHTML = '<p>Your cart is empty. Please add items to your cart.</p>';
        return;
    }

    let total = 0;
    
    // Generate Order Summary HTML
    const itemsHtml = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="summary-item">
                <img src="${item.image || PRODUCT_FALLBACK_IMAGE}" alt="${item.name}" onerror="this.src='${PRODUCT_FALLBACK_IMAGE}'">
                <div class="summary-item-details">
                    <h3 class="summary-item-title">${item.name}</h3>
                    <p class="summary-item-meta">Size: ${item.size} | Qty: ${item.quantity}</p>
                    <p class="summary-item-price">${formatPrice(itemTotal)}</p>
                </div>
            </div>
        `;
    }).join('');

    orderSummary.innerHTML = `
        <h2 class="summary-title">Order Summary</h2>
        ${itemsHtml}
        <div class="summary-total-row">
            <span>Total</span>
            <span>${formatPrice(total)}</span>
        </div>
    `;

    // Handle Form Submission (WhatsApp Integration)
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const hostel = document.getElementById('hostel').value;
            const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;

            // Construct WhatsApp Message
            let message = `*NEW ORDER FROM PAYNDELIVER* 📦\n\n`;
            message += `*Customer Details:*\n`;
            message += `👤 Name: ${name}\n`;
            message += `📞 Phone: ${phone}\n`;
            message += `📧 Email: ${email}\n`;
            message += `📍 Location: ${hostel}\n`;
            message += `💳 Payment: ${paymentMethod === 'MOMO' ? 'Mobile Money' : 'Cash on Delivery'}\n\n`;
            
            message += `*Order Summary:*\n`;
            cart.forEach(item => {
                message += `▫️ ${item.name} (Size: ${item.size}) x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
            });
            
            message += `\n*TOTAL: ${formatPrice(total)}*`;

            // Encode and Open WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappNumber = "233544130026"; // 0544130026 -> 233544130026
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Clear Cart and Redirect
            localStorage.setItem('payndeliver_cart_pending_clear', 'true');
            
            // We open WhatsApp in a new tab usually, but for "Submit" it's better to just go there.
            // However, we also want to show the Thank You page.
            // Flow: Open WhatsApp -> Redirect current page to Thank You?
            // Browsers might block popups.
            // Safer: Redirect current tab to WhatsApp.
            
            window.location.href = whatsappUrl;
            
            // Note: Since we are redirecting away, we can't easily "clear cart" after they come back unless we assume they sent it.
            // Let's clear it now.
            cart = [];
            saveCart();
        });
    }
}

// --- Thank You Page Functions ---
function setupThankYouPage() {
    try {
        if (localStorage.getItem('payndeliver_cart_pending_clear') === 'true') {
            localStorage.removeItem('payndeliver_cart');
            localStorage.removeItem('payndeliver_cart_pending_clear');
            cart = [];
            updateCartUI();
        }
    } catch (e) {
        console.warn("Error accessing LocalStorage on Thank You page:", e);
    }
}
