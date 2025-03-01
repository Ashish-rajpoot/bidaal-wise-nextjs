import Nav from "@/components/ui/Nav";
import "./globals.css";
import { NavProvider } from "@/providers/NavContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavProvider>
          <Nav />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
