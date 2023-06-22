import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function Navbar({ darkMode, onStateChanged, lang }) {
    const navigate = useNavigate();

    return (
        <nav className='py-10 mb-12 flex justify-between '>
            <h1 className=' text-xl font-script'>I LOVE WHAT I DO</h1>
            <ul className='flex gap-2'>
                <li className=' bg-purple-400 p-2 rounded-full text-white'>
                    {darkMode ?
                        <BsSunFill onClick={onStateChanged} className='cursor-pointer text-2xl' />
                        :
                        <BsFillMoonStarsFill onClick={onStateChanged} className='cursor-pointer text-2xl' />
                    }

                </li>
                {
                    lang === 'en' ?
                        <li className=' bg-purple-400 p-2 rounded-full text-white' onClick={() => navigate("/it")}>
                            <span className='p-2 font-bold cursor-pointer'>IT</span>
                        </li>
                        :
                        <li className=' bg-purple-400 p-2 rounded-full text-white' onClick={() => navigate("/en")}>
                            <span className='p-2 font-bold cursor-pointer'>EN</span>
                        </li>
                }

            </ul>
        </nav>
    )
}

