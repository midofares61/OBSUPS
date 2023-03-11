import "./foot.css"
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="container foot">
                <div className="box">
                    <h1>معلومات عامة</h1>
                    <ul>
                        <li><a href="/">من نحن</a></li>
                        <li><a href="/">معلومات عامة</a></li>
                        <li><a href="/">سياسة خاصة</a></li>
                        <li><a href="/">الاحكام والشروط</a></li>
                    </ul>
                </div>
                <div className="box">
                    <h1>حسابي</h1>
                    <ul>
                    <li><a href="/">حسابي الشخصي</a></li>
                    <li><a href="/">تاريخ الطلب</a></li>
                    <li><a href="/">قائمة الرغبات</a></li>
                    <li><a href="/">النشرة الاخبارية</a></li>
                    </ul>
                </div>
                <div className="box">
                    <h1>إضافات</h1>
                    <ul>
                    <li><a href="/">العلامات التجارية</a></li>
                    <li><a href="/">شهادات الهدايا</a></li>
                    <li><a href="/">الشركات التابعة</a></li>
                    <li><a href="/">العروض الخاصة</a></li>
                    </ul>
                </div>
                <div className="box">
                    <h1>النشرةالاخبارية</h1>
                    <p>النشرةالاخباريةعبارة عن نشرة يتم توزيعها بانتظام وتتناول بشكل عام موضوعا رئيسيا واحدا يهم المشتركين فيها</p>
                    <form action="">
                        <input type="text"  placeholder="ضع ايميلك هنا"/>
                        <button>اشتراك</button>
                    </form>
                </div>
            </div>
            <div className="container copy">
                    <ul className="links">
                        <li><a href="/#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="/#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="/#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="/#"><i class="fa-brands fa-instagram"></i></a></li>
                    </ul>
                <div className="text">
                    جميع الحقوق محفوظة, موقع 2023  OBSUPS 
                </div>
                <div className="logo">
                <a href="/">OBSUPS</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;