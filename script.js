// Pure Vanilla JavaScript for Taraz Tea Online Shop

// 1. Products Data - Full portfolio across all 6 tea categories
const PRODUCTS = [
  {
    id: 'gt-200',
    name: 'Green Tea 200g',
    nameBn: 'গ্রিন টি ২০০ গ্রাম',
    category: 'green',
    weight: '200g',
    subText: 'রেগুলার কচি পাতা',
    price: 350,
    originalPrice: 400,
    rating: 4.9,
    reviewsCount: 142,
    pouchType: 'green',
    description: 'শ্রীমঙ্গলের পাহাড়ি বাগান থেকে বাছাইকৃত কচি চা পাতা। উচ্চমাত্রার অ্যান্টি-অক্সিডেন্ট সমৃদ্ধ এবং প্রাকৃতিক সতেজতায় ভরপুর।',
    benefits: ['ওজন নিয়ন্ত্রণে সহায়তা করে', 'রোগ প্রতিরোধ ক্ষমতা বাড়ায়', 'কোলেস্টেরল নিয়ন্ত্রণ করে', 'মানসিক ক্লান্তি দূর করে'],
  },
  {
    id: 'bt-200',
    name: 'Black Tea 200g',
    nameBn: 'ব্ল্যাক টি ২০০ গ্রাম',
    category: 'black',
    weight: '200g',
    subText: 'সিটিসি প্রিমিয়াম ব্লেন্ড',
    price: 420,
    originalPrice: 480,
    rating: 5.0,
    reviewsCount: 218,
    pouchType: 'black',
    description: 'গাঢ় লিকার ও অতুলনীয় স্বাদের প্রিমিয়াম সিটিসি ব্ল্যাক টি। সকালের মিষ্টি আমেজ কিংবা সন্ধ্যার ক্লান্তি দূর করতে অনন্য।',
    benefits: ['দ্রুত শক্তি জোগায়', 'হজমে সহায়তা করে', 'হৃদযন্ত্র সুস্থ রাখে', 'সতেজ অনুভূতির সঞ্চার করে'],
  },
  {
    id: 'ot-200-green',
    name: 'Orthodox Tea 200g',
    nameBn: 'অর্থোডক্স টি ২০০ গ্রাম',
    category: 'orthodox',
    weight: '200g',
    subText: 'স্পেশাল রাজকীয় ব্লেন্ড',
    price: 550,
    originalPrice: 620,
    rating: 4.8,
    reviewsCount: 95,
    pouchType: 'emerald',
    description: 'ঐতিহ্যবাহী পদ্ধতিতে পাতা অক্ষত রেখে তৈরি অর্থোডক্স ব্ল্যাক টি। এর হালকা মিষ্টি সুবাস এবং রয়াল লিকার চা-প্রেমীদের প্রথম পছন্দ।',
    benefits: ['রক্তচাপ নিয়ন্ত্রণে সহায়ক', 'প্রাকৃতিক মিষ্টি ফ্লেভার', 'উচ্চ অ্যান্টি-অক্সিডেন্ট', 'মানসিক চাপ কমায়'],
  },
  {
    id: 'ot-200-gold',
    name: 'Orthodox Gold 200g',
    nameBn: 'অর্থোডক্স গোল্ড ২০০ গ্রাম',
    category: 'orthodox',
    weight: '200g',
    subText: 'সোনালী কুঁড়ি ব্লেন্ড',
    price: 550,
    originalPrice: 650,
    rating: 5.0,
    reviewsCount: 167,
    pouchType: 'orange',
    description: 'গোল্ডেন টিপস সমৃদ্ধ বিশেষ অর্থোডক্স চা। এর অমায়িক আভিজাত্য আর রাজকীয় স্বাদ প্রতি চুমুকেই মুগ্ধ করবে।',
    benefits: ['বিশেষ সোনালী কুঁড়ি মিশ্রিত', 'উচ্চমানের ক্যাফেইন ব্যালেন্স', 'ত্বকের উজ্জ্বলতা বৃদ্ধিতে সহায়ক', 'সুস্বাদু অ্যারোমা'],
  },
  {
    id: 'ot-500-brown',
    name: 'Orthodox Tea 500g',
    nameBn: 'অর্থোডক্স টি ৫০০ গ্রাম',
    category: 'orthodox',
    weight: '500g',
    subText: 'অর্গানিক ফ্যামিলি প্যাক',
    price: 650,
    originalPrice: 750,
    rating: 4.9,
    reviewsCount: 112,
    pouchType: 'copper',
    description: 'পারিবারিক বা কর্পোরেট ব্যবহারের জন্য ৫০০ গ্রামের সাশ্রয়ী মেগা প্যাক। ১০০% কেমিক্যালমুক্ত ও প্রাকৃতিক বাগানের পাতা।',
    benefits: ['১০০% অর্গানিক ও নিরাপদ', 'দীর্ঘস্থায়ী তাজা গন্ধ', 'সাশ্রয়ী পারিবারিক প্যাক', 'সরাসরি বাগানের পণ্য'],
  },
  {
    id: 'wt-100',
    name: 'White Tea 100g',
    nameBn: 'হোয়াইট টি ১০০ গ্রাম',
    category: 'white',
    weight: '100g',
    subText: 'সিলভার নিডলস কুঁড়ি',
    price: 750,
    originalPrice: 850,
    rating: 5.0,
    reviewsCount: 78,
    pouchType: 'emerald',
    description: 'সবচেয়ে দুর্লভ ও অভিজাত সিলভার নিডল কুঁড়ি থেকে সংগৃহীত হোয়াইট টি। সূক্ষ্ম মিষ্টি সুবাস ও উচ্চ স্বাস্থ্যগুণের প্রতীক।',
    benefits: ['সবচেয়ে কম প্রসেসড খাঁটি পাতা', 'সর্বোচ্চ অ্যান্টিঅক্সিডেন্ট লেভেল', 'ত্বক সুন্দর ও তারুণ্যদীপ্ত রাখে', 'প্রাকৃতিক ক্যাফেইন কম'],
  },
  {
    id: 'yt-100',
    name: 'Yellow Tea 100g',
    nameBn: 'রয়েল ইয়েলো টি ১০০ গ্রাম',
    category: 'yellow',
    weight: '100g',
    subText: 'স্বর্ণাভ পাতা স্পেশাল',
    price: 620,
    originalPrice: 700,
    rating: 4.9,
    reviewsCount: 64,
    pouchType: 'orange',
    description: 'বিশেষ স্টিমিং ও নিয়ন্ত্রিত ফার্মেন্টেশনে তৈরি স্বর্ণাভ ইয়েলো টি। এর অনন্য মধুর ফ্লেভার ও রাজকীয় স্বাদ অসাধারণ।',
    benefits: ['পরিপাকতন্ত্রের জন্য মহৌষধ', 'লিভারের কার্যক্ষমতা বাড়ায়', 'ক্লান্তি নিরাময় করে দ্রুত', 'হালকা মধুর স্বাদ'],
  },
  {
    id: 'ht-100',
    name: 'Herbal Tea 100g',
    nameBn: 'ভেষজ ও তুলসী টি ১০০ গ্রাম',
    category: 'herbal',
    weight: '100g',
    subText: 'প্রাকৃতিক ভেষজ মিশ্রণ',
    price: 320,
    originalPrice: 380,
    rating: 4.8,
    reviewsCount: 89,
    pouchType: 'copper',
    description: 'তুলসী, আদা, লেমনগ্রাস ও অর্গানিক চা পাতার স্বাস্থ্যকর প্রাকৃতিক মিশ্রণ। সর্দি-কাশি উপশমে ও রোগ প্রতিরোধে দারুণ কার্যকরী।',
    benefits: ['সর্দি ও কাশি নিরাময়ে সহায়ক', 'স্ট্রেস ও টেনশন দূর করে', 'প্রাকৃতিক সুগন্ধি ফ্লেভার', '১০০% ক্যাফেইনমুক্ত ভেষজ উপাদান'],
  }
];

