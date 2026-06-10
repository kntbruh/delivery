import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className='rounded-lg border border-border'>
      <nav className='flex items-center justify-between gap-4 px-6 py-4'>
        <Link
          to='/'
          className='text-sm text-muted-foreground transition-colors hover:text-foreground'
          activeProps={{ className: 'text-sm font-medium text-foreground' }}
        >
          Delivery
        </Link>
        <div className='flex items-center gap-4'>
          <Link
            to='/orders'
            className='text-sm text-muted-foreground transition-colors hover:text-foreground'
            activeProps={{ className: 'text-sm font-medium text-foreground' }}
          >
            История заказов
          </Link>
          <Link
            to='/profile'
            className='text-sm text-muted-foreground transition-colors hover:text-foreground'
            activeProps={{ className: 'text-sm font-medium text-foreground' }}
          >
            Профиль
          </Link>
        </div>
      </nav>
    </header>
  );
}
