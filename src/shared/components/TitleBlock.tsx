import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const TitleBlock = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-12 px-4 flex flex-col items-center">

      <div className="w-[1420px] w-full mb-[40px] text-center mb-8">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-gray-300"></div>
          <h1 className="text-[52px] font-bold text-[#FF4D00] bg-white px-4 relative mb-0">
            {t('titleBlock.mainTitle')}
          </h1>
        </div>
        <p className="text-[24px] text-gray-700 mt-2">{t('titleBlock.subtitle')}</p>
      </div>

      <div className="w-[1420px] w-full h-[668px] flex flex-wrap justify-center gap-8">
        {[1, 2, 3].map((cardNumber) => (
          <div key={cardNumber} className="w-[397px] h-[619px] transition-transform duration-300 hover:-translate-y-4">
            <div className="relative h-[398px] mb-6">
              <img 
                src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp" 
                alt={t(`titleBlock.card${cardNumber}.imageAlt`)} 
                className="w-[398px] h-[398px] object-cover rounded-lg"
              />
            </div>
            <h3 className="text-[#FF4D00] text-xl mb-1">{t(`titleBlock.card${cardNumber}.title`)}</h3>
            <h4 className="text-[28px] font-semibold mb-4">{t(`titleBlock.card${cardNumber}.subtitle`)}</h4>
            <p className="text-gray-600 mb-4 line-clamp-3 text-[18px]">{t(`titleBlock.card${cardNumber}.description`)}</p>
            <Button 
              type="default"
              shape="round"
              className=" hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] text-[18px]"
            >
              {t(`titleBlock.card${cardNumber}.button`)}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TitleBlock;