function fixedFooter(){
    console.log('back to top function called')
    console.log(window.location)
  if(window.innerWidth<700 && window.location.pathname=='/Marketeers-Squad/blog.html'){
    document.getElementById('course-enrollment').style.display="none"
  document.getElementById('fixed-footer').style.display ="block"
  document.getElementById('back-to-top-blog-page').style.marginBottom='80px'
  }
  else{ 
    document.getElementById('fixed-footer').style.display ="none"
  document.getElementById('back-to-top-blog-page').style.marginBottom='15px'
  document.getElementById('course-enrollment').style.display="block"
  
  }
  };
  window.onload= fixedFooter;
  window.onresize= fixedFooter;