import { createRoute } from '@tanstack/react-router'
import { OrdersPage } from '@/pages/OrdersPage'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/orders',
  component: OrdersPage,
})
