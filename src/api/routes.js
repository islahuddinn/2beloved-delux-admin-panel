export const BASE_URL = "http://ec2-3-88-254-150.compute-1.amazonaws.com/";

export const routes = {
  // -----AUTH------//
  signUp: BASE_URL + "/user/signup",
  signIn: BASE_URL + "api/v1/user/login",
  logOut: BASE_URL + "api/v1/user/logout",
  // getMedicalProviders: BASE_URL + "api/v1/users/",
  getAllUsers: BASE_URL + "api/v1/user/",
  // getTimeSlots: BASE_URL + "api/v1/timeslots/get-timeslots/",
  // createTimeSlot: BASE_URL + "api/v1/timeslots/create-timeslot/",
  deleteUser: BASE_URL + "api/v1/user/",
  deleteComment: BASE_URL + "api/v1/comment/",
  deleteLike: BASE_URL + "api/v1/like/",
  deleteStory: BASE_URL + "api/v1/story/",
  deleteFriend: BASE_URL + "api/v1/friend/",
  deletePost: BASE_URL + "api/v1/post/",
  deletePrivacy: BASE_URL + "api/v1/privacy/",
  deleteSave: BASE_URL + "api/v1/save/",
  deleteTermsAndCondition: BASE_URL + "api/v1/termsandcondition/",
  // getAllFacilities: BASE_URL + "api/v1/facilities/",
  // deleteFacility: BASE_URL + "api/v1/facilities/delete-facility",
  // createFacility: BASE_URL + "api/v1/facilities/create-facility",
  createPrivacy: BASE_URL + "api/v1/privacy/create",
  createTermsAndCondition: BASE_URL + "api/v1/termsandcondition/create",
  // creaeFacilityStaff: BASE_URL + "api/v1/admin/register-staff",
  // getPatients: BASE_URL + "api/v1/patient/get-all-patients",
  // deletePatient: BASE_URL + "api/v1/patient/delete-patient",
  updateUser: BASE_URL + "api/v1/user/",
  updatePrivacy: BASE_URL + "api/v1/privacy/",
  updateSave: BASE_URL + "api/v1/save/",
  updateStory: BASE_URL + "api/v1/story/",
  updateTermsAndCondition: BASE_URL + "api/v1/termsandcondition/",

  // -----------Products--------------//

  // -------------Services-------------//

  // -------------Services-------------//
};
