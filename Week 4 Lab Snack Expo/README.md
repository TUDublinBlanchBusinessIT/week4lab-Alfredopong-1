# Week 4 Lab - Build a GPA Calculator
The goals of this weeks lab are
- To process some simple information gathered from the user using Javascript
- To perform simple calculations in Javascript and report the result tot the user
- To use CSS to improve the appears of the app and the user's experince
- To use flexbox to so that app will have a responsive design and work well on different screen sizes

A students GPA on any given semester is calculated by dividing their accumulated total grade score by the total number
off possible credits they could have earned. The grade score for any given module is calculated by multipling the gradepoints 
for the grade achieved by the credits available for the module. If there are two modules SSWD and OB and the student gets an A 
in SSWD and a B in OB then the total grade score is 4.0x5 (20) + 3.0x5 (15) giving a total of 35. The GPA is calculated as 35/10 
as there were only 10 possible credits. So the GPA will be 3.5.

# Part 1
Take the starter code from App.js in the repo and make it work so that when the button is clicked, the message 
"this is the click me button" appears. Then translate the commented lines of code in the clickMe function into working Javascript
so that when the button is clicked the App will calculate the GPA for the student and output it to the screen using an alert.
You only need to add three lines of code to complete part 1.

# Part 2
Add the StyleSheet component to the list of components being imported at the top. Add the following block of code to your program.
Add it inside the App function but before the return statement.
```
const styles = StyleSheet.create({
  container: {

  },
  row: {

  },
  label: {

  },
  textInput: {

  }
});
```
To add these three styles to the relevant components - the outer view should get the style 'container'. Each of the inner views should
get the style 'row'. The labels and textInputs should get the other two appropriate styles. Hint - to add a style to a component add
```
style={styles.mystyle}
```
as a prop inside the tag of the component.

Now modify the respective styles inside the CSS tag so that the App looks better. Each row should get a flexDirection of 'row' so that 
the elements will appear alongside each other. This will allow us to fit more rows on the screen and thereby do a GPA calculation for a
full semesters worth of modules. To improve the look of the other elements add marginLeft, marginRight, and padding settings.
When adding these settings always use a percentage e.g. marginLeft: "5%". This will ensure the App is responsive and will render well
on any screen size.

# Part 3
Add additional useState variables for MobileApps, Digital Marketing, OOAD, and Financial Management - use appropriate names for the variables.
Copy and paste the two existing rowsto add additional rows for these modules, modify the code in each one so that the correct setState function is called when the text changes. Add additonal lines of code to the clickMe function so that the GPA will be calculated on the basis of 6 modules as opposed to two.
You will also have to change the Total Possible Credits to 30.




