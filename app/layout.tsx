
import type { Metadata } from 'next'
import './globals.css'
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"


export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div >
          <Header />
        </div>

        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          {children}
        </div>

      </body>
    </html>
  )
}
