import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout(props: any) {
  const { children, socials } = props;
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
      <Footer socials={socials} />
    </>
  );
}
