import { Chart } from "@/components/chart";
import { LastOrder } from "@/components/last-order";
import { SalesTrend } from "@/components/sales-trend";
import { TopPlatform } from "@/components/top-platform";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4 justify-evenly flex-wrap flex-start">
        <SalesTrend />
        <Chart />
      </div>
      <div className="flex gap-4">
        <LastOrder />
        <TopPlatform />
      </div>
    </div>
  );
}
