import { heroImage } from "../../utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Hero = () => {
    useGSAP(() => {
        gsap.to('#hero-img', {rotate:360, duration:20, ease:"none", repeat:-1})
    })

  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2'>
            <div className="flex flex-col justify-center gap-8 items-center md:min-h-[600px] min-h-[400px] text-center md:pr-10 lg:pr-20 md:items-start md:text-start">
                <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold">Delicious Food Is Waiting For You</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ea molestiae. Asperiores facere illo fugit enim quos totam deserunt necessitatibus earum perspiciatis architecto expedita minus voluptatum, laudantium facilis, quia optio.</p>
                <div className="space-x-4">
                    <button className='bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-110 transition-all'>Food menu</button>
                    <button className='bg-gray-300 px-6 py-2 rounded-full font-semibold hover:scale-110 transition-all'>Book Table</button>
                </div>
            </div>
            <div className="flex-center">
                <img id='hero-img' src={heroImage} width={400} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero