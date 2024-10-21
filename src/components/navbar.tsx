"use client"
import React from "react"
import Navbar from "./navbar"
import Link from "next/link"

export interface NavItem extends Record<string, any> {
  title: string
  href: string
}

export type NavbarProps = {
  items: NavItem[]
  locale?: string
}

export default function Nav({ items, locale }: NavbarProps) {
  return (
    <div className={"flex justify-between bg-gray-200"}>
      <div>V2EX</div>
      <div className={"flex"}>
        {items.map((it) => (
          <div key={it.title} className={"p-2 ml-2"}>
            <Link href={locale ? `/${locale}${it.href}` : it.href}>
              {it.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