// 2. Application State with safe localStorage parsing
function safeGetJSON(key, defaultVal) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch (err) {
    console.warn(`Error reading localStorage ${key}:`, err);
    return defaultVal;
  }
}

let cart = safeGetJSON('taraz_cart', []);
let wishlist = safeGetJSON('taraz_wishlist', []);
let selectedCategory = null;
let searchQuery = '';
let activeProductForModal = null;
let modalQuantity = 1;

// 3. Helper: Generate Realistic Tea Pouch SVG/HTML
function getPouchHTML(type, title, weight, isMini = false) {
  const themes = {
    green: {
      bg: 'linear-gradient(to bottom, #047857, #16a34a, #065f46)',
      border: 'rgba(74, 222, 128, 0.4)',
      seal: '#eab308',
      cupLiquid: '#84cc16'
    },
    black: {
      bg: 'linear-gradient(to bottom, #18181b, #27272a, #09090b)',
      border: 'rgba(245, 158, 11, 0.4)',
      seal: '#d97706',
      cupLiquid: '#b45309'
    },
    emerald: {
      bg: 'linear-gradient(to bottom, #115e59, #059669, #064e3b)',
      border: 'rgba(52, 211, 153, 0.4)',
      seal: '#facc15',
      cupLiquid: '#65a30d'
    },
    orange: {
      bg: 'linear-gradient(to bottom, #d97706, #ca8a04, #c2410c)',
      border: 'rgba(253, 224, 71, 0.5)',
      seal: '#ca8a04',
      cupLiquid: '#92400e'
    },
    copper: {
      bg: 'linear-gradient(to bottom, #57534e, #78350f, #44403c)',
      border: 'rgba(251, 146, 60, 0.4)',
      seal: '#f59e0b',
      cupLiquid: '#78350f'
    }
  };

  const theme = themes[type] || themes.green;
  const wClass = isMini ? 'w-16 h-22' : 'w-34 h-46';

  return `
    <div class="relative flex items-center justify-center p-2 select-none">
      <div class="relative ${wClass} rounded-t-xl rounded-b-md shadow-md border flex flex-col items-center justify-between p-2 overflow-hidden transition-transform duration-300 group-hover:scale-105"
           style="background: ${theme.bg}; border-color: ${theme.border};">
        
        <!-- Top Seal -->
        <div class="w-full flex items-center justify-between border-b border-white/20 pb-0.5">
          <div class="w-1 h-0.5 bg-black/40 rounded-full"></div>
          <div class="h-0.5 w-16 bg-amber-300/80 rounded-full"></div>
          <div class="w-1 h-0.5 bg-black/40 rounded-full"></div>
        </div>

        <!-- Reflection highlight -->
        <div class="absolute top-0 left-2 w-3 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none transform -skew-x-12"></div>

        <!-- Brand Name -->
        <div class="text-center w-full mt-0.5">
          <span class="text-[9px] font-bold tracking-widest text-white uppercase drop-shadow-sm block">TARAZ TEA</span>
          <span class="text-[7px] text-amber-200/90 font-medium block">PREMIUM QUALITY</span>
        </div>

        <!-- Central Cup Badge -->
        <div class="relative my-auto flex flex-col items-center">
          <div class="w-11 h-11 rounded-full border border-amber-300/70 p-0.5 flex items-center justify-center bg-black/40 shadow-inner">
            <div class="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden border border-white/30"
                 style="background-color: ${theme.cupLiquid};">
              <svg class="w-4 h-4 text-emerald-950 fill-current" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Bottom Label -->
        <div class="w-full bg-black/40 backdrop-blur-xs rounded px-1 py-0.5 text-center border border-white/10">
          <div class="text-[9px] font-semibold text-white truncate leading-tight">${title}</div>
          <div class="text-[7px] text-amber-200/90 font-medium">${weight}</div>
        </div>
      </div>
      <div class="absolute bottom-1 w-24 h-2 bg-black/20 blur-xs rounded-full -z-10"></div>
    </div>
  `;
}

