import { FileText, Search } from "lucide-react"

export const Hero = () => {
    return(
        <section className="flex flex-col items-center justify-center text-center py-20 px-6 relative z-10">
        <h1 className="text-foreground text-5xl md:text-6xl font-bold mb-4 relative inline-block">
          Decentralized, Secure & Verifiable Certificates
          <svg
            className="absolute bottom-2 left-0 w-full"
            height="12"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          />
        </h1>
        <p className="text-lg md:text-xl text-primary max-w-2xl mb-8">
          Issue and verify certificates instantly using blockchain-backed
          verification. Tamper-proof, fast, and accessible anywhere.
        </p>
        <div className="flex gap-4">
          <a
            href="/issue"
            className="px-6 py-3 flex gap-4 rounded-xl bg-yellow-400 text-black font-semibold shadow-lg transform hover:-rotate-1 hover:scale-105 transition"
            style={{ boxShadow: "4px 4px 0px #000" }}
          >
            <FileText className="w-6 h-6" /> Issue Certificate
          </a>
          <a
            href="/verify"
            className="px-6 py-3 flex gap-4 rounded-xl bg-pink-400 text-black font-semibold shadow-lg transform hover:rotate-1 hover:scale-105 transition"
            style={{ boxShadow: "4px 4px 0px #000" }}
          >
            < Search className="w-6 h-6"/> Verify Certificate
          </a>
        </div>
      </section>
    )
}