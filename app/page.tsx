import { Chart } from "@/components/chart";
import { LastOrder } from "@/components/last-order";
import { SalesTrend } from "@/components/sales-trend";
import { TopPlatform } from "@/components/top-platform";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-2 p-4 flex-1 justify-around">
      <SalesTrend />
      <Chart />
      <LastOrder />
      <TopPlatform />
    </div>
  );
}
