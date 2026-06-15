import { createRouter } from '@tanstack/react-router';
import { Route as rootRoute } from '@/routes/__root';
import { Route as indexRoute } from '@/routes/index';
import { Route as ordersRoute } from '@/routes/orders';
import { Route as profileRoute } from '@/routes/profile';
import { Route as createRoute } from '@/routes/create';

const routeTree = rootRoute.addChildren([
  indexRoute,
  ordersRoute,
  profileRoute,
  createRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
