package com.example.Collage_management.dao;

import com.example.Collage_management.Entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface courseDao extends JpaRepository<Course,Long> {


}
