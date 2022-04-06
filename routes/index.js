const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("../routes/users");
const adminAttendanceRoutes = require("./admin-attendance");
const studentAttendanceRoutes = require("./student-attendance");
const authenticate = require("../middleware/authenticate");

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/users", authenticate, userRoutes);
router.use("/api/v1/admin/attendance", authenticate, adminAttendanceRoutes);
router.use("/api/v1/student/attendance", authenticate, studentAttendanceRoutes);

module.exports = router;
