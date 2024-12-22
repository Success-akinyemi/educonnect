import { useState } from "react";
import Navbar from "../../Components/Helpers/Navbar";
import DashBoardLinks from "../../Components/Helpers/DashBoardLinks";
import MenuList from "../../Components/Helpers/MenuList";
import MyDetails from "../../Components/Arewahub/MyDetails";
import Password from "../../Components/Arewahub/Password";
import ErrorCard from "../../Components/Helpers/ErrorCard";
import SuccessCard from "../../Components/Helpers/SuccessCard";
import Sidebar from "../../Components/Arewahub/Sidebar";

function ArewaHubSettings() {
    const [ errorText, setErrorText ] = useState()
    const [ successMsg, setSuccessMsg ] = useState()

    const data = [
        {
            name: 'My details',
            slug: 'mydetails'
        },
        {
            name: 'Password',
            slug: 'password'
        }
    ]
    const [activeCard, setActiveCard] = useState(data[0].slug);

    const handleCardChange = (value) => {
      setActiveCard(value);
    };
  return (
    <div className="page flex-row">
      {
        errorText && (
          <ErrorCard errorText={errorText} />
        )
      }
      {
        successMsg && (
          <SuccessCard successText={successMsg} />
        )
      }

      {/* Sidebar */}
      <div className="fixed w-[280px] h-[100vh] left-0 top-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="relative ml-[280px] w-[calc(100vw-280px)]">
        <div className=" w-full h-[60px] top-0 left-0 bg-white">
          <Navbar />
        </div>

        <div className="bg-bgColor pad1 flex flex-col gap-[39px]">
            <div className="flex flex-col gap-[30px]">

            <DashBoardLinks name={'arewahub'} color={`text-arewahub-main-color border-arewahub-main-color`} />

                <h1 className="title">
                  Settings
                </h1>

                <div className="">
                    <MenuList
                        data={data}
                        activeCard={activeCard}
                        onCLick={handleCardChange}
                        activeStyle={`!text-arewahub-main-color !border-arewahub-main-color `}
                    />

                    {
                        activeCard === 'mydetails' && (
                            <MyDetails setErrorText={setErrorText} setSuccessMsg={setSuccessMsg} />
                        )
                    }

                    {
                        activeCard === 'password' && (
                            <Password setErrorText={setErrorText} setSuccessMsg={setSuccessMsg} />
                        )
                    }


                </div>

            </div>
        </div>


      </div>

    </div>
  );
}

export default ArewaHubSettings;
