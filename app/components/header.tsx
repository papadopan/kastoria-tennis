import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-5  flex items-center px-6 justify-end border-b">
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
    </header>
  );
};
