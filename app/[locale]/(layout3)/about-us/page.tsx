import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

import { Locale } from "@/site.config";

export default async function AboutUs({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="">
      <div className="container mx-auto">
        <div className="relative aspect-[64/9] bg-bg-brand-bright">
          <Image
            src="/demo-1.jpg"
            alt="Agri Sung"
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <article className="prose prose-sm mx-auto max-w-[120ch] px-4 py-4 lg:px-20 xl:px-34">
          <h1>
            Agri Sung: Reliable Sourcing of Vietnam&apos;s Finest Products
          </h1>
          <p>
            We are a dedicated B2B marketplace, connecting the finest
            agricultural products from Vietnam withcustomers around the globe.
            Focusing on the export of both fresh and processed goods, we
            arecommitted to maintaining high standards of quality and
            innovation. Our comprehensive, end-to-endinternational supply chain
            service enhances our offerings by ensuring seamless processes and
            timelydeliveries from suppliers in Vietnam to customers worldwide.
          </p>
          <h2>Our Mission</h2>
          <p>
            To elevate Vietnamese agricultural products to the global stage
            through our digital B2B marketplace,ensuring excellence,
            convenience, and innovation at every step of the process
          </p>
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Integrity</strong>: We believe in doing business the right
              way, with transparency and trust.
            </li>
            <li>
              <strong>Supportive</strong>: We empower our partners—fromfarmers
              to suppliers and customers.
            </li>
            <li>
              <strong>Innovation</strong>: Embracing new ideas, we leverage
              technology to simplify the supply chain.
            </li>
            <li>
              <strong>Data-Driven</strong>: Our decisions are guided by data to
              ensure efficiency and continuousimprovement.
            </li>
          </ul>
          <h2>Marketplace at Our Core (for customers)</h2>
          <p>
            Agri Sung is a leading B2B marketplace dedicated to connecting
            Vietnamese suppliers with globalmarkets. We empower Vietnamese
            producers to showcase and export their high-quality
            products,creating valuable opportunities for international customers
            to access high quality agricultural productsfrom Vietnam. Through
            our end-to-end international supply chain management service, we
            ensureexceptional, tailored support to meet the unique needs of both
            suppliers and customers. With seamless,data-driven processes, we
            deliver a reliable and efficient experience for every partner in the
            global valuechain.
          </p>
          <h2>Why &ldquo;Agri Sung&rdquo;?</h2>
          <p>
            &ldquo;Agri&rdquo; signifies our strong foundation in agriculture,
            while &ldquo;Sung&rdquo; embodies prosperity and happiness. Agri
            Sung represents our vision to cultivate growth and success for
            everyone we work with, from thefields of Vietnam to dining tables
            around the globe.
          </p>
          <h2>How We Make a Difference</h2>
          <p>
            Through our innovative approach, we create systems that connect key
            stakeholders across theagricultural value chain, enabling seamless
            collaboration. Our transparent, data-driven processes,combined with
            deep local expertise, global expansion capabilities, and end-to-end
            international supplychain service, enable us to.
          </p>
          <ul>
            <li>
              Empower global customers to source high-quality agricultural
              products from Vietnam with ease.
            </li>
            <li>
              Assist Vietnamese suppliers in expanding their reach, making their
              products accessible to markets worldwide.
            </li>
            <li>
              Provide end-to-end international supply chain solutions - from
              sourcing and certification to delivery - ensuring smooth,
              reliable, and efficient operations across borders.
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
}
