




export default function MiniHeader(){
   
    const items = [
        {'title':'Tshirt Illustrations'},
        {'title':'Dharmik Styles'},
        {'title':'Bold and Fancy'},
        {'title':'Surreal'},
        {'title':'New Designs'},
    ]

    return(
        <div className="w-full flex justify-center mt-8 mb-8">
            <div className="w-full max-w-[711px] justify-center items-center flex flex-row">
          {items.map((item)=>{

            return(
                
                    <p className="text-[15px] pl-2 pr-2 font-outfit mr-3 cursor-pointer" key={item.title}>{item.title}</p>
              
            )
          })}
        </div>
        </div>
    )
}