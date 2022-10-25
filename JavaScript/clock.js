setInterval(()=>{
      d=new Date();
      hrs=d.getHours();
      mins=d.getMinutes();
      secs=d.getSeconds();

      hrot= 30*hrs+ mins/2;
      mrot= 6*mins;
      srot= 6*secs;

      const secondHand = document.querySelector('.second');
      const minsHand = document.querySelector('.minute');
      const hourHand = document.querySelector('.hour');

      minsHand.style.transform = `rotate(${mrot}deg)`;
      hourHand.style.transform = `rotate(${hrot}deg)`;
      secondHand.style.transform = `rotate(${srot}deg)`;
    },1000);

// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     // hour.style.transform = `rotate(${hrotation}deg)`;
//     // minute.style.transform = `rotate(${mrotation}deg)`;
//     // second.style.transform = `rotate(${srotation}deg)`;

//     // console.log(hrotation)
//     // console.log(mrotation)
//     // console.log(srotation)
// }, 1000);