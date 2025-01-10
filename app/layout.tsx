"use client";

import "../styles/global.css";
import Navigation from "../components/navigation";
import StyledComponentsRegistry from "../lib/registry";
import MainGridBox from "../components/main-grid-box";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const pathname = usePathname();

  useEffect(() => {
    const defaultTitle = "Next News";
    const pageTitle = pathname === "/" ? "Home" : pathname.replace(/^\/+/, "");
    const title = `${pageTitle} | ${defaultTitle}`;

    document.title = title;
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <Head>
          <meta name="description" content="The best online news media" />
        </Head>
        <body>
          <StyledComponentsRegistry>
            <Navigation />
            <MainGridBox>
              <>{children}</>
            </MainGridBox>
          </StyledComponentsRegistry>
        </body>
      </html>
    </QueryClientProvider>
  );
}
