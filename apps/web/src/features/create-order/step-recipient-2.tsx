import type { DeliveryTypeId } from '@/features/create-order/step-type-1';
import { Text } from '@/components/ui/text';

type StepRecipient2Props = {
  deliveryTypeId: DeliveryTypeId;
};

export function StepRecipient2({ deliveryTypeId }: StepRecipient2Props) {
  return (
    <div className='w-1/2'>
      <Text size='m' className='text-muted-foreground'>
        Выбран тип: {deliveryTypeId}
      </Text>
    </div>
  );
}
