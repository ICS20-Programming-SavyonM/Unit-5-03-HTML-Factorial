// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the factorial of a user input number
 */
function calculateFactorial() {
  
		// initialize the variables
		let counter = 1;
		let factorial = 1;
		let userNum = parseInt(document.getElementById('userNum').value);

		// use a do..while loop to calculate the factorial
		do {
			factorial *= counter;
			counter++;
		} while (counter <= userNum);

		// display the factorial of the integer
		document.getElementById('display-results').innerHTML = "The factorial of " + userNum + " is " + factorial;
	}