import solutionPalnImg1 from '../../../assets/images/solution-plan-img-1.jpg'
import solutionPalnImg2 from '../../../assets/images/solution-plan-img-2.jpg'

const SolutionPlanImage = () => {
  return (
    <div className="solution-plan-image">
      <div className="solution-plan-img-1">
        <figure className="image-anime reveal">
          <img src={solutionPalnImg1} alt="solutionPalnImg1" />
        </figure>
      </div>
      <div className="solution-plan-img-2">
        <figure className="image-anime reveal">
          <img src={solutionPalnImg2} alt="solutionPalnImg2" />
        </figure>
      </div>
    </div>
  );
};

export default SolutionPlanImage;