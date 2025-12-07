"use client"
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type RefObject,
  useEffect,
  useMemo,
  useRef,
} from "react"
import gsap from "gsap"

interface CardSwapProps {
  children: ReactNode
  className?: string
}

export const CardSwap = forwardRef<HTMLDivElement, CardSwapProps>(function CardSwap({ children, className = "" }, ref) {
  const localRef = useRef<HTMLDivElement>(null)
  const cardSwapRef = (ref as RefObject<HTMLDivElement>) || localRef

  const childrenArray = useMemo(
    () => Children.toArray(children).filter((child): child is ReactElement => isValidElement(child)),
    [children],
  )

  const totalCards = childrenArray.length

  useEffect(() => {
    if (!cardSwapRef.current || totalCards === 0) return

    const cards = cardSwapRef.current.querySelectorAll<HTMLElement>("[data-card]")
    if (cards.length === 0) return

    let currentIndex = 0

    gsap.set(cards, { autoAlpha: 0, scale: 0.8 })
    gsap.set(cards[0], { autoAlpha: 1, scale: 1 })

    const interval = setInterval(() => {
      const current = cards[currentIndex]
      const nextIndex = (currentIndex + 1) % totalCards
      const next = cards[nextIndex]

      const tl = gsap.timeline()
      tl.to(current, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.inOut",
      })
      tl.to(
        next,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.3",
      )

      currentIndex = nextIndex
    }, 3000)

    return () => clearInterval(interval)
  }, [cardSwapRef, totalCards])

  return (
    <div ref={cardSwapRef} className={className}>
      {childrenArray.map((child, index) =>
        cloneElement(child, {
          key: index,
          "data-card": true,
          style: { position: index === 0 ? "relative" : "absolute", top: 0, left: 0 },
        } as any),
      )}
    </div>
  )
})
