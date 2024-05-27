"use client";
import styles from "./links.module.css";
import NavLinks from "./navLinks/navLinks";
import Image from "next/image";
import { useState } from "react";
import { handleGithubLogout } from "@/lib/acition";
import { auth } from "@/lib/auth";

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

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((l) => (
          <NavLinks item={l} key={l.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLinks item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleGithubLogout}>
              <button className={styles.logout}>LogOut</button>
            </form>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button> */}
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((l) => (
            <NavLinks item={l} key={l.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

// 1:48
