package com.appen.ajayweatherbot.ajayweatherbot;

public class Date {
	private long id;
	private String dayOfWeek;
	private String weather;
	private int[] temperature;
	
	public Date() {
	
	}
	
	public Date(long id, String dayOfWeek, String weather, int[] temperature) {
		super();
		this.id = id;	
		this.dayOfWeek = dayOfWeek;
		this.weather = weather;
		this.temperature = temperature;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDayOfWeek() {
		return dayOfWeek;
	}
	public void setDayOfWeek(String dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weather) {
		this.weather = weather;
	}
	public int[] getTemperature() {
		return temperature;
	}
	public void setTemperature(int[] temperature) {
		this.temperature = temperature;
	}
	
	
}


