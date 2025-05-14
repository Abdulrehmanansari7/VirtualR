import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

function Pricing() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide m-8">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((options, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {options.title}
                {options.title === "Pro" && (
                  <span className="text-xl mb-4 ml-2 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{options.price}</span>
                <span className="text-neutral-400 tracking-wide">/Month</span>
              </p>
              <ul>
                {options.features.map((feature, index) => (
                  <li key={index} className="flex items-center mt-8">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="flex justify-center items-center w-full text-center h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 transition duration-200 rounded-lg"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
