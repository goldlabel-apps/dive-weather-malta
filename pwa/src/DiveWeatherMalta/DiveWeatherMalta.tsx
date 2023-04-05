import pJSON from "../../package.json";
import React from "react";
import { Provider } from "react-redux";
import { dwmStore } from "./redux/dwmStore";
import { Setup } from "./Setup";
import Wind from "./components/Wind";

export function DiveWeatherMalta() {

  console.log("@", pJSON.version);
  // const {hosts, host, children} = props;
  return (<>
      <Provider store={dwmStore}>
        <Setup>
          <Wind />
        </Setup>
      </Provider>
    </>
  )
};

