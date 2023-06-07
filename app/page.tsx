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

export default function Home() {
  return (
    <div>
      {/* Welcome section */}
      <section className="min-h-full bg-gray-100 mb-8 h-[85vh] grid grid-cols-2 rounded-lg">
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
      {/* Coaches section */}
      <section className="flex flex-col xl:flex-row items-center justify-around py-40 px-10 gap-16">
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
                  <p className="text-md" key={description}>
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
        {/* {coaches.map((coach) => (
          <Card className=" col-span-4 md:col-span-2" key={coach.name}>
            <CardHeader>
              <div className="mb-4 flex gap-6 items-center">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={coach.image} />
                </Avatar>
                <CardTitle>{coach.name}</CardTitle>
              </div>
              {coach.description.map((description) => (
                <CardDescription key={description}>
                  {description}
                </CardDescription>
              ))}
            </CardHeader>
          </Card>
          // <div className="col-span-4 md:col-span-2 bg-red-100">{coach}</div>
        ))} */}
      </section>
      {/* advert */}
      <section className="mt-10 flex flex-col items-center bg-gray-50 py-56">
        <h1 className="text-3xl font-bold leading-10">
          Θέλεις να βιώσεις μια μοναδική εμπειρία στα γήπεδα μας
        </h1>
        <h1 className="text-xl  font-bold leading-10">
          Θέλεις να αισθανθείς την απόλυτη ευχαρίστηση του τέννις στην Καστοριά
        </h1>
        <div className="flex gap-10 w-full max-w-md items-center justify-center p-6 bg-green-200 rounded-lg shadow-lg mt-8  bg-gradient-to-tl rounded-b-xl leading-6 font-semibold text-white from-green-600 to-green-700">
          <div className="text-9xl text-green-50">1</div>
          <div className="w-80 text-green-50 text-lg">
            Τμήματα υψηλού αγωνιστικού επιπέδου σε Juniors και Senior
          </div>
        </div>
        <div className="flex gap-10 w-full max-w-md items-center justify-center p-6 bg-green-200 rounded-lg shadow-lg mt-8  bg-gradient-to-tl rounded-b-xl leading-6 font-semibold text-white from-green-600 to-green-700">
          <div className="text-9xl text-green-50">2</div>
          <div className="w-80 text-green-50 text-lg">
            Προαγωνιστικού επιπέδου για αρχάριους
          </div>
        </div>
        <div className="flex gap-10 w-full max-w-md items-center justify-center p-6 bg-green-200 rounded-lg shadow-lg mt-8  bg-gradient-to-tl rounded-b-xl leading-6 font-semibold text-white from-green-600 to-green-700">
          <div className="text-9xl text-green-50">3</div>
          <div className="w-80 text-green-50 text-lg">
            Δυνατότητα για mini-tennis και play and stay
          </div>
        </div>
      </section>
    </div>
  );
}
