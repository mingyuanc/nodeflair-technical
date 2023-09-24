import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
function Card({
  onclick,
  id,
  isSelected,
}: {
  onclick: () => void;
  id: Number;
  isSelected: boolean;
}) {
  return (
    <div className="p-[5px]">
      <div
        className={`p-[5px] bg-white rounded-lg shadow-custom hover:cursor-pointer hover:translate-y-[-3px] transition duration-[0.2] hover:shadow-lg ${
          isSelected ? "border-[3px] border-nodeflair-green" : ""
        }`}
        onClick={() => onclick()}
      >
        <div className="p-5">
          <CardHeader />
          <CardDetails />
          <hr className="h-px mt-[10px] mb-[-15px] bg-gray-200 border-0 dark:bg-nodeflair-grey"></hr>
        </div>
        <CardStack />
      </div>
    </div>
  );
}

export default Card;

const CardHeader = () => {
  return (
    <div className="flex flex-row">
      <img
        src={"./gdsc.webp"}
        alt="Company image"
        className="w-[45px] h-[45px] mr-[10px]"
      />
      <div className="flex flex-col ">
        <p className="font-normal text-sm">
          <span>AsiaPac Technology Pte Ltd (from M1)</span>
          <span>&nbsp;&nbsp;3.5&nbsp;★</span>
        </p>
        <h2 className="font-bold">Senior System Engineer (Dell VxRail)</h2>
      </div>
      <div className="ml-auto pl-[10px] text-sm">
        <div className="bg-nodeflair-bgGreen text-nodeflair-green w-max px-2 py-[5px] rounded-[5px] font-semibold">
          Syst. Eng
        </div>
      </div>
    </div>
  );
};

const CardDetails = () => {
  return (
    <div className="pl-[55px] w-full text-sm">
      <div className="flex mb-[6px]">
        <span className="text-nodeflair-green font-bold">
          about 23 hours ago
        </span>
        <div className="text-nodeflair-lightGrey flex font-normal">
          &nbsp; &nbsp;
          <FontAwesomeIcon
            icon={faLocationDot}
            size="2xs"
            className="h-[14px] mt-1"
          />
          &nbsp;Singapore
        </div>
      </div>
      <div>
        <p className="font-medium mb-[2px]">S$4,800 - S$9,000 / mth </p>
      </div>
    </div>
  );
};

const CardStack = () => {
  return (
    <div className="px-[15px] overflow-hidden text-ellipsis min-h-[40px] whitespace-nowrap">
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
      <TechStack />
      &nbsp;
    </div>
  );
};

const TechStack = () => {
  return (
    <span className="py-[5px] px-2 bg-nodeflair-lighestGrey text-nodeflair-lightGrey rounded-[5px] inline-block">
      GOlang
    </span>
  );
};
