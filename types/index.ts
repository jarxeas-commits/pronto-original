/**
 * Product Types
 */
export interface Product {
  id: string
  name: string
  category: string
  price: number
  priceRange?: {
    min: number
    max: number
  }
  description: string
  image: string
  images: string[]
  sizes: string[]
  inStock: boolean
  isNew?: boolean
  rating: number
  reviews: number
  sku: string
  material: string
  care: string[]
}

/**
 * Cart Types
 */
export interface CartItem {
  productId: string
  product: Product
  size: string
  quantity: number
  price: number
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

/**
 * User Types
 */
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  address?: Address
  orders: Order[]
  wishlist: string[]
}

export interface Address {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

/**
 * Order Types
 */
export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: Date
  shippingAddress: Address
  trackingNumber?: string
}

/**
 * Store Types
 */
export interface Store {
  id: string
  name: string
  address: string
  city: string
  phone: string
  hours: {
    day: string
    open: string
    close: string
  }[]
  coordinates: {
    lat: number
    lng: number
  }
}

/**
 * Review Types
 */
export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  title: string
  content: string
  verified: boolean
  helpful: number
  createdAt: Date
}

/**
 * Blog Types
 */
export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: Date
  category: string
  tags: string[]
  readTime: number
}

/**
 * Category Types
 */
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  products: Product[]
  parentId?: string
}

/**
 * Filter Types
 */
export interface FilterOptions {
  categories: string[]
  priceRange: [number, number]
  sizes: string[]
  inStock: boolean
  rating: number
  sortBy: 'newest' | 'price-low' | 'price-high' | 'rating' | 'popular'
}

/**
 * Pagination Types
 */
export interface PaginationParams {
  page: number
  limit: number
  total: number
  totalPages: number
}

/**
 * API Response Types
 */
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  errors?: Record<string, string>
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: PaginationParams
}
