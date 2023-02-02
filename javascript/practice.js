
// 1. promise 사용해보기

// function printSSAFY(){
//   return new Promise(function (resolve,reject) {
//     setTimeout(() => {
//       console.log('SSAFY')
//       resolve()
//     },3000)
//   })
// }

// console.log('Hi')
// printSSAFY().then(()=> {
//   console.log('Bye')
// })


// ------------------------------------------------
// 2. promise 조금 더 뜯어보기 : promise의 3가지 상태

// 2.1 pending(대기) 상태
// => 비동기 처리 로직이 아직 완료되지 않은 상태

// 2.2 Fullfilled(이행) 상태
// => 비동기 처리 로직이 정상적으로 완료되어, promise가 결과 값을 반환해준 상태

// 2.3 Rejected(실패) 상태
// => 비동기 처리가 실패하거나, 오류가 발생한 상태




const getData = new Promise(function (resolve,reject) {
  // 강제로 실패했다 명시
  reject('실패')
})

getData.then((value)=>{
  console.log(value)
  return value
}).catch((error) =>{
  console.log(error)
})



월 1 0 0 1 (3/5) 2
과 1 0 1 1 1 1 1 (6/10) 1

