import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Outlet />
            </div>
        </div>

    );
};

export default Main;