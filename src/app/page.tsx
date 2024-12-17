import CustomizeParameters from "@/components/CustomizeParameters";
import DisplayOutput from "@/components/DisplayOutput";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-3">Poetry Generator</h1>
      <div className="flex justify-center">
        <div className="flex container justify-center">
          <CustomizeParameters />
          <DisplayOutput />
        </div>
      </div>
    </div>
  );
}
