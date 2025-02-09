import Image from "next/image"
import { BsCheckCircle } from "react-icons/bs"
import Link from "next/link"

const Business = () => {
  const features = [
    "🔝 Visibility Boost: Get featured at the top of search results",
    "📊 Profile Views: See how many students check your profile",
    "📅 Session Bookings: Track how many sessions you secure",
    "⏰ Peak Demand Times: Discover the best times to be online",
    "📈 Ranking Insights: Find out your position in search results",
    "🤖 Personalized AI Tips: Get suggestions to improve bookings",
  ]

  return (
    <div className="bg-[#0d084d] px-5 md:px-32 py-6 md:py-16 flex flex-col md:flex-row gap-10">
      <div className="text-white flex flex-col gap-6 justify-center items-start">
        <div className="flex gap-2 text-white text-2xl md:text-3xl font-bold items-center">
          <span>
            {/* <i>Unilin</i> */}
            <b className="text-[#baf452] text-4xl">Unilink</b>
          </span>
          <span className="">Growth Pack</span>
        </div>
        {/* <h2 className="text-2xl md:text-4xl mb-3 md:mb-5 font-bold">🌟 UniLink Growth Pack – 49 MAD / 30 Days</h2> */}
        <p className="text-lg mb-4 italic">Boost your visibility & track your performance in one affordable pack!</p>
        <ul className="flex flex-col gap-4">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2 items-center">
              <BsCheckCircle className="text-[#baf452] text-2xl flex-shrink-0" />
              <span className="text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold mt-4">
          💰 Price: 49 MAD / 30 Days – Optional & flexible, buy whenever you need! 🚀
        </p>
        <Link href="/payment">
          <button
            className="border-2 text-md font-semibold px-6 py-3 md:mx-0 md:my-4 border-[#baf452] bg-[#baf452] text-white rounded-md transition-all duration-300 hover:bg-transparent hover:text-[#ffffff]"
            type="button"
          >
            Get UniLink Growth Pack
          </button>
        </Link>
      </div>
      <div className="relative w-full h-[280px] md:h-[512px] md:w-1/2">
        <Image src="/business.png" alt="UniLink Growth Pack" fill />
      </div>
    </div>
  )
}

export default Business

