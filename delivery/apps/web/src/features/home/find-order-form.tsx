import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

export function FindOrderForm() {
  return (
    <Card className='p-6'>
      <Text size='xl' className='font-bold'>
        Отследить посылку
      </Text>
      <div className='flex items-center gap-2'>
        <Input
          placeholder='Введите номер заказа'
          className='w-full rounded-xl'
          type='number'
        />
        <Button>Найти</Button>
      </div>
    </Card>
  );
}
