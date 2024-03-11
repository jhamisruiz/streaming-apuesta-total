import React, { PropsWithChildren, useEffect, useState } from "react";
import cookie from "cookie";
import { COOKIE_LOGIN } from "@lib/cookie";
import { MOCK_LOGIN } from "@lib/mock/profile";
import { useRouter } from "next/router";
import { LoginContext } from './index';

export const LoginProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();
    const [login, setLogin] = useState<User.Login | null>(null);

    useEffect(() => {
        const cookies = cookie.parse(document.cookie);
        const islog = cookies[COOKIE_LOGIN];

        if (!islog) {
            return;
        }

        const login = MOCK_LOGIN[islog];

        if (cookies && login) {
            setLogin(login);
        }
    }, [router.pathname]);

    return <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>;
};
