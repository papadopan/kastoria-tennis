import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <section className="bg-green-100 p-6 grid grid-cols-4 gap-4">
        {coaches.map((coach) => (
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
        ))}
      </section>
    </div>
  );
}
