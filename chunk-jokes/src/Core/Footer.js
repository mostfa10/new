
import ArrowRightIcon from '../assets/assets_Homework_Front-End_02/path-copy-3.png'

const Footer = () => {
    return ( 
        <div className="row d-grid md:mt-3 ">
            <div className="col-12 left margin-textos-footer  pt-3 ">
                <span className="uppercase so-funktionierts white-text">GOT JOKES ? GET PAID</span><br></br>
                <span className="uppercase so-funktionierts white-text">FOR SUBMITTING!</span><br></br>
            </div>
            <div className='col left margin-textos-footer mt-3'>
                <a href="#" className="uppercase secondary-text so-funktionierts mt-4 "> Submit Joke
                <img src={ArrowRightIcon} alt="" className='ml-2'/>
                </a>
            </div>
        </div>
     );
}
 
export default Footer;