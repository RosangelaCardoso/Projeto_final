// src/components/HeroBanner/HeroBanner.jsx - Mantendo desktop e ajustando apenas mobile
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Importe os estilos necessários
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroBanner.css'; // Para customizar os pontinhos

const HeroBannerSlide = ({
    title,
    description,
    imageUrl,
    buttonText,
    buttonLink
}) => (
    <div className="bg-gray-100 rounded-lg relative overflow-hidden">
        {/* Container principal - mostra versão diferente dependendo do tamanho da tela */}
        
        {/* Versão Mobile - só aparece em telas pequenas */}
        <div className="md:hidden mobile-banner-container px-4 py-8">
            {/* Imagem no topo para mobile */}
            <div className="w-full flex justify-center mb-8">
                <img src={imageUrl} alt="Produto em destaque" className="hero-banner-image-mobile" />
            </div>
            
            {/* Conteúdo de texto para mobile - centralizado */}
            <div className="w-full z-10 text-center">
                <span className="text-pink-600 font-medium text-sm">Melhores ofertas personalizadas</span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{title}</h1>
                <p className="text-gray-600 mb-8 mx-auto max-w-md">{description}</p>
                <a
                    href={buttonLink}
                    className="bg-pink-600 text-white py-3 px-8 rounded-md font-medium inline-block hover:bg-pink-700 transition-colors"
                >
                    {buttonText}
                </a>
            </div>
            
            {/* Padrão de pontos decorativos para mobile */}
            <div className="mobile-pattern-dots"></div>
        </div>
        
        {/* Versão Desktop - mantida exatamente como estava antes */}
        <div className="hidden md:block">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                {/* Conteúdo de texto */}
                <div className="md:w-1/2 z-10">
                    <span className="text-amber-500 font-medium text-sm">Melhores ofertas personalizadas</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">{title}</h1>
                    <p className="text-gray-600 mb-8 max-w-md">{description}</p>
                    <a
                        href={buttonLink}
                        className="bg-pink-600 text-white py-3 px-8 rounded-md font-medium inline-block hover:bg-pink-700 transition-colors"
                    >
                        {buttonText}
                    </a>
                </div>

                {/* Imagem */}
                <div className="md:w-1/2 flex justify-center">
                    <img src={imageUrl} alt="Produto em destaque" className="max-h-80 object-contain" />
                </div>

                {/* Padrão de pontos decorativos */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-8 right-32 w-12 h-12 bg-yellow-100 rounded-full opacity-50"></div>
            </div>
        </div>
    </div>
);

const HeroBanner = ({ slides = [] }) => {
    // Se não forem fornecidos slides, usar um slide padrão
    const slidesToRender = slides.length > 0 ? slides : [
        {
            id: 1,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor labore eiusmod irure consectetur.",
            imageUrl: '../images/home-slides/White-Sneakers-PNG-Clipart 1.png',
            buttonText: "Ver Ofertas",
            buttonLink: "#"
        },
        {
            id: 2,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor labore eiusmod irure consectetur.",
            imageUrl: '../images/home-slides/White-Sneakers-PNG-Clipart 1.png',
            buttonText: "Ver Ofertas",
            buttonLink: "#"
        },
        {
            id: 3,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor labore eiusmod irure consectetur.",
            imageUrl: '../images/home-slides/White-Sneakers-PNG-Clipart 1.png',
            buttonText: "Ver Ofertas",
            buttonLink: "#"
        },
        {
            id: 4,
            title: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor labore eiusmod irure consectetur.",
            imageUrl: '../images/home-slides/White-Sneakers-PNG-Clipart 1.png',
            buttonText: "Ver Ofertas",
            buttonLink: "#"
        }
    ];

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            loop={true}
            className="hero-banner-swiper"
        >
            {slidesToRender.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <HeroBannerSlide
                        title={slide.title}
                        description={slide.description}
                        imageUrl={slide.imageUrl}
                        buttonText={slide.buttonText}
                        buttonLink={slide.buttonLink}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroBanner;