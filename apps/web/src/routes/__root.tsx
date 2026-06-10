import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Container, Header } from '@/components/layout'

function RootLayout() {
  return (
    <div className='min-h-svh bg-background px-4 pt-4 text-foreground'>
      <Container className='flex flex-col gap-6'>
        <Header />
        <Outlet />
      </Container>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
});
