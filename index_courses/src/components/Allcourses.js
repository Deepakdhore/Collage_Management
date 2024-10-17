import React,{useState} from "react"
import Course from "./Course"

//useState is a hook

const Allcourse=()=>{
    const [courses,setCourses]=useState([
    {title:"java course",description:"this is beginner cpre java course"},
    {title:"Python course",description:"this is data science targeted course to help u with data sciense"},
    {title:"Devops course",description:"Comprehensive course on various devops concepts"},
    {title:"Spring Boot Course",description:"Advanced course for spring boot framewrk targeted towared backend"},
    ])
}