import LogoAndMenu from "./LogoAndMenu";
import TopBar from "./TopBar";

export default function Header3() {
  return (
    <header className="border-brand-gray-3 border-b">
      <TopBar />
      <LogoAndMenu />
    </header>
  );
}
