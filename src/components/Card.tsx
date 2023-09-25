import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
interface Data {
  company: string;
  companyImg: string;
  stars: number;
  title: string;
  specialisation: string;
  duration: string;
  location: string;
  salary: string;
  techStack: string[];
}

function Card({
  onclick,
  data,
  isSelected,
}: {
  onclick: () => void;
  data: Data;
  isSelected: boolean;
}) {
  return (
    <div className="py-[5px] px-5 xl:px-0">
      <div
        className={`p-[5px] bg-white rounded-lg shadow-custom hover:cursor-pointer hover:translate-y-[-2px] transition duration-[0.2s] hover:shadow-lg ${
          isSelected ? "xl:border-[3px] xl:border-nodeflair-green" : ""
        }`}
        onClick={() => onclick()}
      >
        <div className="p-5">
          <CardHeader
            companyImg={data.companyImg}
            company={data.company}
            title={data.title}
            stars={data.stars}
            specialisation={data.specialisation}
          />
          <CardDetails
            duration={data.duration}
            location={data.location}
            salary={data.salary}
          />
          <hr className="h-px mt-[10px] mb-[-15px] bg-gray-200 border-0 dark:bg-nodeflair-grey"></hr>
        </div>
        <CardStack techStack={data.techStack} />
      </div>
    </div>
  );
}

export default Card;

const CardHeader = ({
  companyImg,
  company,
  title,
  stars,
  specialisation,
}: {
  companyImg: string;
  company: string;
  title: string;
  stars: number;
  specialisation: string;
}) => {
  return (
    <div className="flex flex-row">
      <img
        src={companyImg}
        alt="Company image"
        className="w-[45px] h-[45px] mr-[10px]"
      />
      <div className="flex flex-col ">
        <p className="font-normal text-sm">
          <span>{company}</span>
          {stars != -1 && <span>&nbsp;&nbsp;{stars}&nbsp;★</span>}
        </p>
        <h2 className="font-bold text-ellipsis line-clamp-2">{title}</h2>
      </div>
      <div className="ml-auto pl-[10px] text-sm">
        <div className="bg-nodeflair-bgGreen text-nodeflair-green w-max px-2 py-[5px] rounded-[5px] font-semibold">
          {specialisation}
        </div>
      </div>
    </div>
  );
};

const CardDetails = ({
  duration,
  location,
  salary,
}: {
  duration: string;
  location: string;
  salary: string;
}) => {
  return (
    <div className="pl-[55px] w-full text-sm">
      <div className="flex mb-[6px]">
        <span className="text-nodeflair-green font-bold">{duration} ago</span>
        <div className="text-nodeflair-lightGrey flex font-normal">
          &nbsp; &nbsp;
          <FontAwesomeIcon
            icon={faLocationDot}
            size="2xs"
            className="h-[14px] mt-1"
          />
          &nbsp;{location}
        </div>
      </div>
      <div>
        <p className="font-medium mb-[2px]">{salary} / mth </p>
      </div>
    </div>
  );
};

const CardStack = ({ techStack }: { techStack: Array<string> }) => {
  return (
    <div className="px-[15px] overflow-hidden text-ellipsis min-h-[40px] whitespace-nowrap">
      {techStack.map((x) => (
        <TechStack key={Math.random()} val={x} />
      ))}
    </div>
  );
};

const TechStack = ({ val }: { val: string }) => {
  return (
    <>
      <span className="py-[5px] px-2 bg-nodeflair-lighestGrey text-nodeflair-lightGrey rounded-[5px] inline-block">
        {val}
      </span>
      &nbsp;
    </>
  );
};
