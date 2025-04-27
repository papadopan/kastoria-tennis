import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-5 px-6  border-b">
        <div className="max-w-[2300px] w-full flex items-center  justify-between  m-auto">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Λογότυπο ΕΠΑΛ Καρπενησίου"
              width={64}
              height={64}
            />
          </Link>
          <nav>
            <ul className="flex gap-4">
              <Link href="/">
                <li>Αρχική</li>
              </Link>
              <Link href="/posts">
                <li>Ανακοινώσεις</li>
              </Link>
            </ul>
          </nav>
        </div>
    </header>
  );
};
