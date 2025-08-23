import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      
      addItem: (product) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }]
          });
        }
        
        get().calculateTotal();
      },
      
      removeItem: (productId) => {
        const { items } = get();
        set({
          items: items.filter(item => item.id !== productId)
        });
        get().calculateTotal();
      },
      
      updateQuantity: (productId, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: items.map(item =>
            item.id === productId
              ? { ...item, quantity }
              : item
          )
        });
        get().calculateTotal();
      },
      
      clearCart: () => {
        set({ items: [], total: 0 });
      },
      
      calculateTotal: () => {
        const { items } = get();
        // Since prices are "N/A", we'll set total to 0 for now
        const total = 0;
        set({ total });
      },
      
      getItemCount: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;
