import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/ui/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({searchParams: { month }}: HomeProps) => {

  const { userId } = await auth();
  if (!userId) {
    redirect("/login")
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }

  return  <>
  <div className="p-6 space-y-6">
    <Navbar/>

    <div className="flex justify-between p-6">
      <h1 className="font-bold">Dasboard</h1>
    <TimeSelect/>
    </div>

    <SummaryCards month={ month } /> 
  </div>
  </>;

};

export default Home;
