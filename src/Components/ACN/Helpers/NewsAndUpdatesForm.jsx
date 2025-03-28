import { useState, useEffect } from 'react';
import RichTextEditor from './RichTextEditor';

function NewsAndUpdatesForm({ data, formData, setFormData, handleChange, setErrorMsg }) {
    const [titleActive, setTitleActive] = useState(true);
    const [configurationsActive, setConfigurationsActive] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const MAX_FILE_SIZE_MB = 1;

    const handleTitleDelete = () => {
        setFormData({ ...formData, title: '' });
    };

    const handleFileDelete = () => {
        setFormData({ ...formData, image: null });
    };

    const validateFile = (file) => {
        const isValidImage = file.type.startsWith('image/');
        const isWithinSizeLimit = file.size <= MAX_FILE_SIZE_MB * 1024 * 1024;

        if (!isValidImage) {
            setErrorMsg('Only image files are allowed.');
            setTimeout(() => {
                setErrorMsg();
            }, 2500);
            return false;
        }

        if (!isWithinSizeLimit) {
            setErrorMsg(`File size must not exceed ${MAX_FILE_SIZE_MB}MB.`);
            setTimeout(() => {
                setErrorMsg();
            }, 2500);
            return false;
        }

        return true;
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file && validateFile(file)) {
            setFormData({ ...formData, image: file });
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleImageDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && validateFile(file)) {
            setFormData({ ...formData, image: file });
        }
    };

    useEffect(() => {
        console.log('Form Data:', formData);
    }, [formData]);
    console.log('formData de', formData)
    return (
        <form  className='flex w-full flex-col gap-[30px]'>
            <div className="flex flex-col w-full gap-[30px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div onClick={() => setTitleActive((prev) => !prev)} className="flex items-center justify-center w-5 h-5 cursor-pointer">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-acn-main-color'>
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p className='text-acn-main-color text-[16px] font-semibold'>Title</p>
                    </div>

                    <div onClick={handleTitleDelete} className="py-[10px] px-[12px] rounded-[4px] border-[1px] border-[#E6E6E6] flex items-center justify-center gap-[6px] text-[13px] font-normal text-[#F81414] cursor-pointer">
                        <span className='flex items-center justify-center w-5 h-5'>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-[#F81414]'>
                                <path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Delete
                    </div>
                </div>
                {titleActive && (
                    <>
                        <input id='title' defaultValue={data?.title} value={formData?.title} onChange={handleChange} type="text" placeholder='Enter Title' className='rounded-[5px] border-[1px] border-[#E6E6E6] h-[63px] py-[19px] px-[20px] outline-none text-[#585858] placeholder:text-[#585858]' />
                    
                        <div className="">
                            <RichTextEditor data={data?.post} handleChange={handleChange} setFormData={setFormData} formData={formData} formDataValue={'post'} />
                        </div>
                    </>
                )}
            </div>


            <div className="flex flex-col w-full gap-[30px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div onClick={() => setConfigurationsActive((prev) => !prev)} className="flex items-center justify-center w-5 h-5 cursor-pointer">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-acn-main-color'>
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p className='text-acn-main-color text-[16px] font-semibold'>Additional Configurations</p>
                    </div>

                    <div onClick={handleFileDelete} className="py-[10px] px-[12px] rounded-[4px] border-[1px] border-[#E6E6E6] flex items-center justify-center gap-[6px] text-[13px] font-normal text-[#F81414] cursor-pointer">
                        <span className='flex items-center justify-center w-5 h-5'>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-[#F81414]'>
                                <path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Delete
                    </div>
                </div>
                {configurationsActive && (
                    <>
          <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleImageDrop}
                            className={`border-[1px] border-[#D0D5DD] border-dashed rounded-[11px] py-[19px] text-center flex items-center justify-center flex-col ${
                                isDragging ? 'bg-gray-100' : ''
                            }`}
                        >
                            {formData?.image ? (
                                <div className="relative">
                                    <p className="text-[14px] font-semibold">File Selected: {formData?.image.name}</p>
                                    <button
                                        type="button"
                                        onClick={handleFileDelete}
                                        className="absolute top-2 right-2 bg-white text-red-600 p-2 rounded-full"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center flex-col gap-[10px]">
                                    <p className="text-[#585858] text-[10px] font-normal">Drop an image here or</p>
                                    <label
                                        htmlFor="file-upload"
                                        className="border-[1px] cursor-pointer rounded-[16px] p-[10px] border-[#EBEBEB] text-center"
                                    >
                                        <span className="text-[12px] font-semibold text-[#929292]">Browse file</span>
                                    </label>
                                    <p className="text-[#585858] text-[10px] font-normal">Max of {MAX_FILE_SIZE_MB}MB</p>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={handleImageSelect}
                                        accept="image/*"
                                    />
                                </div>
                            )}
                        </div>

                        <input id='category' defaultValue={data?.category} value={formData?.category} onChange={handleChange} type="text" placeholder='Enter category seprated bg coma,' className='rounded-[5px] border-[1px] border-[#E6E6E6] h-[63px] py-[19px] px-[20px] outline-none text-[#585858] placeholder:text-[#585858]' />

                        <input id='caption' defaultValue={data?.caption} value={formData?.caption} onChange={handleChange} type="text" placeholder='Enter caption text' className='rounded-[5px] border-[1px] border-[#E6E6E6] h-[63px] py-[19px] px-[20px] outline-none text-[#585858] placeholder:text-[#585858]' />

                    </>
                )}
            </div>

            
        </form>
    );
}

export default NewsAndUpdatesForm;
