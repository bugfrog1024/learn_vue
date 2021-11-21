const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2006-9',
        price: 85,
        count: 1
      },
      {
        id: 2,
        name: 'UNIX编程艺术',
        date: '2006-2',
        price: 59,
        count: 1
      },
      {
        id: 3,
        name: '编程珠玑',
        date: '2008-10',
        price: 39,
        count: 1
      }
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '￥' + price.toFixed(2)
    },
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  //过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0
      // for (let book of this.books) {
      //   totalPrice += book.price * book.count
      // }
      // return totalPrice
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)
    }
  }
})


//JavaScript高阶函数
const nums = [10, 20, 111, 222, 444, 40, 50]

//filter：newNums过滤出nums中小于100的元素
let newNums = nums.filter(function (n) {
  return n < 100
})

//map：new2Nums将nums中的元素*2
let new2Nums = nums.map(function (n) {
  return n * 2
})

//reduce：total将nums中的所有元素汇总
let total = nums.reduce(function (preValue, n) {
  return preValue + n
}, 0)

//综合使用：函数式编程
let total2 = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue, n) {
  return preValue + n
}, 0)

let total3 = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n)