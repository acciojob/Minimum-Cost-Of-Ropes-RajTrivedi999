//your code here
      function clickMe(event) {
        event.preventDefault()
		var newArr=document.getElementsByTagName('input')[0].value
	      var arr=newArr.split(',')
	      var sum=0;
	      var r=document.getElementById('result')
	      while(arr.length>1){
		  
        arr.sort(function(a,b){return a-b})
        var newElement=Number(arr[0])+Number(arr[1])
        sum+=newElement
        arr.splice(0,2)
        arr.unshift(newElement)
	  }
        r.innerText=sum
      }
