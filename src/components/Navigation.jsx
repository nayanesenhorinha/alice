import React, { useState } from "react";

const Navigation = ({ onNext, goToSummary, goToCover }) => {
  

  

  return (

    
    <div className="navigation">
      
      
        {goToSummary && (<button onClick={goToSummary}>
          <img
            src="https://placehold.co/14"
            alt="Cover"
            className="nav-icon"
            loading="lazy"
          />
        </button>)}

     

      {goToCover && (
        <button onClick={goToCover}>
          <img
            src="https://placehold.co/14"
            alt="Cover"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}

      {onNext && (
        <button onClick={onNext}>
          <img
            src="https://placehold.co/14"
            alt="Next"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}
    </div>
  );
};

export default Navigation;
