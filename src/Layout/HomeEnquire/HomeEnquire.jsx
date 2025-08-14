import React, { useEffect, useState } from 'react'
import { fetchContactData } from '../../API/userAPI'
import './HomeEnquire.css'
import en2 from '../../../public/assets/Images/enquire/2.png'
import en1 from '../../../public/assets/Images/enquire/1.png'
const HomeEnquire = () => {
  const [contactData, setContactData] = useState([])

  useEffect(() => {
    fetchContactData(setContactData)
  }, [])


  return (
    <div className="mt-8 md:mt-24 lg:mt-[200px]">
      {/* Header with dividers */}
      <div className="flex items-center justify-center w-full px-4 md:px-0">
        <hr className="hidden md:block flex-grow border-t border-[#563a14]" />
        <div className="flex items-center  md:mt-[-3px]">
          <p className=" text-xl md:text-2xl lg:text-[30px] md:ml-2 bolkit">Connect with us</p>
          <img
            className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] -ml-8 md:ml-0"
            src={en1}
            alt="Connect Icon"
          />
        </div>
        <hr className="hidden md:block flex-grow border-t border-[#563a14]" />
      </div>


      {/* Description text */}
      <div className="px-6 md:px-16 lg:px-[200px]">
        <p className="text-[#888888] text-sm md:text-base lg:text-[20px] text-center">
          We'd love to hear from you! Whether you're looking for a custom gold masterpiece, have inquiries about our
          collections, or need expert guidance, our team is here to assist you.
        </p>
      </div>

      {/* Main content section */}
      <div className="px-4 py-8 md:px-12 md:py-12 lg:px-[250px] lg:py-[100px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Image section */}
          <div className="w-full md:w-4/12 flex justify-center md:justify-start z-10">
            <div className="w-[80%] md:w-full h-[250px] md:h-[350px] rounded-[12px] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-[12px]"
                src={en2}
                alt="Jewelry showcase"
              />
            </div>
          </div>

          {/* Contact information section */}
          <div className="w-full md:w-8/12 flex justify-center items-center mt-4 md:mt-0">
            <div className="w-full p-4  md:py-6 md:px-6 bg-[#f8f7f7] rounded-[20px] md:ml-[-40px] " style={{
              'box-shadow': '0px 4px 29.1px 0px rgba(175, 167, 167, 0.25)'
            }}>
              {/* Title */}
              <div className="flex items-start gap-0.5 pl-2 md:pl-[60px] ">

                <p className="text-sm md:text-[20px] font-[600] text-[#563a14]  instrument-san contact">
                  Looking for something special?
                </p>
                <div className="block mt-0.5 rotate-[18deg]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path
                      fill="#482d2d"
                      d="M11.566 21.112L12 20.5za.75.75 0 0 0 .867 0L12 20.5l.434.612l.008-.006l.021-.015l.08-.058q.104-.075.295-.219a38.5 38.5 0 0 0 4.197-3.674c1.148-1.168 2.315-2.533 3.199-3.981c.88-1.44 1.516-3.024 1.516-4.612c0-1.885-.585-3.358-1.62-4.358c-1.03-.994-2.42-1.439-3.88-1.439c-1.725 0-3.248.833-4.25 2.117C10.998 3.583 9.474 2.75 7.75 2.75c-3.08 0-5.5 2.639-5.5 5.797c0 1.588.637 3.171 1.516 4.612c.884 1.448 2.051 2.813 3.199 3.982a38.5 38.5 0 0 0 4.492 3.892l.08.058l.021.015z"
                    />
                  </svg>
                </div>
              </div>



               {contactData.map((item)=>(
                

             
              <div className="grid grid-cols-1 md:grid-cols-2  gap-y-6 md:gap-y-2 gap-x-4 pt-10 pl-2 md:pl-[60px]  pb-10 md:pb-[60px] contact">
              <div className="block">
                <div className="flex items-start gap-1 mb-1">
                  <div className="block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                      <path
                        fill="#563a14"
                        d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"
                      />
                    </svg>

                  </div>
                  <p className="text-[#888888] text-xs md:text-[16px] font-[500] inter">{item.number}</p>
                </div>
              </div>


              <div className="block">
                <div className="flex items-start gap-3 mb-1">
                  <div className="block mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                      <path
                        fill="#563a14"
                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                      />
                    </svg>

                  </div>
                  <p className="text-[#888888] text-xs md:text-[16px] font-[500] inter mt-[5px]">{item.email}</p>
                </div>
              </div>

              <div className="block">
                <div className="flex items-start gap-3 mb-1">
                  <div className="block mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                      <path
                        fill="#563a14"
                        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-.175-.012-.363t-.013-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.412-.587T14 11v-1h-4V8q0-.825.588-1.412T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20"
                      />
                    </svg>
                  </div>
                  <p className="text-[#888888] text-xs md:text-[16px] font-[500] inter mt-[6px]">Visit our website</p>
                </div>
              </div>




              <div className="block">
                <div className="flex items-start gap-3 mb-1">
                  <div className="block mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24">
                      <path
                        fill="#563a14"
                        d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
                      />
                      <path
                        fill="#563a14"
                        d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
                      />
                    </svg>

                  </div>
                  <p className="text-[#888888] text-xs md:text-[16px] font-[500] inter mt-[7px]">{item.address}</p>
                </div>
              </div>

            </div>

               ))}
             






              {/* Button */}
              <div className="flex justify-center ">
                <button
                  type="button"
                  className="px-6 mt-[-10px] sm:px-8 md:px-[60px] py-2.5 text-sm  font-medium text-white bg-[#88704f] hover:bg-[#594933] rounded-[8px]"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeEnquire
