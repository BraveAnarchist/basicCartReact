export default function Nav({ data }) {


    return (
        <nav className="bg-[#645cff] text-white flex justify-around text-3xl py-[3vh]">
            <p>UseReducer</p>
            <div className="cart relative"><i className="fa-solid fa-cart-plus"></i>
                <p className="absolute top-[-1.3vh] right-[-1vw] bg-[#a29dff] w-[20px] h-[20px] text-center rounded-full text-sm">{data.reduce((prev,pre) => {return prev+pre.number; },0)}</p></div>
        </nav>
    )
}