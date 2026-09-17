import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dante Verdi Gutiérrez | Full-Stack Developer & Software Engineer",
  description: "Portfolio de Dante Verdi Gutiérrez - Full-Stack Developer, estudiante de Licenciatura en Gestión de TI (UADE) y técnico en informática (ORT). React, Node.js, C#, Java, PostgreSQL y soluciones de software.",
  keywords: ["Dante Verdi Gutiérrez", "Dante Verdi", "Full-Stack Developer", "Software Engineer", "React", "Node.js", "UADE", "ORT", "Argentina", "Programador"],
  authors: [{ name: "Dante Verdi Gutiérrez" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
