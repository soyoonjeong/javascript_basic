function handleResize() {
    const width = window.innerWidth;
    const list = document.body.classList;
    const wideClass = "wide", narrowClass="narrow";
    if(width>900){
        list.add(wideClass);
    }else if(width<600){
        list.add(narrowClass);
    }else{
        list.remove(wideClass);
        list.remove(narrowClass);
    }
  }
  window.addEventListener("resize", handleResize);
  

  /*
    if (width > 900) {
      body.style.backgroundColor = "yellow";
    } else if (width < 600) {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "purple";
    }*/