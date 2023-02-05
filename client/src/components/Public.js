import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header className="public__header__div">
        <h1>
          Garnish Music Production School
          <span className="nowrap"> - Los Angeles</span>
        </h1>
      </header>
      <main className="public__main">
        <section className="section__main">
          <p className="public__description">
            The World’s Boutique Music Production School | Los Angeles
            <br />
            <br />
            Conveniently located, by the 170 Freeway, so not far from everything
            LA has to offer. <br />
            Walkable spots to eat, under a mile from NoHo West, and 2 miles from
            the NoHo Arts District.
          </p>
          <div>
            <address className="public__addr">
              12435 Oxnard Street
              <br />
              North Hollywood, CA 91606
              <br />
              <a href="tel:+15555555555">(323) 348-1289</a>
            </address>
            <br />
          </div>
          <div className="public__hours">
            <h3>Hours</h3>
            <p>
              <span className="nowrap">Monday - Friday:</span> 8:00am - 10:00pm
            </p>
            <p>
              <span className="nowrap">Saturday - Sunday:</span> Closed
            </p>
          </div>
          <br />
          <div className="login__button">
            <Link to="/login">Employee Login</Link>
          </div>
        </section>
        <section className="copyright__div">
          <div className="image__div">
            <img
              src="https://la-1.garnishmusicproduction.com/wp-content/uploads/2018/02/Ableton.png"
              // height="42"
              width="150"
              alt="Ableton"
            />
            <img
              src="https://s3-practice-keith.s3.us-east-2.amazonaws.com/AvidLearningPartner_Alpha.png"
              // height="42"
              width="200"
              alt="Avid Pro Tools"
            />
          </div>
          <p>Copyright © Garnish Music Production School</p>
        </section>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
