// Product Data
const products = [
    // Clothing & Apparel
    {
        id: 1,
        name: "University Logo Hoodie",
        price: 180.00,
        momo_price: 170.00,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["M", "L", "XL", "XXL"],
        category: "clothing",
        description: "Premium heavyweight hoodie with your university crest (KNUST, Legon, UCC, etc.)."
    },
    {
        id: 2,
        name: "Varsity Jacket",
        price: 250.00,
        momo_price: 240.00,
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["M", "L", "XL"],
        category: "clothing",
        description: "Classic American-style varsity jacket with chenille patches."
    },
    {
        id: 3,
        name: "Campus Polo Shirt",
        price: 90.00,
        momo_price: 85.00,
        image: "https://images.unsplash.com/photo-1625910515337-17d9425305f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["S", "M", "L", "XL"],
        category: "clothing",
        description: "Smart-casual pique polo with embroidered campus logo."
    },
    {
        id: 4,
        name: "Oversized Graphic Tee",
        price: 85.00,
        momo_price: 80.00,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["M", "L", "XL"],
        category: "clothing",
        description: "Trendy oversized fit with unique campus culture graphics."
    },

    // Academic Essentials
    {
        id: 5,
        name: "Laptop Sleeve (13/15\")",
        price: 75.00,
        momo_price: 70.00,
        image: "https://images.unsplash.com/photo-1531938716357-2b44dcc65550?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["13 inch", "15 inch"],
        category: "academic",
        description: "Padded, water-resistant protection for your MacBook or laptop."
    },
    {
        id: 6,
        name: "Student Backpack",
        price: 150.00,
        momo_price: 140.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "academic",
        description: "Durable backpack with dedicated laptop compartment and multiple pockets."
    },
    {
        id: 7,
        name: "Lecture Notebook Set",
        price: 45.00,
        momo_price: 40.00,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["3-Pack"],
        category: "academic",
        description: "Set of 3 A4 ruled notebooks with subject-specific covers."
    },
    {
        id: 8,
        name: "Scientific Calculator",
        price: 120.00,
        momo_price: 115.00,
        image: "https://images.unsplash.com/photo-1574607383476-f2c711c771d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "academic",
        description: "Essential scientific calculator for engineering and science students."
    },

    // Hostel & Dorm Life
    {
        id: 9,
        name: "Shower Caddy",
        price: 35.00,
        momo_price: 30.00,
        image: "https://images.unsplash.com/photo-1631729364136-50a99267191e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["One Size"],
        category: "hostel",
        description: "Portable mesh basket for carrying toiletries to the bathroom."
    },
    {
        id: 10,
        name: "Bedding Set (Single)",
        price: 110.00,
        momo_price: 100.00,
        image: "https://images.unsplash.com/photo-1522771753035-1a5b6562f3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Single Bed"],
        category: "hostel",
        description: "Complete set: fitted sheet, flat sheet, and matching pillowcase."
    },
    {
        id: 11,
        name: "Electric Kettle (1.5L)",
        price: 95.00,
        momo_price: 90.00,
        image: "https://images.unsplash.com/photo-1585220177021-d576a445070a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["1.5L"],
        category: "hostel",
        description: "Fast-boiling electric kettle for tea, coffee, and noodles."
    },
    {
        id: 12,
        name: "Extension Cord (4-Socket)",
        price: 60.00,
        momo_price: 55.00,
        image: "https://images.unsplash.com/photo-1558238618-936655c659e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "hostel",
        description: "Surge-protected extension board to charge all your devices."
    },

    // Personal Care
    {
        id: 13,
        name: "Sanitary Pads Bundle",
        price: 45.00,
        momo_price: 40.00,
        image: "https://images.unsplash.com/photo-1626423450587-c5806371c356?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Mixed Pack"],
        category: "personal",
        description: "Variety pack including Day, Night, and Panty Liners (Ladycare/Softy)."
    },
    {
        id: 14,
        name: "Men's Grooming Kit",
        price: 65.00,
        momo_price: 60.00,
        image: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "personal",
        description: "Includes razors, shaving cream, deodorant, and face wash."
    },

    // Gadgets & Tech
    {
        id: 15,
        name: "Power Bank (20,000mAh)",
        price: 150.00,
        momo_price: 140.00,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["20k mAh"],
        category: "gadgets",
        description: "High-capacity portable charger. Never say 'No Light, No Problem'."
    },
    {
        id: 16,
        name: "Wireless Earbuds",
        price: 120.00,
        momo_price: 110.00,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["One Size"],
        category: "gadgets",
        description: "Budget-friendly bluetooth earphones with deep bass and long battery life."
    },
    {
        id: 17,
        name: "Phone Case",
        price: 35.00,
        momo_price: 30.00,
        image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["iPhone", "Samsung", "Tecno"],
        category: "gadgets",
        description: "Durable silicone case available for all major phone models."
    },

    // Food & Snacks
    {
        id: 18,
        name: "Exam Survival Snack Pack",
        price: 55.00,
        momo_price: 50.00,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Bundle"],
        category: "food",
        description: "Indomie, biscuits, milo, sugar, and groundnuts. Everything you need."
    },

    // Campus Culture
    {
        id: 19,
        name: "\"Lecturer Has Arrived\" Mug",
        price: 40.00,
        momo_price: 35.00,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "culture",
        description: "Ceramic mug for your early morning lectures."
    },
    {
        id: 20,
        name: "\"Final Year Loading\" Hoodie",
        price: 185.00,
        momo_price: 175.00,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["M", "L", "XL"],
        category: "culture",
        description: "Celebrate the journey. Premium hoodie with bold back print."
    },

    // --- Health & Wellness ---
    {
        id: 21,
        name: "Paracetamol (Pack)",
        price: 15.00,
        momo_price: 14.00,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "health",
        description: "Essential pain relief. Keep it handy for headaches or fever."
    },
    {
        id: 22,
        name: "First Aid Kit (Basic)",
        price: 45.00,
        momo_price: 40.00,
        image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "health",
        description: "Includes band-aids, antiseptic wipes, gauze, and tape."
    },
    {
        id: 23,
        name: "Vitamin C Tablets",
        price: 25.00,
        momo_price: 22.00,
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Bottle"],
        category: "health",
        description: "Boost your immunity during stressful exam periods."
    },
    {
        id: 24,
        name: "Pain Relief Gel",
        price: 30.00,
        momo_price: 28.00,
        image: "https://images.unsplash.com/photo-1556228720-198755648834?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Tube"],
        category: "health",
        description: "Fast-acting relief for muscle aches and sports injuries."
    },
    {
        id: 25,
        name: "ORS Sachets (Pack of 5)",
        price: 12.00,
        momo_price: 10.00,
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Pack"],
        category: "health",
        description: "Essential for rehydration. Stay safe and hydrated."
    },

    // --- Entertainment ---
    {
        id: 26,
        name: "Standard Playing Cards",
        price: 20.00,
        momo_price: 18.00,
        image: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "entertainment",
        description: "Classic deck for poker, spar, and other hostel games."
    },
    {
        id: 27,
        name: "Board Game Collection (Ludo/Chess)",
        price: 75.00,
        momo_price: 70.00,
        image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Set"],
        category: "entertainment",
        description: "Perfect for game nights. Includes Ludo, Chess, and Checkers."
    },
    {
        id: 28,
        name: "African Novel Selection",
        price: 55.00,
        momo_price: 50.00,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Paperback"],
        category: "entertainment",
        description: "Curated selection of top novels by African authors."
    },
    {
        id: 29,
        name: "Bluetooth Game Controller",
        price: 120.00,
        momo_price: 110.00,
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Standard"],
        category: "entertainment",
        description: "Connect to your phone or laptop for mobile gaming."
    },
    {
        id: 30,
        name: "Movie Night Kit",
        price: 65.00,
        momo_price: 60.00,
        image: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Box"],
        category: "entertainment",
        description: "Includes gourmet popcorn, assorted drinks, and chocolates."
    },

    // --- Bundles ---
    {
        id: 31,
        name: "Fresher's Starter Pack",
        price: 180.00,
        momo_price: 170.00,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Bundle"],
        category: "bundles",
        description: "The ultimate welcome kit: Hoodie, notepad, pen, and water bottle."
    },
    {
        id: 32,
        name: "Hostel Essentials Bundle",
        price: 250.00,
        momo_price: 240.00,
        image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Bundle"],
        category: "bundles",
        description: "Settling in? Get a bedding set, electric kettle, and storage box."
    },
    {
        id: 33,
        name: "Exam Survival Kit",
        price: 85.00,
        momo_price: 80.00,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        sizes: ["Kit"],
        category: "bundles",
        description: "Pens, sticky notes, energy drink, and pain relief for late nights."
    }
];

