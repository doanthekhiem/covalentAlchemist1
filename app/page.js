import Homepage from "./HomePage/page";
import View from "@/app/ui/dashboard/View/page";

export default async function Page() {
  return (
    <main>
      <div className="max-w-[78rem] mx-auto ">
        <div className=" gap-4 flex flex-col md:flex-row  ">
          <div>
            <div className="mt-9">
              <Homepage />
            </div>
          </div>
          <View />
        </div>
      </div>
    </main>
  );
}
