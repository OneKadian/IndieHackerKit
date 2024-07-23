import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// export default authMiddleware({
//   publicRoutes: ["/", "/api/(.*)"],
// });

export default authMiddleware({
  // Making sure homepage route and API, especially the webhook, are both public!
  publicRoutes: [
    "/",
    "/api/(.*)",
    "/Price",
    "/members",
    "/PrivacyPolicy",
    "/Terms&Conditions",
    "/Support",
    "/Cancellation&Refund",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
