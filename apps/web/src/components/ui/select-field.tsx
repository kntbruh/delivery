import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type SelectOption = { label: string; value: string };

type SelectFieldProps = {
  items: SelectOption[];
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

export function SelectField({
  items,
  label,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  className,
}: SelectFieldProps) {
  return (
    <div className='flex flex-col gap-1.5 max-w-full'>
      {label ? (
        <label className='text-sm font-medium text-foreground'>{label}</label>
      ) : null}
      <Select
        value={value}
        defaultValue={defaultValue}
        onValueChange={(nextValue) => {
          if (nextValue !== null) {
            onValueChange?.(nextValue);
          }
        }}
      >
        <SelectTrigger
          className={cn('w-full rounded-full py-4 px-4 text-base', className)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
