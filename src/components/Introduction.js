export default function Introduction({ lang }) {
    return (
        <div className=' text-center p-10'>
            <h2 className=' text-5xl py-2 font-medium text-purple-500 font-ubuntu md:text-6xl lg:tex-8xl dark:text-pur'>Renna Rino</h2>
            {lang === 'en' ?
                <h3 className='text-2xl py-2 md:3-xl'>Computer Engineer</h3>
                :
                <h3 className='text-2xl py-2 md:3-xl'>Ingegnere Informatico</h3>}
            {lang === 'en' ?
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300" >
                    Recent graduate in computer engineering at <a href="https://www.supsi.ch/dti_en.html" className='p-1  font-bold underline text-purple-500'>SUPSI</a>.
                    I am open to new opportunities for my future.
                    I love what I do and am always looking for new challenges, I am resourceful and autonomous, always looking for a better solution
                </p>
                :
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300" >
                    Neolaureato in ingegneria informatica presso <a href="https://www.supsi.ch/dti_en.html" className='p-1 font-bold underline text-purple-500'>SUPSI</a>.
                    Sono aperto a nuove opportunità per il mio futuro.
                    Amo ciò che faccio e sono sempre alla ricerca di nuove sfide, sono intraprendetente e autonomo, sempre alla ricerca di una soluzione migliore.
                </p>
            }
        </div>
    );
}