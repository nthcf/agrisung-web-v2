import Banner from "@/components/common/Banner";
import MainSearchForm from "@/components/form/MainSearchForm";

import LogoAndMenu from "./LogoAndMenu";
import TopBar from "./TopBar";

export default function Header2() {
  return (
    <header className="border-brand-gray-3 overflow-hidden border-b">
      <TopBar />
      <LogoAndMenu />
      <div className="container mx-auto px-4 lg:px-20 xl:px-34">
        <Banner
          data={{
            style: "horizontal",
            title: "Agri Sung",
            subtitle: "",
            description: "",
            ctaTitle: "Learn More",
            ctaLink: "/",
            position: "pos1",
            imgMedia: {
              name: "shumilov-ludmila-j7X_hySaUa4-unsplash.jpg",
              url: "https://agrisung-static.s3.ap-southeast-1.amazonaws.com/shumilov_ludmila_j7_X_hy_Sa_Ua4_unsplash_02544397f5.jpg",
            },
          }}
        />
      </div>
      <MainSearchForm />
    </header>
  );
}
