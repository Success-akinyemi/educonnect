import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NewsAndUpdatesForm from "./Helpers/NewsAndUpdatesForm";
import Button from "../Helpers/Button";
import { newNewsAndUpdate, updateNewsAndUpdate } from "../../Helpers/acn/api";

function AcnNewsForm({ setSuccessMsg, setErrorMsg }) {
    const loc = useLocation()
    const pathName = loc.pathname.split('/')[4]
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const [ submitting, setSubmitting ] = useState(false)
    const handleSubmitPost = async () => {
      try {
        setSubmitting(true)
        const res = await pathName === 'noid' ? newNewsAndUpdate : updateNewsAndUpdate
        if(res.success){
          
        }
      } catch (error) {
        
      } finally {
        setSubmitting(false)
      }
    }

  return (
    <div className="border-t-[12px] border-[1px] border-white shadow-sm flex flex-col gap-6 p-5 min-h-screen">
      {/**HEAD */}
      <div className="flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <Link to={`/acn/news-and-updates`} className="flex items-center justify-center w-5 h-5">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#14142B]"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h3 className="text-[18px] font-semibold text-[#14142B]">Add News and Updates</h3>
        </div>

        <div className="">
            <Button onCLick={handleSubmitPost} text={`+ Add New`} style={`!bg-acn-main-color !text-white flex items-center !gap-2 !min-w-[174px] !text-[16px] !font-semibold`} />
        </div>
      </div>

      {/**LINE */}
      <div className="flex w-full border-b-[1px] border-[#E6E6E6]"></div>

      <div className="flex items-stretch grow h-full">

        <div className="flex flex-col flex-[7]">
            <NewsAndUpdatesForm formData={formData} setFormData={setFormData} handleChange={handleChange} />
        </div>

        {/**VERTICAL LINE */}
        <div className="border-r-[1px] border-[#E6E6E6] mx-4"></div>

        <div className="flex flex-col flex-[3] gap-[30px]">
          <div className="inputGroup">
            <label className="label">Author</label>
            <input id="writers" onChange={handleChange} placeholder="Enter writer's name" className="input" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default AcnNewsForm;
