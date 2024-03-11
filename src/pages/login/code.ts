import { NextApiRequest, NextApiResponse } from "next";
import { MOCK_LOGIN } from "@lib/mock/profile";
import { COOKIE_LOGIN, createCookie } from "@lib/cookie";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Common.ApiResponse>
) {
    const { uid } = req.body;

    const profile = MOCK_LOGIN[1];


    res.setHeader("Set-Cookie", createCookie(COOKIE_LOGIN, 'true', { maxAge: 60 * 60 * 24 })); // 24 hours
    res.status(200).json({ date: Date.now(), message: "Success.", status: 200 });
}
