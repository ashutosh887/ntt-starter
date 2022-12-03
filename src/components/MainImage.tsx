import Image from "next/image";

type Props = {};

const MainImage = (props: Props) => {
  return (
    <Image
      src="/images/main.png"
      alt="Ashutosh's main image"
      className="animate-spin-slow"
      height={200}
      width={200}
    />
  );
};

export default MainImage;
