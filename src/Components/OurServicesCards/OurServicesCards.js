import Img1 from '../../Images/card-item-1.png'

export default function OurServicesCards() {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
                <center>
                    <img className="card-img-top" src={Img1} alt="#" />
                </center>
                <div className="card-body">
                    <center>
                        <h5 className="card-title">orange</h5>
                    </center>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sapiente asperiores
                        nam
                        ut odit qui dolor reiciendis non aspernatur nobis iusto doloremque modi, eveniet cum et
                        perferendis
                        omnis facere! Facilis.</p>

                </div>
            </div>

    </div>
  )
}
