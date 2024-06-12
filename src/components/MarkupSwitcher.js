'use client'
import { useBreakpoint } from "@/hooks/useBreakpoints"
import { useEffect, useState } from "react"

export default function MarkupSwitcher({
  breakpoint = 'md',
  above,
  below
}) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);
  const { isAbove } = useBreakpoint(breakpoint)

  useEffect(() => {
    setIsAboveBreakpoint(isAbove)
  }, [isAbove])

  return isAboveBreakpoint ? above : below
}