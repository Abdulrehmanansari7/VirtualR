import code from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const WorkflowSection = () => {
  return (
    <div className="mt-20" id="workFlow">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center mt-5 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="img" />
        </div>
        <div className="pt-2 w-full lg:w-1/2 mt-3">
          {checklistItems.map((feature, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 h-10 w-10 mx-6 bg-neutral-900 rounded-full justify-center flex items-center">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{feature.title}</h5>
                <p className="text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
