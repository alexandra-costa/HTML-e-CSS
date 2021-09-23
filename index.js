function foo(e) {
    const flag = true;
    const article1 = document.getElementById("art1");
    const article2 = document.getElementById("art2");
    
    if (article1.style.maxWidth === "") {
      article1.style.maxWidth = "25%";
      article2.style.maxWidth = "75%";
    } else {
      article1.style.maxWidth = "";
      article2.style.maxWidth = "100%"
    }
  }
 
        