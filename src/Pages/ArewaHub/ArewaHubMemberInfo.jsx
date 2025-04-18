import Navbar from "../../Components/Helpers/Navbar";
import DashBoardLinks from "../../Components/Helpers/DashBoardLinks";
import Sidebar from "../../Components/Arewahub/Sidebar";
import Stats from "../../Components/Arewahub/Stats";
import { useFetchCraftsMembers, useFetchProducts } from "../../Helpers/arewahub/fetch.hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../Components/Helpers/Spinner";
import Button from "../../Components/Helpers/Button";
import { useState } from "react";
import { deleteProduct, toggleActive } from "../../Helpers/arewahub/api";
import ErrorCard from "../../Components/Helpers/ErrorCard";
import SuccessCard from "../../Components/Helpers/SuccessCard";
import { truncateText } from "../../Helpers/truncateText";
import { formatDateAndTime } from "../../Helpers/formatDateAndTime";
import LoadingBtn from "../../Components/Helpers/LoadingBtn";

function ArewaHubMemberInfo({  }) {
    const loc = useLocation()
    const pathName = loc.pathname.split('/')[3]
    const { data: memberData, isFetching } = useFetchCraftsMembers(pathName)
    const data = memberData?.data

    const [ errorText, setErrorText ]= useState()
    const [ successText, setSuccessText ]= useState()
    
    const [ loading, setLoading ] = useState(false)


    const { formattedDate, formattedTime } = formatDateAndTime(data?.createdAt)

  return (
    <div className="page flex-row">
        {
            errorText && (
                <ErrorCard errorText={errorText} />
            )
        }
        {
            successText && (
                <SuccessCard successText={successText} />
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

        <div className="bg-bgColor pad1 flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px]">

              <DashBoardLinks name={'arewahub'} color={`text-arewahub-main-color border-arewahub-main-color`} />

            </div>

            {
                isFetching ? (
                    <div className="">
                        <Spinner />
                    </div>
                ) : (
                    <div className="flex flex-col gap-[30px]">
                        {/**ADD HERE */}
                        <div className="card1 ">
                            <div className="flex items-center gap-[40px]">
                                <Link to={`/arewahub/members`} className="flex items-center justify-center w-5 h-5">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Link>
                                <div className="flex items-center gap-8">
                                    <div className="flex flex-col gap-2px]">
                                        <h2 className="text-[#14142B] text-lg font-semibold">{data?.firstName} {data?.lastName}</h2>
                                        <p className="text-sm font-normal text-[#13693B]">{data?.userId}</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {
                                    
                                    loading ? (
                                        <div className="">
                                            <LoadingBtn style={`!bg-arewahub-main-color`}  />
                                        </div>
                                    ) : (
                                        <>

                                        </>
                                    )
                                }
                            </div>
                        </div>

                        <div className="card1 p-0 flex-col">
                            <div className="p-4 min-h-[55px] w-full flex items-center border-b-[1px] border-[#EFF0F6]">
                                <p className="text-[16px] font-normal text-[#121212]">Member Details</p>
                            </div>

                            <div className="p-4 mt-4 flex flex-col gap-2 w-full">
                                <div className="flex items-center">
                                    <div className="min-w-[200px] text-sm font-medium text-[#929292]">Name</div>
                                    <div className="text-sm font-normal text-[#121212]">{data?.firstName} {data?.lastName}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="min-w-[200px] text-sm font-medium text-[#929292]">Contact details</div>
                                    <div className="text-sm font-normal text-[#121212]">{` ${data?.mobileNumber}, ${data?.email}`}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="min-w-[200px] text-sm font-medium text-[#929292]">Type of craft, level</div>
                                    <div className="text-sm font-normal text-[#121212]">{` ${data?.craftType}, ${data?.experienceLevel}`}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="min-w-[200px] text-sm font-medium text-[#929292]">Bussiness Name</div>
                                    <div className="text-sm font-normal text-[#121212]">{data?.bussinessName}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="min-w-[200px] text-sm font-medium text-[#929292]">Location</div>
                                    <div className="text-sm font-normal text-[#121212]">{data?.location}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="min-w-[200px] text-sm font-medium text-[#929292]">Date</div>
                                    <div className="text-sm font-normal text-[#121212] flex gap-[2px]">
                                        <p>{formattedDate}</p>
                                        <p className="text-[#717171]">{formattedTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 p-0 flex-col justify-start items-start">
                            <div className="p-4 min-h-[46px] w-full flex items-center border-b-[1px] border-[#EFF0F6]">
                                <p className="text-[16px] font-normal text-[#121212]">Craft image</p>
                            </div>

                            <div className="mt-4 p-4 flex gap-4">
                                {
                                    data?.artWorkGallery?.length > 0 && (
                                        data?.artWorkGallery.map((img, idx) => (
                                            <img key={idx} src={img} alt={'craft image'} className="w-[124px]" />
                                        ))
                                    )
                                }
                            </div>
                        </div>

                        <div className="card1 p-0 flex-col justify-start items-start">
                            <div className="p-4 min-h-[46px] w-full flex items-center border-b-[1px] border-[#EFF0F6]">
                                <p className="text-[16px] font-normal text-[#121212]">Certificate image</p>
                            </div>

                            <div className="mt-4 p-4">
                                <img src={data?.certificateImage} alt={`${data?.firstName} ${data.lastName} Certificate`} className="w-[124px]" />
                            </div>
                        </div>
                        
                    </div>
                )
            }

        </div>


      </div>

    </div>
  );
}

export default ArewaHubMemberInfo;
