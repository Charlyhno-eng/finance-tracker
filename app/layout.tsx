import type { Metadata } from "next";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "finance-tracker",
  description: "Allows me to track my financial performance and assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: "2rem" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
