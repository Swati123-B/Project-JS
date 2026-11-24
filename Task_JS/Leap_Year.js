const year = parseInt(data.trim());
if ((year  %  4 === 0  &&  year  %  100 !==  0)  || year % 400 === 0)
{
    console.log("YES");
}else {
    console.log("NO");
}