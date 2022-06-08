import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-mainbl-200 text-white pt-10 border-t-2 border-mainpp-200">
        <div
          id="footer_container"
          className=" mx-5 md:flex justify-center gap-[220px] bg-mainbl-200"
        >
          <div id="left_content" className="md:w-[423px]">
            <h1 className="text-[24px]">Theme</h1>
            <p className="text-[15px] py-3 text-mainbl-50">
              (
              <span className="text-mainpp-200 text-[15px] font-semibold">
                This poll found that ⅔ of surveyed developers prefer to use a
                dark mode in their code editor.{" "}
              </span>
              )
              <br /> It is counted that over 70% of software engineers coding on
              a Dark Theme IDE’s, if you take a look on popular coding
              environment theme downloads you will find always that top 10
              themes are dark
            </p>
            <button className=" border-2 p-3 hover:text-mainpp-100  hover:border-mainpp-50 rounded-md">
              <a href="#home"> back to top</a>
            </button>
          </div>
          <div className="right_content my-8">
            <h3 className="text-mainpp-100 font-medium py-3">Newsletter</h3>

            <form action="mailto:shriprasanna32@gmail.com" method="post">
              <input
                type="email"
                name="mail"
                placeholder="Enter your e-mail"
                className="border-mainpp-200 border-2 bg-transparent 
                rounded-md px-4 py-2 outline-none"
                required
              />{" "}
              <button
                className="text-[18px] text-mainpp-100 rounded-md flex my-3 border-2 border-mainbl-300
            px-4 py-2 bg-mainbl-300 capitalize hover:bg-transparent hover:border-mainbl-300"
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="flex justify-center pt-5 pb-10">
            © Theme 2022 • All rights reserved{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
