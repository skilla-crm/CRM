'use client'
import { create } from "@/actions"


const Main = () => {
 
  
    return (
        <>
            это главная страница
            <button onClick={() => create()}>Записать печченье</button>
        </>
    )

}
export default Main;