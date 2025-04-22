import type React from "react";
import { ArrowDown, ArrowUp, Computer, DollarSign, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ProductStatistics() {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader className="pb-3 border-b border-border">
        <CardTitle className="text-lg font-medium">Product Statistic</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <StatCard
            icon={<Computer className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
            title="Product Stock"
            value="4,189"
            change={2}
            iconBg="bg-blue-100 dark:bg-blue-900"
          />
          <StatCard
            icon={<DollarSign className="h-5 w-5 text-red-600 dark:text-red-400" />}
            title="Sales Value"
            value="8,918"
            change={-22}
            iconBg="bg-red-100 dark:bg-red-900"
          />
          <StatCard
            icon={<Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />}
            title="Customer Satisfaction"
            value="4.8 (417 Reviews)"
            change={0}
            iconBg="bg-yellow-100 dark:bg-yellow-900"
          />
          <StatCard
            icon={<DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />}
            title="Revenue Growth"
            value="89%"
            change={2}
            iconBg="bg-green-100 dark:bg-green-900"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  value: string;
  change: number;
}

function StatCard({ icon, iconBg, title, value, change, ...props }: StatCardProps) {
  return (
    <div className="flex items-center p-4 border rounded-lg bg-card text-card-foreground" {...props}>
      <div className={cn("p-2 rounded-md mr-3", iconBg)}>{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
      {change !== 0 && (
        <div
          className={cn(
            "ml-auto px-2 py-1 rounded-md text-xs font-medium flex items-center",
            change > 0
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
          )}
        >
          {change > 0 ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
          {Math.abs(change)}%
        </div>
      )}
    </div>
  );
}