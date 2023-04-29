import Listing1 from "@/assets/listing1.png";
import Listing2 from "@/assets/listing2.png";
import ActionButton from "@/shared/ActionButton";
import {SelectedPage} from "@/shared/types";
import {dataHouseListing} from "@/shared/data";
type Props = {
    isTopOfPage?: boolean;
    selectedPage?: SelectedPage;
    setSelectedPage?: (value: SelectedPage) => void;
};
const Listing = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between mt-8";
    return (
        <section id="home" className="md:h-full md:pb-0">
            <nav className="text-gray-600 p-8 font-semibold text-lg">OUT CURRENT LISTINGS</nav>
            {dataHouseListing.map((element) =>
                <div className="flex">
                    <div className="flex-1 w-1/2">
                        <img alt="logo" src={element.img} className="w-full" />
                    </div>
                    <div className="flex-1 w-1/2  p-20 pt-20">
                        <div className="text-3xl font-black pt-14">{element.detail}</div>
                        <div className="pl-28 pt-4 text-lg"> <div >{element.descriptions}</div>
                            <div className={`${flexBetween}`}>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    INQUIRE NOW
                                </ActionButton>
                            </div></div>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Listing;