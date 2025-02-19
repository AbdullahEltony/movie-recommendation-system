import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidenav />
      <Navbar />
      <main className="overflow-hidden ml-0 md:ml-48">{children}</main>
    </>
  );
}
