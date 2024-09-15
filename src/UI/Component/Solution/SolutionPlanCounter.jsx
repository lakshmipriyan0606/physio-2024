import { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
import solutionCounterImg1 from '../../../assets/images/icon-solution-counter-1.svg';
import solutionCounterImg2 from '../../../assets/images/icon-solution-counter-2.svg';
import solutionCounterImg3 from '../../../assets/images/icon-solution-counter-3.svg';

const SolutionPlanCounter = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const startCounters = () => {
      const counter1 = new CountUp('counter-1', 78, { duration: 5 });
      const counter2 = new CountUp('counter-2', 98, { duration: 6 });
      const counter3 = new CountUp('counter-3', 950, { duration: 3 });

      // Start the counters
      counter1.start();
      counter2.start();
      counter3.start();
    };



    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounters();
        }
      },
      { threshold: 0.5 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="solution-plan-counter" ref={counterRef}>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="solution-counter-item">
            <div className="icon-box">
              <img src={solutionCounterImg1} alt="solutionCounterImg" />
            </div>
            <div className="solution-counter-content">
              <h3>
                <span id="counter-1" className="counter"></span>+
              </h3>
              <p>skilled therapist</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="solution-counter-item">
            <div className="icon-box">
              <img src={solutionCounterImg2} alt="solutionCounterImg2" />
            </div>
            <div className="solution-counter-content">
              <h3>
                <span id="counter-2" className="counter"></span>%
              </h3>
              <p>success rate</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="solution-counter-item">
            <div className="icon-box">
              <img src={solutionCounterImg3} alt="solutionCounterImg3" />
            </div>
            <div className="solution-counter-content">
              <h3>
                <span id="counter-3" className="counter"></span>+
              </h3>
              <p>patients treated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPlanCounter;
