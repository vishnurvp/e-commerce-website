import React from "react";
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={classes.headingDiv}>
        <h1 className={classes.heading}>The Generics</h1>
        <h2>Get Our Latest Album</h2>
        <h3 className={classes.play}>Play</h3>
      </div>
      <div>
        <h1>Tours</h1>
        <ul className={classes.list}>
          <li>
            event one <button>Buy Tickets</button>
          </li>
          <li>
            event two <button>Buy Tickets</button>
          </li>
          <li>
            event three <button>Buy Tickets</button>
          </li>
          <li>
            event four <button>Buy Tickets</button>
          </li>
          <li>
            event five <button>Buy Tickets</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
