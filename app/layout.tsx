import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { switchThemeDuration } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

// import { ThemeProvider } from "./theme-prodiver";
// import { ThemeSwitcher } from "./components/theme-switcher";
// import { switchThemeDuration } from "./constants";

export const metadata: Metadata = {
  title: "CRUD Note App",
  description: "Next.js CRUD Note App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <ThemeSwitcher /> */}
          <NavBar />

          <main className="container mx-auto px-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
