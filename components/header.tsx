import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4">
      <h1 className="text-xl font-semibold">Product</h1>

      <div className="flex items-center gap-2">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-[200px] pl-8 rounded-md border border-gray-200"
          />
        </div>

        <Button className="hidden sm:flex gap-1 bg-[#0f172a] hover:bg-[#1e293b]">
          <Plus size={16} />
          <span>New Product</span>
        </Button>
        {/* cuando esta en 640px se muestra el boton  */}
        <Button size="icon" className="sm:hidden bg-[#0f172a] hover:bg-[#1e293b]">
          <Plus size={16} />
        </Button>
      </div>
    </header>
  )
}

