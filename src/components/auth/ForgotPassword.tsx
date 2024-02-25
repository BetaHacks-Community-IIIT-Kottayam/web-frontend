import React, { useState } from 'react';
import ModalOverlay from '../ui/ModalOverlay';
import { useResetPasswordMutation, useSendOtpServiceMutation, useUserRegisterMutation, useVerifyOtpServiceMutation } from '../../redux/features/auth/authAPI';
import { useAppDispatch, useAuth } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import LargeButton from '../ui/LargeButton';
import { setIsotpSent } from '../../redux/features/auth/authSlice';
import { MdCancel, MdEdit } from 'react-icons/md';
import { validateEmailInput } from '../../utils/InputValidators';
import { toast } from 'react-toastify';

interface Props {
    open: boolean;
}
const ForgotPassword = (props: any) => {
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [err, setErr] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [sendOtpMutation, { isLoading: sendOtpLoading, isError: sendOtpError }] = useSendOtpServiceMutation();
    const [verifyOtpMutation, { isLoading: verifyOtpLoading, isError: verifyOtpError }] = useVerifyOtpServiceMutation();
    const [resetPasswordMutation, { isLoading: resetPasswordLoading }] = useResetPasswordMutation();
    const onEmailChangeHandler = (event: any) => {
        setEmail(event.target.value);
        setErr('');
    }
    const onRequestOtp = async () => {
        if (!validateEmailInput(email)) {
            toast.error('Please enter a valid email address',
                        {
                            position: "top-center",
                            autoClose: 2000,
                        });
            return;
        }
        const result = await sendOtpMutation({ email, type: "RESET_PASSWORD" });
        if ('data' in result) {
            setIsOtpSent(true);
            toast.success('OTP sent successfully',
                {
                    position: "top-center",
                    autoClose: 2000,
                });
        }
        if ('error' in result) {
            if ('status' in result.error) {
                if (result.error.status === 400) {
                    toast.error('User doesnot exists, please register first',
                        {
                            position: "top-center",
                            autoClose: 2000,
                        });
                }
            }
        }
    }
    const onVerifyOtp = async () => {
        if (otp.length !== 6) {
            toast.error('Please enter a valid 6 digit otp',
            {
              position: "top-center",
              autoClose: 2000,
            });
            return;
        }
        const result = await verifyOtpMutation({ email, otp });
        if ('data' in result) {
            setIsEmailVerified(true);
            toast.success('OTP verified successfully',
                {
                    position: "top-center",
                    autoClose: 2000,
                });
        }
        if ('error' in result) {
            toast.error('Invalid OTP, please try again',
            {
              position: "top-center",
              autoClose: 2000,
            });
        }
    }
    const onResetPassword = async () => {
        if (password.length < 8) {
            toast.error('Password must be atleast 8 characters long',
            {
              position: "top-center",
              autoClose: 2000,
            });
            return;
        }
        if (password !== cnfPassword) {
            toast.error('Passwords do not match',
            {
              position: "top-center",
              autoClose: 2000,
            });
            return;
        }
        const result = await resetPasswordMutation({ email, password,cnfPassword });
        if ('data' in result) {
            toast.success('Password reset successfully, Please login with new password',
                {
                    position: "top-center",
                    autoClose: 2000,
                });
            props.onClose();
        }
        if('error' in result){
            toast.error('Something went wrong, please try again',
            {
              position: "top-center",
              autoClose: 2000,
            });
        }
    }
        const onOtpChangeHandler = (event: any) => {
            setOtp(event.target.value);
            setErr('');
        }
        return (
            <div className='relative bg-white flex flex-col px-16 py-8 text-center justfiy-center rounded-md'>
          <MdCancel size='1.5rem' onClick={() => props.onClose()} color='black' style={{ position: 'absolute', cursor: 'pointer', top: '3%', right: '3%' }} />
               {isEmailVerified?
               <div>
                <p className='font-semibold mb-4'>Reset New Password</p>
                <input
                    placeholder='Enter New Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block my-2 p-4 flex-1 outline-0 border-0 bg-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"

                />
                <input
                    placeholder='Re-enter New Password'
                    type='password'
                    value={cnfPassword}
                    onChange={(e) => setCnfPassword(e.target.value)}
                    className="block my-2 p-4 flex-1 outline-0 border-0 bg-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"

                />
                {!resetPasswordLoading ?
                            <div onClick={onResetPassword}>
                                <LargeButton type='submit' name='Submit' />
                            </div>
                            :
                            <button
                                type="button"
                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2 animate-spin"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                                </svg>
                                Processing Request..
                            </button>}
               </div>
            :
            <div>
                 <p className='font-semibold mb-4'>Verify Your Email</p>
                {!isOtpSent ? <input
                    placeholder='Email'
                    type='text'
                    value={email}
                    onChange={onEmailChangeHandler}
                    className="block p-4 flex-1 outline-0 border-0 bg-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"

                /> :
                    <div>
                        <p className='mb-2 text-[0.8rem] text-gray-700'>OTP sent to <span className='text-blue-500'>{email} <MdEdit onClick={() => { setIsOtpSent(false) }} className='inline cursor-pointer color-blue-500' size='0.8rem' /></span></p>
                        <input
                            placeholder='Enter OTP'
                            type='text'
                            value={otp}
                            onChange={onOtpChangeHandler}
                            className="w-full block p-4 flex-1 outline-0 border-0 bg-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"

                        />
                    </div>
                }

                {!isOtpSent ?
                    <div>
                        {!sendOtpLoading ?
                            <div onClick={onRequestOtp}>
                                <LargeButton type='submit' name='Request OTP' />
                            </div>
                            :
                            <button
                                type="button"
                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2 animate-spin"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                                </svg>
                                Sending otp....
                            </button>}
                    </div>
                    :
                    <div>
                        {!verifyOtpLoading ?
                            <div onClick={onVerifyOtp}>
                                <LargeButton type='submit' name='Verify OTP' />
                            </div>
                            :
                            <button
                                type="button"
                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2 animate-spin"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                                </svg>
                                Verifying otp....
                            </button>}
                    </div>
                }</div>}
            </div>
            )
    }


    export default ForgotPassword;