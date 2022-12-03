// ####################  1  ###################
// var n=parseInt( prompt('enter a numbers :'));
// function getSum(n)
// {
// 	let sum;
// 	for(sum = 0; n > 0;
// 		sum += n % 10,
// 		n = parseInt(n / 10));
// 	return sum;
// }
// document.write(getSum(n));

// #########################  2  ##########################

// var num= prompt('enter a numbers :');
// console.log(num);
// var sp =num.split('');
// console.log(sp);
// var rv =sp.reverse();
// console.log(rv);
// var join1 =rv.join()
// console.log(join1);
// document.write(join1);


// ###################  3  #####################

// var num= prompt('enter a numbers :');
// console.log(num);
// var sp =num.split('');
// console.log(sp);
// var rv =sp.reverse();
// console.log(rv);
// var join1 =rv.join()
// console.log(join1);
// console.log(num);
// if(num==join1.replaceAll(",","")){
//     document.write(true);

// }else{
//     document.write(false);

// }


// #################   4 #######################

// var n = prompt('enter a number of array =');
// var arr=[];
// for(var i=0; i<n;i++){
    
//     num =Number(prompt('enter a '+(i+1)+'='));
//     console.log(num);
//     arr.push(num);
// }
// console.log(arr);

// var x = Number( prompt('enter your find number in array '));
// if(arr.includes(x)){
//     document.write(arr.indexOf(x));
//     // console.log(x);
//     // console.log(typeof(x));
    
// }else{
//     document.write("-"+arr.indexOf(0)+ " because there isnot exists" );
    

// }


// // #################   5 #######################

// var n = prompt('enter a number of array =');
// var arr=[];
// for(var i=0; i<n;i++){
    
//     num =Number(prompt('enter a '+(i+1)+'='));
//     console.log(num);
//     arr.push(num);
// }
// console.log(arr);

// var x = Number( prompt('enter your find number in array '));
// if(arr.includes(x)){
//     var indexX=arr.indexOf(x);
//     arr.splice(indexX,1)
//     document.write(arr);
//     console.log(arr);
//     // console.log(typeof(x));
    
// }else{
//     document.write("this is number isnot exists" );
    

// }


// #################   6  #######################

// var n = prompt('enter a number of array =');
// var splitText=n;
// console.log(splitText);

// if(splitText.length>2){
//     var t1=splitText.slice(0,3);
//     var t2=splitText.slice(-3);

//     var cc=t1+t2;
//     document.write(cc);
// }
// else{
//     document.write("you have error");

// }


// ####################   7  ######################
// var n = prompt('enter a word ');
// console.log(n);

// for (i=0;i<n.length;i++){
//     var contZ=0;
//     var contO=0;
//     if(n[i]=="z"){
//         contZ+=1;
//         console.log(contZ);
//     }else{
//         contO+=1;
//         console.log(contO);
//     }
// }
// if(contO=2*contZ){
//     document.write("yes");
// }else{
//     document.write("No");

// }

// دا كود تاني 

// let x=prompt('enter a word ');
// let text1=[];
// var text2=[];
// var digit1=x[0];
// for(var i=0;i<x.length;i++){
// if(x[i]===x[0]){
//   var d1=text1.push(x[i]);
// }
// else{ 
//  var d2=text2.push(x[i]);
// }
// }
// console.log(text1)
// console.log(text2)
// length1=text1.length;
// length2=text2.length
// if(length1*2==length2){
//     console.log('true');
// }
// else{
//     console.log('false');
// }



// #####################  Bouns ##################


// var a=prompt('enter number a:');
// var b=prompt('enter number b:');
// var c=prompt('enter number c:');
// var d=prompt('enter number d:');

// if((a+b-c)=d){
//     document.write("yes");
// }else if((a+b*c)=d){
//     document.write("yes");
// }
// else if((a-b*c)=d){
//     document.write("yes");
// }
// else if((a*b-c)=d){
//     document.write("yes");
// }
// else if((b+a-c)=d){
//     document.write("yes");
// }else if((b+a*c)=d){
//     document.write("yes");
// }
// else if((b-a*c)=d){
//     document.write("yes");
// }
// else if((b*a-c)=d){
//     document.write("yes");
// }

// else if((b+c-a)=d){
//     document.write("yes");
// }else if((b+c*a)=d){
//     document.write("yes");
// }
// else if((b-c*a)=d){
//     document.write("yes");
// }
// else if((b*c-a)=d){
//     document.write("yes");
// }
// else{
//     document.write("no");

// }
