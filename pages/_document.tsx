import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Online cosmetic items shop" />
          <meta
            name="keywords"
            content="cosmetics, shop, erotic cosmetics, sexshop, adult toys"
          />
          <meta name="aplication-name" content="portfolio" />
          <meta name="author" content="nvvvrro" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Poiret+One&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="headlessui-portal-root" />
        </body>
      </Html>
    );
  }
}
