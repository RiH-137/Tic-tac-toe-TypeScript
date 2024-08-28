import React from "react";

interface BlockProps {
    value?: string | null;                           // value can be string or null
    onClick?: () => void;                             // onClick is a function that returns void
}

const Block: React.FC<BlockProps> = (props) => {
    return(
        <div onClick={props.onClick} className="block">{props.value}</div>
    )
};

export default Block;





