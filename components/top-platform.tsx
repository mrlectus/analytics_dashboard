import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { TPlatform, top_platform } from "@/data/data";
import { formatCurrency } from "@/utils/utils";
import clsx from "clsx";
export const TopPlatformItem = ({ item }: { item: TPlatform }) => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <p className="font-bold">{item.platform}</p>
      <Progress
        value={item.percent * 4}
        color="green"
        indicatorColor={clsx("rounded-full", {
          "bg-[#6160DC]": 1 === item.id,
          "bg-[#54C5EB]": 2 === item.id,
          "bg-[#FFB74A]": 3 === item.id,
          "bg-[#FF4A55]": 4 == item.id,
        })}
      />
      <div className="opacity-75 flex justify-between">
        <span>{formatCurrency(item.amount)}</span>
        <span>+{item.percent}%</span>
      </div>
    </div>
  );
};
export const TopPlatform = () => {
  return (
    <Card className="w-full md:w-[50%] p-3">
      <CardTitle className="text-md px-6 flex justify-between">
        <span>Top Content</span>
        <Link href="#" className="text-[#34CAA5]">
          See All
        </Link>
      </CardTitle>
      <CardContent>
        {top_platform.map((item) => {
          return <TopPlatformItem item={item} />;
        })}
      </CardContent>
    </Card>
  );
};
