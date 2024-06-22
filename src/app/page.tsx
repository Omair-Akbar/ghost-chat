import { dbConnect } from "@/lib/dbConnect";


dbConnect();
export default function Home() {
  return (
  <>
  <h1 className=" text-4xl p-6 text-center">Next-Auth</h1>
  </>
  );
}
