import './Section2.css'
import lady from '../../../Components/Assets/lady1.jpg';
import wire from '../../../Components/Assets/svg/line.svg'
import male from '../../../Components/Assets/male1.jpg'
import wire1 from '../../../Components/Assets/svg/section1wire.svg'
import maleface from '../../../Components/Assets/svg/maleface.svg'

const Section2 = () => {
  return (
    <section>
      <div class="flex-container container">
        <div class="item1">
          <div class="image1-container">
            <img src={lady} alt="lady" />
          </div>
          <div class="text-container">
            <p>
              <span>And now your search has ended...</span>
            </p>
            <h1>
              Gain knowledge to help you scale through the tech industry for
              free.
            </h1>
            <img src={wire} alt="line" />
            <p className='para'>
              A basic introduction to software development and product design
              aimed at complete beginners, which anyone can join
            </p>
          </div>
          <div class="image2-container">
            <img src={male} alt="male" />
          </div>
        </div>
        <div class="item2">
          <div class="img1">
            <img src={maleface} alt="male" />
          </div>
          <div class="button">
            <button>Enroll Now</button>
          </div>
          <div class="img2">
            <img src={wire1} alt="wire" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section2;
