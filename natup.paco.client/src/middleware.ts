import { NextResponse, NextRequest } from "next/server";

const autoRedirectPaths = [
  {
    path: "/activites/suivi-de-collectes",
    redirectPAth: "/activites/suivi-de-collectes/grains/synthese",
  },
  {
    path: "/activites/suivi-de-collectes/grains",
    redirectPAth: "/activites/suivi-de-collectes/grains/synthese",
  },
  {
    path: "/activites/suivi-de-collectes/ovins",
    redirectPAth: "/activites/suivi-de-collectes/ovins/synthese",
  },
  {
    path: "/activites/suivi-de-collectes/bovins",
    redirectPAth: "/activites/suivi-de-collectes/bovins/synthese",
  },
  {
    path: "/activites/suivi-de-collectes/legumes",
    redirectPAth: "/activites/suivi-de-collectes/legumes/synthese",
  },
];

export async function middleware(request: NextRequest) {
  const redirect = autoRedirectPaths.find(
    (a) => a.path === request.nextUrl.pathname
  );
  if (redirect != null) {
    return NextResponse.redirect(new URL(redirect.redirectPAth, request.url));
  }
}

export const config = {
  matcher: ["/activites/suivi-de-collectes/:path*"],
};
