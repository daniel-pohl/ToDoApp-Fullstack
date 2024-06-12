package de.neuefische.backend;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UuidService implements IdService{
    @Override
    public String generateId() {
        return UUID.randomUUID().toString();
    }
}