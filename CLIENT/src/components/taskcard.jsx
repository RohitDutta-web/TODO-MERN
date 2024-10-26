

export default function TaskCard() {
  return (
    <>
      
      <div className="flex justify-around  max-h-1/5  items-center  m-2 p-2 outline-dashed outline-slate-600">
          <h3 className="w-1/4 text-center font-bold text-xl text-blue-900">10:08:10pm</h3>
          <p className="w-1/4 block text-center">Lorem ipsum dolor,Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in omnis eligendi molestiae est, aliquid itaque voluptatum, consectetur fuga rem nulla quidem necessitatibus. Iure ipsa nihil temporibus a et excepturi! one ea dolores et nulla aliquid.</p>
          <div className="w-1/4 text-center">
            <form >
              <input type="submit" name="" id="" className="bg-green-400 p-3 rounded-full text-white font-bold text-xl m-2 w-3/4 hover:bg-green-700" value="Complete" />
              <input type="submit" name="" id="" className="bg-red-400 p-3 rounded-full text-white font-bold text-xl m-2 w-3/4 hover:bg-red-700" value="Dispose" />
            </form>
          </div>

          <div className="w-1/4 flex flex-col  items-center h-full ">
            <h1 className="font-bold text-xl ">Urgency</h1>
            <div className="flex flex-col w-1/2 m-2 ">
            <button className="p-1 m-2 rounded-full shadow-3xl hover:shadow-inner font-bold bg-red-600 text-white">High</button>
            <button className="p-1 m-2 rounded-full shadow-3xl hover:shadow-inner font-bold bg-yellow-400 text-white">Mid</button>
            <button className="p-1 m-2 rounded-full shadow-3xl hover:shadow-inner font-bold bg-green-500 text-white">Low</button>
            </div>
          </div>
        </div>

    </>
  )
}
