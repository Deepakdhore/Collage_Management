import React,{useState,useEffect} from "react"
import Course from "./Course"
import base_url from "./../Api/bootapi";
import axios from "axios";

//useState is a hook

const Allcourse=()=>{

    //useState hook to hold the courses state
    //useEffect is a hook that will be called when the course is loaded and loaded successfully

    useEffect(()=>{
    document.title="All Courses"
    });

    //funtion to calll server;
    const getAllCoursesfromServr=()=>{
        axios.get(`${base_url}/courses`)
       .then(response=>{
       //success
        console.log(response.data);
       },
       (error)=>{
           console.log(error);
       }
      );
     };


    //calling loading course funtion
    useEffect(()=>{
    getAllCoursesfromServr();
    }, []);

    const [courses,setCourses]=useState([
    {title:"java course",description:"this is beginner cpre java course"},
    {title:"Python course",description:"this is data science targeted course to help u with data sciense"},
    {title:"Devops course",description:"Comprehensive course on various devops concepts"},
    {title:"Spring Boot Course",description:"Advanced course for spring boot framewrk targeted towared backend"},
    ])

    return(
        <div>
            <h1 className="text-center"> All Course</h1>
            <p className="text-center" style={{fontWeight:'bold'}}>List of courses are as followes </p>

            {courses.length>0
                    ? courses.map((item)=> <Course course={item}/>)
                    :"No Courses"
            }

        </div>
    )

}

export default Allcourse;