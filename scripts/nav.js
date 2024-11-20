let isActive = false;
function toggle(){
    if (isActive) {
        //disable active
        document.querySelector(selectors, '.hamburger').className = 'hamburger';
        document.querySelector(selectors, '.shadow').className = 'shadow';
        document.querySelector(selectors, '.mobile-nav').className = 'mobile-nav';
        isActive = false;

    } else {
        //activate
        document.querySelector(selectors, '.hamburger').className = 'hamburger active';
        document.querySelector(selectors, '.shadow').className = 'shadow active';
        document.querySelector(selectors, '.mobile-nav').className = 'mobile-nav active';
        isActive = true;
    }
}