import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderTitle = () => {
  const slides = [
    {
      image: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      title: 'Case sous-titre',
      subtitle: 'Case title',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...'
    },
    {
      image: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      title: 'Case sous-titre',
      subtitle: 'Case title',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...'
    },{
      image: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      title: 'Case sous-titre',
      subtitle: 'Case title',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...'
    },{
      image: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      title: 'Case sous-titre',
      subtitle: 'Case title',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...'
    },
    {
      image: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      title: 'Case sous-titre',
      subtitle: 'Case title',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...'
    },
  ];

  return (
    <div className='max-w-[1240px] h-[673px] mx-auto'>
      <div className='flex justify-between items-center w-full h-[60px] mb-[35px]'>
        <h1 className='text-[48px] font-bold text-[#FF5733]'>TITRE</h1>
        <a href="#" className='text-[20px] text-gray-600 hover:text-gray-800 flex items-center'>
          En Savoir Plus
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className='ml-[110px]'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={56}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-[518px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-[340px] h-[340px] object-cover rounded-lg mb-[24px]"
              />
              <div className="text-left w-[340px] h-[72px]">
                <p className="text-[#FF5733] text-[20px] mb-1">{slide.subtitle}</p>
                <h2 className="text-[28px] font-bold text-[#2D2D2D] mb-2">{slide.title}</h2>
                <div className='pl-2'>
                  <p className="text-[18px] text-gray-600 line-clamp-2 leading-relaxed border-l pl-4">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
    </div>
  );
};

export default SliderTitle;