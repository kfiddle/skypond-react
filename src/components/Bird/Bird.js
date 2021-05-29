import flyingBird0 from '../../assets/flyingBird/heron_inFlight-0.png';


import styles from './Bird.module.css';

const Bird = props => {

    return <img className={styles.bird} src = {flyingBird0}></img>

};

export default Bird;