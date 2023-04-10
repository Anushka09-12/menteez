import {Nav} from "./Home.jsx"
import "./Blog.css"
import anxiety from "../images/anxiety.jpeg"

function Blog(){
    return(
        <>
        <Nav/>
        <div className="blocks">
        <div className="boxes">
            <center>
            <img src={anxiety} alt ="image" height={200} width={250}/>
            </center>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry <a href="/">Read More</a>
          </p>
        </div>
        <div className="boxes">
            <center>
            <img src={anxiety} alt ="image" height={200} width={250}/>
            </center>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry <a href="/">Read More</a>
          </p>
        </div>
        <div className="boxes">
            <center>
            <img src={anxiety} alt ="image" height={200} width={250}/>
            </center>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry <a href="/">Read More</a>
          </p>
        </div>
      </div>
        </>
    )
}

export default Blog;