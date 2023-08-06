import { Store } from "./store";
export const Home=()=>{
    return (
        <>
        <div>
            Home Page
        </div>
        <p>
            Counter Is : {Store.getState().counter}
        </p>
        </>
    )
}