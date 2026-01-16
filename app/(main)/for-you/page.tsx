import React from "react";

const page = () => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="page--title">Selected just for you</div>
          <a
            href=""
            className="flex justify-between w-140 bg-[#fbefd6] rounded p-6 mb-6 gap-6"
          >
            <div className="w-2/5">
              How Constant Innovation Creates Radically Successful Businesses
            </div>
            <div className="w-px bg-[#bac8ce]"></div>
            <div>Book</div>
          </a>

          <div>
            <div className="page--title">Recommended For You</div>
            <div className="page--subtitle">We think you'll like these</div>
          </div>

          <div>
            <div className="page--title">Suggested Books</div>
            <div className="page--subtitle">Browse these books</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
