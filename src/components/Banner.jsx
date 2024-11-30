import React from 'react';
import libery from '../assets/libery.jpg';
import L2 from '../assets/libery2.webp'
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div>
            <section
                className="banner  h-[400px] flex justify-center items-center"
                style={{
                    backgroundImage: `url(${L2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="text-center  bg-opacity-100 p-4 rounded">
                    <Marquee>
                    <h3 className="text-4xl font-bold mb-3">Where Dreams Meet Words</h3>
                    </Marquee>
                    <p className="text-2xl mb-3">Books That Speak to Your Soul</p>
                </div>
            </section>
        </div>
    );
};

export default Banner;
