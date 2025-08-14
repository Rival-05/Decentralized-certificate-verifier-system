import {Formpage} from "@/components/issuing_page/Form";

export default function IssueForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-2">Issue Certificate</h1>
      <div className="border-2 rounded-lg p-1"><Formpage /></div>
    </div>
  );
}
