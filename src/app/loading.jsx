import Image from "next/image";
export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image src="spinner.svg" alt="description" width={208} height={208} />;
    </div>
  );
}
