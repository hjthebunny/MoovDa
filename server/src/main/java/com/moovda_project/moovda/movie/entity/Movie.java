package com.moovda_project.moovda.movie.entity;

import com.moovda_project.moovda.movie.entity.staff.MovieStaff;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor()
@Getter
@Setter
@Table(name = "movies") // 테이블명 추가
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movie_id",nullable = false,updatable = false)
    private Long movieId;

    @Column(name = "title")
    private String title;

    @Column(name = "country")
    private String country;

    @Column(name = "summary",length = 2000)  // length 255로 부족해서 2000으로 설정
    private String summary;

    @Column(name = "poster",length = 2000) // length 255로 부족해서 2000으로 설정
    private String poster;

    @Column(name = "running_time")
    private Integer runningTime;

    @Column(name = "star_avg")
    private Float starAvg = 0F;

    @Column(name = "opening_date")
    private String openingDate;

    @Column(name = "rating")
    private String rating;

}
