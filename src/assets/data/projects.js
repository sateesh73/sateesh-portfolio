/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projectImg.png";
import GreenCtgImg from "../images/greenctg.jpg";
import CoinTrackerImg from "../images/cointracker.jpg";
import CavinImg from "../images/cavinimg.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "Mobiquity",
    desc:
      "mobiquity is a mobile financial solution that enables mobile users to access a range of financial services on their mobile phones. mobiquity uses the concept of mobile wallets, or mWallets, associated with mobile accounts of subscribers. These mWallets hold currency in the form of mobile money, or mMoney. mobiquity also enables subscribers to link their bank accounts with their mobile accounts. Subscribers use their mWallets or bank accounts to perform a range of financial transaction.",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "ChatApplication",
    desc:
      "Major project that facilitates the user to view the chat schedules, chat with multiple userswithin a group, inquire about the chat details, availability of users, and manymore.",
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Recipe book",
    desc:
      "An interactive website for users to serch and use the recipe, the data of recipe was collected from a thirdparty API call.",
    img: GreenCtgImg,
  },

  {
    id: uuidv4(),
    name: "My Portfolio",
    desc:
      "this same portfolio was made my me. The portfolio is made using ReactJs and bootstrap.",
    img: CavinImg,
  },
];

export default projects;
