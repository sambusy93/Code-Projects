"use client"

import {Button} from "@nextui-org/react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  const newTheme = (theme ==='light') ? "dark":"light"

  return (
      <Button onClick={() => setTheme(newTheme)} isIconOnly disableRipple className="bg-default"><span className="material-symbols-outlined">{newTheme + "_mode"}</span></Button>
  )
};