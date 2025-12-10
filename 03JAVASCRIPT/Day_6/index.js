//Notes: https://www.notion.so/Lecture-06-String-and-Date-27e3a78e0e22803ca796f1eef30bc86b

// String
// const str1 = "Rohitboy";
// const str2 = 'Rohit Negi';
// const day = 18;
// let str3 = `Hello World!!`;

// console.log(str3);

// const str = `Hello Coder Army`;

// console.log(str.length)
// console.log(str[str.length-1]);

// str[2] = "S";
// console.log(str)

// upper case
// const a = str.toUpperCase();
// const b = str.toLowerCase();
// console.log(b);
// console.log(a);
// console.log(str);

// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('Cod'));    //case sensitive

// slice 
// console.log(str.slice(2,7));
// console.log(str.slice(3));
// console.log(str.slice(-5,-2));

// const str = `Hello Coder Army Coder`;

// console.log(str.substring(2,7));   //similar to slice but doesn't accept negativ indices.

// const a = "Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Rohit");  //24Rohit
// console.log(24+"Rohit"+10);   //24Rohit10
// console.log(24+30+"Rohit");   //54Rohit

// const str = `Hello Coder Army Coder`;

// console.log(str.replace("ode",'iam'));

// console.log(str.replaceAll("ode",'iam'));

// const user = "  Rohit  Negi ";
// console.log(user.trim());
// console.log(user.trimEnd());
// console.log(user.trimStart());

// const names = "Rohit, Mohit, Suraj, Rohan, Anjali";

// console.log(names.split(" "))
// console.log(names.split(","))

// let now=new Date();

// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());



// Local time chal rha
// console.log(now.getDay());           // days: Mon-tue(1 based)
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());         // Month: 0 1
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());


// year month date hour minute second millisecond
// let now1 = new Date(2025,11,10,17,14,now.getSeconds(),now.getMilliseconds());

// console.log(now1.toString());


// Timestamp
// const now = Date.now();
// console.log(now.toString());
// const dates = new Date(1765367223193);
// console.log(dates.toString());
// console.log(dates);
// // 1765367223193: TimeStamp


//Date are Mutable
// const da = new Date(1765367223193); // Creates a specific date
// console.log("Before:", da.toLocaleString());

// // Let's change the month to May (index 1)
// da.setMonth(1);
// da.setMinutes(33);
// console.log("After:", da.toLocaleString()); // The ORIGINAL 'da' object has been changed.
