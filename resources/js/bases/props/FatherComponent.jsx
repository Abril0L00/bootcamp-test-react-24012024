
import { ChildrenComponent } from "./ChildrenComponent"
export const FatherComponent = () => {
    return (
        <>
        <h1>FatherComponet</h1>
        {/* <ChildrenComponent 
        btn-text={'submit'}
        ></ChildrenComponent> */}
        <ChildrenComponent 
        btnText={'prop-validate'}
        ></ChildrenComponent>
        </>
    )
}