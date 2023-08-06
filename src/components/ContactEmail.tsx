import spidy from "../assets/images/email/format-arw-PXjQaGxi4JA-unsplash (1).jpg";

export default function ContactEmail() {
  return (
    <div className="my-16">
      <div className="flex justify-center gap-4 items-center">
        <div>
          <input
            className="border-2 md:w-96 sm:w-72 w-60 block mb-3 border-slate-700 bg-white text-black rounded "
            type="email"
            required
            placeholder="Email"
          />
          <textarea
            className="border-2 md:w-96 sm:w-72 w-60 block mb-3 border-slate-700 bg-white text-black rounded "
            required
            placeholder="Your Concern"
          />
          <button className="block mb-3 bg-black text-white px-12">Send</button>
        </div>
        <div>
          <img
            className="rounded-lg lg:ms-20 md:block hidden"
            src={spidy}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
