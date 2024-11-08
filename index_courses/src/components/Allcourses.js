import React,{useState,useEffect} from "react"
import Course from "./Course"
import base_url from "./../Api/bootapi";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//useState is a hook

const Allcourse=()=>{



    //useState hook to hold the courses state
    //useEffect is a hook that will be called when the course is loaded and loaded successfully

    useEffect(()=>{
    document.title="All Courses"
    }, []);

    //funtion to calll server;
    const getAllCoursesfromServer=()=>{
            axios.get(`${base_url}/getCourse`)
           .then((response)=>{
                 //success
                console.log(response.data);
                console.log("succesfully loaded the data ");
                toast.success("courses has been loaded");
                setCourses(response.data);
            },
       (error)=>{
               console.log(error);
               toast.error("courses not loaded");

            }
      );
     };


    //calling loading course funtion
    useEffect(()=>{
    getAllCoursesfromServer();
    }, []);

    const [courses,setCourses]=useState([
//    {title:"java course",description:"this is beginner cpre java course"},
//    {title:"Python course",description:"this is data science targeted course to help u with data sciense"},
//    {title:"Devops course",description:"Comprehensive course on various devops concepts"},
//    {title:"Spring Boot Course",description:"Advanced course for spring boot framewrk targeted towared backend"},
//


    ]);

const removeCoursebyId=(id)=>{
 setCourses(courses.filter((c)=>c.id!=id))
}

    return(
        <div>
            <h1 className="text-center"> All Course</h1>
            <p className="text-center" style={{fontWeight:'bold'}}>List of courses are as followes </p>

            {courses.length>0?
                     courses.map((item)=> <Course course={item} update={removeCoursebyId}/>)
                    :"No Courses"
            }
            <ToastContainer/>
        </div>
    )

}

export default Allcourse;