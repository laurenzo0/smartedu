import { 
        register_service, 
        login_service,
        forget_password_service,
        reset_password_service,
        activate_account_service
    } from "../services/auth_services.js";
import { catchAsync } from "../utils/catchAsync.js";


    //register controller
    export const register = catchAsync(async(req, res)=> {
         console.log("Register request body:", req.body);
         const {first_name, last_name, email, password, confirm_password, date_of_birth, role} = req.body;
    const { user, access_code } = await register_service(
      {
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        date_of_birth,
        role
      });
    return res.status(201).json({
      message: "success",
      data: {
        id: user._id,
        full_name: user.first_name + " " + user.last_name,
        email: user.email,
        role: user.role,
        access_code: access_code
      }
    });
});

    //login controller
    export const login = catchAsync(async(req, res)=> {
        const {email, password} = req.body;
        const token = await login_service({email, password});
        return(res.status(200).json({message: "success", data: token}));
    })

    //forgot password
    export const forgot_password = catchAsync(async(req, res)=>{
        const {email} = req.body
        const otp = await forget_password_service({email});
        return res.status(200).json({message: "otp has been sent successfully", data: otp});
    })

    //reset password
    export const reset_password = catchAsync(async(req, res)=> {
        const {otp, new_password} = req.body;
        await reset_password_service({otp, new_password});
        return res.status(200).json({message: "password reset successfully"});
    })

    //activate account
    export const activate_account = catchAsync(async(req, res)=> {
        const {id} = req.body;
        // pass the raw id string to the service
        await activate_account_service(id);
        return res.status(200).json({message: "account activated successfully"});
    })  

