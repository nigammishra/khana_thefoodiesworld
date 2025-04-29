import React, { useState } from 'react';
import './partners.css'; // Assuming your provided CSS is in this file
// import { FaInfoCircle } from 'react-icons/fa'; 

const faqData = [
  {
    id: 1,
    question: "What is the origin of pizza?",
    answer:
      "Pizza originated in Naples, Italy, and was originally a humble food eaten by the working class. Today, it has become a global favorite with countless varieties and toppings available.",
  },
  {
    id: 2,
    question: "Why is breakfast considered the most important meal?",
    answer:
      "Breakfast kickstarts your metabolism, helps burn calories throughout the day, and provides the energy needed to stay focused and productive.",
  },
  {
    id: 3,
    question: "Are all fats unhealthy?",
    answer:
      "No. Healthy fats such as those found in avocados, nuts, and olive oil are essential for your body. It's the trans and saturated fats that should be consumed in moderation.",
  },
  {
    id: 4,
    question: "How much water should I drink daily?",
    answer:
      "It’s generally recommended to drink 8 glasses of water a day, but individual needs vary depending on age, climate, and activity levels.",
  },
  {
    id: 5,
    question: "What are superfoods?",
    answer:
      "Superfoods are nutrient-rich foods considered to be especially beneficial for health and well-being. Examples include blueberries, salmon, and kale.",
  },
  {
    id: 6,
    question: "Is organic food better for health?",
    answer:
      "Organic food is grown without synthetic pesticides and fertilizers. While it's often considered healthier, studies on its nutritional advantages are still inconclusive.",
  },
  {
    id: 7,
    question: "Can spicy food be harmful?",
    answer:
      "Spicy foods are generally safe for most people, and may even boost metabolism. However, they can trigger heartburn or stomach issues in some individuals.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncate = (text, limit = 120) =>
    text.length > limit ? text.slice(0, limit) + '...' : text;

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="faq-title text-center pb-4">
              <h2>Food FAQs</h2>
              <p>Your most common questions about food, health, and nutrition answered.</p>
            </div>

            <div className="faq">
              {faqData.map((faq) => (
                <div className="card mb-2" key={faq.id}>
                  <div className="card-header" id={`faqHeading-${faq.id}`}>
                    <h5 className="mb-0">
                      <button
                        className="faq-title d-flex justify-content-start w-100"
                        type="button"
                        onClick={() => toggleReadMore(faq.id)}
                        aria-expanded={expanded[faq.id] ? 'true' : 'false'}
                        aria-controls={`faqCollapse-${faq.id}`}
                      >
                        <span className="badge">{faq.id}</span>
                        {faq.question}
                        {/* <span>{expanded[faq.id] ? '-' : '+'}</span> */}
                      </button>
                    </h5>
                  </div>

                  <div
                    id={`faqCollapse-${faq.id}`}
                    className={`collapse ${expanded[faq.id] ? 'show' : ''}`}
                    aria-labelledby={`faqHeading-${faq.id}`}
                    data-bs-parent=".faq"
                  >
                    <div className="card-body">
                    <p>
                    👉 {expanded[faq.id] ? faq.answer : truncate(faq.answer, 120)}
                      </p>
                      {/* {faq.answer.length > 120 && (
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => toggleReadMore(faq.id)}
                        >
                          {expanded[faq.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
