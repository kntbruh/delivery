import { useState } from 'react';
import { Text } from '@/components/ui/text';
import {
  StepRecipient2,
  StepType1,
  type DeliveryTypeId,
} from '@/features/create-order';

const STEP = {
  TYPE: 1,
  RECIPIENT: 2,
} as const;

const steps = [
  { label: 'Тип доставки', value: STEP.TYPE },
  { label: 'Получатель', value: STEP.RECIPIENT },
];

export function CreateOrderPage() {
  const [step, setStep] = useState<number>(STEP.TYPE);
  const [deliveryTypeId, setDeliveryTypeId] = useState<DeliveryTypeId | null>(
    null,
  );

  const handleDeliveryTypeSelect = (typeId: DeliveryTypeId) => {
    setDeliveryTypeId(typeId);
    setStep(STEP.RECIPIENT);
  };

  return (
    <div>
      <Text size='xl'>{steps.find((s) => s.value === step)?.label}</Text>
      {step === STEP.TYPE && (
        <StepType1 onSelect={handleDeliveryTypeSelect} />
      )}
      {step === STEP.RECIPIENT && deliveryTypeId && (
        <StepRecipient2 deliveryTypeId={deliveryTypeId} />
      )}
    </div>
  );
}
