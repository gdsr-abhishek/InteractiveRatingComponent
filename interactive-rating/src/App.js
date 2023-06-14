import star from './images/icon-star.svg';
import illustration from './images/illustration-thank-you.svg'
import './App.css';
import { useState } from 'react';

function App() {
  let [rating, setRating] = useState(0);
  let [temp, setTemp] = useState(0);
  let [S, setS] = useState([false, false, false, false, false]);
  function setStyle(styleNo) {
    let temp = [false, false, false, false, false]
    for (let i = 0; i < temp.length; i++) {
      if (i === styleNo - 1) {
        temp[i] = true;
      }
    }
    setS(temp);
  }
  return (
    <div className="App">
      {rating === 0 && <div className="ratingArea">
        <div className="star"><img src={star} alt="" /></div>
        <div className='ratingTitle'> How did we do?</div>

        <div className='ratingDescription'>
          Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!
        </div>
        <br />
        <div className='rating'>
          < button onClick={() => { setTemp(1); setStyle(1); }}
            className={S[0] === true ? 'selectedRatingValue1' : 'ratingValue1'}>1</button>
          < button onClick={() => { setTemp(2); setStyle(2); }}
            className={S[1] === true ? 'selectedRatingValue2' : 'ratingValue2'}>2</button>
          < button onClick={() => { setTemp(3); setStyle(3); }}
            className={S[2] === true ? 'selectedRatingValue3' : 'ratingValue3'}>3</button>
          < button onClick={() => { setTemp(4); setStyle(4); }}
            className={S[3] === true ? 'selectedRatingValue4' : 'ratingValue4'}>4</button>
          < button onClick={() => { setTemp(5); setStyle(5); }}
            className={S[4] === true ? 'selectedRatingValue5' : 'ratingValue5'}>5</button>
        </div>
        <div className='submitArea'>
          <button className='submit' onClick={() => setRating(temp)}>Submit</button>
        </div>
      </div>
      }

      {/* 
        <!-- Rating state end -->

        <!-- Thank you state start --> */}

      {/* You selected <!-- Add rating here --> out of 5 */}
      {rating !== 0 && <div className='thankYouArea'>
        <div>  <img src={illustration}></img></div>
        <div className='showRating'> <div className='showRatingField'>You selected {rating} out of 5</div></div>

        <div>
          <h2>  Thank you!</h2>
        </div>
        <div>
          <h5>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
          </h5>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
