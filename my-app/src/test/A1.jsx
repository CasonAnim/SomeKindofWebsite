import React, {useState} from "react"

function A1() {

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const updateName = () => {
       setName("GInger")
        
    }
    const c = (() => {
        if (age!=null) {
            setAge(age+1)
        } else {
            setAge(0)
        }
    })

    return (
        
        <div className=" shadow-2xs shadow-black w-5/12">
            <p>
                Name : {name} || aGE : {age}
            </p>
           <button onClick={updateName } className="  p-4.5 bg-blue-400 rounded-2xl ">
            a
           </button>
           <button onClick={c } className="  p-4.5 bg-blue-400 rounded-2xl ">
            a
           </button>
        </div>
      
    )
}
export default A1 