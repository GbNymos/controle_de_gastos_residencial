interface InputProps {

    label: string;

    type?: string;

    value: string;

    placeholder?: string;

    onChange: (value: string) => void;

}


function Input({
    label,
    type = "text",
    value,
    placeholder,
    onChange

}: InputProps) {


    return (

        <div className="flex flex-col gap-1">

            <label className="font-medium">
                {label}
            </label>


            <input

                type={type}

                value={value}

                placeholder={placeholder}

                onChange={(e) => 
                    onChange(e.target.value)
                }

                className="
                    border
                    rounded
                    p-2
                    outline-none
                    focus:ring-2
                "

            />

        </div>

    );

}


export default Input;