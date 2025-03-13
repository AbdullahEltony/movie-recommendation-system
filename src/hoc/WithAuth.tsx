"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function withAuth<T extends Record<string, unknown>>(Component: React.ComponentType<T>) {
  return function AuthComponent(props: T) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = Cookies.get("token"); // ✅ Get token from cookies (client-side)
      if (!token) {
        router.push("/auth/login"); // ✅ Redirect if no token
      } else {
        setIsAuthenticated(true);
      }
    }, []);

    if (!isAuthenticated) return null; 

    return <Component {...props} />;
  };
}
