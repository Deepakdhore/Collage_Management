package com.example.Collage_management.Services;

import com.example.Collage_management.Entities.Course;
import com.example.Collage_management.dao.courseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServicesImplimentation implements CourseServices {
   @Autowired
    private courseDao courseDao;

   @Override
   public List<Course> getCourses()
   {
       return courseDao.findAll();
   }

   @Override
   public Course getCourseById(Long id)
   {
       return courseDao.getReferenceById(id);
   }

   @Override
   public Course addCourse(Course course)
   {
       courseDao.save(course);
       return course;
   }

   @Override
   public Optional<Course> deleteCourse(Long id)
   {
       Optional<Course> course=courseDao.findById(id);
       courseDao.deleteById(id);
       return course;
   }
}
