"use client"
import localFont from "next/font/local";
import "./globals.css";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {NavBar} from "@/components/NavBar/NavBar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function RootLayout({children}) {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
      <NavBar></NavBar>
      </body>
      </html>
    </ThemeProvider>

  );
}
