import createMiddleware from "next-intl/middleware";

import { auth } from "./auth";
import { routing } from "./i18n/routing";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

const intlMiddleware = createMiddleware(routing);

export default auth(intlMiddleware);
