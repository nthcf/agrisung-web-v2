import Breadcrumb from "@/components/layout/content/Breadcrumb";

export default async function ProductDetail() {
  return (
    <main className="bg-bg-main-pale">
      <Breadcrumb data={[]} />
      <div className="container mx-auto px-4 pb-20 pt-5 lg:px-20 xl:px-34">
        <div className="relative flex items-start gap-6">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </main>
  );
}
