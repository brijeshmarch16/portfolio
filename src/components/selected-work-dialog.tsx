"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export type ProjectScreenshot = {
  src: string
  label: string
  width: number
  height: number
}

export type ProjectImageGroup = {
  title: string
  screenshots: ProjectScreenshot[]
}

type SelectedWorkDialogProps = {
  projectTitle: string | null
  projectDescription: string | null
  imageGroup: ProjectImageGroup | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SelectedWorkDialog({
  projectTitle,
  projectDescription,
  imageGroup,
  open,
  onOpenChange,
}: SelectedWorkDialogProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [activeSlide, setActiveSlide] = useState(0)
  const screenshots = imageGroup?.screenshots ?? []
  const activeScreenshot = screenshots[activeSlide]

  useEffect(() => {
    if (!carouselApi) return

    const updateActiveSlide = () => {
      setActiveSlide(carouselApi.selectedScrollSnap())
    }

    updateActiveSlide()
    carouselApi.on("select", updateActiveSlide)
    return () => {
      carouselApi.off("select", updateActiveSlide)
    }
  }, [carouselApi])

  return (
    <Dialog
      key={`${projectTitle}-${imageGroup?.title}-${open}`}
      open={open}
      onOpenChange={onOpenChange}
    >
      {projectTitle && projectDescription && imageGroup && activeScreenshot && (
        <DialogContent className="gap-4 sm:max-w-4/5 sm:p-6">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-base">
              {projectTitle} · {imageGroup.title} · {activeScreenshot.label}
            </DialogTitle>
            <DialogDescription className="text-base/[26px]">
              {projectDescription}
            </DialogDescription>
          </DialogHeader>

          <Carousel
            key={`${projectTitle}-${imageGroup.title}`}
            setApi={setCarouselApi}
            opts={{ loop: true }}
            className="mx-auto w-full"
          >
            <CarouselContent className="-ml-4">
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={screenshot.src} className="pl-4">
                  <div className="mx-auto max-h-full w-full max-w-5xl overflow-y-auto">
                    <Image
                      src={screenshot.src}
                      alt={`${projectTitle} ${screenshot.label}`}
                      width={screenshot.width}
                      height={screenshot.height}
                      loading={index === activeSlide ? "eager" : "lazy"}
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="h-auto w-full rounded-md border"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {screenshots.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
          <p
            aria-live="polite"
            className="text-center text-sm/6 text-muted-foreground"
          >
            {activeSlide + 1} / {screenshots.length}
          </p>
        </DialogContent>
      )}
    </Dialog>
  )
}
