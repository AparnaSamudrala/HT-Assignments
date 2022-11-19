
    function predictFutureState() {
		  
		console.log("Hospital Simulator Console Application");
		
		//1. alert

		alert("Please Input patients health status codes and drugs that they take");

		//2. prompt

		let healthStatusCode = prompt("Please enter patients health state here");

		let drugsTaken = prompt("Please enter list of drugs taking");
		
		//if user clicks on cancel of the prompt window.
		 if (healthStatusCode === null) {
				console.log("You decided to terminate abruptly")
				return; //break out of the function early
			}
			
			//Once user proceeds with the inputs code here
			try {
				   if (healthStatusCode == "") 
						throw "Please Input health status codes";
				
					//if health status codes are valid logic to predict future state of patient
				 else 
				  {
					healthStatusCode = healthStatusCode.toUpperCase(); //to make user input case insensitive
					
					drugsTaken = drugsTaken.toUpperCase(); //to make user input case insensitive
					
					var p = healthStatusCode.split(','); //converting string to array
					
					var futureStatus =[];//output for future state of patients based on the drugs taken.
					
					console.log("You have entered patientStatus as :  " + p);
					
					console.log("You have entered drugsTaken :  " + drugsTaken);
					
					
					for(var i=0; i < p.length;i++)//loop through all the entere input health state codes values
					  {
						if(p[i] == "F" && ((drugsTaken.includes("P,AS")) || (drugsTaken.includes("AS,P")))) 
							futureStatus.push("X");
								
						else if(p[i] == "F" && (drugsTaken.includes("P") || drugsTaken.includes("AS")))
							futureStatus.push("H");
						
						else if(p[i] == "F" && (!drugsTaken.includes("P")))
							futureStatus.push("F");
								
						else if(p[i] == "F" && (!drugsTaken.includes("AS")))
							futureStatus.push("F");
						
						else if(p[i] == "T" && !(drugsTaken.includes("AN")))
							futureStatus.push("T");
							
						else if(p[i] == "T" && (drugsTaken.includes("AN")))
							futureStatus.push("H");
							
						else if(p[i] == "D" && !drugsTaken.includes("I") )
							futureStatus.push("X");
							
						else if(p[i] == "D" && (drugsTaken.includes("I,AS")) ||  ( drugsTaken.includes("AS,I")) )
							futureStatus.push("X");
							
						else if(p[i] == "D" && (drugsTaken.includes("AN,I")) ||( drugsTaken.includes("I,AN")))
							futureStatus.push("F");
							
						else if(p[i] == "D" && drugsTaken.includes("I"))
							futureStatus.push("H");
							
					}// for loop ends 
						
								
					let list_of_healthcodes = ["F", "H", "D", "T", "X"];
					var arr = futureStatus;
					var arr1 = list_of_healthcodes;
					
					//Arrow function to generate frequency of future state for all the list of health status codes
					const frequency = (arr) => {
						  const freq = [];
						  for (var i in arr1) {
							var num = 0;
							for (y in arr) {
							  if (arr1[i] == arr[y]) num = num + 1;
							}
							freq.push(`${arr1[i]}: ${num}`);
						  }
					  return freq;
					};
					console.log(`output: [${frequency(arr)}]`);//output
			}//else in try block
		
		} // end of try block

		catch (e) {
		  console.log("Error is:" + e + "<br>");
		} 
		
		finally {
			console.log("Finally execution ends here");
		}

	  }//function predictFutureState ends here

     predictFutureState(); // invoking function
		  

