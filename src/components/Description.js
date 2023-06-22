export default function Description({ lang }) {
    return (
        <div>
            {
                lang === 'en' ?
                    <div>
                        <h3 className="text-3xl py-2">Languages I worked with</h3>
                        <p className='text-md py-3 leading-8 text-gray-800 dark:text-gray-300'>
                            I worked with different languages and framework during my studies, but I am more confident with <span className='font-mono font-bold text-purple-500'>Java</span>.
                            However, it is always a <span className='font-mono font-bold text-purple-500'>Pleasure</span> to learn new languages and technologies, to improve my skills.
                            In the future I would like to learn <span className='font-mono font-bold text-purple-500'>Go</span> and <span className='font-mono font-bold text-purple-500'>Swift</span>.
                            <br />
                            These are just some of the languages and frameworks I have used:
                        </p>
                    </div>
                    :
                    <div>
                        <h3 className="text-3xl py-2">Linguaggi con i quali ho lavorato</h3>
                        <p className='text-md py-3 leading-8 text-gray-800 dark:text-gray-300'>
                            Ho lavorato con diversi linguaggi e framework durante i miei studi, ma sono più confidente con <span className='font-mono font-bold text-purple-500'>Java</span>.
                            E' comunque  sempre un <span className='font-mono font-bold text-purple-500'>Piacere</span> imparare nuovi linguaggi e tecnologie, per migliorare le mie skills.
                            Nel futuro vorrei imparare <span className='font-mono font-bold text-purple-500'>Go</span> e <span className='font-mono font-bold text-purple-500'>Swift</span>.
                            <br />
                            Questi sono solo alcuni dei linguaggi e framework che ho utilizzato:
                        </p>
                    </div>
            }
        </div>
    );
}
