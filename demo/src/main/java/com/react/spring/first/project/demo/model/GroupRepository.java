package com.react.spring.first.project.demo.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);

    List<Group> findAllByUserId(String id);
}