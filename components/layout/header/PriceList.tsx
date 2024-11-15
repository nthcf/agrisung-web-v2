import { cx } from "class-variance-authority";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useFormatter } from "next-intl";
import Marquee from "react-fast-marquee";

import { type Price } from "@/libs/cms";

type FormattedPriceProps = {
  currency: string;
  value: number;
};

function FormattedPrice({ currency, value }: FormattedPriceProps) {
  const format = useFormatter();

  return (
    <p className="text-xs text-fg-text-brand">
      {format.number(value, {
        style: "currency",
        currency,
      })}
    </p>
  );
}

type TrendProps = {
  value: number;
};

function Trend({ value }: TrendProps) {
  const format = useFormatter();

  return (
    <p
      className={cx(
        "flex items-center gap-1 text-xs",
        value >= 0 ? "text-fg-text-success" : "text-fg-text-danger",
      )}
    >
      <span>
        {format.number(value, {
          style: "percent",
          minimumFractionDigits: 2,
          signDisplay: "never",
        })}
      </span>
      {value >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
    </p>
  );
}

type PriceListProps = {
  priceList: Price[];
};

export default function PriceList({ priceList }: PriceListProps) {
  return (
    <div className="container mx-auto px-4 lg:px-20 xl:px-34">
      <div className="-z-10 flex-1 overflow-hidden py-5">
        <Marquee className="h-full">
          <div className="relative mr-6 flex h-full gap-6 overflow-hidden">
            {priceList.map((item) => (
              <div key={item.id} className="flex shrink-0 items-center gap-1">
                <p className="text-xs">{item.title}</p>
                <FormattedPrice
                  currency={item.currency}
                  value={item.currentPrice}
                />
                <Trend
                  value={(item.currentPrice - item.oldPrice) / item.oldPrice}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
