import React, { useState } from 'react';

function FaqSection({ id, title, faqs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="faqs-section" id={id}>
      <div className="faqs-section-title">
        <h2 className="text-anime-style-2" data-cursor="-opaque">
          {title}
        </h2>
      </div>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div
            className="accordion-item wow fadeInUp"
            key={index}
            data-wow-delay={index * 0.25 + 's'}
          >
            <h2 className="accordion-header" id={`heading${index + 1}`}>
              <button
                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index + 1}`}
                aria-expanded={activeIndex === index}
                aria-controls={`collapse${index + 1}`}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index + 1}`}
              className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index + 1}`}
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'What is manual therapy?',
      answer: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat.',
    },
    {
      question: 'What conditions can manual therapy treat?',
      answer: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat.',
    },
    // Add more FAQs here...
  ];

  const sections = [
    {
      id: 'manual_therapy',
      title: 'Manual Therapy',
      faqs: faqs,
    },
    {
      id: 'chronic_therapy',
      title: 'Chronic Therapy',
      faqs: faqs,
    },
    {
      id: 'hand_therapy',
      title: 'Hand Therapy',
      faqs: faqs,
    },
    {
      id: 'sports_therapy',
      title: 'Sports Therapy',
      faqs: faqs,
    },
    {
      id: 'cupping_therapy',
      title: 'Cupping Therapy',
      faqs: faqs,
    },
  ];

  return (
    <div className="page-faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="faq-sidebar">
              <div className="faq-catagery-list wow fadeInUp" data-wow-delay="0.25s">
                <ul>
                  {sections.map((section, index) => (
                    <li key={index}>
                      <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            {sections.map((section, index) => (
              <FaqSection key={index} {...section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;