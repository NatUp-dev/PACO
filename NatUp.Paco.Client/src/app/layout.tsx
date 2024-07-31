import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Paco",
  description: "Paco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(montserrat.className, "debug-screens")}>
        <div className="bg-natup-gradient h-1.5 w-full fixed top-0 z-50"></div>
        {children}
        <Toaster
          visibleToasts={4}
          position="top-right"
          closeButton
          toastOptions={{
            closeButton: true,
            duration: 3000,
            classNames: {
              toast: "right-0",
            },
          }}
        />
      </body>
    </html>
  );
}
