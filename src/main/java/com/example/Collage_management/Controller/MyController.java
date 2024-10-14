package com.example.Collage_management.Controller;


        import com.example.Collage_management.Entities.Course;
        import com.example.Collage_management.Services.CourseServices;
        import com.example.Collage_management.Services.CourseServicesImplimentation;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;
        import java.util.Optional;

@RestController
@RequestMapping("api/courses")
public class MyController {

    @Autowired
    private CourseServices courseServices;
    private CourseServicesImplimentation courseServicesImplimentation;

    //  http://localhost:8080/api/courses/getCourse
    @GetMapping("getCourse")
    public List<Course> getAllCourses() {
        return (List<Course>) courseServices.findAll();
    }

//   /api/courses/sayHi
    @RequestMapping("sayHi")
    public String hello() {
        return "say hi deepak ";
    }

//    api/courses
    @GetMapping("courseById/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Optional<Course> course = courseServices.findById(id);
        if (course.isPresent()) {
            return new ResponseEntity<>(course.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("courseExisit/{id}")
    public boolean courseExisit(@PathVariable Long id)
    {
        return courseServices.existsById(id);
    }

    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        Course savedCourse = courseServicesImplimentation.save(course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @PutMapping("updateById/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course courseDetails) {
        Optional<Course> courseOptional = courseServicesImplimentation.findById(id);
        if (courseOptional.isPresent()) {
            Course course = courseOptional.get();
            course.setTitle(courseDetails.getTitle());
            course.setDescription(courseDetails.getDescription());
            Course updatedCourse = courseServicesImplimentation.save(course);
            return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("deleteById/{id}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable Long id) {
        try {
            courseServicesImplimentation.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
