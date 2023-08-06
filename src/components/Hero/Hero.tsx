import hero from "../../assets/images/hero/hero-high.jpeg";
// import hero from "../../assets/images/hero/hero-low.jpeg";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        // backgroundImage: "url(../../assets/images/hero/hero-high.jpeg)",
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}
