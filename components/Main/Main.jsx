'use client'
import { create } from "@/app/actions"


const Main = () => {
 
  
    return (
        <>
            это главная страница
            <button onClick={() => create()}>Записать печченье</button>
        </>
    )

}
export default Main;