// 4. Render Products Grid
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = selectedCategory ? p.category === selectedCategory : true;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ? true : (
      p.name.toLowerCase().includes(q) ||
      p.nameBn.toLowerCase().includes(q) ||
      p.subText.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
    return matchCat && matchSearch;
  });

  // Update category filter indicator text if present
  const sectionTitle = document.getElementById('bestseller-filter-title');
  if (sectionTitle) {
    if (selectedCategory) {
      const catNames = {
        green: 'গ্রিন টি',
        black: 'ব্ল্যাক টি',
        orthodox: 'অর্থোডক্স টি',
        white: 'হোয়াইট টি',
        yellow: 'ইয়েলো টি',
        herbal: 'হার্বাল টি'
      };
      sectionTitle.innerHTML = `<span>বেস্ট সেলার (${catNames[selectedCategory] || selectedCategory})</span> <button onclick="resetFilters()" class="text-xs text-red-600 hover:underline font-normal ml-2 cursor-pointer">✕ ফিল্টার মুছুন</button>`;
    } else {
      sectionTitle.innerText = 'বেস্ট সেলার';
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-stone-50 rounded-2xl border border-dashed border-stone-300 p-6">
        <div class="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-[#094a2b] flex items-center justify-center mb-3">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <h4 class="text-sm font-bold text-slate-800">কোনো চা পাওয়া যায়নি</h4>
        <p class="text-xs text-stone-500 mt-1 max-w-sm mx-auto">অনুগ্রহ করে ভিন্ন কোনো নাম দিয়ে খুঁজুন অথবা ফিল্টার রিসেট করে সব চা দেখুন।</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-[#094a2b] text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer shadow-xs">সব চা দেখুন</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((product) => {
    const inWish = wishlist.some((w) => w.id === product.id);
    return `
      <div class="group relative bg-white rounded-xl border border-stone-200/90 hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
        <!-- Wishlist Button -->
        <button onclick="toggleWishlist('${product.id}')"
                class="absolute top-2 right-2 z-20 p-1.5 rounded-full backdrop-blur-xs transition-colors ${inWish ? 'bg-red-50 text-red-500 shadow-xs' : 'bg-white/80 text-stone-400 hover:text-red-500 hover:bg-white'}"
                title="${inWish ? 'পছন্দ থেকে সরান' : 'পছন্দের তালিকায় রাখুন'}">
          <svg class="w-4 h-4 ${inWish ? 'fill-current' : ''}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        <!-- Pouch Graphic -->
        <div onclick="openProductModal('${product.id}')" class="pt-2 pb-1 flex items-center justify-center bg-gradient-to-b from-stone-50/80 to-white cursor-pointer">
          ${getPouchHTML(product.pouchType, product.name, product.weight)}
        </div>

        <!-- Info -->
        <div class="p-3 pt-1 flex flex-col grow justify-between">
          <div class="space-y-1">
            <h3 onclick="openProductModal('${product.id}')" class="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#094a2b] cursor-pointer transition-colors line-clamp-1">
              ${product.name}
            </h3>
            <p class="text-[11px] text-stone-500 font-medium">${product.subText}</p>
            <div class="pt-1 flex items-baseline gap-1.5">
              <span class="text-base sm:text-lg font-bold text-[#094a2b]">৳ ${product.price}</span>
              ${product.originalPrice ? `<span class="text-[11px] text-stone-400 line-through">৳ ${product.originalPrice}</span>` : ''}
            </div>
          </div>

          <!-- Add to Cart Button -->
          <div class="mt-3">
            <button onclick="addToCart('${product.id}', 1)"
                    class="w-full py-2 px-3 rounded-lg bg-[#094a2b] hover:bg-[#07361f] text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm cursor-pointer active:scale-98">
              <svg class="w-3.5 h-3.5 text-emerald-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Cart Management
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.product.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ product, quantity: qty });
  }

  saveCart();
  updateCounters();
  renderCart();
  showToast(`"${product.name}" শপিং ব্যাগে যোগ করা হয়েছে!`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find((i) => i.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.product.id !== productId);
  }

  saveCart();
  updateCounters();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.product.id !== productId);
  saveCart();
  updateCounters();
  renderCart();
}

function saveCart() {
  try {
    localStorage.setItem('taraz_cart', JSON.stringify(cart));
  } catch (err) {
    console.warn('Unable to save cart:', err);
  }
}

function updateCounters() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-count-badge');
  if (badge) badge.innerText = count;

  const wishBadge = document.getElementById('wishlist-count-badge');
  if (wishBadge) wishBadge.innerText = wishlist.length;
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 px-4">
        <div class="w-16 h-16 rounded-full bg-emerald-50 text-[#094a2b] flex items-center justify-center mx-auto mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h4 class="text-base font-bold text-slate-800">আপনার ব্যাগ খালি</h4>
        <p class="text-xs text-stone-500 mt-1 max-w-xs mx-auto mb-4">তাজা ও প্রিমিয়াম স্বাদের চা পাতা পছন্দ করে ব্যাগে যোগ করুন।</p>
        <button onclick="closeDrawer('cart-drawer'); document.getElementById('bestseller-section').scrollIntoView({ behavior: 'smooth' });"
                class="px-4 py-2 bg-[#094a2b] text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer shadow-xs">
          চা পছন্দ করুন
        </button>
      </div>
    `;
    if (footer) footer.classList.add('hidden');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = subtotal >= 1000 ? 0 : 60;
  const total = subtotal + delivery;

  container.innerHTML = cart.map((item) => `
    <div class="flex items-center gap-3 p-2.5 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white transition-colors">
      <div class="w-14 h-16 shrink-0 flex items-center justify-center overflow-hidden">
        ${getPouchHTML(item.product.pouchType, item.product.name, item.product.weight, true)}
      </div>
      <div class="flex-1 min-w-0">
        <h5 class="text-xs sm:text-sm font-bold text-slate-800 truncate">${item.product.name}</h5>
        <p class="text-[11px] text-stone-500">${item.product.subText} • ${item.product.weight}</p>
        <div class="text-xs font-bold text-[#094a2b] mt-1">৳ ${item.product.price} × ${item.quantity} = ৳ ${item.product.price * item.quantity}</div>
      </div>
      <div class="flex flex-col items-end gap-1.5 shrink-0">
        <button onclick="removeFromCart('${item.product.id}')" class="text-stone-400 hover:text-red-500 transition-colors p-1 cursor-pointer" title="মুছুন">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <div class="flex items-center border border-stone-300 rounded-md bg-white">
          <button onclick="updateCartQuantity('${item.product.id}', -1)" class="px-2 py-0.5 hover:bg-stone-100 text-stone-600 font-bold cursor-pointer rounded-l">-</button>
          <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
          <button onclick="updateCartQuantity('${item.product.id}', 1)" class="px-2 py-0.5 hover:bg-stone-100 text-stone-600 font-bold cursor-pointer rounded-r">+</button>
        </div>
      </div>
    </div>
  `).join('');

  if (footer) {
    footer.classList.remove('hidden');
    document.getElementById('cart-subtotal').innerText = `৳ ${subtotal}`;
    document.getElementById('cart-delivery').innerText = delivery === 0 ? 'ফ্রি ডেলিভারি' : `৳ ${delivery}`;
    document.getElementById('cart-total').innerText = `৳ ${total}`;
  }
}

// 6. Wishlist Management
function toggleWishlist(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const exists = wishlist.some((w) => w.id === productId);
  if (exists) {
    wishlist = wishlist.filter((w) => w.id !== productId);
    showToast('পছন্দের তালিকা থেকে বাদ দেওয়া হয়েছে');
  } else {
    wishlist.push(product);
    showToast(`"${product.name}" পছন্দের তালিকায় সংরক্ষণ করা হয়েছে`);
  }

  try {
    localStorage.setItem('taraz_wishlist', JSON.stringify(wishlist));
  } catch (err) {
    console.warn('Unable to save wishlist:', err);
  }

  updateCounters();
  renderProducts();
  renderWishlist();
}

function renderWishlist() {
  const container = document.getElementById('wishlist-items-container');
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 px-4">
        <div class="w-16 h-16 rounded-full bg-red-50 text-red-400 flex items-center justify-center mx-auto mb-3">
          <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <h4 class="text-base font-bold text-slate-800">পছন্দের তালিকা খালি</h4>
        <p class="text-xs text-stone-500 mt-1 max-w-xs mx-auto mb-4">যেসব চা পাতা পরবর্তীতে কিনতে চান সেগুলোর হার্ট আইকনে ক্লিক করে সংরক্ষণ করুন।</p>
        <button onclick="closeDrawer('wishlist-drawer'); document.getElementById('bestseller-section').scrollIntoView({ behavior: 'smooth' });"
                class="px-4 py-2 bg-[#094a2b] text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer shadow-xs">
          চা এক্সপ্লোর করুন
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = wishlist.map((p) => `
    <div class="flex items-center gap-3 p-2.5 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white transition-colors">
      <div class="w-14 h-16 shrink-0 flex items-center justify-center overflow-hidden">
        ${getPouchHTML(p.pouchType, p.name, p.weight, true)}
      </div>
      <div class="flex-1 min-w-0">
        <h5 class="text-xs sm:text-sm font-bold text-slate-800 truncate">${p.name}</h5>
        <p class="text-[11px] text-stone-500">${p.subText} • ${p.weight}</p>
        <div class="text-xs font-bold text-[#094a2b] mt-1">৳ ${p.price}</div>
      </div>
      <div class="flex items-center gap-1.5 shrink-0">
        <button onclick="addToCart('${p.id}', 1); toggleWishlist('${p.id}');" class="px-2.5 py-1.5 bg-[#094a2b] hover:bg-[#07361f] text-white text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer">
          <span>কিনুন</span>
        </button>
        <button onclick="toggleWishlist('${p.id}')" class="p-1.5 text-stone-400 hover:text-red-500 rounded-lg hover:bg-stone-100 cursor-pointer" title="মুছুন">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

// 7. Modals: Open & Close Helpers with Body Scroll Lock
function openDrawer(id) {
  if (id === 'checkout-modal' && cart.length === 0) {
    showToast('আপনার শপিং ব্যাগ খালি! প্রথমে পণ্য যোগ করুন।');
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (id === 'checkout-modal') {
      updateCheckoutSummary();
    }
  }
}

function closeDrawer(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('hidden');
    const openModals = document.querySelectorAll('.fixed.z-50:not(.hidden)');
    if (openModals.length === 0) {
      document.body.classList.remove('overflow-hidden');
    }
  }
}

function closeAllModals() {
  const openModals = document.querySelectorAll('.fixed.z-50:not(.hidden)');
  openModals.forEach((m) => m.classList.add('hidden'));
  document.body.classList.remove('overflow-hidden');
}

function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  activeProductForModal = product;
  modalQuantity = 1;

  document.getElementById('modal-product-name').innerText = product.name;
  document.getElementById('modal-product-sub').innerText = `${product.nameBn} • ${product.subText}`;
  document.getElementById('modal-product-price').innerText = `৳ ${product.price}`;
  document.getElementById('modal-product-desc').innerText = product.description;
  document.getElementById('modal-product-pouch').innerHTML = getPouchHTML(product.pouchType, product.name, product.weight);
  document.getElementById('modal-qty-display').innerText = modalQuantity;
  
  // Set price on modal button immediately
  const btnPrice = document.getElementById('modal-btn-price');
  if (btnPrice) {
    btnPrice.innerText = `(৳ ${product.price})`;
  }

  document.getElementById('modal-benefits').innerHTML = product.benefits.map((b) => `
    <div class="flex items-center gap-1.5 text-stone-600 text-xs">
      <span class="text-emerald-600 font-bold">✓</span>
      <span>${b}</span>
    </div>
  `).join('');

  openDrawer('product-modal');
}

function changeModalQty(delta) {
  modalQuantity = Math.max(1, modalQuantity + delta);
  document.getElementById('modal-qty-display').innerText = modalQuantity;
  if (activeProductForModal) {
    const btnPrice = document.getElementById('modal-btn-price');
    if (btnPrice) {
      btnPrice.innerText = `(৳ ${activeProductForModal.price * modalQuantity})`;
    }
  }
}

function addModalProductToCart() {
  if (activeProductForModal) {
    addToCart(activeProductForModal.id, modalQuantity);
    closeDrawer('product-modal');
  }
}

// 8. Filters & Synchronized Search
function setCategory(cat) {
  selectedCategory = selectedCategory === cat ? null : cat;
  document.querySelectorAll('.cat-btn').forEach((btn) => {
    if (btn.dataset.category === selectedCategory) {
      btn.classList.add('ring-2', 'ring-[#094a2b]', 'bg-emerald-50');
    } else {
      btn.classList.remove('ring-2', 'ring-[#094a2b]', 'bg-emerald-50');
    }
  });
  renderProducts();

  // Scroll smoothly to best seller section
  const section = document.getElementById('bestseller-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetFilters() {
  selectedCategory = null;
  searchQuery = '';
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  const mobileInput = document.getElementById('mobile-search-input');
  if (mobileInput) mobileInput.value = '';
  document.querySelectorAll('.cat-btn').forEach((btn) => btn.classList.remove('ring-2', 'ring-[#094a2b]', 'bg-emerald-50'));
  renderProducts();
}

function handleSearch(val) {
  searchQuery = val;
  const desktopInput = document.getElementById('search-input');
  const mobileInput = document.getElementById('mobile-search-input');
  if (desktopInput && desktopInput.value !== val) desktopInput.value = val;
  if (mobileInput && mobileInput.value !== val) mobileInput.value = val;
  renderProducts();
}

// 9. Toast Notification
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('global-toast');
  const text = document.getElementById('toast-message');
  if (!toast || !text) return;

  text.innerText = message;
  toast.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

// 10. Forms Handling: Checkout, Wholesale, Affiliate
function updateCheckoutSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const citySelect = document.getElementById('checkout-city');
  const isDhaka = citySelect ? citySelect.value === 'ঢাকা' : true;
  const delivery = subtotal >= 1000 ? 0 : (isDhaka ? 60 : 120);
  const total = subtotal + delivery;

  const countEl = document.getElementById('checkout-summary-items');
  const subtotalEl = document.getElementById('checkout-summary-subtotal');
  const deliveryEl = document.getElementById('checkout-summary-delivery');
  const totalEl = document.getElementById('checkout-summary-total');

  if (countEl) countEl.innerText = `${cart.reduce((s, i) => s + i.quantity, 0)} টি আইটেম`;
  if (subtotalEl) subtotalEl.innerText = `৳ ${subtotal}`;
  if (deliveryEl) deliveryEl.innerText = delivery === 0 ? 'ফ্রি ডেলিভারি' : `৳ ${delivery}`;
  if (totalEl) totalEl.innerText = `৳ ${total}`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast('আপনার শপিং ব্যাগ খালি! প্রথমে পণ্য যোগ করুন।');
    closeDrawer('checkout-modal');
    return;
  }

  const name = document.getElementById('checkout-name')?.value?.trim();
  const phone = document.getElementById('checkout-phone')?.value?.trim();
  const address = document.getElementById('checkout-address')?.value?.trim();
  const city = document.getElementById('checkout-city')?.value;

  if (!name || !phone || !address) {
    alert('অনুগ্রহ করে নাম, ফোন এবং সম্পূর্ণ ঠিকানা পূরণ করুন');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = subtotal >= 1000 ? 0 : (city === 'ঢাকা' ? 60 : 120);
  const total = subtotal + delivery;
  const orderId = 'TT-' + Math.floor(100000 + Math.random() * 900000);

  cart = [];
  saveCart();
  updateCounters();
  renderCart();
  closeDrawer('checkout-modal');

  document.getElementById('order-success-id').innerText = orderId;
  document.getElementById('order-success-name').innerText = `${name} (${phone})`;
  document.getElementById('order-success-address').innerText = address;
  document.getElementById('order-success-total').innerText = `৳ ${total}`;
  openDrawer('order-success-modal');
}

function handleWholesaleSubmit(e) {
  e.preventDefault();
  closeDrawer('wholesale-modal');
  showToast('ধন্যবাদ! পাইকারি মূল্যতালিকা সহ আমাদের টিম খুব শীঘ্রই যোগাযোগ করবে।');
}

function handleAffiliateSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById('affiliate-phone')?.value || '1234';
  const refCode = 'https://taraztea.com.bd/?ref=' + phone.slice(-4);
  document.getElementById('affiliate-ref-input').value = refCode;
  document.getElementById('affiliate-form').classList.add('hidden');
  document.getElementById('affiliate-success').classList.remove('hidden');
}

function copyAffiliateLink() {
  const input = document.getElementById('affiliate-ref-input');
  if (input) {
    navigator.clipboard.writeText(input.value);
    showToast('রেফারেল লিংক ক্লিপবোর্ডে কপি হয়েছে!');
  }
}

// Expose globals for inline onclick / onchange in HTML
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.toggleWishlist = toggleWishlist;
window.openDrawer = openDrawer;
window.closeDrawer = closeDrawer;
window.closeAllModals = closeAllModals;
window.openProductModal = openProductModal;
window.changeModalQty = changeModalQty;
window.addModalProductToCart = addModalProductToCart;
window.setCategory = setCategory;
window.resetFilters = resetFilters;
window.handleSearch = handleSearch;
window.showToast = showToast;
window.renderProducts = renderProducts;
window.updateCheckoutSummary = updateCheckoutSummary;
window.handleCheckoutSubmit = handleCheckoutSubmit;
window.handleWholesaleSubmit = handleWholesaleSubmit;
window.handleAffiliateSubmit = handleAffiliateSubmit;
window.copyAffiliateLink = copyAffiliateLink;

// 11. Initial Startup and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCounters();
  renderCart();
  renderWishlist();

  // Search input listeners
  const desktopSearch = document.getElementById('search-input');
  if (desktopSearch) {
    desktopSearch.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  const mobileSearch = document.getElementById('mobile-search-input');
  if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  // Category buttons
  document.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setCategory(btn.dataset.category);
    });
  });

  // City change inside checkout
  const citySelect = document.getElementById('checkout-city');
  if (citySelect) {
    citySelect.addEventListener('change', updateCheckoutSummary);
  }

  // Escape key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});
