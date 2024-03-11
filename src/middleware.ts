import { NextRequest, NextResponse } from "next/server";
import { COOKIE_LOGIN, COOKIE_PROFILE } from "@lib/cookie";

const PUBLIC_FILE = /\.(.*)$/;

const shouldHandleRequest = (path: string): boolean => {
    return !PUBLIC_FILE.test(path) && !path.startsWith("/api") && !path.startsWith("/_next");
};

const isProfile = (path: string) => {
    return path.startsWith("/profile");
};

const isLogin = (path: string) => {
    return path.startsWith("/login");
};

export default async function middleware(req: NextRequest) {

    const res = NextResponse.next();
    const url = req.nextUrl.clone();

    if (!isLogin(url.pathname)) {
        const login = req.cookies.get(COOKIE_LOGIN);

        if (!!login) {
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }
    }
    if (!shouldHandleRequest && !isProfile && COOKIE_PROFILE) {

    }

    return res;
}
