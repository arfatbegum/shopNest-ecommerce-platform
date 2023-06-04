import { Select } from 'antd';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const EnquiryDetails = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    
    return (
        <div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-black uppercase">Enquiry Details</h3>
        <button
          className="bg-transpatent flex items-center gap-1"
          onClick={goBack}
        >
          <BiArrowBack className="font-lg" /> Go Back
        </button>
      </div>
      <div className="mt-5 bg-white p-8 flex gap-3 flex-col rounded border shadow-sm">
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Name :</h6>
          <p className="mb-0">enqName</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Phone No.:</h6>
          <p className="mb-0">
            <a href="/">enqPhone</a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Email:</h6>
          <p className="mb-0">
            <a href="/">enqEmail</a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Comment:</h6>
          <p className="mb-0">enqComment</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Status:</h6>
          <p className="mb-0">enqStatus</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Change Status:</h6>
          <div>
          <Select
                        defaultValue="Submitted"
                        style={{
                            width: 120,
                          }}
                        onChange={handleChange}
                        options={[
                            {
                                options: [
                                    {
                                        value: 'Submitted',
                                    },
                                    {
                                        value: 'Contacted',
                                    },
                                    {
                                        value: 'In Progress',
                                    },
                                    {
                                        value: 'Resolved',
                                    },
                                ],
                            }
                        ]}
                    />
          </div>
        </div>
      </div>
    </div>
    );
};

export default EnquiryDetails;