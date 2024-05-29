import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
export const metadata = {
  title: "APDS",
  description: "Associação Provincial para o Desenvolvimento Sustentável de Cabo Delgado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div className="space-y-20">
          <Navbar />
          <main className=" flex-grow flex-shrink min-h-[100vh]">{children}</main>
          <div className="mb-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
