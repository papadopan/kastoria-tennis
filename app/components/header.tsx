import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-5  flex items-center px-6 justify-between border-b">
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
          {/* <Link href="/posts">
            <li>Ανακοινώσεις</li>
          </Link> */}
        </ul>
      </nav>
    </header>
  );
};
