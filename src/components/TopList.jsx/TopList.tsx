import { foodList } from "../../constants"
import FoodCard from "./FoodCard"


const TopList = () => {
  return (
    <section>
        <div className='container py-14 text-center'>
            <h1 className='font-semibold text-4xl'>Top List</h1>
            <p className="mb-10">Our top list</p>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
              {foodList.map((food,index) => (
                  <FoodCard key={index} food={food} />
              ))}
          </div>
        </div>
    </section>
  )
}

export default TopList