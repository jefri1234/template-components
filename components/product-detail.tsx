import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function ProductDetail() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">iPhone 15 128 / 256 / 512 IBOX</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="iPhone 15"
            width={300}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-600" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

