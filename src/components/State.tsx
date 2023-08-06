export default function State() {
  return (
    <div className="py-20">
      <div className="my-16">
        <h1 className="text-5xl mb-8">You’re in good company</h1>
        <h3 className="text-4xl text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore
        </h3>
      </div>
      <div>
        <div className="stats bg-transparent ">
          <div className="stat place-items-center">
            <div className="stat-title">Sales</div>
            <div className="stat-value">31K Tons</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Buyer</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Order</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
