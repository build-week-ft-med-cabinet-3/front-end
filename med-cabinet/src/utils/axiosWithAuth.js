import axios from "axios";

// set to certain Token, using static token for now
export const axiosWithAuth = () => {
  // const token = localStorage.getItem('token');
  return axios.create({
    baseURL: "https://medswap.herokuapp.com/api/",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWdAd2lsc29uLmNvbSIsImlkIjoxLCJpYXQiOjE2MDA5NzI0ODYsImV4cCI6MTYwMTAwMTI4Nn0.lkMm2xCAp86YnOKPr6zonAXz5df0UxW0zLEXEDFkvLg",
    },
  });
};
