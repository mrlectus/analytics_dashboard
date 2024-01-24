import { Chart } from "@/components/chart";
import { LastOrder } from "@/components/last-order";
import { SalesTrend } from "@/components/sales-trend";
import { TopPlatform } from "@/components/top-platform";

export default function Home() {
  return (
    <div className="flex flex-row gap-4 p-4 justify-evenly">
      <div className="flex flex-col gap-4">
        <SalesTrend />
        <LastOrder />
      </div>
      <div className="flex h-fit gap-4 flex-col">
        <Chart />
        <TopPlatform />
      </div>
    </div>
  );
}
