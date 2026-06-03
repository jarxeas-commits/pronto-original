/**
 * Composable for shopping cart state management
 */
export const useCart = () => {
  const cart = useState<CartItem[]>('cart', () => [])
  
  const addItem = (product: Product, size: string, quantity: number = 1) => {
    const existingItem = cart.value.find(
      item => item.productId === product.id && item.size === size
    )
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.value.push({
        productId: product.id,
        product,
        size,
        quantity,
        price: product.price
      })
    }
  }
  
  const removeItem = (productId: string, size: string) => {
    cart.value = cart.value.filter(
      item => !(item.productId === productId && item.size === size)
    )
  }
  
  const updateQuantity = (productId: string, size: string, quantity: number) => {
    const item = cart.value.find(
      item => item.productId === productId && item.size === size
    )
    if (item) {
      item.quantity = Math.max(1, quantity)
    }
  }
  
  const clearCart = () => {
    cart.value = []
  }
  
  const total = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  })
  
  const itemCount = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0)
  })
  
  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount
  }
}

/**
 * Composable for user authentication
 */
export const useAuth = () => {
  const user = useState<User | null>('auth.user', () => null)
  const isAuthenticated = computed(() => user.value !== null)
  
  const login = async (email: string, password: string) => {
    try {
      // API call would go here
      // const response = await $fetch('/api/auth/login', { method: 'POST', body: { email, password } })
      // user.value = response.user
    } catch (error) {
      console.error('Login failed:', error)
    }
  }
  
  const logout = () => {
    user.value = null
  }
  
  const register = async (data: Partial<User>) => {
    try {
      // API call would go here
      // const response = await $fetch('/api/auth/register', { method: 'POST', body: data })
      // user.value = response.user
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }
  
  return {
    user,
    isAuthenticated,
    login,
    logout,
    register
  }
}

/**
 * Composable for product filtering and sorting
 */
export const useProducts = (initialProducts: Product[] = []) => {
  const products = ref(initialProducts)
  const filters = reactive<FilterOptions>({
    categories: [],
    priceRange: [0, 50000],
    sizes: [],
    inStock: false,
    rating: 0,
    sortBy: 'newest'
  })
  
  const filteredProducts = computed(() => {
    let result = [...products.value]
    
    // Apply filters
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category))
    }
    
    result = result.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )
    
    if (filters.sizes.length > 0) {
      result = result.filter(p => filters.sizes.some(s => p.sizes.includes(s)))
    }
    
    if (filters.inStock) {
      result = result.filter(p => p.inStock)
    }
    
    if (filters.rating > 0) {
      result = result.filter(p => p.rating >= filters.rating)
    }
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'popular':
        result.sort((a, b) => b.reviews - a.reviews)
        break
      case 'newest':
      default:
        // Assuming products have a created date in production
        break
    }
    
    return result
  })
  
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    filters[key] = value
  }
  
  const resetFilters = () => {
    filters.categories = []
    filters.priceRange = [0, 50000]
    filters.sizes = []
    filters.inStock = false
    filters.rating = 0
    filters.sortBy = 'newest'
  }
  
  return {
    products,
    filters,
    filteredProducts,
    updateFilter,
    resetFilters
  }
}

/**
 * Composable for wishlist management
 */
export const useWishlist = () => {
  const wishlist = useState<string[]>('wishlist', () => [])
  
  const toggleWishlist = (productId: string) => {
    const index = wishlist.value.indexOf(productId)
    if (index > -1) {
      wishlist.value.splice(index, 1)
    } else {
      wishlist.value.push(productId)
    }
  }
  
  const isInWishlist = (productId: string) => {
    return wishlist.value.includes(productId)
  }
  
  return {
    wishlist,
    toggleWishlist,
    isInWishlist
  }
}

/**
 * Composable for scroll animations
 */
export const useScrollAnimation = () => {
  onMounted(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el)
    })

    onUnmounted(() => {
      observer.disconnect()
    })
  })
}
