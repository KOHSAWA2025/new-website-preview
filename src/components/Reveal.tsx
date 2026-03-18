import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type RevealProps = PropsWithChildren<{
  delay?: number
  className?: string
}>

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
