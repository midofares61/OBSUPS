import image1 from "../images/call-center.png";
import image2 from "../images/delevry.png";
import image3 from "../images/visa.png";
import image4 from "../images/save.png";
import "./card.css";
import TitelCategory from "../Title/Title";
function CardFeat() {
  return (
    <>
      <TitelCategory
        name="ميزات الموقع"
        content="هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة"
      />
      <div className="container cards">
        <div className="col">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="content">
            <h1>الدعم الفني</h1>
            <p>دعم فني علي مدار 24 ساعة</p>
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="content">
            <h1>ميزة التوصيل</h1>
            <p>يوجد لدينا خدمة التوصيل لجميع مناطق قطاع غزة</p>
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img src={image3} alt="" />
          </div>
          <div className="content">
            <h1>ميزة الدفع الالكتروني</h1>
            <p>نقبل بطاقات الدفع الالكتروني مثل جوال باي وكاش كارد</p>
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img src={image4} alt="" />
          </div>
          <div className="content">
            <h1>الحماية والامان</h1>
            <p>نوفر لك الامان والحماية عند تصفحك للموقع</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardFeat;
