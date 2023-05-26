import { Slot, component$ } from "@builder.io/qwik";

export interface buttonProps {
    color:
        |"primary"
        |"secondary"
        |"brown"
        |"whiteBorder"
    formAction?: string
    class?: string
}

export default component$<buttonProps>((props)=> {
    const classes = {
        primary: "bg-blue-300 text-white",
        secondary: "bg-red-400 text-white",
        brown: "bg-[#322A1D] hover:bg-[#5E503F] hover:text-white p-2 text-white",
        whiteBorder: "border-[1px] border-white text-uppercase",
    }

    return (
        <button {...props} class={`px-4 py-2 ${classes[props.color]} ${props.class}`}>
            <Slot />
        </button>
    )
})