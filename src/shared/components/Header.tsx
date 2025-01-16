import { Button} from 'antd';
import { UserOutlined, LogoutOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useLanguageStore } from '../../store/languageStore';


const Header = () => {
    const { language, setLanguage } = useLanguageStore();
  return (
    <div className="w-full h-[72px] bg-[#7a5958] fixed top-0 z-50 flex items-center justify-between px-4">
      {/* Logo section */}
      <div className="flex items-center">
        <div className="text-white text-lg font-semibold">LOGO SAMPLE</div>
        <div className="flex space-x-2">
          <Button 
            onClick={() => setLanguage('fr')}
            className={language === 'fr' ? 'bg-white' : ''}
          >
            FR
          </Button>
          <Button 
            onClick={() => setLanguage('vi')}
            className={language === 'vi' ? 'bg-white' : ''}
          >
            VI
          </Button>
          <Button 
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'bg-white' : ''}
          >
            EN
          </Button>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="flex items-center space-x-8">
        <a href="#" className="text-white hover:text-gray-200">Titre 1</a>
        <a href="#" className="text-white hover:text-gray-200">Titre 2</a>
        <a href="#" className="text-white hover:text-gray-200">Titre 3</a>
        <a href="#" className="text-white hover:text-gray-200">Titre 4</a>
      </div>

      {/* Right icons section */}
      <div className="flex items-center space-x-4">
        <Button type="text" icon={<UserOutlined />} className="text-white hover:text-gray-200" />
        <Button type="text" icon={<ClockCircleOutlined />} className="text-gray-300 hover:text-gray-200" />
        <Button type="text" icon={<LogoutOutlined />} className="text-gray-300 hover:text-gray-200" />
        <Button type="text" 
          icon={<div className="bg-orange-500 rounded-full p-2">
            <LogoutOutlined className="text-white" />
          </div>} 
        />
      </div>
    </div>
  );
};

export default Header;