import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const APP_MAX_WIDTH = 'max-w-6xl'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full', APP_MAX_WIDTH, className)}>
      {children}
    </div>
  )
}
