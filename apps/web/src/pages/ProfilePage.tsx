import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

export function ProfilePage() {
  return (
    <div className='flex flex-col gap-6 p-6'>
      <Text size='xl' className='font-bold'>
        Профиль
      </Text>
      <form className='flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <Input placeholder='Имя' className=' rounded-xl' type='text' />
          <Input placeholder='Email' className=' rounded-xl' type='email' />
          <Input placeholder='Телефон' className=' rounded-xl' type='tel' />
          <Input placeholder='Пароль' className=' rounded-xl' type='password' />
          <Input
            placeholder='Подтверждение пароля'
            className=' rounded-xl'
            type='password'
          />
          <Input placeholder='Город' className=' rounded-xl' type='text' />
        </div>
        <Button variant='default' className='w-72 rounded-xl'>
          Обновить данные
        </Button>
      </form>
    </div>
  );
}
