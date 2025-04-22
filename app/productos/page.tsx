import React from 'react'

import { ProductStatistics } from "@/components/product-statistics"
import { ProductTable } from "@/components/product-table"
import { ProductDetail } from "@/components/product-detail"
import { SalesStats } from "@/components/sales-stats"
function PageProductos() {
  return (
    
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-[1600px] mx-auto space-y-4">
          <ProductStatistics />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <ProductTable />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <ProductDetail />
              <SalesStats />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PageProductos
