import { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
import solutionCounterImg1 from '../../../../assets/images/icon-counter-1.svg';
import solutionCounterImg2 from '../../../../assets/images/icon-counter-2.svg';
import solutionCounterImg3 from '../../../../assets/images/icon-counter-3.svg';
import solutionCounterImg4 from '../../../../assets/images/icon-counter-4.svg';

const CampanyCounter = () => {
  const counterCampanyRef = useRef(null);

  useEffect(() => {
    const startCounters = () => {
      const counter1 = new CountUp('counter-1', 78, { duration: 5 });
      const counter2 = new CountUp('counter-2', 98, { duration: 6 });
      const counter3 = new CountUp('counter-3', 950, { duration: 3 });
      const counter4 = new CountUp('counter-4', 250, { duration: 3 });

      counter1.start();
      counter2.start();
      counter3.start();
      counter4.start();
    };



    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounters();
        }
      },
      { threshold: 0.5 } 
    );

    if (counterCampanyRef.current) {
      observer.observe(counterCampanyRef.current);
    }

    return () => {
      if (counterCampanyRef.current) {
        observer.unobserve(counterCampanyRef.current);
      }
    };
  }, []);

  return (
    <div className="company-counter" ref={counterCampanyRef}>
        <div className='container'>
        <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="company-counter-item">
            <div className="icon-box">
              <img src={solutionCounterImg1} alt="solutionCounterImg" />
            </div>
            <div className="company-counter-content">
              <h3>
                <span id="counter-1" className="counter"></span>+
              </h3>
              <p>skilled therapist</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="company-counter-item">
            <div className="icon-box">
              <img src={solutionCounterImg2} alt="solutionCounterImg2" />
            </div>
            <div className="company-counter-content">
              <h3>
                <span id="counter-2" className="counter"></span>%
              </h3>
              <p>success rate</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="company-counter-item">
            <div className="icon-box">
              <img src={solutionCounterImg3} alt="solutionCounterImg3" />
            </div>
            <div className="company-counter-content">
              <h3>
                <span id="counter-3" className="counter"></span>+
              </h3>
              <p>patients treated</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="company-counter-item">
            <div className="icon-box">
              <img src={solutionCounterImg4} alt="solutionCounterImg4" />
            </div>
            <div className="company-counter-content">
              <h3>
                <span id="counter-4" className="counter"></span>+
              </h3>
              <p>Skilled Therapist</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default CampanyCounter;
