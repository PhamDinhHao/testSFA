import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import h1 from './h1.png'
import h2 from './h2.png'
import h3 from './h3.png'

const TitleBlock = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full
     flex flex-col items-center mb-2 md:mt-20 mt-16">

      <div className="w-full mb-[40px] text-center mb-8 ">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-gray-300"></div>
          <div className="text-[24px]  font-bold text-[#FF4D00] bg-white px-4 relative mb-0 
                        xl:text-[52px] 
                        md:text-[32px] ">
            {t('titleBlock.title')}
          </div>
        </div>
        <p className="text-[24px] text-gray-700 mt-2 mx-2">{t('titleBlock.subtitle')}</p>
      </div>

      <div className="w-full h-[668px]  
                      xl:w-[1420px] xl:h-[668px]
                      lg:w-[1130px] lg:h-[733px]
                      md:w-full md:h-[484px]
                       flex flex-wrap justify-center gap-8">
        <div className="w-[343px] h-[356px] 
                      xl:w-[397px] xl:h-[619px]
                      lg:w-[355px] lg:h-[542px]
                      md:w-[235px] md:h-[400px] 
        
        
        transition-transform duration-300 hover:-translate-y-4">
          <div className="relative mb-6">
            <img 
              src={h1} 
              alt={t(`titleBlock.cases.0.imageAlt`)} 
              className="
                      w-[343px] h-[200px] 
                      xl:w-[398px] xl:h-[398px]
                      lg:w-[355px] lg:h-[355px]
                      md:w-[235px] md:h-[240px] 
               object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col w-[343px] h-[140px] xl:w-[397px] xl:h-[198px] lg:w-[355px] lg:h-[167px] md:w-[235px] md:h-[160px]">
          <h3 className="text-[#FF4D00] text-[12px] xl:text-[20px] lg:text-[18px] md:text-[16px] mb-1">{t(`titleBlock.cases.0.category`)}</h3>
          <h4 className="text-[16px] xl:text-[28px] lg:text-[24px] md:text-[20px] font-semibold mb-4">{t(`titleBlock.cases.0.tagline`)}</h4>
          <p className="text-gray-600 h-[60px] mb-4 line-clamp-3 text-[14px] xl:text-[18px] lg:text-[18px] md:text-[16px]">{t(`titleBlock.cases.0.description`)}</p>
          <Button 
            type="default"
            shape="round"
            className=" hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] text-[18px]"
          >
            {t(`titleBlock.cases.0.cta`)}
          </Button>
          </div>
          
        </div>
        <div className="w-[343px] h-[356px] 
                      xl:w-[397px] xl:h-[619px]
                      lg:w-[355px] lg:h-[542px]
                      md:w-[235px] md:h-[400px]  transition-transform duration-300 hover:-translate-y-4">
          <div className="relative mb-6">
            <img 
              src={h2} 
              alt={t(`titleBlock.cases.1.imageAlt`)} 
              className="w-[343px] h-[200px] 
                      xl:w-[398px] xl:h-[398px]
                      lg:w-[355px] lg:h-[355px]
                      md:w-[235px] md:h-[240px]  object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col w-[343px] h-[140px] xl:w-[397px] xl:h-[198px] lg:w-[355px] lg:h-[167px] md:w-[235px] md:h-[160px]">
          <h3 className="text-[#FF4D00] text-[12px] xl:text-[20px] lg:text-[18px] md:text-[16px] mb-1">{t(`titleBlock.cases.1.category`)}</h3>
          <h4 className="text-[16px] xl:text-[28px] lg:text-[24px] md:text-[20px] font-semibold mb-4">{t(`titleBlock.cases.1.tagline`)}</h4>
          <p className="text-gray-600 h-[60px] mb-4 line-clamp-3 text-[14px] xl:text-[18px] lg:text-[18px] md:text-[16px]">{t(`titleBlock.cases.1.description`)}</p>
          <Button 
            type="default"
            shape="round"
            className=" hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] text-[18px] p-1"
          >
            {t(`titleBlock.cases.1.cta`)}
          </Button>
          </div>
        </div>
        <div className="w-[343px] h-[356px] 
                      xl:w-[397px] xl:h-[619px]
                      lg:w-[355px] lg:h-[542px]
                      md:w-[235px] md:h-[400px]  transition-transform duration-300 hover:-translate-y-4">
          <div className="relative mb-6">
            <img 
              src={h3} 
              alt={t(`titleBlock.cases.2.imageAlt`)} 
              className="w-[343px] h-[200px] 
                      xl:w-[398px] xl:h-[398px]
                      lg:w-[355px] lg:h-[355px]
                      md:w-[235px] md:h-[240px]  object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col w-[343px] h-[140px] xl:w-[397px] xl:h-[198px] lg:w-[355px] lg:h-[167px] md:w-[235px] md:h-[160px]">
          <h3 className="text-[#FF4D00] text-[12px] xl:text-[20px] lg:text-[18px] md:text-[16px] mb-1">{t(`titleBlock.cases.2.category`)}</h3>
          <h4 className="text-[16px] xl:text-[28px] lg:text-[24px] md:text-[20px] font-semibold mb-4">{t(`titleBlock.cases.2.tagline`)}</h4>
          <p className="text-gray-600 h-[60px] mb-4 line-clamp-3 text-[14px] xl:text-[18px] lg:text-[18px] md:text-[16px]">{t(`titleBlock.cases.2.description`)}</p>
          <Button 
            type="default"
            shape="round"
            className=" hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] text-[18px]"
          >
            {t(`titleBlock.cases.2.cta`)}
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBlock;