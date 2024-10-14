package com.example.Collage_management.Services;


import com.example.Collage_management.Entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public abstract class CourseServicesImplimentation implements CourseServices {

    @Autowired
    Course course;
    @Autowired
    private CrudRepository<Course, Long> courseRepository;
    //List<Course> course;


    @Override
    public <S extends Course> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Course> Iterable<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Course> findById(Long aLong) {
        return Optional.empty();
    }
//
//    @Override
//    public boolean existsById(Long aLong) {
//        return false;
//    }

    @Override
    public List<Course> findAll() {
        return (List<Course>) courseRepository.findAll();
    }

    public boolean existsById(Long id)
    {
      return courseRepository.existsById(id);
    }
    @Override
    public Iterable<Course> findAllById(Iterable<Long> longs) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(Course entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends Course> entities) {

    }

    @Override
    public void deleteAll() {

    }
}
