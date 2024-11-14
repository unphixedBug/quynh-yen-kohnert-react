import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openQuestionId, setOpenQuestionId] = useState(null); // Identifiant de la question ouverte

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const responseAll = await fetch('https://groupe2.triptyk.eu/wp-json/wp/v2/faq?_fields[]=id&_=${new Date().getTime()}');
        const dataAll = await responseAll.json();
        const finalFAQs = [];
        for await (const { id } of dataAll) {
            const response = await fetch(`https://groupe2.triptyk.eu/wp-json/wp/v2/faq/${id}`);
            console.log(response.headers)
            const data = await response.json();
            finalFAQs.push(data);
        }
        setFaqs(finalFAQs);
        console.log(finalFAQs);
      } catch (error) {
        console.error("Erreur lors de la récupération des données FAQ :", error);
      }
    };

    fetchFAQs();
  }, []);

  // Fonction pour ouvrir/fermer la réponse
  const toggleAnswer = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className="faq-container p-4">
      <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item border-b border-gray-300 py-2">
          <h3 
            onClick={() => toggleAnswer(faq.id)} 
            className="faq-question cursor-pointer font-semibold flex items-center text-gray-800"
          >
            {faq.acf.question_faq}
            <span className={`ml-auto transform transition-transform ${openQuestionId === faq.id ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </h3>
          {openQuestionId === faq.id && (
            <div 
              className="faq-answer text-gray-700 mt-2 italic pl-4"
              dangerouslySetInnerHTML={{ __html: faq.acf.reponse_faq }} // Rendu de HTML brut
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
