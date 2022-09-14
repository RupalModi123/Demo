import axios from 'axios';
import {ConstantId} from './AppManager';
//const base_url = 'https://wattscar.com/api/';
const base_url = 'https://app.wattscar.com/api/';
const Method = {
  login: 'login',
  register: 'register',
  verifyOtp: 'verify-otp',
  resendOtp: 'resend-otp',
  forgotPassword: 'forget-password',
  getBrandModals: 'get-brands-models',
  getCity: 'cities',
  getBrand: 'get-brand',
  getModal: 'get-models/',
  getYear: 'get-years',
  getSubModal: 'get-sub-models/',
  getMasterDetails: 'get-masters',
  saveCarDetailApi: 'save-ad-details',
  saveCarFeaturesApi: 'save-ad-features',
  saveCarAboutApi: 'save-ad-about',
  saveCarImagesApi: 'add-ad-image',
  getMyAds: 'my-ads',
  getAllAdListing: 'all-ad-listing',
  GetGlobalListing: 'global-listing',
  getAllAdDetailsApi: 'get-ad-details/',
  getAllAdDetailsGlobalApi: 'global-ad-details/',
  getUserProfile: 'profile',
  updateProfile: 'update-profile',
  changePasswordApi: 'change-password',
  favoritesAddRemoveApi: 'favorites-add-remove',
  adActiveInactiveApi: 'ad-active-inactive',
  deleteAdApi: 'delete-ad/',
  getFiltersApi: 'filters',
  deleteImageApi: 'delete-ad-image/',
  viewCountApi: 'ad-view-count/',
  userAdCount: 'user-ad-count',

  logout: 'logout',
};

