import React from "react";

const Blog = () => {
  return (
    <div className="pt-32 h-full md:h-screen bg-white">
      <div>
        <div tabIndex={0} className="collapse group mt-16 rounded-md mx-10">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            1. What is the purpose of React Router ?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              ReactJS Router is mainly used for developing Single Page Web
              Applications. React Router is used to define multiple routes in
              the application.
            </p>
          </div>
        </div>
        <div tabIndex={1} className="collapse group mt-10 rounded-md mx-10">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            2. How does Context API work ?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
        </div>
        <div tabIndex={2} className="collapse group mt-10 rounded-md mx-10">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            3. What is useRef?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              useRef is like a “box” that can hold a mutable value in its
              .current property. The useRef Hook allows you to persist values
              between renders. It can be used to store a mutable value that does
              not cause a re-render when updated. It can be used to access a DOM
              element directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
