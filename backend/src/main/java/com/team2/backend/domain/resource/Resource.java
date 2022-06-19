package com.team2.backend.domain.resource;

import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.util.BaseTime;
import com.team2.backend.web.dto.admin.ResourceDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="resource")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
public class Resource extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "resourceNo")
    private Long resourceNo;


    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "cateNo")
    private Category category;
    @Column(name = "cateNo", insertable = false, updatable = false)
    private Long cateNo;

    @Column(name = "able", columnDefinition = "char(1) default 'Y'")
    private char able;

    @Column(name = "resourceName")
    private String resourceName;

    @Column(name = "location")
    private String location;

    @Column(name = "people")
    private int people;

    @Column(name = "availableTime")
    private String availableTime;

    @ManyToOne(targetEntity = Employee.class)
    @JoinColumn(name = "adminNo")
//    @Column(name="adminNo")
    private Employee adminNo;

    @Column(name = "option")
    private String option;

    @Column(name = "fuel")
    private String fuel;   //차량만 사용

    public void update(long category,char able, String resourceName, String location, int people, String availableTime,
                       long adminNo, String option, String fuel){
        this.category = category;
        this.able = able;
        this.resourceName = resourceName;
        this.location = location;
        this.people = people;
        this.availableTime = availableTime;
        this.adminNo = adminNo;
        this.option = option;
        this.fuel = fuel;



}
