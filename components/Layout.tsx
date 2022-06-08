import Head from "next/head";
import { FC } from "react";
import { Navbar, Footer, Link, Sidebar } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
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
    <>
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

      <div className="bg-gradient-to-t from-[#ffe3f4] via-[#ebfffe] to-white dark:from-[#2b072d] dark:via-[#0f0623] dark:to-[#06010a]">
        <Sidebar />
        <Navbar />
        <main className="container flex-1 mx-auto sm:px-10 px-6 max-w-7xl pt-5">
          {children}
          {!home && (
            <Link
              href="/"
              className="flex items-center justify-end mt-8 mb-2 text-gray-500 hover:text-gray-900"
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="h-6 w-6 "
              />
              <span className="ml-2 text-lg">Back to home</span>
            </Link>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};
