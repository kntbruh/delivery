import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { SelectField } from '@/components/ui/select-field';
import { Button } from '@/components/ui/button';
import { router } from '@/router';

const cities = [
  { label: 'Москва', value: 'Москва' },
  { label: 'Санкт-Петербург', value: 'Санкт-Петербург' },
  { label: 'Екатеринбург', value: 'Екатеринбург' },
  { label: 'Казань', value: 'Казань' },
  { label: 'Новосибирск', value: 'Новосибирск' },
  { label: 'Самара', value: 'Самара' },
  { label: 'Омск', value: 'Омск' },
  { label: 'Красноярск', value: 'Красноярск' },
  { label: 'Хабаровск', value: 'Хабаровск' },
  { label: 'Владивосток', value: 'Владивосток' },
];

const sizes = [
  { label: 'конверт', value: 'конверт' },
  { label: 'короб XS', value: 'короб XS' },
  { label: 'короб S', value: 'короб S' },
  { label: 'короб M', value: 'короб M' },
  { label: 'короб L', value: 'короб L' },
  { label: 'короб XL', value: 'короб XL' },
];

export function CountDeliveryForm() {
  const handleSubmit = () => {
    router.navigate({ to: '/create' });
  };
  return (
    <Card className='p-6'>
      <Text size='xl' className='font-bold'>
        Рассчитать доставку
      </Text>
      <form className='flex flex-col gap-4'>
        <SelectField
          items={cities}
          label='Город отправки'
          placeholder='Выберите город отправки'
        />
        <SelectField
          items={cities}
          label='Город назначения'
          placeholder='Выберите город назначения'
        />
        <SelectField
          items={sizes}
          label='Размер посылки'
          defaultValue={sizes[0].value}
        />
        <Button
          type='submit'
          variant='default'
          size='lg'
          className='rounded-xl'
          onClick={handleSubmit}
        >
          Рассчитать стоимость
        </Button>
      </form>
    </Card>
  );
}
