import {Col} from 'react-bootstrap'
import Typewriter from "t-writer.js";
import {useEffect} from 'react'

function LeftSide() {
    useEffect(() => {
        const target = document.querySelector('#welcome')
        const options = {
            loop: true,
            typeColor:'white',
            cursorColor:'white'            
          }
          
        const writer = new Typewriter(target, options)
        writer
        
        .type('Uma plataforma feita de estudante para estudante.')
        .rest(5000)
        .remove(25)
        .type('professor para professor.')
        .rest(5000)
        .remove(25)
        .type('pessoa para pessoa.')
        .rest(5000)
        .remove(22)
        .type('com carinho.')
        .rest(10000)
        .clear()
        .start()
            
    }, []);
    return (
        <Col className="box__left p-5 text-white" lg={7}>
            <div className="box__left--subtext font-md-sm">
                Bem vindo ao Edux
                        </div>
            <div className="font-lg text__welcome__box font-weight-bold mb-5" id="welcome">
                
            </div>
        </Col>
    )
}

export default LeftSide;