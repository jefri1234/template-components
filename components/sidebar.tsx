"use client"
import React, { useState } from "react"
import {
  BarChart3,
  Box,
  FileText,
  Home,
  LayoutDashboard,
  Users,
  Option,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Definimos los posibles modos del sidebar
export type SidebarMode =
  | "iconOnly"        // Solo íconos (estado por defecto)
  | "iconText"        // Íconos + texto siempre visibles
  | "collapseOnHover" // Íconos solos, pero al pasar el cursor aparece un tooltip con el texto
  | "expandOnHover"   // Íconos solos que, al pasar el cursor, expanden el sidebar y se muestran los textos

interface SidebarProps {
  children: React.ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  // Estado para el modo del sidebar
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>("iconOnly")
  // Estado para mostrar/ocultar el popover de opciones
  const [showOptions, setShowOptions] = useState(false)

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  // Definimos la clase de ancho según el modo seleccionado
  const sidebarWidthClass = (() => {
    switch (sidebarMode) {
      case "iconText":
        return "w-60"
      case "expandOnHover":
        // En modo expandOnHover se agrega la clase 'group' para que los elementos hijos puedan detectar el hover
        return "w-[80px] group hover:w-60 transition-all duration-300"
      case "collapseOnHover":
      case "iconOnly":
      default:
        return "w-[80px]"
    }
  })()

  return (
    <aside className={`bg-white border-r flex flex-col py-1 ${sidebarWidthClass}`}>
      {/* Logo o encabezado */}
      <div className="w-full border-b flex items-center justify-center h-[70px]">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={60}
          height={60}
          className="w-15 h-15"
        />
      </div>

      {/* Menú principal */}
      <nav className="flex-1 w-full pt-5">
        <ul className="space-y-2">
          <SidebarItem
            icon={<Home size={20} />}
            active={false}
            href="#"
            label="Inicio"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            active={false}
            href="#"
            label="Dashboard"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<Box size={20} />}
            active={true}
            href="#"
            label="Productos"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<FileText size={20} />}
            active={false}
            href="#"
            label="Documentos"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            active={false}
            href="#"
            label="Layout"
            sidebarMode={sidebarMode}
          />
          <SidebarItem
            icon={<Users size={20} />}
            active={false}
            href="#"
            label="Usuarios"
            sidebarMode={sidebarMode}
          />

          {/* Botón para opciones */}
          <li className="group relative">
            <button
              onClick={toggleOptions}
              className="flex items-center justify-center h-12 w-full text-gray-500 hover:text-gray-900"
            >
              <div className="border rounded-md p-2">
                <Option size={20} />
              </div>
              {sidebarMode === "iconText" && (
                <span className="ml-2">Opciones</span>
              )}
              {sidebarMode === "expandOnHover" && (
                <span className="ml-2 hidden group-hover:inline">Opciones</span>
              )}
            </button>

            {/* Popover de opciones */}
            {showOptions && (
              <div className="absolute top-full left-3  bg-white border rounded shadow-md z-50 w-44">
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
          </li>

        </ul>

      </nav>
      {children}
    </aside>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  active: boolean
  href: string
  label: string
  sidebarMode: SidebarMode
}

function SidebarItem({
  icon,
  active,
  href,
  label,
  sidebarMode,
}: SidebarItemProps) {
  return (
    // Se envuelve en un contenedor 'group' para usar group-hover en los tooltips o textos
    <li className="group relative">
      <Link
        href={href}
        className={`
          flex items-center h-12 w-full px-2 
          ${active ? "text-blue-600 border-l-4 border-blue-600" : "text-gray-500 hover:text-gray-900"}
        `}
      >
        <div className="border rounded-md p-2">{icon}</div>

        {/* Modo Ícono + Texto: siempre se muestra el texto */}
        {sidebarMode === "iconText" && (
          <span className="ml-2">{label}</span>
        )}

        {/* Modo Expand Hover: el texto se muestra al hacer hover en el contenedor (usando group-hover) */}
        {sidebarMode === "expandOnHover" && (
          <span className="ml-2 hidden group-hover:inline">{label}</span>
        )}

        {/* En modo iconOnly y collapseOnHover no se muestra el texto inline */}
      </Link>

      {/* Modo Collapse Hover: se muestra un tooltip al hacer hover sobre el ítem */}
      {sidebarMode === "collapseOnHover" && (
        <span
          className="
            absolute left-full ml-2 top-1/2 -translate-y-1/2
            bg-gray-800 text-white text-xs px-2 py-1 rounded
            opacity-0 group-hover:opacity-100 transition-opacity
            pointer-events-none whitespace-nowrap z-50
          "
        >
          {label}
        </span>
      )}
    </li>
  )
}
