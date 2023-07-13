import img from '../../Images/orange-dish.png'

export default function ContactUs() {
    return (
        <div>
            <div className="cont6">
                <div className="cont4">
                    <h1>Contact Us</h1>
                    <form action="">
                        <input type="text" className="form" placeholder="Name" size="60" /> <br />
                        <input type="text" className="form" placeholder="Phone Number" size="60" /> <br />
                        <input type="text" className="form" placeholder="Email" size="60" /> <br />
                        <input type="text" className="form" placeholder="Message" size="60" /> <br />
                        </form>
                        <br />
                        <button type="button" id="btn1" class="btn btn-primary">Send</button>
                </div>
                <div><img src={img} alt="img" className="imm" /></div>
            </div>
        </div>
    );
}
