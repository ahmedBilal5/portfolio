import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Heebo } from "next/font/google";
import NavBar from "./_components/navBar";
import { socialPlatforms } from "./constants";
import Footer from "./_components/footer";

const heebo = Heebo();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={heebo.className} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
        </head>

      <body>
        <ThemeProvider enableSystem={true} defaultTheme="system">
          <div className="w-full max-w-sections mx-auto px-4 md:px-8 flex flex-col min-h-screen">
            <NavBar />
            {children}
            <Footer platforms={socialPlatforms} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
