import HouseBG from "@/assets/House-design.png";
const AboutUs = ()=>{
    return (
        <section id="home" className="md:h-full md:pb-0">
        <div className="w-full items-center justify-center p-36 mt-auto text-center mt-1/4">
            <div className="text-3xl p-6">ABOUT US</div>
           <div className="text-5xl">Winslough Homes has been selling and buying homes for more than 20 years. We are proud to be one of the top realty companies in our city. </div>
         </div>
        
         <img alt="logo" src={HouseBG} className="mt-24 mb-12 w-full"/>
  
        </section>
    )
}
export default AboutUs