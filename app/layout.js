import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
export const metadata = {
  title: "APDS",
  description: "Associação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div>
          <Navbar />
          <main>{children}</main>
          <div className="flex flex-col mb-0 -mt-px">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
