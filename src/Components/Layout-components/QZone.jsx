import swimming from '../../assets/swimming.png';
import Class from '../../assets/class.png';
import Playground from '../../assets/playground.png';
const QZone = () => {
    return (
        <div className='bg-[#F3F3F3]  p-4'>
              <h2 className='font-semibold mb-3'>Q-Zone</h2>
            <div className='flex flex-col justify-center space-y-3'>
                <div>
                    <img src={swimming} alt="" />
                </div>
                <div>
                    <img src={Class} alt="" />
                </div>
                <div>
                    <img src={Playground} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QZone;