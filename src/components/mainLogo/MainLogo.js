import "./MainLogo.css";

import Bird from '../Bird/Bird';
import skyPondSansBird from '../../assets/skyPondSansBird.png';
import flyingBird0 from '../../assets/flyingBird/heron_inFlight-0.png';


const MainLogo = () => {
  return(
  <div className='mainLogoContainer'>
    <div className="mainLogo">
      <img
        className="skyPondLogo"
        id="skyPondLogo"
        src={skyPondSansBird}
      ></img>
      <Bird></Bird>
      <h1 className="homePageTitle">farm and landscape</h1>
    </div>
  </div>
  )
};

export default MainLogo;
