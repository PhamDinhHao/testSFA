import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import h4 from './h4.png'
import h5 from './h5.png'
import h6 from './h6.png'
import h7 from './h7.png'
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const SliderTitle = () => {
  const { t } = useTranslation('translation');
  const slides = [
    {
      image: h4,
      title: t('bloc_3.cases.0.category'),
      subtitle: t('bloc_3.cases.0.tagline'),
      description: t('bloc_3.cases.0.description')
    },
    {
      image: h5,
      title: t('bloc_3.cases.1.category'),
      subtitle: t('bloc_3.cases.1.tagline'),
      description: t('bloc_3.cases.1.description')
    },{
      image: h6,
      title: t('bloc_3.cases.2.category'),
      subtitle: t('bloc_3.cases.2.tagline'),
      description: t('bloc_3.cases.2.description')
    },{
      image: h7,
      title: t('bloc_3.cases.3.category'),
      subtitle: t('bloc_3.cases.3.tagline'),
      description: t('bloc_3.cases.3.description')
    },
  ];

  return (
    <div className='w-full h-fit  px-4 flex flex-col items-center mb-2 md:mt-20 mt-16'>
      <div className='max-w-[1240px] w-full h-auto mx-auto'>
      <div className='flex justify-between items-center w-full h-[60px] mb-[35px]'>
        <h1 className='text-[24px] xl:text-[48px] lg:text-[40px] md:text-[32px] font-bold text-[#FF5733]'>{t('bloc_3.title')}</h1>
        <a href="#" className='text-[20px] text-gray-600 hover:text-gray-800  items-center hidden md:flex'>
          {t('bloc_3.more_info')} 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className='ml-[50px] w-full h-auto'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide, index) => (
          <div className='w-[343px] h-[356px] 
                      xl:w-[397px] xl:h-[619px]
                      lg:w-[355px] lg:h-[542px]
                      md:w-[235px] md:h-[400px] '>
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col">
              <img 
                src={slide.image}          
                alt={slide.title} 
                className=" w-[200px] h-[200px] 
                      xl:w-[340px] xl:h-[340px]
                      lg:w-[340px] lg:h-[340px]
                      md:w-[280px] md:h-[280px]  object-cover rounded-lg mb-[24px]"
              />
                <div className="flex flex-col w-[343px] h-[140px] xl:w-[397px] xl:h-[198px] lg:w-[355px] lg:h-[167px] md:w-[235px] md:h-[160px]">

                <p className="text-[#FF4D00] text-[12px] xl:text-[20px] lg:text-[18px] md:text-[16px] mb-1">{slide.subtitle}</p>
                <h2 className="text-[16px] xl:text-[28px] lg:text-[24px] md:text-[20px] font-semibold mb-4">{slide.title}</h2>
                <div className='pl-2'>
                  <p className="text-[18px] text-gray-600 line-clamp-2 leading-relaxed border-l pl-4">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          </div>
        ))}
      </Swiper>
      </div>
      <div className='flex justify-center w-full rounded md:hidden'>
        <Button className='bg-[#FF5733] text-white w-[343px] h-[40px] '>{t('bloc_3.more_info')}<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg></Button>
      </div>
      </div>
    </div>
  );
};

export default SliderTitle;