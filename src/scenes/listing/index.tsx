import Listing1 from "@/assets/listing1.png";
const Listing = ()=>{
    return (
        <section id="home" className="md:h-full md:pb-0">
        <nav>OUT CURRENT LISTINGS</nav>
        <div className="flex ">
            <div className="flex-1 w-1/2">
            <img alt="logo" src={Listing1} className="w-full"/>
            </div>
            <div className="flex-1 w-1/2  px-12 ">
                <div>8,000 sq. ft. mixed-use property in Santa Solana</div>
                <div>Entice prospective buyers with a clearly written description that lists your property's most attractive feature.</div>
            <div>INQUIRE NOW</div>
            </div>
        </div>
        </section>
    )
}
export default Listing