const Hero = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            Just Do It, YOUR FEET DESERVE THE BEST AND WE'RE HERE HELP YOU WITH
            OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>All Available on</p>
            <div className="brand-icons">
              <img src="../images/flipkart.png" alt="Flipkart logo" />
              <img src="../images/amazon.png" alt="amazon logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="../images/shoe_image.png" alt="Shoe image" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