// --- Removed Google Forms/Sheets integration for simplicity ---

 // --- FormSubmit Configuration ---
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/pixelforge926@gmail.com";

const PRODUCT_FALLBACK_IMAGE = "https://placehold.co/800x600?text=PayNDeliver+Product";

// Formatting Helper
const formatPrice = (amount) => `GHC ${amount.toFixed(2)}`;

// DOM Elements & Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;

    if (page === 'home') {
        setupHomePage();
    } else if (page === 'order') {
        setupOrderPage();
    } else if (page === 'thankyou') {
        setupThankYouPage();
    }
    setupScrollReveal();
});

// --- Home Page Functions ---
const PAGE_SIZE = 8;
let currentCategory = 'all';
let currentOffset = 0;

function setupHomePage() {
    setupCategoryFilters();
    renderProducts('all', false);
    setupLoadMore();
}

function renderProducts(category = 'all', append = false) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const list = category === 'all' ? products : products.filter(p => p.category === category);
    const slice = list.slice(currentOffset, currentOffset + PAGE_SIZE);

    const html = slice.map(product => `
        <div class="product-card">
            <img src="${product.image || PRODUCT_FALLBACK_IMAGE}" alt="${product.name}" class="product-image" onerror="this.src='${PRODUCT_FALLBACK_IMAGE}'">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <a href="order.html?id=${product.id}" class="btn">Purchase</a>
            </div>
        </div>
    `).join('');
    if (append) {
        grid.insertAdjacentHTML('beforeend', html);
    } else {
        grid.innerHTML = html;
    }
    const hasMore = currentOffset + PAGE_SIZE < list.length;
    const btn = document.getElementById('load-more');
    if (btn) btn.style.display = hasMore ? 'inline-flex' : 'none';
}

