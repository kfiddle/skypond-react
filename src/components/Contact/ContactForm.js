import styles from "./Contact.module.css";

import Wrapper from "../Wrapper";

const ContactForm = (props) => {
  return (
    <Wrapper>
      <div className={styles.contactForm}>
        We provide solutions for your small landscape and gardening needs.
        Including spring and fall cleanup, raised garden beds, planting and
        maintenance. <br></br>Let us know what you have in mind!
      </div>
    </Wrapper>
  );
};

export default ContactForm;
