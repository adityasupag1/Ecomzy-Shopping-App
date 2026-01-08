import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar
				closeOnClick
				pauseOnHover
				draggable={false}
				toastClassName="!min-h-[36px] !px-3 !py-2 text-sm rounded-md"
				bodyClassName="p-0 m-0"
				style={{ width: "fit-content" }}
			/>
		</Provider>
	</BrowserRouter>
);
