import Random from "./components/Random";
import Tag from "./components/Tag";



export default function App() {

  

  return (
    <div className="background w-full flex flex-col gap-y-5">
      <h1 className="bg-white rounded-lg text-center w-[90%] h-[6%] mx-auto mt-3 text-2xl uppercase">Random gif</h1>

      <div>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
