import Img1 from '../../Images/slide-img.png'

export default function Header() {
    return (
        <div>

            <center>
                <div className="container1">
                    <div className="container2">
                        <h1>Welcome to <br /> our Fruit Shop</h1><br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, est ad dolorem aliquam nostrum
                            eligendi
                            molestias placeat aspernatur sed. Harum repellendus quia tempora officiis voluptas? Veniam
                            expedita
                            eaque ea molestiae?</p>
                        <br />
                        <div>


                            <button type="button" id="btn1" className="btn btn-primary">Shop Now</button>
                            <button type="button" className="btn btn-dark">Contact Us</button>


                        </div>

                    </div>
                    <div className="container3">

                        <img src={Img1} alt="img" width="60%" height="50%" />

                    </div>
                </div>
            </center>

        </div>
    )
}
