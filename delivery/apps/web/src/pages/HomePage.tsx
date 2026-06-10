import { CountDeliveryForm, FindOrderForm } from '@/features';

export function HomePage() {
  return (
    <main className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      <CountDeliveryForm />
      <img
        src='/assets/delivery.png'
        alt='Курьер доставки'
        className='w-full rounded-xl border border-green-900'
      />
      <img
        src='/assets/Banner.png'
        alt='Баннер'
        className='w-full rounded-xl border border-green-900'
      />
      <FindOrderForm />
    </main>
  );
}
