import Slider from "./slider/Slider";
import Ads from "./Ads/Ads";
import Combuter from "./Combuter/Combuter";
import Clothes from "./Clothes/Clothes";
import CardFeat from "./Features/Card-feat";
import Question from "./Qauestions/Question";
function Home() {
    return (
      <>
        <Ads />
        <Combuter />
        <Clothes />
        <Ads />
        <Combuter />
        <Slider/>
        <CardFeat />
        <Question />
      </>
    );
  }
export default Home;