import { createRoute } from '@tanstack/react-router'
import { ProfilePage } from '@/pages/ProfilePage'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfilePage,
})
