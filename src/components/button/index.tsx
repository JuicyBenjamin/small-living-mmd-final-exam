import { Slot, component$ } from "@builder.io/qwik";

export interface buttonProps {
    color:
        |"primary"
        |"secondary"
        |"brown"
        |"whiteBorder"
    formAction?: string
    class?: string
    onClick$?: () => void
}

export default component$<buttonProps>((props)=> {
    const classes = {
        primary: "hover:bg-[--accent-green] border-[1px] border-[--accent-green] text-uppercase hover:text-white text-sm",
        secondary: "hover:underline text-sm",
        brown: "bg-[#322A1D] hover:bg-[#5E503F] hover:text-white p-2 text-white text-sm",
        whiteBorder: "border-[1px] border-white text-uppercase text-sm",
    }

    return (
        <button {...props} class={`px-4 py-2 flex gap-2 items-center ${classes[props.color]} ${props.class}`}>
            <Slot />
        </button>
    )
})