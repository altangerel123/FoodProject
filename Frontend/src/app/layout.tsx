import type { Metadata } from "next";

import { PropsWithChildren } from "react";
import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Theme } from "@/theme";
import { AuthProvider } from "@/component/AupthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={Theme}>
            <Stack>
              <Header />
              <AuthProvider>{children}</AuthProvider>
              <Footer />
            </Stack>
          </ThemeProvider>
          <CssBaseline />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