function setupCategoryFilters() {
    const filters = document.querySelectorAll('.category-btn');
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
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    // Render Product Details
    document.getElementById('product-image').src = product.image || PRODUCT_FALLBACK_IMAGE;
    document.getElementById('product-image').onerror = () => {
        document.getElementById('product-image').src = PRODUCT_FALLBACK_IMAGE;
    };
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-desc').textContent = product.description;
    
    // Populate Sizes
    const sizeSelect = document.getElementById('size');
    sizeSelect.innerHTML = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');

    // Price Updating Logic
    const priceDisplay = document.getElementById('price-display');
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const momoInstructions = document.getElementById('momo-instructions');
    const refInputContainer = document.getElementById('ref-container');
    const refInput = document.getElementById('payment-ref');

    function updatePrice() {
        const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
        const qty = parseInt(document.getElementById('quantity').value) || 1;
        
        let unitPrice = product.price;
        if (paymentMethod === 'momo') {
            unitPrice = product.momo_price;
            momoInstructions.style.display = 'block';
            refInputContainer.style.display = 'block';
            refInput.required = true;
        } else {
            momoInstructions.style.display = 'none';
            refInputContainer.style.display = 'none';
            refInput.required = false;
        }
        
        const total = unitPrice * qty;
        priceDisplay.textContent = formatPrice(total);
        document.getElementById('total-amount').value = total.toFixed(2);
    }

    paymentRadios.forEach(radio => radio.addEventListener('change', updatePrice));
    document.getElementById('quantity').addEventListener('input', updatePrice);
    
    // Initial update (default to COD usually or no selection)
    updatePrice();

    // Form Submission
    document.getElementById('order-form').addEventListener('submit', handleOrderSubmit);
}

function generateOrderId() {
    const date = new Date().toISOString().slice(0,10).replace(/-/g,'');
    const random = Math.floor(Math.random() * 9000) + 1000;
    return `ORD-${date}-${random}`;
}

function handleOrderSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const orderId = generateOrderId();
    
    const orderData = {
        orderId: orderId,
        date: new Date().toISOString(),
        productName: document.getElementById('product-name').textContent,
        size: formData.get('size'),
        quantity: formData.get('quantity'),
        paymentMethod: formData.get('payment'),
        totalAmount: document.getElementById('total-amount').value,
        customerName: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        paymentRef: formData.get('payment-ref') || 'N/A',
        status: formData.get('payment') === 'momo' ? 'pending_confirmation' : 'pending_payment'
    };

    // Mobile Money Validation
    if (orderData.paymentMethod === 'momo') {
        const ref = orderData.paymentRef.replace(/[^a-zA-Z0-9]/g, ''); // Clean special chars
        
        if (!ref || ref.length < 8) {
            alert('Please enter a valid Transaction ID (at least 8 characters) from your SMS confirmation.');
            return;
        }
        orderData.paymentRef = ref.toUpperCase(); // Normalize
    }

    // Save to LocalStorage (Simulating Database for User History)
    saveOrderToLocal(orderData);
    localStorage.setItem('lastOrder', JSON.stringify(orderData));

    // Update UI
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
    }
    
    // Send to FormSubmit (Admin Notification + User autoresponse)
    try {
        sendOrderToFormSubmit(orderData);
    } catch (err) {
        alert('We could not send the email invoice. Proceeding to confirmation.');
        window.location.href = 'thankyou.html';
    }
}

