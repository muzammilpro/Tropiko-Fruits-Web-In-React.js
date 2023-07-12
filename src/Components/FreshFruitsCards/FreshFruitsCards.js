import Img1 from '../../Images/orange.png'

export default function FreshFruitsCards() {
  return (
    <div>
      <div className="cont5">
                <div>
                    <h3>Best Fresh Oeange</h3> <br /><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quaerat repellat eius id velit
                        doloribus
                        odio ea, nam eligendi dicta necessitatibus aliquid soluta <br /> laudantium fugiat similique
                        assumenda
                        deserunt cum vitae. Ratione?</p>
                    <button type="button" className="btn btn-dark">Buy Now</button>
                </div>
                <div><img src={Img1} alt="img" /></div>
            </div>
    </div>
  )
}
