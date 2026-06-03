/**
 * API endpoints configuration
 */
export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  PRODUCT_DETAIL: (id: string) => `/api/products/${id}`,
  CATEGORIES: '/api/categories',
  STORES: '/api/stores',
  ARTICLES: '/api/articles',
  ARTICLE_DETAIL: (slug: string) => `/api/articles/${slug}`,
  CART: '/api/cart',
  ORDERS: '/api/orders',
  ORDER_DETAIL: (id: string) => `/api/orders/${id}`,
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh'
  },
  USER: '/api/user',
  WISHLIST: '/api/wishlist',
  REVIEWS: '/api/reviews',
  REVIEWS_BY_PRODUCT: (id: string) => `/api/products/${id}/reviews`,
  NEWSLETTER: '/api/newsletter/subscribe'
}

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested item was not found.',
  UNAUTHORIZED: 'You need to be logged in to perform this action.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  CHECKOUT_ERROR: 'An error occurred during checkout. Please try again.',
  PAYMENT_ERROR: 'Payment failed. Please check your payment details.',
  UNKNOWN_ERROR: 'An unknown error occurred. Please try again.'
}

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  ADDED_TO_CART: 'Product added to cart',
  REMOVED_FROM_CART: 'Product removed from cart',
  ADDED_TO_WISHLIST: 'Added to wishlist',
  REMOVED_FROM_WISHLIST: 'Removed from wishlist',
  ORDER_PLACED: 'Order placed successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  PASSWORD_CHANGED: 'Password changed successfully',
  EMAIL_VERIFIED: 'Email verified successfully',
  NEWSLETTER_SUBSCRIBED: 'Successfully subscribed to newsletter'
}

/**
 * Product categories
 */
export const PRODUCT_CATEGORIES = {
  DENIM: 'Denim',
  FOOTWEAR: 'Footwear',
  APPAREL: 'Apparel',
  ACCESSORIES: 'Accessories',
  ORIGINAL: 'Original'
}

/**
 * Size charts
 */
export const SIZE_CHARTS = {
  MENS_SHIRT: [
    { size: 'XS', chest: '32-34', length: '28-29', sleeve: '31-32' },
    { size: 'S', chest: '34-36', length: '29-30', sleeve: '32-33' },
    { size: 'M', chest: '38-40', length: '30-31', sleeve: '33-34' },
    { size: 'L', chest: '42-44', length: '31-32', sleeve: '34-35' },
    { size: 'XL', chest: '46-48', length: '32-33', sleeve: '35-36' },
    { size: 'XXL', chest: '50-52', length: '33-34', sleeve: '36-37' }
  ],
  MENS_PANTS: [
    { size: '28', waist: '28', inseam: '30-32' },
    { size: '30', waist: '30', inseam: '30-32' },
    { size: '32', waist: '32', inseam: '30-32' },
    { size: '34', waist: '34', inseam: '30-32' },
    { size: '36', waist: '36', inseam: '30-32' },
    { size: '38', waist: '38', inseam: '30-32' }
  ],
  MENS_SHOES: [
    { size: '6', us: '6', eu: '39', cm: '24.5' },
    { size: '7', us: '7', eu: '40', cm: '25' },
    { size: '8', us: '8', eu: '41', cm: '25.5' },
    { size: '9', us: '9', eu: '42', cm: '26' },
    { size: '10', us: '10', eu: '43', cm: '26.5' },
    { size: '11', us: '11', eu: '44', cm: '27' },
    { size: '12', us: '12', eu: '45', cm: '27.5' }
  ]
}

/**
 * Store information
 */
export const STORES = {
  SIAM_SQUARE: {
    name: 'Siam Square Soi 2',
    address: '123 Siam Square Soi 2, Bangkok',
    phone: '+66 2 XXX XXXX',
    hours: {
      weekday: '10:00 - 20:00',
      weekend: '10:00 - 21:00'
    }
  },
  TERMINAL_21: {
    name: 'Terminal 21 Asok',
    address: 'Level 4, Terminal 21, Bangkok',
    phone: '+66 2 XXX XXXX',
    hours: {
      weekday: '10:00 - 22:00',
      weekend: '10:00 - 22:00'
    }
  },
  CENTRAL_LADPRAO: {
    name: 'Central Ladprao',
    address: '1st Floor, Central Ladprao, Bangkok',
    phone: '+66 2 XXX XXXX',
    hours: {
      weekday: '10:00 - 21:00',
      weekend: '10:00 - 21:00'
    }
  },
  ONE_BANGKOK: {
    name: 'One Bangkok',
    address: 'One Bangkok Shopping Complex, Bangkok',
    phone: '+66 2 XXX XXXX',
    hours: {
      weekday: '10:00 - 22:00',
      weekend: '10:00 - 22:00'
    }
  }
}

/**
 * Social media links
 */
export const SOCIAL_MEDIA = {
  INSTAGRAM: 'https://instagram.com/pronto',
  FACEBOOK: 'https://facebook.com/pronto',
  TWITTER: 'https://twitter.com/pronto',
  TIKTOK: 'https://tiktok.com/@pronto',
  YOUTUBE: 'https://youtube.com/@pronto',
  LINE: 'https://line.me/R/ti/p/@pronto'
}

/**
 * Payment methods
 */
export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  DEBIT_CARD: 'debit_card',
  BANK_TRANSFER: 'bank_transfer',
  PAYPAL: 'paypal',
  INSTALLMENT: 'installment'
}

/**
 * Shipping methods
 */
export const SHIPPING_METHODS = {
  STANDARD: { name: 'Standard Shipping', days: '3-5', cost: 0 },
  EXPRESS: { name: 'Express Shipping', days: '1-2', cost: 150 },
  SAME_DAY: { name: 'Same Day Delivery', days: 'Today', cost: 300 }
}
