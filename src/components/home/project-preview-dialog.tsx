"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProjectItem } from "@/types/home"

type ProjectPreviewItem = ProjectItem & {
  imageUrl: string
}

type ProjectPreviewDialogProps = {
  project: ProjectPreviewItem
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectPreviewDialog({
  project,
  open,
  onOpenChange,
}: ProjectPreviewDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="border-b">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video w-full">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
