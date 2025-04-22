"use client"
import React, { useState } from "react"
import {
  BarChart3,
  Box,
  FileText,
  Home,
  Users,
  Option,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Tipos de modo de sidebar
export type SidebarMode =
  | "iconOnly"
  | "iconText"
  | "collapseOnHover"
  | "expandOnHover"

export function Sidebar() {
  const pathname = usePathname()
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>("iconOnly")
  const [showOptions, setShowOptions] = useState(false)

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const sidebarWidthClass = (() => {
    switch (sidebarMode) {
      case "iconText":
        return "w-60"
      case "expandOnHover":
        return "w-[80px] group hover:w-60 transition-all duration-300"
      case "collapseOnHover":
      case "iconOnly":
      default:
        return "w-[80px]"
    }
  })()

  return (
    <aside className={`bg-white border-r flex flex-col pt-14 relative ${sidebarWidthClass}`}>
      <nav className="flex-1 w-full pt-5">
        <ul className="space-y-2">
          <SidebarItem
            icon={<Home size={20} />}
            href="/"
            label="Inicio"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            href="/dashboard"
            label="Dashboard"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<Box size={20} />}
            href="/productos"
            label="Productos"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<FileText size={20} />}
            href="/documentos"
            label="Documentos"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<Users size={20} />}
            href="/usuarios"
            label="Usuarios"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<Option size={20} />}
            href="#"
            label="Opciones"
            sidebarMode={sidebarMode}
            isOptionButton
            onClick={toggleOptions}
          />
        </ul>

        {showOptions && (
          <div className="absolute left-[85px] top-[calc(70px+6*48px+20px)] bg-white border rounded shadow-md z-50 w-44">
            <ul className="py-2">
              <li>
                <button
                  onClick={() => {
                    setSidebarMode("iconText")
                    setShowOptions(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Modo Ícono + Texto
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSidebarMode("collapseOnHover")
                    setShowOptions(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Modo Collapse Hover
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSidebarMode("expandOnHover")
                    setShowOptions(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Modo Expand Hover
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSidebarMode("iconOnly")
                    setShowOptions(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Modo Solo Íconos
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </aside>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  href: string
  label: string
  sidebarMode: SidebarMode
  isOptionButton?: boolean
  onClick?: () => void
}

function SidebarItem({
  icon,
  href,
  label,
  sidebarMode,
  isOptionButton = false,
  onClick,
}: SidebarItemProps) {
  const pathname = usePathname()

  // Detecta si el item está activo por ruta
  const isActive = !isOptionButton && pathname === href

  return (
    <li className="group relative">
      <Link
        href={isOptionButton ? "#" : href}
        onClick={(e) => {
          if (isOptionButton && onClick) {
            e.preventDefault()
            onClick()
          }
        }}
        className={`
          flex items-center h-12 w-full px-2 
          ${isActive ? "text-blue-600 border-l-4 border-blue-600" : "text-gray-500 hover:text-gray-900"}
        `}
      >
        <div className="border rounded-md p-2">{icon}</div>

        {sidebarMode === "iconText" && (
          <span className="ml-2">{label}</span>
        )}

        {sidebarMode === "expandOnHover" && (
          <span className="ml-2 hidden group-hover:inline">{label}</span>
        )}
      </Link>

      {sidebarMode === "collapseOnHover" && (
        <span
          className="absolute left-full ml-2 top-1/2 -translate-y-1/2
            bg-gray-800 text-white text-xs px-2 py-1 rounded
            opacity-0 group-hover:opacity-100 transition-opacity
            pointer-events-none whitespace-nowrap z-50"
        >
          {label}
        </span>
      )}
    </li>
  )
}
