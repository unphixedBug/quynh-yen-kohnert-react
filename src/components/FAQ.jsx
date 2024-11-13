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
    <div className="faq-container">
      <h2>FAQ</h2>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <h3 
            onClick={() => toggleAnswer(faq.id)} 
            className="faq-question cursor-pointer text-blue-500"
          >
            {faq.acf.question_faq}
          </h3>
          {openQuestionId === faq.id && (
            <div 
              className="faq-answer text-gray-700 mt-2"
              dangerouslySetInnerHTML={{ __html: faq.acf.reponse_faq }} // Rendu de HTML brut
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
