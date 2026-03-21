import { catchAsync } from "../utils/catchAsync.js";
import { getDashboard_service } from "../services/dashboard_service.js";
import Student from "../models/student_profile.js";
import { AppError } from "../utils/AppError.js";

export const dashboard = catchAsync(async(req, res)=>{
    const student_id = req.user;
    const student_performance = await getDashboard_service(student_id)
    res.status(200).json({message: "success", data: student_performance});
})

export const verifyAccessCode = catchAsync(async (req, res) => {
    const { code } = req.body;
    
    if (!code) {
        throw new AppError("Access code is required", 400);
    }

    const student = await Student.findOne({ parent_access_code: code });
    
    if (!student) {
        throw new AppError("Invalid access code. Please check and try again.", 404);
    }

    res.status(200).json({
        message: "success",
        data: {
            student_id: student.user_id,
            student_name: student.name
        }
    });
});
