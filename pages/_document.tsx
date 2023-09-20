import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="keywords"
          content="muhammad iqbal, iqbal, frontend developer, web developer, programmer, developer, website development, iqbaldev"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0YD1V5KNQE"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0YD1V5KNQE');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
