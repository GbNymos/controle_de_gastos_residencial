interface CardProps {

    title: string;

    children: React.ReactNode;

}


function Card({

    title,

    children

}: CardProps) {


    return (

        <div
            className="
                bg-white
                rounded-lg
                shadow-md
                p-6
                space-y-4
            "
        >

            <h2
                className="
                    text-xl
                    font-bold
                "
            >

                {title}

            </h2>


            <div>

                {children}

            </div>


        </div>

    );

}


export default Card;