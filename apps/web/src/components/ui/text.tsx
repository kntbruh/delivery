import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const textVariants = cva('text-muted-foreground', {
  variants: {
    size: {
      s: 'text-xs',
      m: 'text-sm',
      l: 'text-base',
      xl: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'm',
  },
})

type TextProps = VariantProps<typeof textVariants> & {
  children: ReactNode
  className?: string
}

export function Text({ children, className, size }: TextProps) {
  return (
    <p className={cn(textVariants({ size }), className)}>{children}</p>
  )
}

export { textVariants }
