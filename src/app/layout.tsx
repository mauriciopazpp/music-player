import Navbar from "@/components/common/navbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
