import HeaderAndFilter from "@/components/search/HeaderAndFilter";
import NoResult from "@/components/search/NoResult";

export default async function Search() {
  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 pb-20 pt-5 lg:px-20 xl:px-34">
        <HeaderAndFilter />
        <NoResult />
      </div>
    </main>
  );
}
