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
        <h2>Question 2 : </h2>
        <p></p>
      </div>
      <div>Question3</div>
    </div>
  );
};

export default Blog;
