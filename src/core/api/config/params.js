import global from '@/core/global/global.js'
var param = global.global.getParam();
const params = {
  studentId: param.childId || "",
  token: param.token || "test", 
  activityId: param.activityId || "",
  schoolId: param.schoolId || "",
  classId: param.classId || ""
}
export default params;
