import { createRoute } from '@tanstack/react-router';
import { CreateOrderPage } from '@/pages/CreateOrderPage';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/create',
  component: CreateOrderPage,
});
