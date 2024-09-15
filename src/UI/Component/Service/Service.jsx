import { ServiceCard } from "./Component/ServiceCard";

const Service = ({homePage , view}) => {
  return (
    <div>
      <ServiceCard homePage={homePage} view={view}/>
    </div>
  );
};

export default Service;
