import Image from "next/image";

const coaches = [
  {
    name: "Κώστας Τοκατλίδης",
    description: [
      "Απόφοιτος τμήματος φυσικής αγωγής και αθλητισμού Θεσσαλονίκης",
      "Ειδικεύεται στην αντισφαίριση",
      "Προπονητής στις ακαδημίες του ΑΠΘ",
      "Συμμετοχή και διακρίσεις σε πανελλήνια πρωταθλήματα",
    ],
    image: "/kostas.jpeg",
    role: "Προπονητής",
  },
  {
    name: "Χρήστος Τοκατλίδης",
    description: [
      "Τεχνικός Σύμβουλος - Ομοσπονδιακός Προπονητής",
      "Πρώτες θέσεις σε πανευρωπαικά πρωταθλήματα",
      "Αρχηγός αποστολών πανευρωπαικά πρωταθλήματα",
      "Αρχηγός αποστολής το 2004 στην Πολωνία Α16",
    ],
    image: "/christos.jpeg",
    role: "Προπονητής",
  },
];

const sponsors = [
  "/sponsors/arxontiko.jpeg",
  "/sponsors/dragwnas.jpeg",
  "/sponsors/era.jpeg",
  "/sponsors/genosi.jpeg",
  "/sponsors/optika.jpeg",
  "/sponsors/papia.jpeg",
  "/sponsors/revel.png",
  "/sponsors/service.jpeg",
  "/sponsors/soukalopoulos.jpeg",
];

export default function Home() {
  return (
    <div>
      {/* Welcome section */}
      <section className="min-h-full bg-gray-100 mb-8 h-[75vh] grid grid-cols-2 rounded-lg">
        <div className="flex items-center justify-center col-span-2 xl:col-span-1">
          <p className="text-2xl sm:text-3xl md:text-4xl  2xl:text-5xl font-light transform -rotate-90">
            Κέλετρον
          </p>
          <div className="flex flex-col gap-2 md:gap-6">
            <p className="text-2xl sm:text-3xl md:text-4xl  2xl:text-5xl tracking-wide  leading-loose font-light">
              Όμιλος
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl  2xl:text-5xl tracking-wide  leading-loose font-light">
              Αντισφαίρισης
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl  2xl:text-5xl tracking-wide  leading-loose font-light">
              Καστοριάς
            </p>
          </div>
        </div>
        <div className="bg-white heroImage col-span-2 xl:col-span-1 rounded-r-lg"></div>
      </section>
      {/* Coaches section */}
      <section className="flex flex-col xl:flex-row items-center justify-around py-40 md:px-10 gap-16">
        {coaches.map((coach) => (
          <figure
            key={coach.name}
            className="rounded-xl py-10 p-8 max-w-[800px] w-full shadow-2xl"
          >
            <Image
              className="w-24 h-24  rounded-full mx-auto"
              src={coach.image}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6  text-center  space-y-4">
              <blockquote className="space-y-2">
                {coach.description.map((description) => (
                  <p className="text-sm sm:text-md" key={description}>
                    {description}
                  </p>
                ))}
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  {coach.name}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  {coach.role}
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </section>
      {/* advert */}
      <section className="mt-10 flex flex-col items-center bg-gray-50 py-10 md-py-56 px-6">
        <h1 className="text-lg md:text-2xl font-bold leading-10 text-center">
          Θέλεις να βιώσεις μια μοναδική εμπειρία στα γήπεδα μας
        </h1>
        <h1 className="text-md md:text-lg font-bold leading-10 text-center text-gray-500 md:my-6">
          Θέλεις να αισθανθείς την απόλυτη ευχαρίστηση του τέννις στην Καστοριά
        </h1>
        <div className="flex gap-10 w-full max-w-md items-center justify-center p-6 bg-green-200 rounded-lg shadow-lg mt-8  bg-gradient-to-tl rounded-b-xl leading-6 font-semibold text-white from-green-600 to-green-700">
          <div className="text-6xl md:text-9xl text-green-50">1</div>
          <div className="w-80 text-green-50 text-md">
            Τμήματα υψηλού αγωνιστικού επιπέδου σε Juniors και Senior
          </div>
        </div>
        <div className="flex gap-10 w-full max-w-md items-center justify-center p-6 bg-green-200 rounded-lg shadow-lg mt-8  bg-gradient-to-tl rounded-b-xl leading-6 font-semibold text-white from-green-600 to-green-700">
          <div className="text-6xl md:text-9xl text-green-50">2</div>
          <div className="w-80 text-green-50 text-md">
            Προαγωνιστικού επιπέδου για αρχάριους
          </div>
        </div>
        <div className="flex gap-10 w-full max-w-md items-center justify-center p-6 bg-green-200 rounded-lg shadow-lg mt-8  bg-gradient-to-tl rounded-b-xl leading-6 font-semibold text-white from-green-600 to-green-700">
          <div className="text-6xl md:text-9xl text-green-50">3</div>
          <div className="w-80 text-green-50 text-md">
            Δυνατότητα για mini-tennis και play and stay
          </div>
        </div>
      </section>
      {/* Carousel sponsor image */}
      <section className="mt-16">
        <h1 className="text-3xl font-bold leading-10 text-center mb-20">
          Οι Συνεργάτες μας
        </h1>
        <div className="grid grid-cols-4 gap-8 ">
          {sponsors.map((sponsor) => (
            <Image
              key={sponsor}
              src={sponsor}
              alt={sponsor}
              width={400}
              height={300}
              className="rounded-lg aspect-w-16 aspect-h-32 object-cover col-span-4 sm:col-span-2 lg:col-span-1"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
