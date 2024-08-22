// import React from "react";
// import { Body, Grocery, Header } from "./components";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { Contact, About, Error } from "./components";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/grocery",
//         element: <Grocery />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={appRouter} />
//   </React.StrictMode>
// );

// const App = () => {
//   return (
//     <div className='App'>
//       <Header />
//       <Outlet />
//     </div>
//   );
// };

// export default App;
