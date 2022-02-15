const Hero = ({heroText}) => {
  return (
  <div className='hero-section' >
      <div className="inner-hero-section">
        <h1>{heroText}</h1>
      </div>
  </div>
  );
};
export default Hero;