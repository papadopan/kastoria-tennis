import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-4 px-10">
      <section className="min-h-full bg-gray-100 mb-8 hero grid grid-cols-2 rounded-lg">
        <div className="flex items-center justify-center col-span-2 xl:col-span-1">
          <p className="-ml-6 text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl leading-3 tracking-wide md:tracking-widest font-light transform -rotate-90 ">
            Κέλετρον
          </p>
          <div className="-ml-6">
            <p className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl tracking-wide md:tracking-widest leading-loose font-light">
              Όμιλος
            </p>
            <p className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl tracking-wide md:tracking-widest leading-loose font-light">
              Αντισφαίρισης
            </p>
            <p className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl tracking-wide md:tracking-widest leading-loose font-light">
              Καστοριάς
            </p>
          </div>
        </div>
        <div className="bg-white heroImage col-span-2 xl:col-span-1 rounded-r-lg"></div>
      </section>
    </div>
  );
}
