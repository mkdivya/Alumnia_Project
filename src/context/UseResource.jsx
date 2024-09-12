import { useContext } from "react";
import ResourceContext from "./ResourceContext"; // Ensure this path is correct

const useResource = () => useContext(ResourceContext);

export default useResource;
