package com.example.Collage_management.Services;

import com.example.Collage_management.Entities.Course;
import org.springframework.data.repository.CrudRepository;


public interface CourseServices extends CrudRepository<Course, Long> {

}
