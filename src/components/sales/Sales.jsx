import Card from "../card/Card";
import { SalesHead } from "./components/SalesHead/SalesHead";

export const Sales = ({data}) => {
    return (
      <div className="sale">
            <div className="sale__container">
              
                <SalesHead />

              <div className="sale__grid-layout">


                {/* <Card data={data}/> */}
            </div>
        </div>
    </div>
  );
};
  