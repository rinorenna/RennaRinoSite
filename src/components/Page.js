import Memoji from '../assets/memoji.png'
import Navbar from './Navbar';
import Social from './Social';
import LanguageGrid from './LanguageGrid';
import Introduction from './Introduction';
import Description from './Description';
import React from 'react';


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleDarkMode = this.handleDarkMode.bind(this);
    }
    handleDarkMode() {
        this.setState({ darkMode: !this.state.darkMode })
    }
    state = {
        darkMode: true
    }
    render() {
        return (
            <div className={this.state.darkMode ? "dark" : ""}>
                <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
                    <section className='min-h-screen'>
                        <Navbar darkMode={this.state.darkMode} onStateChanged={this.handleDarkMode} lang={this.props.lang} />
                        <Introduction lang={this.props.lang} />
                        <Social />
                        <div className='relative bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:w-100 md:h-100'>
                            <img src={Memoji} alt="memoji" />
                        </div>
                    </section>
                    <section className='py-10'>
                        <Description lang={this.props.lang} />
                        <LanguageGrid />
                    </section>
                    <footer>
                        <p className='text-center py-10 text-gray-600 dark:text-gray-300'>Developed with <span className='text-red-500'>❤</span> by ©Renna Rino</p>
                    </footer>
                </main>
            </div>
        );
    }
}

export default Page;
