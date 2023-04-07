import "@/styles/globals.css";
import localFont from "next/font/local";

const hankenGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/HankenGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/HankenGrotesk-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/HankenGrotesk-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-hanken-grotesk",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${hankenGrotesk.variable} bg-white font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
