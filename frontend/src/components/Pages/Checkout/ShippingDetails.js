import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

let schema = yup.object().shape({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is Required"),
    address: yup.string().required("Address is Required"),
    country: yup.string().required("Country is Required"),
    city: yup.string().required("City is Required"),
    apartmentNo: yup.string().required("ApartmentNo is Required"),
    zipcode: yup.string().required("ZipCode is Required"),
});

const ShippingDetails = () => {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            address: "",
            country: "",
            city: "",
            apartmentNo: "",
            zipcode: "",
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            toast.success("Your Address is saved Successfully!")
            resetForm();
        },
    });
    const isFormValid = Object.keys(formik.errors).length === 0 && formik.touched;

    return (
        <div class="lg:w-4/6 w-full bg-white h-full lg:mb-0 mb-4">
            <form onSubmit={formik.handleSubmit} className="col-span-4 lg:p-10 p-5">
                <h1 className='text-gray-600 font-semibold text-lg mb-5'>Shipping Address</h1>
                <input
                    className="mb-3 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='First Name'
                    type="text"
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                    value={formik.values.firstname} />
                <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.firstname && formik.errors.firstname}</p>
                <input
                    className="mb-3 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='Last Name'
                    type="text"
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                    value={formik.values.lastname} />
                <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.lastname && formik.errors.lastname}</p>
                <input
                    type='text'
                    className="border mb-3 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='Address'
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    value={formik.values.address} />
                <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.address && formik.errors.address}</p>
                <div >
                    <select
                        name="country"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                        className="select w-full border border-gray-300 mb-3 text-gray-400 font-normal pl-2.5 rounded-none hover:outline-none">
                        <option disabled value="">Select Country</option>
                        <option value="Saudi Arabia" className="text-gray-900">Saudi Arabia</option>
                    </select>
                </div>
                <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.country && formik.errors.country}</p>
                <input
                    placeholder="Apartment No"
                    className="border border-gray-300 mb-3 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    type='text'
                    onChange={formik.handleChange("apartmentNo")}
                    onBlur={formik.handleBlur("apartmentNo")}
                    value={formik.values.apartmentNo} />
                <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.apartmentNo && formik.errors.apartmentNo}</p>
                <input
                    className="mb-2 mr-3 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='City'
                    type='text'
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                    value={formik.values.city} />
                <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.city && formik.errors.city}</p>
                <input
                    className="mb-2 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='Zip Code'
                    type='text'
                    onChange={formik.handleChange("zipcode")}
                    onBlur={formik.handleBlur("zipcode")}
                    value={formik.values.zipcode} />
                <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.zipcode && formik.errors.zipcode}</p>
                <div className="flex justify-between items-center mt-5">
                    <span className="flex hover:text-secondary">
                        <TiArrowBackOutline className='text-xl mr-1' />
                        <Link to="/cart">Return To cart</Link>
                    </span>
                    <button
                        className={`border border-gray-300 cursor-pointer bg-primary ${!isFormValid ? 'opacity-50 pointer-events-none' : 'hover:bg-secondary'
                            } text-white text-sm font-bold block px-4 py-2`}
                        type="submit"
                        disabled={!isFormValid}>
                        <Link
                            to={{ pathname: '/payment' }}
                            state={{ shippingInfo: formik.values }}
                        >
                            Proceed to Payment
                        </Link>
                    </button>
                </div>
            </form>
        </div >
    );
};

export default ShippingDetails;