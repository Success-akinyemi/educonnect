import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Helpers/Navbar";
import DashBoardLinks from "../../Components/Helpers/DashBoardLinks";
import Button from "../../Components/Helpers/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { deleteMessage, replyMessage } from "../../Helpers/acn/api";
import { formatDateAndTime } from "../../Helpers/formatDateAndTime";
import toast from "react-hot-toast";
import LoadingBtn from "../../Components/Helpers/LoadingBtn";
import Spinner from "../../Components/Helpers/Spinner";
import { useFetchContactMessage } from "../../Helpers/acn/fetch.hooks";
import Sidebar from "../../Components/ACN/Sidebar";

function AcnContactUsInfo() {
    const navigate = useNavigate()
    const loc = useLocation()
    const pathName = loc.pathname.split('/')[4]
    const { data, isFetching } = useFetchContactMessage(pathName)

    const [ formData, setFormData ] = useState({ id: pathName})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value})
    }
    const messageData = data?.data || {}

    const [ loading, setLoading ] = useState(false)

    const handleReplyMessage = async () => {
        if(loading){
            return
        }
        try {
            setLoading(true)
            const res = await replyMessage(formData)
            if(res.success){
                toast.success(res.data)
                window.location.reload()
            } else {
                toast.error(res.data || 'Unable to reply user')
            }
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteMessage = async () => {
        if(loading){
            return
        }
        try {
            const confirm = window.confirm('Are you sure you want to delete this message?')
            if(confirm){
                setLoading(true)
                const res = await deleteMessage(formData)
                if(res.success){
                    toast.success(res.data)
                    navigate('/acn/contact-us')
                } else {
                    toast.error(res.data || 'Unable to delete message')
                }
            }
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }

    const { formattedDate, formattedTime } = formatDateAndTime(
        messageData?.createdAt
      );
  return (
    <div className="page flex-row">

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

              <DashBoardLinks name={'acn'} color={`text-acn-main-color border-acn-main-color`} />

                <div className="card1 flex items-center justify-between">
                    <div className="flex items-center gap-[50px]">
                        <Link to={`/acn/contact-us`} className="">
                            <IoIosArrowBack />
                        </Link>

                        <div className="">
                            <div className="flex items-center gap-[6px]">
                            <div className="flex items-center gap-4">

                                <div className="flex  flex-col">
                                    <h2 className="text-lg text-[#14142B] font-semibold">
                                        {messageData?.firstName} {messageData?.lastName}
                                    </h2>
                                    <p className="text-xs font-normal text-[12px] text-[#929292]">
                                        {messageData?.email}
                                    </p>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <Button disabled={loading} style={`bg-error border-error`} text={`Delete`} onCLick={handleDeleteMessage} />
                    </div>


                </div>

                <div className="card1 flex flex-col">
                    <div className="border-b-[1px] border-[#EFF0F6] w-full p-4">
                        <h2 className="text-[#344054] text-[16px] font-semibold">Contact us Info</h2>
                    </div>

                    {
                        isFetching ? (
                            <div className="flex items-center justify-center">
                                <Spinner />
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4 mr-auto mt-8">
                                <div className="flex items-center gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">First Name</p>
                                    <p className="text-start text-sm font-medium text-[#1F2A37]">{messageData?.firstName}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">Last Name</p>
                                    <p className="text-start text-sm font-medium text-[#1F2A37]">{messageData?.lastName}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">Message Id</p>
                                    <p className="text-start text-sm font-medium text-[#1F2A37]">{messageData?.messageId}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">Email</p>
                                    <p className="text-start text-sm font-medium text-[#1F2A37]">{messageData?.email}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">Phone number</p>
                                    <p className="text-start text-sm font-medium text-[#1F2A37]">{messageData?.phoneNumber}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">Testimony Date</p>
                                    <p className="text-start text-sm font-medium text-[#1F2A37]">{formattedDate}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">message</p>
                                    <p className="text-start text-sm font-medium text-[#1F2A37]">{messageData?.message}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <p className="text-start text-sm font-medium text-[#929292] min-w-[190px]">Reply messgae</p>
                                    <div className="flex flex-col gap-5">
                                        <textarea onChange={handleChange} id="replyMsg" defaultValue={messageData?.reply} className="input resize-none w-[250px] h-[150px]"></textarea>

                                        {
                                            loading ? (
                                                <LoadingBtn style={`!bg-acn-main-color`} />
                                            ) : (
                                                <Button text={'Send reply'} onCLick={handleReplyMessage} style={`!bg-acn-main-color`} />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>

            </div>
        </div>


      </div>

    </div>
  );
}

export default AcnContactUsInfo;