function sendOrderToFormSubmit(order) {
    const thankyouUrl = `${location.origin}${location.pathname.replace(/[^/]*$/, '')}thankyou.html`;
    const payload = {
        _subject: `New Order: ${order.orderId}`,
        _replyto: order.email,
        _template: 'table',
        email: order.email,
        customerName: order.customerName,
        orderId: order.orderId,
        date: order.date,
        productName: order.productName,
        size: order.size,
        quantity: order.quantity,
        totalAmount: order.totalAmount,
        paymentMethod: order.paymentMethod,
        paymentRef: order.paymentRef,
        phone: order.phone,
        address: order.address,
        _autoresponse: [
            `Thank you for your order, ${order.customerName}!`,
            ``,
            `Order Reference: ${order.orderId}`,
            `Item: ${order.productName}`,
            `Size: ${order.size}`,
            `Quantity: ${order.quantity}`,
            `Total: GHC ${parseFloat(order.totalAmount).toFixed(2)}`,
            `Payment Method: ${order.paymentMethod.toUpperCase()}`,
            `Transaction ID: ${order.paymentRef}`,
            ``,
            `Shipping Address:`,
            `${order.address}`,
            ``,
            `We will contact you shortly with delivery details.`,
            `PayNDeliver`
        ].join('\n')
    };
    fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((res) => {
        if (!res.ok) throw new Error('submit_failed');
        window.location.href = thankyouUrl;
    })
    .catch(() => {
        const form = document.createElement('form');
        form.action = 'https://formsubmit.co/pixelforge926@gmail.com';
        form.method = 'POST';
        form.style.display = 'none';
        const add = (name, value) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value ?? '';
            form.appendChild(input);
        };
        add('email', order.email);
        add('customerName', order.customerName);
        add('orderId', order.orderId);
        add('date', order.date);
        add('productName', order.productName);
        add('size', order.size);
        add('quantity', order.quantity);
        add('totalAmount', order.totalAmount);
        add('paymentMethod', order.paymentMethod);
        add('paymentRef', order.paymentRef);
        add('phone', order.phone);
        add('address', order.address);
        add('_subject', `New Order: ${order.orderId}`);
        add('_template', 'table');
        add('_replyto', order.email);
        add('_captcha', 'false');
        add('_next', thankyouUrl);
        add('_autoresponse', payload._autoresponse);
        document.body.appendChild(form);
        form.submit();
    });
}

function saveOrderToLocal(order) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

async function loadOrders() {
    return JSON.parse(localStorage.getItem('orders') || '[]');
}

// Removed CSV parsing and remote status overlay helpers

// --- Thank You Page Functions ---
function setupThankYouPage() {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    if (!lastOrder) {
        document.getElementById('order-details').innerHTML = '<p>No recent order found.</p>';
        return;
    }

    document.getElementById('order-id-display').textContent = lastOrder.orderId;
    
    const messageContainer = document.getElementById('confirmation-message');
    if (lastOrder.paymentMethod === 'cod') {
        messageContainer.innerHTML = `<p class="alert alert-info">Your order is confirmed. Payment will be collected upon delivery.</p>`;
    } else {
        messageContainer.innerHTML = `<p class="alert alert-warning">Please ensure your Mobile Money transfer is complete. We will ship upon confirmation.</p>`;
    }

    // Feedback Form Logic
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const rating = document.getElementById('rating').value;
            const comment = document.getElementById('feedback-comment').value;
            
            const btn = feedbackForm.querySelector('button');
            btn.textContent = 'Sending...';
            btn.disabled = true;

            fetch(FORMSUBMIT_ENDPOINT, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Feedback from ${lastOrder.customerName}`,
                    _replyto: lastOrder.email || "no-reply@example.com",
                    rating: rating + " Stars",
                    comment: comment,
                    order_id: lastOrder.orderId
                })
            })
            .then(() => {
                alert("Thank you! Your feedback has been sent.");
                feedbackForm.reset();
                btn.textContent = 'Sent';
            })
            .catch((error) => {
                console.error("Feedback failed:", error);
                alert("Something went wrong. Please try again.");
                btn.textContent = 'Send Feedback';
                btn.disabled = false;
            });
        });
    }
}
