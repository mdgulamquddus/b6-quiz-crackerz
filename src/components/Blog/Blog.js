import React from "react";

const Blog = () => {
  return (
    <div className="w-2/4 mx-auto mt-10 grid gap-10">
      <div>
        <h2>Question 1: What is the purpose of react router? </h2>
        <p>
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information. By preventing a page refresh, and using Router or Link,
          which is explained in more depth below, the flash of a white screen or
          blank page is prevented. This is one increasingly common way of having
          a more seamless user experience. React router also allows the user to
          utilize browser functionality like the back button and the refresh
          page while maintaining the correct view of the application.
        </p>
      </div>
      <div>
        <h2>Question 2 : How does context API work in React JS?</h2>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux. Context API is a (kind of) new feature
          added in version 16.3 of React that allows one to share state across
          the entire app (or part of it) lightly and with ease
        </p>
        <p>
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state. More
          information can be found on React's
        </p>
      </div>
      <div>Question3</div>
    </div>
  );
};

export default Blog;
