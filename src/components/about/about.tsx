import * as constants from "../../constants"
import "./about.scss";

export const About = () => {
    return (
        <div className='about-wrapper'>
            <img src={`${constants.cdnBaseUrl}bnw/1.jpg`}></img>
            <div className='about-text'>
                <h2>PIOTR KSIAZEK</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore ab qui ipsa nam culpa minima delectus esse dolorum excepturi corporis voluptates omnis commodi possimus, quo impedit et? Quasi, dignissimos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptas labore, architecto hic ex fugit consequatur eveniet quia corporis, repellat sapiente minus tenetur debitis molestias? Eius explicabo sit ipsum nulla.
                </div>
            </div>
        </div>
    )
}