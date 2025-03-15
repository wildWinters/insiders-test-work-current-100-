interface ButtonDescription{
    text: string,
    activateModal: ()=>void;
    width?:number;
    height?: number;
}

export default function Button({text,activateModal}: ButtonDescription) {             

    return ( 
        <button className="bg-black w-[100px] h-[40px] rounded-[10px]" onClick={activateModal} >{text}</button>
    )
}