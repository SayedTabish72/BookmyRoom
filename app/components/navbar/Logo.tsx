'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/Bookmyroom.png" 
      height="110" 
      width="150" 
      alt="Bookmyroom" 
    />
   );
}
 
export default Logo;
