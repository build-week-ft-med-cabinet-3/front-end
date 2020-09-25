import axios from "axios";

// set to certain Token, using static token for now
export const axiosWithAuth = () => {
  // const token = localStorage.getItem('token');
  return axios.create({
    // baseURL: "https:/medswap.herokuapp.com/api/",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWdAd2lsc29uLmNvbSIsImlkIjo0LCJpYXQiOjE2MDA5OTc3OTAsImV4cCI6MTYwMTAyNjU5MH0.PXjfRayq31xX63C5wvATdprhctY1aVqj02Na51uS0DU",
    },
  });
};
