import { foodListType } from "../../constants/type"

interface Props{
  food: foodListType
}

const FoodCard = ({food} : Props) => {
  return (
    <div className="bg-gray-200/30 rounded-xl px-5 py-10 hover:scale-110 transition-all shadow-xl">
      <img src={food.img} className="lg:size-60 object-cover rounded-full mx-auto" alt="" />
      <div className="text-start grid gap-3">
        <h1>{food.rating}</h1>
        <h4 className="font-semibold text-lg">{food.name}</h4>
        <p className="text-sm">{food.descp}</p>
        <p className="font-semibold text-lg">{food.price}</p>
      </div>  
    </div>
  )
}

export default FoodCard