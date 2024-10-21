"use client"
import React from "react"
import Navbar from "./navbar"

export default function Header({ lang }: { lang?: string }) {
  const navigation = [
    { title: `首页`, href: "/", current: false },
    { title: `用户`, href: "/member", current: false },
    { title: `记事本`, href: "/notes", current: false },
    { title: `时间线`, href: "/t", current: false },
    { title: `设置`, href: "/settings", current: false },
  ]
  return <Navbar items={navigation as any} locale={lang} />
}
