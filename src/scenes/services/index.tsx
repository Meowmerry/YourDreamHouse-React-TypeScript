
import {services} from "@/shared/data";
const OurServices = ()=>{
    return (
        <section id="services" className="md:h-full md:pb-0  m-16">
        <div className="m-16 text-center text-3xl font-bold"> Our Realty Services</div>
        <div className="justify-center flex flex-nowrap gap-x-14">
            {services.map(element=>(
                    <div key={element.id}>
                           <img alt="service" src={element.img}/>         
                    </div>
            ))}
           
        </div>
        </section>
    )
}
export default OurServices