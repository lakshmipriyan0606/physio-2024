import { ServiceCard } from "./Component/serviceCard";

const Service = ({homePage , view}) => {
  return (
    <div>
      <ServiceCard homePage={homePage} view={view}/>
    </div>
  );
};

export default Service;