function loginAPI(email, password, callback) {
  let data = JSON.stringify({
    name: '',
    email: email,
    password: password,
    contact_number: '',
    seller_type: 0,
    city: 0,
    is_social_login: 0,
  });
  console.log('Url=====>', `${base_url}${Method.login}`);

  axios
    .post(`${base_url}${Method.login}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function socialLoginAPI(
  name,
  email,
  contact_number,
  sellerType,
  city,
  callback,
) {
  let data = JSON.stringify({
    name: name,
    email: email,
    password: '',
    contact_number: contact_number,
    seller_type: sellerType,
    city: city,
    is_social_login: 1,
  });
  axios
    .post(`${base_url}${Method.login}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function registrationAPI(
  name,
  email,
  contact_number,
  password,
  sellerType,
  city,
  callback,
) {
  let data = JSON.stringify({
    name: name,
    email: email,
    password: password,
    contact_number: contact_number,
    seller_type: sellerType,
    city: city,
    is_social_login: 0,
  });
  console.log(
    '`${base_url}${Method.register}`=====>',
    `${base_url}${Method.register}`,
  );

  axios
    .post(`${base_url}${Method.register}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result.data});
      }
    })
    .catch((error) => {
      console.log('error=====>', error.response.data.error);

      callback({status: false, result: error.response.data});
    });
}

function verifyOtpAPI(email, otp, callback) {
  let data = JSON.stringify({
    otp: otp,
    email: email,
  });
  axios
    .post(`${base_url}${Method.verifyOtp}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function resendOtpAPI(email, callback) {
  let data = JSON.stringify({
    email: email,
  });
  axios
    .post(`${base_url}${Method.resendOtp}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function forgotPasswordAPI(email, callback) {
  let data = JSON.stringify({
    email: email,
  });
  axios
    .post(`${base_url}${Method.forgotPassword}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getCityApi(callback) {
  axios
    .get(`${base_url}${Method.getCity}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}
function getBrandModals(callback) {
  axios
    .get(`${base_url}${Method.getBrandModals}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getBrandApi(callback) {
  axios
    .get(`${base_url}${Method.getBrand}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getModalApi(brandId, callback) {
  console.log('result=====>', `${base_url}${Method.getModal}${brandId}`);
  axios
    .get(`${base_url}${Method.getModal}${brandId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getSubModalApi(modalID, callback) {
  axios
    .get(`${base_url}${Method.getSubModal}${modalID}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getYear(data, callback) {
  axios
    .post(`${base_url}${Method.getYear}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getMasterCarApi(callback) {
  axios
    .get(`${base_url}${Method.getMasterDetails}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getUserProfileApi(callback) {
  const authData = 'Bearer ' + ConstantId.Token;

  axios
    .get(`${base_url}${Method.getUserProfile}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function saveCarDetailApi(data, callback) {
  console.log('Url=====>', `${base_url}${Method.saveCarDetailApi}`);
  const authData = 'Bearer ' + ConstantId.Token;

  console.log('authData=====>', authData);

  axios
    .post(`${base_url}${Method.saveCarDetailApi}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function saveCarFeaturesApi(data, callback) {
  console.log('Url=====>', `${base_url}${Method.saveCarFeaturesApi}`);
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('authData=====>', authData);
  axios
    .post(`${base_url}${Method.saveCarFeaturesApi}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}
function saveCarAboutApi(data, callback) {
  console.log('Url=====>', `${base_url}${Method.saveCarAboutApi}`);
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('authData=====>', authData);
  axios
    .post(`${base_url}${Method.saveCarAboutApi}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function saveCarImagesApi(imageArray, ad_Id, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('imageArray=====>', imageArray);

  var FormData = require('form-data');
  var form = new FormData();

  imageArray.forEach((element, i) => {
    let RandomNumber = Math.floor(Math.random() * 100) + 1;
    const newFile = {
      uri: element,
      type: 'image/jpg',
      name: RandomNumber + 'new2.jpg',
    };
    form.append('image[]', newFile);
  });
  form.append('ad_id', ad_Id);

  console.log('form=====>', form);

  axios
    .post(`${base_url}${Method.saveCarImagesApi}`, form, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getMyAdsApi(data, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.getMyAds}`);
  axios
    .post(`${base_url}${Method.getMyAds}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getAllAdListing(data, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('authData=====>', authData);
  let Url = '';
  if (ConstantId.Token == '') {
    console.log('result=====>', `${base_url}${Method.GetGlobalListing}`);
    Url = `${base_url}${Method.GetGlobalListing}`;
  } else {
    console.log('result=====>', `${base_url}${Method.getAllAdListing}`);
    Url = `${base_url}${Method.getAllAdListing}`;
  }
  axios
    .post(Url, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '204'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function updateProfileApi(data, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.updateProfile}`);
  axios
    .post(`${base_url}${Method.updateProfile}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '204'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function changePasswordApi(data, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.changePasswordApi}`);
  axios
    .post(`${base_url}${Method.changePasswordApi}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '422'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function deleteAdApi(ad_Id, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.deleteAdApi}${ad_Id}`);
  axios
    .get(`${base_url}${Method.deleteAdApi}${ad_Id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '422'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getFiltersApi(callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.getFiltersApi}`);
  axios
    .get(`${base_url}${Method.getFiltersApi}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '422'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function deleteImageApi(image_id, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.deleteImageApi}`);
  axios
    .get(`${base_url}${Method.deleteImageApi}${image_id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '422'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function favoritesAddRemoveApi(data, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.favoritesAddRemoveApi}`);
  axios
    .post(`${base_url}${Method.favoritesAddRemoveApi}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '422'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function adActiveInactiveApi(data, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('result=====>', `${base_url}${Method.adActiveInactiveApi}`);
  axios
    .post(`${base_url}${Method.adActiveInactiveApi}`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '422'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function getAllAdDetailsApi(Ad_ID, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('authData=====>', authData);
  let Url = '';
  if (ConstantId.Token == '') {
    console.log(
      'result=====>',
      `${base_url}${Method.getAllAdDetailsGlobalApi}`,
    );
    Url = `${base_url}${Method.getAllAdDetailsGlobalApi}${Ad_ID}`;
  } else {
    console.log('result=====>', `${base_url}${Method.getAllAdDetailsApi}`);
    Url = `${base_url}${Method.getAllAdDetailsApi}${Ad_ID}`;
  }

  axios
    .get(Url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '204'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function viewCountApi(Ad_ID, callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('authData=====>', authData);
  console.log('result=====>', `${base_url}${Method.viewCountApi}${Ad_ID}`);
  axios
    .get(`${base_url}${Method.viewCountApi}${Ad_ID}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '204'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function userAdCountApi(callback) {
  const authData = 'Bearer ' + ConstantId.Token;
  console.log('authData=====>', authData);
  console.log('result=====>', `${base_url}${Method.userAdCount}`);
  axios
    .get(`${base_url}${Method.userAdCount}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authData,
      },
    })
    .then(async (result) => {
      console.log('result=====>', result);
      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result, code: '204'});
      }
    })
    .catch((error) => {
      callback({status: false, result: error});
    });
}

function logoutApi(callback) {
  const authData = 'Bearer ' + ConstantId.Token;

  console.log('authData=====>', authData);

  axios

    .get(`${base_url}${Method.logout}`, {
      headers: {
        Accept: 'application/json',

        'Content-Type': 'application/json',

        Authorization: authData,
      },
    })

    .then(async (result) => {
      console.log('result=====>', result);

      if (result.status == 200) {
        callback({status: true, result: result.data, code: '200'});
      } else {
        callback({status: false, result: result});
      }
    })

    .catch((error) => {
      callback({status: false, result: error});
    });
}

export default {
  loginAPI,
  socialLoginAPI,
  registrationAPI,
  verifyOtpAPI,
  resendOtpAPI,
  forgotPasswordAPI,
  getCityApi,
  getBrandApi,
  getModalApi,
  getSubModalApi,
  getMasterCarApi,
  saveCarDetailApi,
  saveCarFeaturesApi,
  saveCarAboutApi,
  saveCarImagesApi,
  getMyAdsApi,
  getAllAdListing,
  getAllAdDetailsApi,
  getYear,
  getUserProfileApi,
  updateProfileApi,
  changePasswordApi,
  favoritesAddRemoveApi,
  adActiveInactiveApi,
  deleteAdApi,
  getFiltersApi,
  deleteImageApi,
  viewCountApi,
  userAdCountApi,
  logoutApi,
  getBrandModals,
};
