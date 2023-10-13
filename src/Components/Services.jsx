import Service from "./Service";

const Services = () => {
    return (
        <section id="services" className="text-center">
        <h1 className="text-white">SERVICE SECTION</h1>
        <div className="container mx-auto">
        <div className="main flex flex-wrap justify-between mt-8">
            <Service 
            item= 'HTML Developer'
            detail = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam Lorem, ipsum dolor. '
            price = '200'

            ></Service>
            <Service 
            item= 'CSS Developer'
            detail = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam Lorem, ipsum dolor. '
            price = '500'
            ></Service>
            <Service
            item= 'JAVA Developer'
            detail = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam Lorem, ipsum dolor. '
            price = '1000'
            ></Service>
        </div>
        </div>
    </section>
    );
};

export default Services;