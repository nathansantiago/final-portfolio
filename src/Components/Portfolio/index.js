import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Carousel from '../Carousel'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>

                <div className='gallery-cont'>
                    <Carousel/>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Portfolio