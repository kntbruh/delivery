export const APP_NAME = 'Delivery'

export function formatPrice(amount: number, currency = 'RUB'): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

export type OrderStatus = 'pending' | 'preparing' | 'delivering' | 'delivered'
