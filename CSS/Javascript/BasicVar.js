import React, { createContext, useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Cancel from "../../assets/cancel4.png";
import Courses from "./Courses";
import Topics from "./Topics";
import { TotalPriceContext } from "./TutorProfileNav";
// import {coursesContext} from './Courses'

const CustomModal = (props) => {
  const { open, handlePreviewClose, title} = props;
const {courses}= props;
  // const [courses,setCourses] = useState(0);
  
  // const [value, setValue] = React.useState("1");
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [openPreview,setOpenPreview]= React.useState(false);

  const { totalPrice } = useContext(TotalPriceContext);

  return (
    <div className="">
      <Modal
        open={open}
        onClose={handlePreviewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <div className="flex flex-col justify-center items-center">
          <Box className="absolute top-5 bg-white pb-5 rounded-md p-4 shadow-xl outline-none lg:w-5/12 lg:top-10">
            <div className="-mt-3 ">
              <div className="flex items-center justify-between pb-6 pt-2">
                <h1 className="text-2xl text-bluesh">Course Topic Creation </h1>
                <img
                  src={Cancel}
                  alt=""
                  onClick={handlePreviewClose}
                  className="cursor-pointer h-8"
                />
              </div>
              <div className="grid justify-end">
                <h1
                  className="text-xl flex items-center "
                  style={{ color: "#2E9395" }}
                >
                  CourseTotalPrice:${totalPrice ? totalPrice : ""}
                </h1>
                <h1
                  className="text-xl flex items-center "
                  style={{ color: "#2E9395" }}
                >
                  TopicTotalPrice:${totalPrice ? totalPrice : ""}
                </h1>
              </div>
              <div>
                
                <h2>
                  {courses.map((item) => {
                    return (
                      <div>
                        <h1>{item.name}</h1>
                      </div>
                    );
                  })}
                </h2>
              </div>
              <div>
                <h1>Topics</h1>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
