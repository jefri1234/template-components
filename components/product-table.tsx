"use client"

import { useState } from "react"
import {
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash,
  Computer,
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Datos de ejemplo
const products = [
  { id: 1, name: "MacBook Pro with M2 Chip", price: 1200, stock: 1248, rating: 4.8, image: "laptop" },
  {
    id: 2,
    name: "iPhone 15 128 / 256 / 512 IBOX",
    price: 1660,
    stock: 2492,
    rating: 5.0,
    image: "phone",
    selected: true,
  },
  { id: 3, name: "Apple Watch Ultra 2 Alphine", price: 999, stock: 248, rating: 4.7, image: "watch" },
  { id: 4, name: "iPhone 15 Pro Max 256", price: 1600, stock: 124, rating: 4.2, image: "phone" },
  { id: 5, name: "MacBook Pro with M2 Chip", price: 1200, stock: 2901, rating: 5.0, image: "laptop" },
  { id: 6, name: "Apple Watch Series 9 45MM", price: 980, stock: 1890, rating: 4.6, image: "watch" },
  { id: 7, name: "Apple Watch Ultra 2 Alphine", price: 799, stock: 781, rating: 4.8, image: "watch" },
  { id: 8, name: "iPhone 15 Pro Max 256", price: 1660, stock: 120, rating: 4.4, image: "phone" },
  { id: 9, name: "iPhone 15 128 / 256 / 512 IBOX", price: 1660, stock: 129, rating: 4.5, image: "phone" },
  { id: 10, name: "Apple Watch Series 9 45MM", price: 999, stock: 1109, rating: 4.8, image: "watch" },
]

export function ProductTable() {
  const [activeTab, setActiveTab] = useState("published")
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Card>
      <CardHeader className="p-4 flex flex-row items-center justify-between">
        <Tabs defaultValue="published" className="w-auto" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="w-[40px] px-4 py-3">
                  <Checkbox />
                </th>
                <th className="text-left font-medium text-sm px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    Product Name
                    <ArrowUp className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="text-left font-medium text-sm px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    Pricing
                    <ArrowUp className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="text-left font-medium text-sm px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    Stock
                    <ArrowUp className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="text-left font-medium text-sm px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    Rating
                    <ArrowUp className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="text-left font-medium text-sm px-4 py-3 whitespace-nowrap">Activity</th>
                <th className="w-[40px] px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className={`border-b hover:bg-gray-50 ${product.selected ? "bg-blue-50" : ""}`}>
                  <td className="px-4 py-3">
                    <Checkbox checked={product.selected} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                        {product.image === "laptop" && <Computer className="h-3 w-3" />}
                        {product.image === "phone" && <div className="h-3 w-3 bg-gray-500 rounded-sm" />}
                        {product.image === "watch" && <div className="h-3 w-3 bg-gray-500 rounded-full" />}
                      </div>
                      <span className="text-sm">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">${product.price.toLocaleString("en-US")}</td>
                  <td className="px-4 py-3 text-sm">{product.stock.toLocaleString("en-US")}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <Star rating={product.rating} />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between p-4">
          <Button variant="outline" size="sm" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>

          <div className="flex items-center gap-1">
            {[1, 2, "...", 8, 9].map((page, i) => (
              <Button
                key={i}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className="h-8 w-8"
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={() => setCurrentPage(currentPage + 1)}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function Star({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="text-yellow-400">
          {i < fullStars ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ) : i === fullStars && hasHalfStar ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

