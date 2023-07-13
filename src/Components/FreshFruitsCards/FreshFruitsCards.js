import Img1 from '../../Images/orange.png'
import Button from '../BuyNowButton/BuyNowButton'

export default function FreshFruitsCards() {
  return (
    <div>
      <div className="cont5">
                <div>
                    <h3>Best Fresh Orange</h3> <br /><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quaerat repellat eius id velit
                        doloribus
                        odio ea, nam eligendi dicta necessitatibus aliquid soluta <br /> laudantium fugiat similique
                        assumenda
                        deserunt cum vitae. Ratione?</p>
                        <Button />
                    
                </div>
                <div><img src={Img1} alt="img" /></div>
            </div>
    </div>
  )
}
