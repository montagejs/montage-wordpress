window.onload=function(){function e(e,n){var i=e.innerHTML;e.innerHTML="<span style=\"font-family: 'entypo'\">"+n+"</span>"+i}var n,i,o,c,a={"icon-play":"&#xe101;","icon-pause":"&#xe102;","icon-cw":"&#xe103;","icon-ccw":"&#xe104;","icon-arrow-left":"&#xe105;","icon-arrow-right":"&#xe106;","icon-resize-enlarge":"&#xe107;","icon-resize-shrink":"&#xe108;","icon-volume":"&#xe109;","icon-sound":"&#xe10a;","icon-mute":"&#xe10b;","icon-ellipsis":"&#xe10c;"},t=document.getElementsByTagName("*");for(n=0;n<t.length;n+=1)c=t[n],i=c.getAttribute("data-icon"),i&&e(c,i),o=c.className,o=o.match(/icon-[^\s'"]+/),o&&a[o[0]]&&e(c,a[o[0]])};