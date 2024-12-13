import { Session } from "next-auth";

import LogoAndMenu from "./LogoAndMenu";
import TopBar from "./TopBar";

type Header3Props = {
  session: Session | null;
};

export default function Header3({ session }: Header3Props) {
  return (
    <header className="border-brand-gray-3 border-b">
      <TopBar user={session?.user} />
      <LogoAndMenu />
    </header>
  );
}
