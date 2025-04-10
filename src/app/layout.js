import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Aprendiendo NextJS",
  description: "Diseñando en NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
