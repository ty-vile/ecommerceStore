type Props = {
  children: React.ReactNode;
};

const CarouselWrapper = ({ children }: Props) => {
  return (
    <div className="overflow-hidden">
      <div className="flex">{children}</div>
    </div>
  );
};

export default CarouselWrapper;
