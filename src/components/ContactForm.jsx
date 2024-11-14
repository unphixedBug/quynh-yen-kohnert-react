import React from 'react';

function ContactForm() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="w-full max-w-2xl p-4 rounded-lg">

        {/* Sujet */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Sujet <span className="text-[#E31C3D]">*</span>
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
            <input type="radio" name="sujet" value="commande" class="checked:bg-[#E31C3D]" />
              <span className="ml-2">Commande</span>
            </label>
            <label className="flex items-center">
            <input type="radio" name="sujet" value="collaboration" className="checked:bg-[#E31C3D]" />
              <span className="ml-2">Collaboration</span>
            </label>
            <label className="flex items-center">
            <input type="radio" name="sujet" value="autre" className="checked:bg-[#E31C3D]" />
              <span className="ml-2">Autre</span>
            </label>
          </div>
        </div>

        {/* Nom */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Votre nom <span className="text-[#E31C3D]">*</span>
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E31C3D]"
          />
        </div>

        {/* Adresse mail */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Votre adresse mail <span className="text-[#E31C3D]">*</span>
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E31C3D]"
          />
        </div>

        {/* Numéro de téléphone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Votre numéro de téléphone</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E31C3D]"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Votre message <span className="text-[#E31C3D]">*</span>
          </label>
          <textarea
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E31C3D]"
          ></textarea>
        </div>

        {/* Fichiers */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Fichiers</label>
          <input
            type="file"
            className="w-full text-sm text-gray-500 border border-gray-300 rounded p-2 focus:outline-none focus:border-[#E31C3D] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-[#E31C3D] file:cursor-pointer"
          />
        </div>

        {/* Bouton Envoyer */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-[#E31C3D] text-white font-semibold rounded hover:bg-red-700 focus:outline-none"
          >
            ENVOYER
          </button>
        </div>

        {/* Légende */}
        <p className="text-xs text-gray-500 mt-4">
          <span className="text-[#E31C3D]">*</span> Champs obligatoires
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
