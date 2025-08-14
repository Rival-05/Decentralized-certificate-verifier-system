import { Globe, Lock, Zap } from "lucide-react";

export const Features  = () => {
    return(
        <section className="py-16 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
      {[
        {
          icon: <Lock className="w-6 h-6 text-primary" />,
          title: "Tamper-Proof",
          desc: "Certificates are stored securely on decentralized IPFS.",
        },
        {
          icon: <Zap className="w-6 h-6 text-primary" />,
          title: "Instant Verification",
          desc: "Verify authenticity in seconds from anywhere.",
        },
        {
          icon: <Globe className="w-6 h-6 text-primary" />,
          title: "Accessible Anywhere",
          desc: "Works globally without any central authority.",
        },
      ].map((item, index) => (
        <div key={index} className="p-6 bg-background/50 rounded-lg shadow-lg border">
          <div className="flex items-center gap-2 mb-4">
            {item.icon}
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
          <p className="text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </section>
    )
}