import { useEffect } from "react";
import { pageHeader } from "../constants";

const useSetWebsiteHeader = () => {
  useEffect(() => {
    document.title = pageHeader.title;
    let link = document.querySelector("link[rel~='icon']");
    console.log("link: ", link);
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = pageHeader.favIcon;
    // let keywordsMeta = document.querySelector("meta[rel~='icon']");
    // console.log("link: ", link);
    // if (!link) {
    //   link = document.createElement("link");
    //   link.rel = "icon";
    //   document.getElementsByTagName("head")[0].appendChild(link);
    // }
    // link.href = pageHeader.favIcon;
  }, []);
};

export default useSetWebsiteHeader;
