import { Tchart, chart } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  SVGAlertError,
  SVGAlertSuccess,
  SVGBox,
  SVGBoxRotate,
  SVGCart,
  SVGCoin,
} from "./icons/icons";
import { match } from "ts-pattern";
import { formatCurrency } from "@/utils/utils";
import clsx from "clsx";

const ChartIcon = [<SVGBox />, <SVGBoxRotate />, <SVGCart />, <SVGCoin />];
const ChartAlert = [
  <SVGAlertSuccess />,
  <SVGAlertError />,
  <SVGAlertError />,
  <SVGAlertSuccess />,
];
const ChartItem = ({ item }: { item: Tchart }) => {
  return (
    <Card className="p-2 h-fit">
      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between">
          {ChartIcon[item.id - 1]}
          {ChartAlert[item.id - 1]}
        </div>
        <p className="text-xl text-black/70">{item.title}</p>
        <p className="text-2xl font-bold">
          {match(item.id)
            .with(4, () => formatCurrency(item.amount))
            .otherwise(() => item.amount)}
        </p>
        <p>
          <span
            // 1 2 3 4
            className={clsx("rounded-full p-1 px-2 h-5", {
              "bg-[#34CAA5]/20 text-[#34CAA5]": item.id === 1,
              "bg-[#ED544E]/20 text-[#ED544E]": item.id === 2,
              "text-[#ED544E] bg-[#ED544E]/20 ": item.id === 3,
              "text-[#34CAA5] bg-[#34CAA5]/20 ": item.id === 4,
            })}
          >
            23,5 %
          </span>{" "}
          vs. previous month
        </p>
      </CardContent>
    </Card>
  );
};

export const Chart = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3 h-fit flex gap-2 flex-wrap">
      {chart.map((item) => {
        return <ChartItem key={item.id} item={item} />;
      })}
    </div>
  );
};
