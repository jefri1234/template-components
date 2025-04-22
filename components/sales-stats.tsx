import { ArrowUp, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SalesStats() {
  return (
    <div className="space-y-4">
      <SalesCard title="Sales This Week" amount="$12,100" sold={67} change={22} />
      <SalesCard title="Total Sales" amount="$4,125,100" sold={4619} change={2} />
    </div>
  );
}

interface SalesCardProps {
  title: string;
  amount: string;
  sold: number;
  change: number;
}

function SalesCard({ title, amount, sold, change }: SalesCardProps) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm text-muted-foreground">{sold} Sold</div>
          <div className="text-3xl font-bold">{amount}</div>
        </div>
        <div className="relative h-24">
          <svg className="w-full h-full" viewBox="0 0 100 30">
            <path
              d="M0,30 L1,28 L2,29 L3,26 L4,25 L5,24 L6,25 L7,24 L8,22 L9,20 L10,18 L11,17 L12,16 L13,15 L14,16 L15,14 L16,13 L17,12 L18,13 L19,12 L20,11 L21,10 L22,9 L23,8 L24,7 L25,8 L26,7 L27,6 L28,5 L29,6 L30,5 L31,4 L32,3 L33,4 L34,3 L35,2 L36,1 L37,2 L38,1 L39,2 L40,1 L41,2 L42,3 L43,2 L44,3 L45,4 L46,5 L47,6 L48,7 L49,8 L50,9 L51,8 L52,9 L53,8 L54,7 L55,6 L56,5 L57,4 L58,3 L59,2 L60,1 L61,2 L62,3 L63,4 L64,5 L65,4 L66,3 L67,2 L68,1 L69,0 L70,1 L71,0 L72,1 L73,0 L74,1 L75,0 L76,1 L77,0 L78,1 L79,0 L80,1 L81,2 L82,1 L83,0 L84,1 L85,2 L86,3 L87,2 L88,1 L89,0 L90,1 L91,2 L92,1 L93,0 L94,1 L95,0 L96,1 L97,0 L98,1 L99,0 L100,1"
              fill="none"
              stroke="blue"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <ArrowUp className="mr-1 h-3 w-3" />
            {change}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
}