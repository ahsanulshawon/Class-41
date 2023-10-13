
const Service = (props) => {
    return (
        <div className="item p-5 border-[#7AA3FF] rounded-lg border-2 w-[30%] ">
        <h2 className=' mb-[10px] bg-[#7AA3FF] text-white  rounded-lg '>{props.item}</h2>
        <p className=' mb-[10px] bg-transparent'>{props.detail}</p>
        <span className="font-bold" >Price : {props.price} $</span> <br />
        <button className='add_btn mt-2 border-2 border-[#7AA3FF] px-2 py-1 hover:bg-[#7AA3FF] font-semibold rounded-lg hover:text-white'>Buy Service</button>
    </div>
    );
};

export default Service;