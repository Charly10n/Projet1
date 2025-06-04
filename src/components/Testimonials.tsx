import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Propriétaire',
    content: 'LTC immobilier a rendu la recherche de notre maison idéale très agréable. Leur sens du détail et leur compréhension de nos besoins étaient exceptionnels. Nous recommandons vivement leurs services !',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Investisseur immobilier',
    content: "En tant qu'investisseur, j'avais besoin d'une agence qui comprenne parfaitement le marché. LTC immobilier a dépassé mes attentes grâce à ses analyses et ses conseils professionnels.",
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    role: 'Premier achat',
    content: "Acheter ma première maison était intimidant, mais l'équipe de LTC immobilier m'a accompagné à chaque étape avec patience et expertise. Je ne pourrais pas être plus heureux de mon nouveau chez-moi !",
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lisez les témoignages de nos clients satisfaits qui ont trouvé leur bien grâce à notre aide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
              >
                <div className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-blue-900 hover:text-white transition-colors duration-300"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-blue-900' : 'bg-gray-300'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-blue-900 hover:text-white transition-colors duration-300"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;