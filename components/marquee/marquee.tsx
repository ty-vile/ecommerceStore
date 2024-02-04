import { cn } from "@/lib/utils";

type Props = {
  data: {
    styles?: string;
    content?: React.ReactNode[];
  };
};

const Marquee = ({ data }: Props) => {
  return (
    <div
      className={
        data.styles
          ? data.styles + " mt-4 overflow-x-hidden whitespace-nowrap"
          : "mt-4 overflow-x-hidden whitespace-nowrap"
      }
    >
      <div className="animate-marquee inline-block font-lato">
        {data?.content?.map((node, i) => {
          return node;
        })}
      </div>

      <div className="animate-marquee inline-block  font-lato">
        {data?.content?.map((node, i) => {
          return node;
        })}
      </div>
    </div>
  );
};

export default Marquee;
