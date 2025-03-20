"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function withAuth<T extends object>(Component: React.ComponentType<T>) {
  return function AuthComponent(props: T) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = Cookies.get("token"); 
      if (!token) {
        router.push("/auth/login"); 
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    if (!isAuthenticated) return null; 

    return <Component {...props} />;
  };
}
