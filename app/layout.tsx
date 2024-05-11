import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const vazir = localFont({
  src: '../public/fonts/Vazirmatn-SemiBold.woff2',
})


export const metadata: Metadata = {
  title: "Next.js 14",
  description: "Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${vazir.className}`}>
        <main className="p-5">
        {children}
        </main>
      </body>
    </html>
  );
}
