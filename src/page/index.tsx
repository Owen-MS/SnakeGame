import './index.less';
import { useEffect } from 'react';
import GameControl from './GameControl'

function Home() {
  useEffect(() => {
    new GameControl();
  }, []);
  return (
    <div className={'home'}>
      <div id={'content'}>
        <div id={'snake'}>
          <div className={'snake-item'} />
        </div>
        <div id={'food'}>
          <div className="food-item"></div>
          <div className="food-item"></div>
          <div className="food-item"></div>
          <div className="food-item"></div>
        </div>
      </div>
      <div className={'footer'}>
        <div>SCORE: <span id={'score'}>0</span></div>
        <div>LEVEL: <span id={'level'}>1</span></div>
      </div>
    </div>
  )
}

export default Home;