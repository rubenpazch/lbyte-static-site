import { useEffect, useRef } from 'react'
import type { ImgHTMLAttributes } from 'react'

export const LazyImage = ({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current) {
          imgRef.current.src = src as string
          imgRef.current.loading = 'lazy'
          observer.unobserve(imgRef.current)
        }
      },
      {
        rootMargin: '50px',
      }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [src])

  return (
    <img
      ref={imgRef}
      alt={alt}
      {...props}
    />
  )
}
