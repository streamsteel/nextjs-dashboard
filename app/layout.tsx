import "@/app/ui/global.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"${inter.ClassName} antialoased"}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
