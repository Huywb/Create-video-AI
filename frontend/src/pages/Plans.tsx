import Pricing from "../components/Pricing"

const Plans = () => {
  return (
    <div className="max-sm:py-10 sm:pt-20">
        <Pricing></Pricing>

        <p className="text-center text-gray-400 max-w-md text-sm my-10 mx-auto px-12">
          Create stunning images for just <span className="text-indigo-400 font-medium">5 credits</span> per generation. Each video generation costs <span className="text-indigo-400 font-medium">10 credits</span>. <br></br>
        </p>
    </div>
  )
}

export default Plans
