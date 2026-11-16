import { Roboto } from "next/font/google";
import "./globals.css";
import SiteHeader from "./SiteHeader";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Lee Min-ho | Perfil",
  description: "Clone da página de perfil do LinkedIn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
