import { DiJava, DiJavascript1, DiPython, DiDocker, DiReact, DiBootstrap } from "react-icons/di";
import { SiSpringboot, SiMongodb, SiMysql, SiCplusplus, SiCsharp, SiC, } from "react-icons/si";
export default function LanguageGrid() {
    return (
        <div className=' content-center mx-auto'>
            <div className='content-center grid grid-cols-6 gap-10 py-2 text-gray-600 text-4xl md:text-5xl dark:text-gray-300'>
                <DiJava />
                <DiJavascript1 />
                <DiPython />
                <SiC />
                <SiCplusplus />
                <SiCsharp />
                <DiDocker />
                <DiReact />
                <DiBootstrap />
                <SiSpringboot />
                <SiMongodb />
                <SiMysql />
            </div>
        </div>
    );
}