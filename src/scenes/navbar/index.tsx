
import Logo from "@/assets/logo.png";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
type Props = {
    isTopOfPage?: boolean;
    selectedPage?: SelectedPage;
    setSelectedPage?: (value: SelectedPage) => void;
  };
  const Navbar = ({ isTopOfPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";
    return (
        <nav>
        <div
          className={`${navbarBackground}  ${flexBetween} fixed top-0 z-30 w-full py-4`}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} `}>
          <img alt="logo" src={Logo} className="w-24"/>
          </div>
              {/* LEFT SIDE */}
            
              {/* RIGHT SIDE */}
                <div className={`${flexBetween}`}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      INQUIRE NOW
                    </ActionButton>
                </div>
          </div>
        </div>
  
      </nav>
        )
}
export default Navbar;