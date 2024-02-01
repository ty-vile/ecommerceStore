"use client";
type Props = {
  children: React.ReactNode;
};
const Carousel = ({ children }: Props) => {
  return (
    <div className="overflow-hidden">
      <div className="flex">{children}</div>
    </div>
  );
};

export default Carousel;
