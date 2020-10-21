package com.appen.ajayweatherbot.ajayweatherbot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class DateResource {
	@Autowired
	private DatesHardcodedService dateManagementService;
	
	@GetMapping("/dates")
	public List<Date> getAllDates() {
	  return dateManagementService.findAll();
	}
}
