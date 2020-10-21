package com.appen.ajayweatherbot.ajayweatherbot;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DatesHardcodedService {
	
	private static List<Date> dates = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		dates.add(new Date(++idCounter, "Monday", "Sunny", new int[] {68, 69, 69, 72, 76, 72, 71, 70}));
		dates.add(new Date(++idCounter, "Tuesday", "Partly Cloudy", new int[] {63, 64, 64, 69, 69, 65, 63, 63}));
		dates.add(new Date(++idCounter, "Wednesday", "Cloudy", new int[] {63, 65, 66, 68, 69, 67, 66, 64}));
		dates.add(new Date(++idCounter, "Thursday", "Cloudy", new int[] {62, 64, 67, 67, 68, 67, 65, 64}));
		dates.add(new Date(++idCounter, "Friday", "Partly Cloudy", new int[] {63, 64, 64, 68, 69, 66, 65, 65}));
		dates.add(new Date(++idCounter, "Saturday", "Partly Cloudy", new int[] {64, 65, 66, 68, 70, 68, 68, 67}));
		dates.add(new Date(++idCounter, "Sunday", "Sunny", new int[] {67, 69, 69, 71, 75, 72, 71, 70}));
		dates.add(new Date(++idCounter, "Monday", "Sunny", new int[] {68, 69, 70, 73, 77, 74, 73, 72}));
	}
	
	public List<Date> findAll() {
		return dates;
	}

			
}
