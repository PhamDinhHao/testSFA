import { Button} from 'antd';
import { UserOutlined, LogoutOutlined, ClockCircleOutlined } from '@ant-design/icons';


const Background = () => {
  return (
    <div className="w-full h-[1080px] bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url('https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp')`,
        marginTop: '72px'
      }}>
      {/* Bottom icons */}
      <div className="absolute bottom-8 flex space-x-8">
        <button className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100">
          <img src="/icons/mountain.svg" alt="Mountain" className="w-6 h-6" />
        </button>
        <button className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100">
          <img src="/icons/rotate.svg" alt="Rotate" className="w-6 h-6" />
        </button>
        <button className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100">
          <img src="/icons/target.svg" alt="Target" className="w-6 h-6" />
        </button>
        <button className="p-2 bg-orange-500 rounded-full hover:bg-orange-600">
          <img src="/icons/camera.svg" alt="Camera" className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Background;