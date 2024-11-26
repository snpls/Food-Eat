import { friesbanner } from "../../utils"


const Banner = () => {
  return (
    <section>
        <div className="container py-20 grid q md:grid-cols-2 gap-10  ">
            <img src={friesbanner} alt="" />
            <div className="flex flex-col justify-center gap-5">
                <h1 className="text-4xl font-semibold capitalize">Food is always good</h1>
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laboriosam vitae accusamus assumenda, nobis perferendis ducimus! Itaque similique, recusandae nulla</p>
            </div>
        </div>
    </section>
  )
}

export default Banner