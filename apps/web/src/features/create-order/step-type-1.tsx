import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { ChevronRightIcon } from 'lucide-react';

export type DeliveryTypeId = 'express' | 'standard';

const deliveryTypes: Array<{
  id: DeliveryTypeId;
  label: string;
  price: number;
  time: string;
}> = [
  {
    id: 'express',
    label: 'Экспресс доставка',
    price: 780,
    time: '1-2 дня',
  },
  {
    id: 'standard',
    label: 'Обычная доставка',
    price: 320,
    time: '3-5 дней',
  },
];

type StepType1Props = {
  onSelect: (deliveryTypeId: DeliveryTypeId) => void;
};

export function StepType1({ onSelect }: StepType1Props) {
  return (
    <div className='flex w-1/2 flex-col gap-4'>
      {deliveryTypes.map((type) => (
        <Card
          key={type.id}
          className='flex cursor-pointer flex-row items-center justify-between gap-4 p-6 hover:bg-muted'
          onClick={() => onSelect(type.id)}
        >
          <div className='flex flex-col gap-4'>
            <Text size='l'>{type.label}</Text>
            <div className='flex flex-col gap-1'>
              <Text size='xl' className='font-bold'>
                {type.price} ₽
              </Text>
              <Text size='s' className='text-muted-foreground'>
                {type.time}
              </Text>
            </div>
          </div>
          <ChevronRightIcon className='size-6 shrink-0 text-muted-foreground' />
        </Card>
      ))}
      <img
        src='/assets/steps-banner.png'
        alt='banner steps'
        className='w-full rounded-xl'
      />
    </div>
  );
}
