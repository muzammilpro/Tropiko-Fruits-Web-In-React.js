import Img1 from '../../Images/fb.png'
import Img2 from '../../Images/twitter.png'
import Img3 from '../../Images/linkedin.png'
import Img4 from '../../Images/instagram.png'

export default function Footer() {
    return (
        <div>
            <div className="cont8">
                <div>
                    <h4>Fruits</h4> <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, excepturi maxime et magni quam ea
                        unde
                        quia
                    </p>
                </div>
                <div>
                    <h4>Services</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, excepturi maxime et magni quam ea
                        unde
                        quia
                    </p>
                </div>
                <div>
                    <h4>list</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, excepturi maxime et magni quam ea
                        unde
                        quia
                    </p>
                </div>
                <div>
                    <h4>Follow Us</h4><br />
                    <div> <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
                        <img src={Img4} alt="" /> <br />
                        <h4>Subscribe Now</h4><br />
                        <input type="text" /> <br />
                            <button type="button" id="btn1" className="btn btn-primary">Subscribe</button>
                    </div>

                </div>

            </div>
            <div>
                <footer>
                    <div className="footer">
                        <center>
                            <p> copyright &copy; All Right Reserved By Muzammil Husnain</p>
                        </center>
                    </div>
                </footer>
            </div>
        </div>
    )
}
