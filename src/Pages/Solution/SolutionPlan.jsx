// SolutionPlan.js
import SolutionPlanImage from './SolutionPlanImage';
import SolutionPlanContent from './SolutionPlantContent';
import SolutionPlanCounter from './SolutionPlanCounter';

const SolutionPlan = () => {
  return (
    <div className="solution-your-plan">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SolutionPlanImage />
          </div>
          <div className="col-lg-6">
            <SolutionPlanContent />
            <SolutionPlanCounter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPlan;