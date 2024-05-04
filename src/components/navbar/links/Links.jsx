import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div>
      {links.map((l) => (
        <Link href={l.path} key={l.title}>
          {l.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
