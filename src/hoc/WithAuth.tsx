"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function withAuth<T extends object>(Component: React.ComponentType<T>) {
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
    }, [router]);

    if (!isAuthenticated) return null; // ✅ Prevent flashing of protected content

    return <Component {...props} />;
  };
}
