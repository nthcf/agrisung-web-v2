import { useTranslations } from "next-intl";
import Image from "next/image";

import Button from "@/components/common/Button";
import { Link } from "@/i18n/routing";

import CreateRfq from "./CreateRfq";
import Navbar from "./Navbar";

export default function LogoAndMenu() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 lg:px-20 xl:px-34">
      <div className="flex items-center justify-between py-3">
        <Link href="/">
          <Image
            className="h-auto max-w-36"
            src="/logo.svg"
            alt={t("shared.title")}
            width={395}
            height={118}
            priority
          />
        </Link>
        <div className="">
          <Navbar />
        </div>
        <div className="flex gap-3">
          <Button color="gray" size="icon-lg">
            <span className="icon-[octicon--search-16] size-5" />
          </Button>
          <CreateRfq />
        </div>
      </div>
    </div>
  );
}
