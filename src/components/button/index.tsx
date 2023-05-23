import { component$ } from "@builder.io/qwik";

export interface buttonProps {
    type: "primary" | "secondary"
}

export default component$(()=> {

    const button = whichButton();

    function whichButton( type : buttonProps) {
            if (type == "primary") {
        return <button>blabla</button>
    }
    }


    return (

   {button}
    )
})