"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const q = searchParams.get("q");
  console.log({ q });
  const handleClick = () => {
    console.log("clicked");
    router.push("/");
  };

  return (
    <div>
      <Link href="/" prefetch={false}></Link>
      <button onClick={handleClick}> Write and Redirecet</button>
    </div>
  );
};

export default NavigationTestPage;
