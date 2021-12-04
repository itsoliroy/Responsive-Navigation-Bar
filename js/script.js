//  TO STORE THE SELECTED(VIA CLASS NAME) PRIMARY NAVIGATION 
const primaryNav = document.querySelector('.primary-navigation');

//  TO STORE THE SELECTED(VIA CLASS NAME) MOBILE MENU TOGGLER
//  USED FOR BOTH ACCESIBILITY AND TO TRIGGER THE ICON CHANGE FOR OPEN AND CLOSED
const navToggle = document.querySelector('.mobile-nav-toggle');

//  TO CHECK IF THE TOGGLER IS CLICKED . THEN IF IT'S CLICKED RUN THE FUNCTION
navToggle.addEventListener("click", () => {
    // TO GET THE DATA ATTRIBUTE OF THE PREVIOUSLY SELECTED NAVIGATION
    //  USE TO BOTH DETERMINE THE TOGGLER AND NAVIGATION STATES
    const visibility = primaryNav.getAttribute("data-visible");

    //  CHECKS IF THE DATA ATTRIBUTE IS SET TO FALSE
    if (visibility === "false"){
        //  IF IT'S FALSE THEN MAKE IT TRUE
        primaryNav.setAttribute("data-visible", true);
        //  MAKE THE TOGGLER ATTRIBUTE TO TRUE
        navToggle.setAttribute("aria-expanded", true);
    } 
    // ELSE MEANS IT'S PROBABLY TRUE ( COULD'VE USED ELSE IF TO BE SURE )
    //  THAT MEANS IT'S OPEN AND WE WANT TO CLOSE IT
    else{
        //  IF IT'S TRUE THEN MAKE IT FALSE
        primaryNav.setAttribute("data-visible", false);
        //  MAKE THE TOGGLER ATTRIBUTE TO TRUE
        navToggle.setAttribute("aria-expanded", false);
    }
})