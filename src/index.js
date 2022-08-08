import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./profile";
import Account from "./account";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Expenses />} />
			<Route path="/account" element={<Account />} />
    </Routes>
  </BrowserRouter>
)