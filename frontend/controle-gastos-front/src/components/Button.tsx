interface ButtonProps {

    children: React.ReactNode;

    type?: "button" | "submit";

    onClick?: () => void;

    disabled?: boolean;

}


function Button({

    children,

    type = "button",

    onClick,

    disabled = false


}: ButtonProps) {


    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className="
                bg-blue-600
                text-white
                rounded
                px-4
                py-2
                hover:bg-blue-700
                disabled:opacity-50
            "

        >

            {children}

        </button>

    );

}


export default Button;