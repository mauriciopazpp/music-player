import Navbar from "@/components/ui/Navbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi">
      <body className="antialiased dark:bg-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
