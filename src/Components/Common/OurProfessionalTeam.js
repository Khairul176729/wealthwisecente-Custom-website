import React from 'react';

const OurProfessionalTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Khairul Islam",
            role: "UX/UI designer, frontend developer",
            image: "/Images/Home/Khairul.png",
            // You can set a custom height here
            imgHeight: "h-[400px]" 
        },
        {
            id: 2,
            name: "Al Masud Nayon",
            role: "UX/UI designer, frontend developer",
            image: "/Images/Home/nayon.jpeg",
            imgHeight: "h-[400px]" // Standard height
        },
        {
            id: 3,
            name: "Mahedy Hasan Noman",
            role: "UX/UI designer, frontend developer",
            image: "/Images/Home/noman.jpeg",
            imgHeight: "h-[400px]" // Different height for the 3rd image
        },
        {
            id: 4,
            name: "Md Naim",
            role: "UX/UI designer, frontend developer",
            image: "/Images/Home/naim.png",
            imgHeight: "h-[400px]" // Standard height
        }
    ];

    return (
        <div className='lg:px-20 px-5 md:py-20 py-10'>
            <h2 className='lg:text-4xl text-2xl text-[#111111] mb-10 font-semibold text-center leading-[1.3]'>
                Meet Our Professional <br />Team Members 
            </h2>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 items-start'>
                {
                    teamMembers.map((member) => (
                        <div key={member.id} className='border-2 border-[#dcb66b] rounded-2xl shadow-lg flex flex-col'>
                            
                            {/* The height is now dynamic based on the data array */}
                            <div className={`w-full ${member.imgHeight || 'h-[300px]'} overflow-hidden rounded-t-2xl`}>
                                <img 
                                    className='w-full h-full object-cover object-top' 
                                    src={member.image} 
                                    alt={member.name} 
                                />
                            </div>
                            
                            <div className='bg-white p-5 rounded-b-2xl text-center flex-grow'>
                                <h3 className='text-xl text-[#111111] font-semibold mt-2'>
                                    {member.name}
                                </h3>
                                <p className='text-[#666] mt-2 text-sm'>
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default OurProfessionalTeam;