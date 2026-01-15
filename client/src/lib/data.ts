import iphoneCaseImg from '@assets/stock_images/luxury_iphone_case_l_a88b3cd2.jpg';
import headphonesImg from '@assets/stock_images/premium_wireless_hea_761fb19d.jpg';
import speakerImg from '@assets/stock_images/modern_minimalist_bl_efa6166f.jpg';
import gamingImg from '@assets/stock_images/premium_gaming_mouse_4a49d577.jpg';
import chargerImg from '@assets/stock_images/minimalist_wireless__cfd25a34.jpg';

// New attached assets
import iphoneBlackImg from '@assets/IMG_0038_1768494471947.jpeg';
import storeOpenImg from '@assets/IMG_0033_1768494471947.png';
import storeFrontImg from '@assets/IMG_0034_1768494471947.png';

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

export const storeImages = {
  open: storeOpenImg,
  front: storeFrontImg
};

export const categories = [
  {
    id: 'iphone',
    name: 'iPhone Accessories',
    image: iphoneBlackImg
  },
  {
    id: 'audio',
    name: 'Audio & EarPods',
    image: headphonesImg
  },
  {
    id: 'speakers',
    name: 'Speakers',
    image: speakerImg
  },
  {
    id: 'gaming',
    name: 'Gaming Accessories',
    image: gamingImg
  },
  {
    id: 'power',
    name: 'Power & Charging',
    image: chargerImg
  }
];
