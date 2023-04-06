import LogoDesktop from '../citizen-dapp-logo.png';
import LogoMobile from '../citizen-dapp-logo-mobile.png';
import { Link } from 'react-router-dom';
import useConnector from '../hooks/useConnector';
import Button from './Button';
import {isMobile} from 'react-device-detect';


const Navbar = () => {

    const { active, handleConnectClick, account} = useConnector();

    return (
        <header className='flex justify-between items-center h-20 w-full border-b-2 border-gray-300 shadow-md px-12 bg-gradient-to-r from-blue-200 via-white-300 to-blue-300'>
            <div>
                <Link to='/'><img src={isMobile ? LogoMobile : LogoDesktop} className='md:w-[14.6rem] md:h-8 hover:cursor-pointer' alt='product-logo'/></Link>
            </div>
            {active ?
                <div className='flex items-center'>
                    <Link to='/add-citizen'>
                        <Button className='px-12 py-2 m-2 max-h-10 w-14 md:w-28 h-8 md:h-12' onClick={handleConnectClick}>
                            <p className='text-sm md:text-base whitespace-nowrap'>Add Citizen</p>
                        </Button>
                    </Link>
                    <div className='border border-gray-300 px-4 py-4 m-2 max-h-10 rounded w-14 md:w-60 h-8 md:h-12 flex justify-center items-center'>
                        <p className='account-txt text-sm md:text-base'>{account}</p>
                    </div>
                </div>
                : <Button onClick={handleConnectClick} className='px-8 py-2 m-2 max-h-10 md:w-28 w-18'>
                     <p className='text-sm md:text-base'>Connect</p>
                 </Button>}
        </header>
    );
}

export default Navbar;