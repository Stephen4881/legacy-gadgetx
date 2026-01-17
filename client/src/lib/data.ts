import iphoneCaseImg from '@assets/stock_images/luxury_iphone_case_l_a88b3cd2.jpg';
import headphonesImg from '@assets/stock_images/premium_wireless_hea_761fb19d.jpg';
import speakerImg from '@assets/stock_images/modern_minimalist_bl_efa6166f.jpg';
import gamingImg from '@assets/stock_images/premium_gaming_mouse_4a49d577.jpg';
import chargerImg from '@assets/stock_images/minimalist_wireless__cfd25a34.jpg';

// Attached assets from previous turn
import iphoneBlackImg from '@assets/IMG_0038_1768494471947.jpeg';
import storeOpenImg from '@assets/IMG_0033_1768494471947.png';
import storeFrontImg from '@assets/IMG_0034_1768494471947.png';

// New attached assets
import iphoneBoxesImg from '@assets/IMG_0058_1768503840454.jpeg';
import colorfulPhonesImg from '@assets/IMG_0057_1768503840454.jpeg';
import phoneFanImg from '@assets/IMG_0056_1768503840454.jpeg';
import phoneStandImg from '@assets/IMG_0055_1768503840454.jpeg';
import premiumSelectionImg from '@assets/IMG_0054_1768503840454.jpeg';
import cloudCollectionImg from '@assets/IMG_0053_1768503840454.jpeg';
import goldUnboxingImg from '@assets/IMG_0050_1768503840454.jpeg';
import retailExperienceImg from '@assets/IMG_0051_1768503840454.jpeg';
import colorGridImg from '@assets/IMG_0052_1768503840454.jpeg';
import stealthUnboxingImg from '@assets/IMG_0049_1768503840454.jpeg';
import whiteProImg from '@assets/IMG_0048_1768503840454.jpeg';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max - Stealth Black',
    price: 1199.00,
    category: 'iPhone Accessories',
    image: iphoneBlackImg,
    description: 'The pinnacle of mobile technology. Forged in titanium and finished in a deep, stealth black. Experience unparalleled performance and durability.',
    features: ['Titanium design', 'A17 Pro chip', 'Advanced camera system', 'Stealth Black finish']
  },
  {
    id: 'pro-white',
    name: 'iPhone 15 Pro - Titanium White',
    price: 999.00,
    category: 'iPhone Accessories',
    image: whiteProImg,
    description: 'Purity in performance. The Titanium White finish offers a clean, architectural look for the most powerful iPhone yet.',
    features: ['Aerospace-grade titanium', 'Action button', 'USB-C charging', 'Ceramic Shield front']
  },
  {
    id: 'gold-pro',
    name: 'iPhone 15 Pro - Desert Titanium',
    price: 1099.00,
    category: 'iPhone Accessories',
    image: goldUnboxingImg,
    description: 'A sophisticated take on gold. This desert-inspired titanium finish combines luxury with the rugged durability Legacy Gadgets is known for.',
    features: ['Custom Pro motion', 'Longest battery life', 'Advanced Zoom', 'Luxury finish']
  },
  {
    id: '2',
    name: 'Sonic Pro Wireless',
    price: 349.00,
    category: 'Audio & EarPods',
    image: headphonesImg,
    description: 'Immersive sound with industry-leading noise cancellation. Crafted with lightweight aluminum and memory foam for all-day comfort.',
    features: ['Active Noise Cancellation', '30-hour battery life', 'Premium aluminum build', 'Transparency mode']
  },
  {
    id: '3',
    name: 'Aura Bluetooth Speaker',
    price: 199.00,
    category: 'Speakers',
    image: speakerImg,
    description: 'Room-filling sound in a compact, minimalist design. The Aura Speaker blends seamlessly into any modern interior.',
    features: ['360-degree sound', '12-hour playtime', 'Water-resistant', 'Multi-room pairing']
  },
  {
    id: '4',
    name: 'Precision Gaming Set',
    price: 149.00,
    category: 'Gaming Accessories',
    image: gamingImg,
    description: 'Engineered for esports performance. Low-latency wireless connection and tactile mechanical switches for the ultimate advantage.',
    features: ['Mechanical switches', 'Ultra-low latency', 'Ergonomic design', 'RGB customizable lighting']
  },
  {
    id: '5',
    name: 'Flux Wireless Charger',
    price: 79.00,
    category: 'Power & Charging',
    image: chargerImg,
    description: 'Fast, efficient wireless charging in a sleek matte finish. Keeps your devices powered without the cable clutter.',
    features: ['15W fast charging', 'Premium matte finish', 'Non-slip surface', 'Overheat protection']
  }
];

export const galleryImages = [
  iphoneBoxesImg,
  colorfulPhonesImg,
  phoneFanImg,
  phoneStandImg,
  premiumSelectionImg,
  cloudCollectionImg,
  retailExperienceImg,
  colorGridImg,
  stealthUnboxingImg
];

export const storeImages = {
  open: storeOpenImg,
  front: storeFrontImg
};

export const categories = [
  {
    id: 'phones',
    name: 'Smartphones',
    image: iphoneBlackImg
  },
  {
    id: 'laptops',
    name: 'Laptops',
    image: headphonesImg
  },
  {
    id: 'gaming',
    name: 'Games & Consoles',
    image: gamingImg
  },
  {
    id: 'repairs',
    name: 'iRepairs',
    image: storeFrontImg
  }
];
