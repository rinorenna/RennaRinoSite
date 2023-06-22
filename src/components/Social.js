import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

export default function Social() {
    return (
        <div className='text-5xl lg:text-6xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-300'>
            <a href='https://www.linkedin.com/in/rino-renna-a96214242/' >
                <AiFillLinkedin className='cursor-pointer' />
            </a>
            <a href='https://github.com/rinorenna' >
                <AiFillGithub className='cursor-pointer' />
            </a>
            <AiOutlineMail className='cursor-pointer' onClick={() => window.open('mailto:vapid-03.duties@icloud.com?subject=Info&body=Write%20here%20your question')} />
        </div>
    );
}