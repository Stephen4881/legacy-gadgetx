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

// New attached assets from user
import cableImg from '@assets/IMG_0085_1768650407043.jpeg';
import airpodsImg from '@assets/IMG_0084_1768650407043.jpeg';
import ultraWatchImg from '@assets/IMG_0082_1768650407043.jpeg';
import jblCubeImg from '@assets/IMG_0081_1768650407043.jpeg';
import ps5Img from '@assets/IMG_0080_1768650407043.jpeg';
import iphoneXImg from '@assets/IMG_0079_1768650407043.jpeg';
import magsafeCaseImg from '@assets/IMG_0078_1768650407043.jpeg';
import xrGridImg from '@assets/IMG_0076_1768650407044.jpeg';
import iphone15ColorsImg from '@assets/IMG_0075_1768650407044.jpeg';
import jblOverEarImg from '@assets/IMG_0071_1768650407044.jpeg';
import keenControllerImg from '@assets/IMG_0073_1768650407044.jpeg';
import bluloryControllerImg from '@assets/IMG_0072_1768650407044.jpeg';
import jblStackImg from '@assets/IMG_0070_1768650407044.jpeg';
import jblCharge6Img from '@assets/IMG_0069_1768650407044.jpeg';
import ps6MockImg from '@assets/IMG_0074_1768650407044.jpeg';
import iphone11StackImg from '@assets/IMG_0077_1768650407044.jpeg';

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
    id: 'ps6-concept',
    name: 'PlayStation 6 - Next Gen Pro',
    price: 899.00,
    category: 'Games & Consoles',
    image: ps6MockImg,
    description: 'The future of gaming is here. Experience 8K gaming and ultra-fast loading with the next generation of PlayStation.',
    features: ['8K Native Resolution', '2TB SSD', 'Haptic DualSense 2', 'Ray Tracing Pro']
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    price: 1199.00,
    category: 'Smartphones',
    image: iphone15ColorsImg,
    description: 'The ultimate iPhone. Titanium design, A17 Pro chip, and a professional-grade camera system.',
    features: ['Titanium build', 'A17 Pro chip', '5x Telephoto', 'USB-C']
  },
  {
    id: 'jbl-charge-6',
    name: 'JBL Charge 6 - Waterproof',
    price: 179.00,
    category: 'Audio & Sound',
    image: jblCharge6Img,
    description: 'Powerful sound with up to 24 hours of battery life. Built-in powerbank to charge your devices on the go.',
    features: ['24hr Battery', 'IP67 Waterproof', 'PartyBoost', 'Powerbank built-in']
  },
  {
    id: 'ultra-watch-series',
    name: 'Apple Watch Ultra - Orange Alpine',
    price: 799.00,
    category: 'Smartphones',
    image: ultraWatchImg,
    description: 'The most rugged and capable Apple Watch. Designed for the extremes.',
    features: ['Aerospace Titanium', 'Dual-frequency GPS', '36hr Battery', 'Water resistance 100m']
  },
  {
    id: 'jbl-tune-760nc',
    name: 'JBL Tune 760NC Wireless',
    price: 129.00,
    category: 'Audio & Sound',
    image: jblOverEarImg,
    description: 'Your music, noise-free. Light weight and foldable design for every day use.',
    features: ['Active Noise Cancelling', 'Pure Bass Sound', '35H Battery', 'Hands-free calls']
  },
  {
    id: 'ps5-slim-edition',
    name: 'PlayStation 5 Slim Edition',
    price: 499.00,
    category: 'Games & Consoles',
    image: ps5Img,
    description: 'Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion.',
    features: ['Ultra-High Speed SSD', 'Ray Tracing', '4K Gaming', 'HDR Technology']
  },
  {
    id: 'keen-wireless-controller',
    name: 'Keen 2.4G Wireless Controller',
    price: 45.00,
    category: 'Games & Consoles',
    image: keenControllerImg,
    description: 'High sensitivity and precise control for your gaming setup. Dual shock feedback.',
    features: ['2.4G Wireless', 'Ergonomic Design', 'Dual Vibration', 'Long Battery Life']
  }
];

export const galleryImages = [
  iphone11StackImg,
  xrGridImg,
  iphoneXImg,
  magsafeCaseImg,
  jblCubeImg,
  airpodsImg,
  cableImg,
  bluloryControllerImg,
  jblStackImg
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
