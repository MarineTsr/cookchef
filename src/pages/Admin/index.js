import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./components/AdminNav";

function Admin() {
  return (
    <main className="main-content flex-fill">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <AdminNav />
          </div>
          <div className="col-6 col-sm-8 col-md-9 col-xl-10">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Admin;
