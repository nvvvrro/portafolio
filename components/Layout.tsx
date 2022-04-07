import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { FC } from "react";
import { DarkMode } from "./nav/DarkMode";

export const siteTitle = "Navarro's Blog";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, home, ...props }) => {
  const meta = {
    title: "Navarro's Blog - Developer, Software Engineer",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/images/profile.jpg",
    type: "website",
    ...props,
  };

  return (
    <div className="dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            meta.image
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="w-full py-4 mx-auto">
        <DarkMode />
        <Navbar />
      </header>

      <main className="container w-full mx-auto px-4">
        {/*  <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt={name}
              />
              <h1>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2>
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header> */}
        {children}

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
