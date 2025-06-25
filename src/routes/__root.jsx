import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
/*import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Header from "../Header";*/
import { FamilyContext } from "../contexts";

export const Route = createRootRoute({
  component: () => {
    const familyHook = useState([]);
    return (
      <FamilyContext.Provider value={familyHook}>
        <div>
          <Outlet />
        </div>
        {/*<TanStackRouterDevtools />*/}
      </FamilyContext.Provider>
    );
  },
});
