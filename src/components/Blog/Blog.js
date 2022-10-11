import React from "react";

const Blog = () => {
  return (
    <div className="h-screen bg-white">
      <div className="">
        <div tabIndex={0} className="collapse group mt-10 rounded-md mx-10">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            Focus me to see content
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse group mt-10 rounded-md mx-10">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            Focus me to see content
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse group mt-10 rounded-md mx-10">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            Focus me to see content
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
