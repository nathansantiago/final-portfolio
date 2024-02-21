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

                    <p>
                        Welcome to my past completed projects.
                        Currently I am working on two React projects.
                        My current personal project is an an informational app about freshwater mussels.
                        I am also working in a team of three to create an app that can help UNC students better plan their meals at the dining hall.
                    </p>
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