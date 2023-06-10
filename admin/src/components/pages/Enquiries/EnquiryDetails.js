import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { getAEnquiry, resetState, updateAEnquiry } from '../../../features/enquiry/enquirySlice';

const EnquiryDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getEnqId = location.pathname.split("/")[3];
  const enquiryState = useSelector((state) => state.enquiry);
  const { enqName, enqMobile, enqEmail, enqComment, enqStatus } = enquiryState;

  useEffect(() => {
    dispatch(getAEnquiry(getEnqId));
  }, [getEnqId, dispatch]);

  const goBack = () => {
    navigate(-1);
  };

  const setEnquiryStatus = (e, i) => {
    console.log(e, i);
    const data = { id: i, enqData: e };
    dispatch(updateAEnquiry(data));
    dispatch(resetState());
    setTimeout(() => {
      dispatch(getAEnquiry(getEnqId));
    }, 100);
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
          <p className="mb-0">{enqName}</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Phone No.:</h6>
          <p className="mb-0">
            <a href="/">{enqMobile}</a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Email:</h6>
          <p className="mb-0">
            <a href="/">{enqEmail}</a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Comment:</h6>
          <p className="mb-0">{enqComment}</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Status:</h6>
          <p className="mb-0">{enqStatus}</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-medium">Change Status:</h6>
          <div>
            <select
              name=""
              defaultValue={enqStatus ? enqStatus : "Submitted"}
              className="form-control form-select"
              id=""
              onChange={(e) => setEnquiryStatus(e.target.value, getEnqId)}
            >
              <option value="Submitted">Submitted</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetails;