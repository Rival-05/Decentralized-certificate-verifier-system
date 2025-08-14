import { useEffect, useState } from "react";

export const How = () =>{
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

    return(
        <section className="py-16 px-6 bg-[#141414] relative z-10 max-w-7xl rounded-lg shadow-2xl drop-shadow-[0_0_12px_#2f2f2f]">
            <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
                {
                step: "1",
                title: "Fill Details",
                desc: "Enter recipient info, title, and date.",
                },
                {
                step: "2",
                title: "Generate & Sign",
                desc: "Your certificate is hashed and signed securely.",
                },
                {
                step: "3",
                title: "Store & Share",
                desc: "Stored on IPFS with a unique verification code.",
                },
            ].map((item, idx) => (
                <div key={idx} className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {idx < 2 && (
                    <svg
                    className={`hidden md:block absolute top-8 right-[-50px] ${
                        animate ? "draw" : ""
                    }`}
                    width="80"
                    height="20"
                    viewBox="0 0 100 20"
                    >
                    <path
                        d="M0 10 Q50 0 100 10"
                        stroke="#00ff88"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4"
                    />
                    </svg>
                )}
                </div>
            ))}
            </div>
        </section>
    )
}