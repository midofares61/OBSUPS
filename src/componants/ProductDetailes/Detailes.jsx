import image1 from "../Home/images/avatar-03.png"
import "./detailes.css"
import TitelCategory from "../Home/Title/Title"

function Detailes(probs){
    const product = probs.product;
    return(
        <>
        <div className="container">
            <div className="titel">
                <a href="/">الرئيسية</a> / <a href="/">اجهزة الكومبيوتر</a>
            </div>
            <div className="box-detailes">
                <div className="image">
                    <div className="imag">
                    <img src={product.image} alt="" />
                    </div>
                    <div className="images">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="detail">
                        <div className="text">
                        <h1>{product.title}</h1>
                        <span>${product.price}</span>
                        </div>
                        <p>هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة</p>
                    </div>
                    <div className="saller">
                        <img src={image1} alt="" />
                        <div className="text">
                            <h1>انس سائد</h1>
                            <p>تاجر اجهزة كومبيوتر</p>
                            <div class="star">
                                <i class="filled fas fa-star"></i>
                                <i class="filled fas fa-star"></i>
                                <i class="filled fas fa-star"></i>
                                <i class="filled fas fa-star"></i>
                                <i class="filled fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                                <div className="btn call">
                                    <i class="fa-solid fa-phone"></i>
                                    اتصال
                                </div>
                                <div className="btn sms">
                                    <i class="fa-regular fa-comment-dots"></i>
                                    مراسلة
                                </div>
                        </div>
                        <div className="delevery">
                            <i class="fa-solid fa-motorcycle"></i>
                            امكانية التوصيل الي جميع قطاع انحاء غزة
                        </div>
                </div>
            </div>
        </div>
        <div className="container">
            <TitelCategory name="منتجات ذات صلة" content="النص لن يبدو مقسما ولا يحوي علي اخطاء"/>
            
        </div>
        </>
    )
}
export default Detailes;