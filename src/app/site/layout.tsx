import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navigation from "@/components/site/Navigation";
import { ThemeWrapper } from "@/components/site/ThemeWrapper";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plura",
  description: "All in one agency solution ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider appearance={{ baseTheme: dark }}>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeWrapper>
      </body>
    </html>
    // </ClerkProvider>
  );
}
