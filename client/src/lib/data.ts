import iphoneCaseImg from '@assets/stock_images/luxury_iphone_case_l_a88b3cd2.jpg';
import headphonesImg from '@assets/stock_images/premium_wireless_hea_761fb19d.jpg';
import speakerImg from '@assets/stock_images/modern_minimalist_bl_efa6166f.jpg';
import gamingImg from '@assets/stock_images/premium_gaming_mouse_4a49d577.jpg';
import chargerImg from '@assets/stock_images/minimalist_wireless__cfd25a34.jpg';

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
    name: 'Legacy Leather Case',
    price: 59.99,
    category: 'iPhone Accessories',
    image: iphoneCaseImg,
    description: 'Handcrafted from premium full-grain leather that develops a unique patina over time. Designed for protection and elegance.',
    features: ['Full-grain leather', 'MagSafe compatible', 'Microfiber lining', 'Raised edges for screen protection']
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

export const categories = [
  {
    id: 'iphone',
    name: 'iPhone Accessories',
    image: iphoneCaseImg
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
