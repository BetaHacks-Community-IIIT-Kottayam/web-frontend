import { Loader2Icon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center min-h-screen justify-center">
      <Loader2Icon className="animate-spin" size={36} />
      <p className="mt-4 text-gray-600">Loading pages for you, please wait...</p>
    </div>
  );
};

export default LoadingPage;
