export default function Bag({ data ,remover,increaser,decreaser,setData}) {

    if (data.length === 0) {
        return (
            <main>
                <h1 className="text-center text-5xl mt-[11vh] mb-[4vh]">YOUR BAG</h1>
                <div className="w-[55%] mx-auto">
                    <div className="flex justify-center items-center"><p className="text-[#64748b] text-3xl">is currently empty</p></div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <h1 className="text-center text-5xl mt-[11vh] mb-[4vh]">YOUR BAG</h1>
            <div className="w-[55%] mx-auto">
                {data.map((ele, idx) => {
                    return (
                        <div className="flex justify-between mb-[1.5vh]">
                            <div className="flex gap-[3vw]">
                                <img className="h-[10vh]" src={ele.pic} alt="" />
                                <div>
                                    <p className="text-2xl font-semibold">{ele.name}</p>
                                    <p className="text-[#8894a4]">${ele.price}</p>
                                    <p className="text-[#7a87fd] hover:cursor-pointer" onClick={()=>{remover(idx)}}>remove</p>
                                </div>
                            </div>
                            <div>
                            <i className="fa-solid fa-angle-up text-[#645cff] hover:cursor-pointer" onClick={()=>{increaser(idx)}} ></i>
                            <p>{ele.number}</p>
                            <i class="fa-solid fa-angle-down text-[#645cff] hover:cursor-pointer" onClick={()=>{decreaser(idx)}}></i>
                            </div>

                        </div>
                    )
                })}
            </div>
            <hr className="w-[55%] mx-auto mt-[7vh] border-[#cbd5e1] border-[1px] "/>
            <div className="w-[55%] mx-auto flex justify-between text-xl pt-[1vh]">
                <p>Total</p>
                <p className="p-[4px] bg-[#645cff] text-white rounded-md">${data.reduce((acc,pre)=>{return (Math.round((acc+pre.price*pre.number)*100)/100)},0)}</p>
                
            </div>
            <button className="mx-auto w-[7vw] block bg-[#c1beff] text-[#6d62ff] rounded-md hover:bg-[#6d62ff] hover:text-[white] hover:cursor-pointer" 
            onClick={()=>{
                setData([]);
            }}>Clear Cart</button>
        </main>
    )
}