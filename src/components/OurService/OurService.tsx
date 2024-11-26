

const OurService = () => {
  return (
    <section>
        <div className="container py-20 mx-auto space-y-10">
            <h1 className="font-semibold text-4xl text-center">Our Service</h1>
            <ul className="grid md:grid-cols-4 grid-cols-2 gap-10">
                <div className="flex-center gap-2 text-2xl">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <p>Online Booking</p>
                </div>
                <div className="flex-center gap-2 text-2xl">
                    <i className="fa-solid fa-burger"></i>
                    <p>Fast Food</p>
                </div>
                <div className="flex-center gap-2 text-2xl">
                    <i className="fa-solid fa-utensils"></i>
                    <p>Healthy Food</p>
                </div>
                <div className="flex-center gap-2 text-2xl">
                    <i className="fa-solid fa-truck"></i>
                    <p>Delivery</p>
                </div>                                
            </ul>
        </div>
    </section>
  )
}

export default OurService