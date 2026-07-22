interface MessageProps {

    text: string;

    type: "success" | "error";

}


function Message({

    text,

    type

}: MessageProps) {


    return (

        <div

            className={`
                rounded
                p-3
                font-medium
                ${
                    type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
            `}

        >

            {text}

        </div>

    );

}


export default Message;