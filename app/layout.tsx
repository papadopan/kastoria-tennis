import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Κέλετρον Όμιλος Αντισφαίρισης Καστοριάς",
  description: "ομιλος αντισφαιρισης καστοριας κελετρον",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body className={inter.className}>
        <Header />
        <main className=" p-10">{children}</main>
      </body>
    </html>
  );
}
