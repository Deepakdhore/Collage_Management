package com.example.Collage_management.Services;

import com.example.Collage_management.Entities.Course;

import java.util.List;
import java.util.Optional;

public interface CourseServices {

    public List<Course> getCourses();
    public Course getCourseById(Long id);
    public Course addCourse(Course course);
    public Optional<Course> deleteCourse(Long id);

}
