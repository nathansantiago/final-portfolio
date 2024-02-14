import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p>
                        I'm a Computer Science student studying at the University of North Carolina at Chapel Hill.  
                    </p>
                    <p>
                        My programming journey began with making games on my DS and older brother's TI-84 using BASIC. 
                        From there I began exploring game development in Unity with C#.
                    </p>
                    <p>
                        I continue to view programming as a creative outlet to express our wildest dreams. 
                        Over the last year I've shifted my focus from game development to web development and data visualization. 
                        I want to create web apps that have the potential to improve our everyday lives. 
                        I am passionate about game development, web applications, and data visualization.
                    </p>
                    <p>
                        In my freetime I love to be outdoors. I enjoy rock climbing, fishing, running, and playing golf. 
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color='#DD0031'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faPython} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4B28'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About