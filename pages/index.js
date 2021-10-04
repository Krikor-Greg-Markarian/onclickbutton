import cn from "classnames";
import Usestate from "../Src/Components/Usestate";

export default function Home(props) {
  return (
    <div className = {cn("container mx-auto")}>

      <div className={cn("flex justify-center items-center")}>
        <Usestate />
      </div>
    </div>
  );
}
