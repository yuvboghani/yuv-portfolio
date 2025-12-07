"use client"
import { motion, type MotionValue, useMotionValue, useSpring, useTransform, type SpringOptions } from "motion/react"
import React, { Children, cloneElement, useRef } from "react"

const DEFAULT_MAGNIFICATION = 60
const DEFAULT_DISTANCE = 140

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  mass: 0.1,
  stiffness: 150,
  damping: 12,
}

interface DockProps {
  children: React.ReactNode
  className?: string
  magnification?: number
  distance?: number
  spring?: SpringOptions
}

export function Dock({
  children,
  className,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  spring = DEFAULT_SPRING_OPTIONS,
}: DockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  const renderChildren = () => {
    return Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return cloneElement(child as React.ReactElement<DockIconProps>, {
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
          spring: spring,
        })
      }
      return child
    })
  }

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={className}
    >
      {renderChildren()}
    </motion.div>
  )
}

interface DockIconProps {
  size?: number
  magnification?: number
  distance?: number
  mouseX?: MotionValue
  spring?: SpringOptions
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export function DockIcon({
  size = 40,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  spring = DEFAULT_SPRING_OPTIONS,
  className,
  children,
  onClick,
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null)

  const distanceCalc = useTransform(mouseX!, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size])

  const width = useSpring(widthSync, spring)

  return (
    <motion.div ref={ref} style={{ width }} className={className} onClick={onClick}>
      {children}
    </motion.div>
  )
}
