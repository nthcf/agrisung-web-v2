"use client";

import Footer from "@/components/layout/footer/Footer";
import Header3 from "@/components/layout/header/Header3";
import { Link } from "@/i18n/routing";

export default function UncaughtError() {
  return (
    <>
      <Header3 session={null} />
      <div className="container mx-auto my-40">
        <p className="font-heading text-center text-8xl font-bold">:(</p>
        <p className="text-fg-text-main-lc mt-6 text-center text-sm">
          Something went wrong, we&apos;re fixing it.
        </p>
        <p className="text-fg-text-brand mt-10 text-center text-sm">
          <Link href="/">Back to home</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
