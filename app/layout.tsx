"use client";
import "./globals.css";
import Header from "./_components/Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </Provider>
      </body>
    </html>
  );
}
